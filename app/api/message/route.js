import { NextResponse } from "next/server";
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})
export async function POST(req){
    const {image} = await req.json();
    const completion = await openai.chat.completions.create({
        messages: [
            {
            role: "user", 
            content: [
                {
                type: 'text',
                text: `Identify the object in the image as few words as possible. And provide a category for the identified object. Answer should be in the format: '[object]: [category]'`,
                },
                {
                    type: 'image_url',
                    image_url: {
                        url: `${image}`,
                        detail: "high"
                    }
                }
            ]
            },
        ],
        model: "gpt-4o-mini",
      });
    return NextResponse.json({message: completion.choices[0].message.content, status: 200});
}