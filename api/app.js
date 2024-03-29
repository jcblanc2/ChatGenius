const cors = require('cors');
const express = require('express');
const Replicate = require('replicate');
const input = require('./constant');

const app = express();

const replicate = new Replicate({
    auth: "r8_1ncFgHKzkhljaK7bFOmbCXNoWzNc4g30mauvQ"
});

app.use(cors());
app.use(express.json());

app.use("/api/send-message", async (req, res) => {
    const { message } = req.body;
    input.prompt = message;

    let prediction = await replicate.predictions.create({
        model: "meta/llama-2-7b-chat",
        input: input,
    });

    prediction = await replicate.wait(prediction);
    const formattedResponse = prediction.output.join('');

    res.json({ message: formattedResponse });
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});