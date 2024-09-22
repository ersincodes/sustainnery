import axios from 'axios';

const BASE_URL = 'http://localhost:5115/api';

export const api = axios.create({
    baseURL: BASE_URL,
});

export const fetchData = async (endpoint: string) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
};
