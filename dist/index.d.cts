type ApiOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    payload?: any;
    token?: string;
    headers?: Record<string, string>;
};
declare function callApi<T = any>(url: string, options?: ApiOptions): Promise<T>;

export { type ApiOptions, callApi as default };
