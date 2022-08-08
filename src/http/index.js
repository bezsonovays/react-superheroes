import axios from 'axios';
const baseURL = "http://localhost:5000/heros/"

export default class PostService {
    static async getData() {
        return axios(baseURL, { method: 'GET'})
            .then(response => response.data)
    }

    static async getByID(id) {
        return axios(baseURL+id, { method: 'GET'})
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    static async deleteByID(id) {
        return axios(baseURL+id, { method: 'DELETE'})
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    static async createData(payload) {
        return axios(baseURL, {
                method: 'POST',
                headers: { 'content-type': 'multipart/form-data' },
                data: payload
            })
            .then(response => response.data)
            .catch(error => {
                throw error;
            })
    }

    static async updateData(id, payload) {
        return axios(baseURL+id, {
            method: 'PUT',
            headers: { 'content-type': 'multipart/form-data' },
            data: payload
        })
            .then(response => response.data)
            .catch(error => {
                throw error;
            })
    }
}



