import axios from 'axios';
import { APP_STORAGE } from 'src/core/config';

export default class DefaultAxios {
    api;

    constructor(baseURL: string, contentType?: string) {
        this.api = axios.create({
            baseURL,
            headers: {
                'Content-Type': contentType ? contentType : 'application/json',
            },
        });
    }

    setToken = () => {
        const token = localStorage.getItem(APP_STORAGE.ACCESS_TOKEN);
        if (token) {
            this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
        }
    };

    get = <T = any>(url = '', config = {}) => {
        this.setToken();
        return this.api.get<T>(url, config);
    };

    post = <T = any>(url = '', body = {}, config = {}) => {
        this.setToken();
        return this.api.post<T>(url, body, config);
    };

    patch = <T = any>(url = '', body = {}, config = {}) => {
        this.setToken();
        return this.api.patch<T>(url, body, config);
    };

    put = (url = '', body = {}, config = {}) => {
        this.setToken();
        return this.api.put(url, body, config);
    };

    delete = (url = '', config = {}) => {
        this.setToken();
        return this.api.delete(url, config);
    };
}
