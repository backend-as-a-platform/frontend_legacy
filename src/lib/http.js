import axios from 'axios';

const http = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URI });

export default http;
