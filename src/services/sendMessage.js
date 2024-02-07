import { apiKeys } from "../../config";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: apiKeys.REPLICATE_API_TOKEN,
});

export async function sendMessageToTheModel(newMessage) {
    try {
        const response = await fetch('http://localhost:3000/api/send-message',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: newMessage })
            }
        );
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error sending request to OpenAI:', error.message);
    }
}
