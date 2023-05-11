import axios from "axios";

// Set config defaults when creating the instance
const client = axios.create({
    // baseURL: 'https://whoget.onrender.com/api'
    baseURL: 'http://127.0.0.1:4000/api'
});

export default client;