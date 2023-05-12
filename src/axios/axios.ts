import axios from "axios";

// Set config defaults when creating the instance
const client = axios.create({
    // baseURL: 'https://whoget.onrender.com/api'
    baseURL: 'https://whoget.onrender.com/api'
});

export default client;