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
    timeout?: number;
    autoRefreshToken?: boolean;
}
declare const setGlobalErrorHandler: (handler: (error: Error) => void) => void;
declare const callApi: (url: string, options?: ApiOptions) => Promise<any>;

export { callApi as default, setGlobalErrorHandler };
