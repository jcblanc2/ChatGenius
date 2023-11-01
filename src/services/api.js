import { apiKeys } from "../../config";


const systemMessage = {
    "role": "system", "content": "You are a helpful assistant."
}

export async function sendMessageToTheModel(chatMessages) {
    const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
            systemMessage,
            ...chatMessages
        ]
        , "max_tokens":7,
        "temperature":0,"stream":true
    }
    console.log(apiRequestBody);

    try {
        const data = await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + apiKeys.OPENAI_API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            })

        console.log(data);
        return data.json();
    } catch (error) {
        console.log(error);
    }
}


// import Replicate from "replicate";

// export async function sendMessageToTheModel() {

//     const replicate = new Replicate({
//         auth: apiKeys.REPLICATE_API_TOKEN,
//     });

//     console.log(222222222222);
//     const output = await replicate.run(
//         "meta/llama-2-70b-chat:2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
//         {
//             input: {
//                 prompt:
//                     "Write a poem about open source machine learning in the style of Mary Oliver.",
//             },
//         }
//     );
//     console.log(output);
// }