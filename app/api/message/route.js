import { NextResponse } from "next/server";
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})
export async function POST(req){
    const {content} = await req.json();
    console.log(content);
    /*const completion = await openai.chat.completions.create({
        messages: [
            {
            role: "user", 
            content: [
                {
                type: 'text',
                text: 'Identify the object',
                },
                {
                    type: 'image_url',
                    image_url: {
                        url: 'https://us.images.westend61.de/0000202566pw/human-hands-holding-green-apple-against-white-background-close-up-CRF002300.jpg',
                        detail: "low"
                    }
                }
            ]
            },
        ],
        model: "gpt-4o-mini",
      });*/
    return NextResponse.json({message: 'Message received', status: 200});
}