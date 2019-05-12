import axios from 'axios';
// const baseUrl = process.env.REACT_APP_API_BASE_URL;
// const baseUrl = 'https://donky-dd35a.firebaseio.com/';
const baseUrl = 'https://donky-499e3.firebaseio.com/';

const instance = axios.create({
    baseURL: baseUrl
});

export default instance;