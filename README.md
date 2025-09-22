
# Levuity Project

> **Note:** This project is currently in **development mode**.

## Table of Contents

1. [Prerequisites](#prerequisites)  
2. [Setup](#setup)  
3. [Running the Project](#running-the-project)  
    - [Frontend](#frontend)  
    - [Backend](#backend)  
        - [Linux / macOS](#linux--macos)  
        - [Windows](#windows)  
4. [Project Structure](#project-structure)  
5. [Tips for Development](#tips-for-development)  

---

## Prerequisites

Before you start, ensure you have:

- [Node.js (v20+ recommended)](https://nodejs.org/)  
- [npm](https://www.npmjs.com/get-npm)  
- Git  
- MongoDB (if backend depends on it)  

---

## Setup

Clone the repository:

```bash
git clone <your-repo-url>
cd levuity
````

Install dependencies for both frontend and backend:

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../levuity-backend
npm install
npm install express   # Express is required to run the backend
```

---

## Running the Project

### Frontend

Start the frontend development server:

```bash
npm run dev
```

---

### Backend

#### Linux / macOS

```bash
DEBUG=myapp:* npm start
```

#### Windows (PowerShell)

```powershell
$env:DEBUG="myapp:*"; npm start
```

#### Windows (Command Prompt)

```cmd
set DEBUG=myapp:* && npm start
```

---

### Notes

* The `DEBUG=myapp:*` environment variable enables verbose logging for development.
* On Windows, the syntax differs slightly depending on the shell. PowerShell uses `$env:DEBUG=…`, CMD uses `set DEBUG=… &&`.
* Ensure MongoDB is running if your backend requires a database connection.

---

## Project Structure (Overview)

```
levuity/
│
├─ frontend/          # Frontend React/Vue/Other framework code
├─ levuity-backend/   # Express backend
│   ├─ routes/
│   ├─ views/
│   ├─ public/
│   └─ app.js
└─ README.md
```



## Tips for Development

* Use `npm run dev` for hot-reloading in frontend.
* Use `DEBUG=myapp:* npm start` (Linux/macOS) or equivalent on Windows to see detailed backend logs.
* For production deployment, consider using `pm2` or a similar process manager.
* Keep your MongoDB credentials and other sensitive info in a `.env` file.
