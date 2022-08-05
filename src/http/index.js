import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export {
    $host
}

// export default class PostService {
//     static async getAll() {
//         const response = await axios.get('http://localhost:5000');
//         return response.data;
//     }
//
//     static async getByID(id) {
//         const response = await axios.get(`http://localhost:5000/${id}`);
//         return response.data;
//     }
// }