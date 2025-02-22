# Task Management Server

## 🚀 Introduction

The **Task Management Server** is a backend API built with **Node.js** and **Express** that serves as the backend for the Task Management Application. It handles task management operations such as creating, updating, deleting, and retrieving tasks. It connects to a **MongoDB database** and uses **CORS** for secure communication with the frontend.

## 📑 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [Dependencies](#-dependencies)
- [Development](#-development)
- [Contributors](#-contributors)
- [License](#-license)

## ✨ Features

- 🌐 **REST API** – Provides endpoints for task management.
- 🛠 **Express.js** – Lightweight and fast backend framework.
- 🗄 **MongoDB** – NoSQL database for storing tasks.
- 🔒 **CORS & dotenv** – Secure and configurable environment.
- 🔑 **Authentication Support** – Uses database credentials.

## 🛠 Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/task-management-server.git
   cd task-management-server
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-connection-string
   DB_USER=your_database_userName
   DB_PASS=your_database_pass
   ```

4. **Run the server:**

   ```sh
   npm start
   ```

   Or use **Nodemon** for development:

   ```sh
   npm run dev
   ```

## 🎮 Usage

1. Start the server: `npm start`
2. Access the API at `http://localhost:5000`
3. Integrate with the frontend for task management.

## 🔑 Environment Variables

Ensure you configure the following variables in your `.env` file:

| Variable      | Description                 |
| ------------- | --------------------------- |
| `PORT`        | Port for the Express server |
| `MONGODB_URI` | MongoDB connection string   |
| `DB_USER`     | Database username           |
| `DB_PASS`     | Database password           |

## 📦 Dependencies

This project uses the following dependencies:

- **Express** – Web framework for Node.js
- **MongoDB** – Database for storing tasks
- **CORS** – Enables cross-origin requests
- **dotenv** – Loads environment variables
- **Nodemon** – Auto-restarts server during development

## 🏗 Development

- Start the server:
  ```sh
  npm start
  ```
- Start with **Nodemon** (recommended for development):
  ```sh
  npm run dev
  ```

## 👥 Contributors

- **MD Al Amin Islam** – [GitHub](https://github.com/alaminislam34)

## 📜 License

This project is licensed under the **ISC License**.

---

Enjoy using **Task Management Server**! 🚀🎯

### ⚠️ Security Reminder

Do not expose database credentials (`DB_USER` and `DB_PASS`) in public repositories. Use a `.env` file and add it to `.gitignore` to keep it private.

Let me know if you need any modifications! 🚀
