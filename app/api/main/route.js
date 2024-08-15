import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate} from "@langchain/core/prompts"
import {RunnableSequence} from '@langchain/core/runnables'
import { formatDocumentsAsString } from "langchain/util/document"
import { BufferMemory } from 'langchain/memory'
import { LLMChain } from 'langchain/chains'
import { retriever } from "@/app/utils/retriever";
import { formatConvHistory } from "@/app/utils/formatConvHistory";
import { NextResponse } from "next/server";

const openAIApiKey = process.env.OPENAI_API_KEY;
if(!openAIApiKey) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
}

const memory = new BufferMemory({
    memoryKey: 'chatHistory',
    inputKey: 'question',
    outputKey: 'text',
    returnMessages: true,
});

const standaloneQuestionTemplate = `Given some conversation history (if any) and a question, convert the question to a standalone question. 
conversation history: {conv_history}
question: {question} 
standalone question:`;

const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate);

const answerTemplate = `You are a helpful and enthusiastic support bot who can answer a given question about nutrions, food, and diet based on the context provided and the conversation history. Try to find the answer in the context. If the answer is not given in the context, find the answer in the conversation history if possible. If you really don't know the answer, try to make up an answer. Always speak as if you were chatting to a friend.
context: {context}
conversation history: {conv_history}
question: {question}
answer:`;
const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

const fasterModel = new ChatOpenAI({openAIApiKey, model: 'gpt-3.5-turbo'});
const questionChain = new LLMChain({
    llm: fasterModel,
    prompt: standaloneQuestionPrompt,
});
const slowerModel = new ChatOpenAI({openAIApiKey, model: 'gpt-4'});
const answerChain = new LLMChain({
    llm: slowerModel,
    prompt: answerPrompt,
});

const chain = RunnableSequence.from([
    {
        question: (input) => input.question,
        conv_history: async () => {
            const savedMemory = await memory.loadMemoryVariables({});
            const hasHistory = savedMemory.chatHistory.length > 0;
            return hasHistory ? savedMemory.chatHistory : null;
        },
        retrievedContext: async (input) => {
            return await retriever._getRelevantDocuments(input.question);
        },
    },
    async (input) => {
        const chatHistoryString = input.conv_history ? formatConvHistory(input.conv_history) : null;
        const {text} = await questionChain.invoke({
            conv_history: chatHistoryString ?? "",
            question: input.question,
        });
        const standaloneQuestion = text;
        const serializedContext = formatDocumentsAsString(input.retrievedContext) || "";

        const response = await answerChain.invoke({
            conv_history: chatHistoryString ?? "",
            question: standaloneQuestion,
            context: serializedContext,
        })
        await memory.saveContext({question: input.question}, {text: response.text });
        return {answer: response.text};
    }
])

export async function POST(req){
    try {
        const {question, conv_history } = await req.json();
        const input = {question, conv_history };
        const {answer} = await chain.invoke(input);
        return new NextResponse(JSON.stringify({answer}), { status: 200 });
    } catch (error) {
        console.error("Error in retrieval POST", error);
        return new NextResponse(JSON.stringify({error: "Internal Server Error"}), { status: 500 });
    }
}