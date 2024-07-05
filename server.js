const express = require('express');
const app = express();
const axios = require('axios');

// Root route to avoid "Cannot Get /" error
app.get('/', (req, res) => {
    res.send('Welcome to the API server!');
});

app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name || 'Guest';
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    try {
        // Dummy location and temperature information 
        const location = 'New York';
        const temperature = 11; // Placeholder temperature
        const clientIp = '127.0.0.1';

        res.json({
            client_ip: clientIp, // The IP address of the  requester
            location: location, // The city of the requester
            greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`
        });
    } catch (error) {
        res.status(500).send('Error retrieving information');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
