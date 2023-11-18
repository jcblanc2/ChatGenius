import { apiKeys } from "../../config";


import Replicate from "replicate";

export async function sendMessageToTheModel() {

    const replicate = new Replicate({
        auth: apiKeys.REPLICATE_API_TOKEN,
    });
    console.log(2222222);

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
}