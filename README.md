# 🚀 react-superfetch

A lightweight and elegant API call utility for React (or any JavaScript project). Simplify your HTTP requests with a clean, easy-to-use syntax and built-in support for tokens, error handling, and more.

## 📦 Installation

```bash
npm install react-superfetch

or with yarn:
yarn add react-superfetch

🔧 Features
✅ One-liner API calls

🔐 Optional Bearer token support

🔄 Handles GET, POST, PUT, DELETE

⚙️ Handles loading, success, and error states

💬 Supports custom success/error messages

🚨 Automatic JSON parsing and error fallback



📘 Basic Usage

import callApi from 'react-superfetch';

const fetchData = async () => {
  const { data, loading, error, successMessage } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET',
    token: 'your-jwt-token',
    successMessage: 'Data fetched successfully!',
    errorMessage: 'Failed to fetch data.',
  });

  if (loading) console.log('Loading...');
  if (data) console.log('Data:', data);
  if (error) console.error('Error:', error);
};

📂 Supported Methods
🔹 GET

const { data, loading, error } = await callApi('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
});

🔹 POST

const { data, successMessage } = await callApi('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: { title: 'Hello', body: 'World', userId: 1 },
  token: 'your-token',
  successMessage: 'Post created successfully!',
});

🔹 PUT

const { data } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: { title: 'Updated Title' },
  token: 'your-token',
});

🔹 DELETE

const { data } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
  token: 'your-token',
});


✅ Response Format
Every response returns:

{
  data: any;
  error: string | null;
  loading: boolean;
  successMessage?: string;
}


🧠 Best Practices
🔁 Use with React Query or SWR for revalidation

🔒 Always handle token securely

🎯 Customize success/error messages per endpoint

💥 Use error fallback UI in your React component



🛠️ How to Contribute
1. Fork the repository

git clone https://github.com/your-username/react-superfetch.git
cd react-superfetch

2. Install dependencies

npm install

3. Make your changes

Implement your feature or bug fix inside src/index.ts.

4. Run tests (optional)

npm test

5. Push to your fork and open a PR



🧪 Coming Soon

💥 Built-in retry logic

💥 Timeout support

💥 File uploads

💥 Global configuration support


👨‍💻 Author
Made with ❤️ by pravinxdev





