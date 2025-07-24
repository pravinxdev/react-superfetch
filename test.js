import callApi from './dist/index.js';

async function run() {
  try {
    const data = await callApi('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
    });
    console.log(data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

run();
