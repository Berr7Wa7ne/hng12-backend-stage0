# 📌 Project Description

This project is a simple backend API built for **HNG Stage 0**. It provides an endpoint that returns the developer's email, the current datetime, and a GitHub repository link. The API is deployed on Render.

---

## 🚀 Setup Instructions

### 📋 Prerequisites:
- **Node.js** installed on your system
- **npm** or **yarn** for package management

### 📥 Clone the Repository:
```bash
git clone https://github.com/Berr7Wa7ne/hng12-backend-stage0.git
cd hng12-backend-stage0
```

### 📦 Install Dependencies:
```bash
npm install express nodemon cors dotenv
```

### ▶️ Run Locally:
```bash
npx nodemon src/server.js
```

---

## 🚀 Deployment Instructions

### 🖥️ Deploy to Render:
1. Push changes to GitHub.
2. Log in to [Render](https://render.com/).
3. Create a **New Web Service** and connect it to your GitHub repository.
4. Set the build command to:
   ```bash
   npm install
   ```
5. Set the start command to:
   ```bash
   npx nodemon src/server.js
   ```
6. Deploy and access the API from the **Render-provided URL**.

---

## 📡 API Documentation

### 🔹 GET `/info`

**📝 Description:**
Returns the developer's email, current datetime, and GitHub repository link.

**📄 Response Format:**
```json
{
    "email": "cosyberry3@gmail.com",
    "current_datetime": "2025-01-29T06:52:05.627Z",
    "github_url": "https://github.com/Berr7Wa7ne/hng12-backend-stage0.git"
}
```

**🔍 Example Usage:**
```bash
curl -X GET https://hng12-backend-stage0.onrender.com/info
```

---

## 🔗 Links

- **GitHub Repository:** [hng12-backend-stage0](https://github.com/Berr7Wa7ne/hng12-backend-stage0.git)
- **Deployed API:** [Live API Endpoint](https://hng12-backend-stage0.onrender.com/info)

---

## 👨‍💻 Hire Developers

Looking to hire experienced developers? Check out these links:

- [Python Developers](https://hng.tech/hire/python-developers)
- [C# Developers](https://hng.tech/hire/csharp-developers)
- [Golang Developers](https://hng.tech/hire/golang-developers)
- [PHP Developers](https://hng.tech/hire/php-developers)
- [Java Developers](https://hng.tech/hire/java-developers)
- [Node.js Developers](https://hng.tech/hire/nodejs-developers)

📧 **Contact:** cosyberry3@gmail.com

