interface IOptions {
    absoluteUrl: boolean;
}
export declare const api: {
    get(url: string, options?: IOptions): Promise<any>;
    put(url: string, payload: any): Promise<any>;
    post(url: string, payload: any): Promise<any>;
    patch(url: string, payload: any): Promise<any>;
    delete(url: string, payload?: {}): Promise<any>;
};
export {};
//# sourceMappingURL=api.client.d.ts.map