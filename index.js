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

    await axios.post('http://localhost:4000/events', event); // posts service
    await axios.post('http://localhost:4003/events', event); // query service
    await axios.post('http://localhost:4001/events', event); // comment service

    res.status(201).send('success');
});

app.listen(port, () => {
    console.log('Event bus is running on port 4005');
});