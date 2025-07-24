# 🚀 react-superfetch

**A powerful and minimalistic one-liner API utility for React (or any JavaScript project).**  
Simplify your API calls with support for GET, POST, PUT, DELETE, and advanced features like loading, success, and error handling.

---

## 📦 Installation

Install the package via npm:

```bash
npm install react-superfetch


⚙️ Features
✅ Easy one-liner API calls

🔐 Authorization header with JWT token

📥 Supports GET, POST, PUT, DELETE

📡 Offline sync & request queue

🔁 Auto token refresh logic

🌐 Global error handler integration

🧪 Full TypeScript support

⏱ Request timeout handling

🌙 CLI logs dark-mode styling

🔄 Built-in loading, success, and error messages

🧰 Custom response transformers


🧠 Usage
1. Basic Example (GET)

import callApi from 'react-superfetch';

const data = await callApi('https://jsonplaceholder.typicode.com/posts/1');

2. POST Example

const payload = { title: 'New Post', body: 'Content here' };

const response = await callApi('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  payload,
  token: 'your-jwt-token',
});


3. PUT Example

const updated = { title: 'Updated Title' };

await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  payload: updated,
});

4. DELETE Example

await callApi('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});


🛠 Advanced Options

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  payload?: any;
  token?: string;
  headers?: Record<string, string>;
  showLoading?: boolean;
  showSuccess?: boolean;
  showError?: boolean;
  retry?: boolean;
  timeout?: number;
  onSuccessMessage?: string;
  onErrorMessage?: string;
}



📋 Step-by-Step Integration

1. Install the package

npm install react-superfetch

2. Import in your component or API layer

import callApi from 'react-superfetch';

3. Make requests using callApi(url, options)

4. Optionally add global error handling

window.addEventListener('unhandledrejection', event => {
  console.error('Global Error:', event.reason);
});

5. For offline sync/queue, use the built-in queue system (in progress).

🔒 Token Refresh Logic
Automatically detects expired token (401).

Refreshes token using a user-defined refreshToken() method.

Retries original request once token is updated.


📡 Offline Sync & Queue (Beta)
Requests are stored in localStorage or IndexedDB when offline.

Synced automatically when back online.

Toggle support via config: { enableQueue: true }


🌐 Planned Features (Coming Soon)

🔁 Automatic retries on failure

🧰 Custom response transformers

💾 Persistent request queue with IndexedDB

🌙 Dark mode log styling (for CLI)

📊 Axios-style interceptors

📡 Real-time monitoring hooks


Made with ❤️ by developers, for developers.



📁 Contributing

Pull requests are welcome. Please follow best practices and submit tests for new features or fixes.

Fork this repo.

Create a new branch: git checkout -b feature/my-feature

Commit your changes: git commit -m 'Added new feature'

Push to your branch: git push origin feature/my-feature

Open a Pull Request

📜 License
MIT © pravinxdev


👨‍💻 Author
Made with ❤️ by pravinxdev




