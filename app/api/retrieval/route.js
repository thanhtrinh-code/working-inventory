import { OpenAIEmbeddings } from "@langchain/openai";
import {RecursiveCharacterTextSplitter} from 'langchain/text_splitter'
import {SupabaseVectorStore} from '@langchain/community/vectorstores/supabase'
import {createClient} from '@supabase/supabase-js'
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const result1 = await fetch('http://localhost:3000/data/info.txt');
        if(!result1.ok) {
            throw new Error(`HTTP error! status: ${result1.status}`);
        }
        const text1 = await result1.text();
        const result2 = await fetch('http://localhost:3000/data/nutrition-guide.txt');
        if(!result2.ok) {
            throw new Error(`HTTP error! status: ${result2.status}`);
        }
        const text2 = await result2.text();

        const result3 = await fetch('http://localhost:3000/data/greeting.txt');
        if(!result3.ok) {
            throw new Error(`HTTP error! status: ${result3.status}`);
        }
        const text3 = await result3.text();

        const splitter = new RecursiveCharacterTextSplitter({
            chuckSize: 500,
            chunkOverlap: 50,
            separators: ["\n\n", "\n", " ", ""]
        });
        const output = await splitter.createDocuments([text1, text2, text3]);

        const openAIApiKey = process.env.OPENAI_API_KEY;
        if(!openAIApiKey) {
            throw new Error('OPENAI_API_KEY environment variable is not set');
        }
        const supabaseUrl = process.env.SUPABASE_URL;
        if(!supabaseUrl) {
            throw new Error('SUPABASE_URL environment variable is not set');
        }
        const supabaseKey = process.env.SUPABASE_KEY;
        if(!supabaseKey) {
            throw new Error('SUPABASE_KEY environment variable is not set');
        }
        const embedding = new OpenAIEmbeddings({openAIApiKey});
        const supabaseClient = createClient(supabaseUrl, supabaseKey);

        await SupabaseVectorStore.fromDocuments(output, embedding, {
            client: supabaseClient,
            tableName: 'documents',
            queryName: 'match_documents',
        });
        return new NextResponse(JSON.stringify({ message: 'Documents processed successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
    } catch (error) {
        console.error(" Error in retrieval GET", error);
        return new NextResponse(JSON.stringify({error: "An error occurred in GET request"}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}