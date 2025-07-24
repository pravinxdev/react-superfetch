type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
interface ApiOptions {
    method?: Method;
    payload?: any;
    token?: string;
    headers?: Record<string, string>;
}
declare const callApi: (url: string, options?: ApiOptions) => Promise<any>;

export { callApi as default };
