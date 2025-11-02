const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 4005;
app.use(bodyParser.json());
app.use(cors());

app.post('/events', async (req, res) => {
    const event = req.body;

    await axios.post('http://localhost:4000/events', event);
    await axios.post('http://localhost:4001/events', event);
    await axios.post('http://localhost:4002/events', event);

    res.status(201).send('success');

    // const { type, data } = req.body;
    //
    // if (type === 'PostCreated') {
    //     const { id, title } = data;
    //     try {
    //         await axios.post('http://localhost:4000/posts', { id, title });
    //     } catch (error) {
    //         console.error('Error forwarding PostCreated event:', error.message);
    //     }
    // }
    //
    // res.send({});
});

app.listen(port, () => {
    console.log('Event bus is running on port 4005');
});