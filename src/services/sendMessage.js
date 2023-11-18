import { apiKeys } from "../../config";

import axios from 'axios';

export async function sendMessageToTheModel() {
    const apiUrl = '/api'; // Vercel automatically routes this to the serverless function

    const requestData = {
        input: {
            prompt: "Write a poem about open source machine learning in the style of Mary Oliver.",
        },
    };

    try {
        const response = await axios.post(apiUrl, requestData, {
            headers: {
                Authorization: `Bearer ${apiKeys.REPLICATE_API_TOKEN}`,
            },
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error sending request to Replicate:', error.message);
    }
}
