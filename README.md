<!-- # 🚀 react-superfetch

A tiny and powerful one-liner HTTP client for **React** (or any modern JavaScript project).  
Supports GET, POST, PUT, DELETE with support for `token`, `loading`, `successMessage`, `errorMessage`, and more.

---

## 📦 Installation

```bash
npm install react-superfetch

⚙️ Usage
🟢 Basic GET Example

import callApi from 'react-superfetch';

const data = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET',
  token: 'your-jwt-token',
});



🟡 POST Example

const newPost = await callApi('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: {
    title: 'foo',
    body: 'bar',
    userId: 1,
  },
  token: 'your-jwt-token',
  loadingMessage: 'Posting data...',
  successMessage: 'Post created successfully!',
  errorMessage: 'Failed to create post.',
});



🔵 PUT Example

const updatedPost = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: {
    id: 1,
    title: 'Updated Title',
    body: 'Updated body content',
    userId: 1,
  },
  token: 'your-jwt-token',
  loadingMessage: 'Updating post...',
  successMessage: 'Post updated successfully!',
  errorMessage: 'Update failed.',
});



🔴 DELETE Example
await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
  token: 'your-jwt-token',
  loadingMessage: 'Deleting...',
  successMessage: 'Deleted successfully!',
  errorMessage: 'Failed to delete.',
});



✅ Features
 1 ✅ Supports GET, POST, PUT, DELETE

 2 ✅ Simple, clean API

 3 ✅ Supports JWT tokens via token field

 4 ✅ Show loadingMessage, successMessage, errorMessage

 5 ✅ Automatically parses JSON responses

 6 ✅ Works in both React and plain JS apps



 🧩 Options
Option	          Type	              Description
method	        string	            HTTP method (GET, POST, PUT, DELETE)
body	          object	              Request payload (for POST/PUT)
token	          string	              JWT or other auth token
loadingMessage	string	            Optional loading message for user feedback
successMessage	string	            Message shown when the request succeeds
errorMessage	  string	           Message shown when the request fails



import { useEffect, useState } from 'react';
import callApi from 'react-superfetch';

function PostDetails() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET',
        loadingMessage: 'Fetching post...',
        successMessage: 'Loaded!',
        errorMessage: 'Failed to load post.',
      });
      setPost(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {post ? <h3>{post.title}</h3> : <p>Loading...</p>}
    </div>
  );
}



🙌 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

📄 License
MIT


 -->


 # react-superfetch

🚀 A simple one-liner API call utility for React (or any JavaScript project).

## Installation

```bash
npm install react-superfetch
Features
✅ Simple one-line fetch

✅ Supports GET, POST, PUT, DELETE

✅ Handles loading, success, and error states

✅ Custom headers including JWT tokens

✅ Timeout support

✅ Response parsing

✅ Error messaging

✅ Lightweight and framework-agnostic

Usage
Import
js
Copy
Edit
import callApi from 'react-superfetch';
GET Request
js
Copy
Edit
const { data, loading, error, successMessage, errorMessage } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET',
  token: 'your-jwt-token',
  timeout: 5000, // optional timeout in ms
});
POST Request
js
Copy
Edit
const { data, loading, error, successMessage, errorMessage } = await callApi('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: {
    title: 'foo',
    body: 'bar',
    userId: 1,
  },
  token: 'your-jwt-token',
});
PUT Request
js
Copy
Edit
const { data, loading, error, successMessage, errorMessage } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: {
    id: 1,
    title: 'updated title',
    body: 'updated body',
    userId: 1,
  },
  token: 'your-jwt-token',
});
DELETE Request
js
Copy
Edit
const { data, loading, error, successMessage, errorMessage } = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
  token: 'your-jwt-token',
});
Options
Option	Type	Description
method	string	HTTP method: 'GET', 'POST', etc.
body	object	Body payload (for POST/PUT)
token	string	JWT token (adds Authorization header)
headers	object	Custom headers (optional)
timeout	number	Timeout in milliseconds (optional)

Return Object
ts
Copy
Edit
{
  data: any,                // API response
  loading: boolean,         // true while request is in progress
  error: boolean,           // true if request failed
  successMessage: string,   // optional success message
  errorMessage: string,     // optional error message
}
Example with React
tsx
Copy
Edit
import React, { useEffect, useState } from 'react';
import callApi from 'react-superfetch';

function Post() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET',
        token: 'your-jwt-token',
      });
      setResponse(result);
    }

    fetchData();
  }, []);

  if (response?.loading) return <p>Loading...</p>;
  if (response?.error) return <p>Error: {response.errorMessage}</p>;

  return (
    <div>
      <h3>{response?.data?.title}</h3>
      <p>{response?.data?.body}</p>
    </div>
  );
}
License
MIT

Author
Made with ❤️ by Pravin

vbnet
Copy
Edit

