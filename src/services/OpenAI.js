// import OpenAI from 'openai';
// const openai = new OpenAI({
//     apiKey: apiCred.OPENAI_API_KEY, dangerouslyAllowBrowser: true// defaults to process.env["OPENAI_API_KEY"]
// });

// export async function main() {
//     const chatCompletion = await openai.chat.completions.create({
//         messages: [{ role: 'user', content: 'Say this is a test' }],
//         model: 'gpt-3.5-turbo',
//     });

//     console.log(chatCompletion.choices);
// }



import Replicate from "replicate";
import { apiCred } from "../../config";

const replicate = new Replicate({
    auth: apiCred.REPLICATE_API_TOKEN,
});

export async function generateText() {
    const output = await replicate.run(
        "meta/llama-2-70b-chat:2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
        {
            input: {
                prompt:
                    "Write a poem about open source machine learning in the style of Mary Oliver.",
            },
        }
    );

    console.log(output);
    return output;
}
