# react-superfetch

🚀 A simple one-liner API call utility for React (or any JS project).

## Installation

```bash
npm install react-superfetch



import callApi from 'react-superfetch';

const data = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET',
  token: 'your-jwt-token',
});
