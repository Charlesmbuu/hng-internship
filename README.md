# Basic Web Server with API Endpoint

This project sets up a basic web server using Node.js and Express, and deploys it to a free hosting platform (Glitch). The server exposes an API endpoint that greets visitors and provides hardcoded location and temperature information.

## Features

- Endpoint: [GET] /api/hello?visitor_name="Mark"
- Response:
  `json
  {
    "client_ip": "127.0.0.1",
    "location": "New York",
    "greeting": "Hello, Mark!, the temperature is 11 degrees Celsius in New York"
  }
