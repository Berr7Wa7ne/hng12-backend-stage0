📌 Project Description

This project is a simple backend API built for HNG Stage 0. It provides an endpoint that returns the developer's email, the current datetime, and a GitHub repository link. The API is deployed on Render.

🚀 Setup Instructions

PREREQUISITES:

Node.js installed on your system

npm or yarn for package management

git clone https://github.com/Berr7Wa7ne/hng12-backend-stage0.git

cd hng12-backend-stage0

INSTALL DEPENDECIES:

npm install express nodemon cors dotenv

RUN LOCALLY:

npx nodemon src/server.js 

DELOYED TO RENDER:

Push changes to GitHub.

Log in to Render.

Create a new Web Service and connect it to GitHub repository.

Set the build command to npm install and the start command to npx nodemon src/server.js.

Deploy and access API from the Render-provided URL.

📡 API Documentation

GET /info

DESCRIPTIONS:

Returns the developer's email, current datetime, and GitHub repository link.

RESPONSE FORMAT:

{
    "email": "cosyberry3@gmail.com",
    "current_datetime": "2025-01-29T06:52:05.627Z",
    "github_url": "https://github.com/Berr7Wa7ne/hng12-backend-stage0.git"
}

EXAMPLE USAGE:

curl -X GET https://hng12-backend-stage0.onrender.com/info

🔗 Links

GitHub Repository: https://github.com/Berr7Wa7ne/hng12-backend-stage0.git

Deployed API: https://hng12-backend-stage0.onrender.com/info

👨‍💻 Hire Developers

LOOKING TO HIRE EXPERIENCED DEVELOPERS? CHECK OUT THESE LINKS:

https://hng.tech/hire/python-developers

https://hng.tech/hire/csharp-developers

https://hng.tech/hire/golang-developers

https://hng.tech/hire/php-developers

https://hng.tech/hire/java-developers

https://hng.tech/hire/nodejs-developers


📧 Contact: cosyberry3@gmail.com
