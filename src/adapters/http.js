import axios from 'axios';

const http = axios.create({ baseURL: process.env.BACKEND_URI });

export default http;
