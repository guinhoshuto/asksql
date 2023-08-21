import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openAIConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY!
});
const openai = new OpenAIApi(openAIConfig)

export const runtime = 'edge'

export async function POST(req: Request){
    const { schema, question } = await req.json()

    const prompt = `
        Seu trabalho é criar queries em SQL a partir de um schema SQL abaixo.

        Schema SQL: 
        """
        ${schema}
        """

        A partir do schema acima, escreva uma query SQL a partir da solicitação abaixo:
        Me retorne apenas o código SQL, nada além disso
        
        Solicitação: 
        """
        ${question}
        """
    `.trim()

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            {role: 'user', content: prompt},
        ]
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
}
