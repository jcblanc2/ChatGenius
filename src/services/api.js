export const generateText = async (prompt) => {
    const res = await fetch(`https://api.replicate.com/v1/predictions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            version: "02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
            input: {
                prompt,
                system_prompt: "You are a helpful assistant.",
                max_new_tokens: 800,
                temperature: 0.75,
                repetition_penalty: 1,
                top_p: 0.9,
            },
        }),
    });

    const json = await res.json();
    console.log(json);

    return json;
};