# 🚀 react-superfetch

**A powerful and minimalistic one-liner API utility for React (or any JavaScript project).**  
Simplify your API calls with support for GET, POST, PUT, DELETE, and advanced features like loading, success, and error handling.

---

## 📦 Installation

Install the package via npm:

```bash
npm install react-superfetch


✨ Features
✅ One-liner API call wrapper

✅ Supports GET, POST, PUT, DELETE

✅ Handles Authorization headers

✅ Built-in loading, success, and error state handling

✅ Works with React, Next.js, or any JS project


🔧 Usage
Import callApi into your component or utility function:

import callApi from 'react-superfetch';

📘 Example Usage

1. GET Request

const { data, loading, error, successMessage, errorMessage } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET',
  token: 'your-jwt-token',
});

2. POST Request

const { data, loading, error, successMessage, errorMessage } = await callApi('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: { title: 'foo', body: 'bar', userId: 1 },
  token: 'your-jwt-token',
});

3. PUT Request

const { data, loading, error, successMessage, errorMessage } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: { id: 1, title: 'updated title', body: 'updated content', userId: 1 },
  token: 'your-jwt-token',
});

4. DELETE Request

const { data, loading, error, successMessage, errorMessage } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
  token: 'your-jwt-token',
});


| Option   | Type   | Description                                      |
| -------- | ------ | ------------------------------------------------ |
| `method` | string | HTTP method (`GET`, `POST`, `PUT`, `DELETE`)     |
| `body`   | object | Payload for POST/PUT requests                    |
| `token`  | string | Bearer token for Authorization header (optional) |


🔁 Return Values
The function returns an object with the following keys:

| Key              | Type    | Description                              |
| ---------------- | ------- | ---------------------------------------- |
| `data`           | any     | API response data                        |
| `loading`        | boolean | `true` when request is in progress       |
| `error`          | boolean | `true` if request failed                 |
| `successMessage` | string  | Success message if request is successful |
| `errorMessage`   | string  | Error message if request failed          |


💡 Advanced Tips
Works with async/await or Promises

Easily wrap this inside a custom React hook for global usage

Compatible with useEffect, react-query, redux, etc.


📁 Contributing
Fork this repo.

Create a new branch: git checkout -b feature/my-feature

Commit your changes: git commit -m 'Added new feature'

Push to your branch: git push origin feature/my-feature

Open a Pull Request

📜 License
MIT © pravinxdev


👨‍💻 Author
Made with ❤️ by pravinxdev




