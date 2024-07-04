const express = require('express');
const app = express();
const geoip = require('geoip-lite');
const requestIp = require('request-ip');

app.get('/api/hello', (req, res) => {
	const visitorName = req.query.visitor_name;
	const clientIp = '127.0.0.1'; // Hardcoded Ip
	const location = 'New York'; // Hardcoded location
	const temperature = 11; // Hardcoded for simplicity
	const greeting = `Hello, ${visitorName}!, the temperature is ${temperature} degrees celcius in ${location}`;

	res.json({
		client_ip: clientIp,
		location: location,
		greeting: greeting
	});
});


app.listen(3000, () => {
	console.log('Server listening on port 3000');
});