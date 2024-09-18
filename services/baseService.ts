import api from './api';

export class BaseService {
    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async getAll() {
        const response = await api.get(this.endpoint);
        return response.data;
    }

    async getById(id: string) {
        const response = await api.get(`${this.endpoint}/${id}`);
        return response.data;
    }

    async create(data: any) {
        const response = await api.post(this.endpoint, data);
        return response.data;
    }

    async update(id: string, data: any) {
        const response = await api.put(`${this.endpoint}/${id}`, data);
        return response.data;
    }

    async delete(id: string) {
        const response = await api.delete(`${this.endpoint}/${id}`);
        return response.data;
    }
}
