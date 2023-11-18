
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/sendRequest', async (req, res) => {
    const apiUrl = 'https://api.replicate.com/v1/predictions';
    
    try {
        const response = await axios.post(apiUrl, req.body, {
            headers: {
                'Authorization': req.headers.authorization,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
