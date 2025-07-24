type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiOptions {
  method?: Method;
  payload?: any;
  token?: string;
  headers?: Record<string, string>;
}

const callApi = async (
  url: string,
  options: ApiOptions = {}
): Promise<any> => {
  const { method = 'GET', payload, token, headers = {} } = options;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (token) {
    fetchOptions.headers = {
      ...fetchOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  if (payload && method !== 'GET') {
    fetchOptions.body = JSON.stringify(payload);
  }

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};

export default callApi;
