type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiOptions {
  method?: Method;
  payload?: any;
  token?: string;
  headers?: Record<string, string>;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
  showLoading?: boolean;
  successMessage?: string;
  errorMessage?: string;
  retryCount?: number;
  timeout?: number; // in ms
  autoRefreshToken?: boolean;
}

// Optional global error handler
let globalErrorHandler: ((error: Error) => void) | null = null;

export const setGlobalErrorHandler = (handler: (error: Error) => void) => {
  globalErrorHandler = handler;
};

let requestQueue: Array<() => void> = [];

const isOnline = () => typeof navigator !== 'undefined' ? navigator.onLine : true;

// Simple dark mode CLI logger
const log = {
  info: (msg: string) => console.log(`\x1b[34m[INFO]\x1b[0m ${msg}`),
  success: (msg: string) => console.log(`\x1b[32m[SUCCESS]\x1b[0m ${msg}`),
  error: (msg: string) => console.error(`\x1b[31m[ERROR]\x1b[0m ${msg}`),
};

const refreshToken = async (): Promise<string | null> => {
  // Replace with actual logic
  console.log('\x1b[33m[REFRESH TOKEN]\x1b[0m Attempting to refresh token...');
  return null; // Return new token or null if failed
};

const callApi = async (
  url: string,
  options: ApiOptions = {}
): Promise<any> => {
  const {
    method = 'GET',
    payload,
    token,
    headers = {},
    onSuccess,
    onError,
    showLoading = false,
    successMessage,
    errorMessage,
    retryCount = 0,
    timeout = 10000,
    autoRefreshToken = false,
  } = options;

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

  const performRequest = async (attempt = 0): Promise<any> => {
    if (showLoading) log.info('Loading...');

    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const response = await fetch(url, { ...fetchOptions, signal: controller.signal });
      clearTimeout(id);

      if (!response.ok) {
        // Try refresh token logic if needed
        if (response.status === 401 && autoRefreshToken) {
          const newToken = await refreshToken();
          if (newToken) {
            return callApi(url, {
              ...options,
              token: newToken,
              autoRefreshToken: false,
            });
          }
        }

        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      if (successMessage) log.success(successMessage);
      onSuccess?.(data);
      return data;
    } catch (error: any) {
      if (!isOnline()) {
        log.error('You are offline. Queuing the request.');
        requestQueue.push(() => callApi(url, options));
        return;
      }

      if (attempt < retryCount) {
        log.info(`Retrying... Attempt ${attempt + 1}`);
        return performRequest(attempt + 1);
      }

      const errMsg = errorMessage || error.message || 'Unknown error';
      log.error(errMsg);
      onError?.(errMsg);
      globalErrorHandler?.(error);
      throw error;
    }
  };

  return performRequest();
};

// Optional: sync queued requests when back online
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    log.info('Back online. Syncing queued requests...');
    const queued = [...requestQueue];
    requestQueue = [];
    queued.forEach((fn) => fn());
  });
}

export default callApi;
