import axios from 'axios';
import { APP_INFO } from '../utils/constants';


const baseURL = 'https://devapi.servicelabs.tech';

//Axios Instance Headers
const headers = {
    appId: APP_INFO.APP_ID,
}

//Create Axios Instance
export const axiosAmore = axios.create({
    baseURL: baseURL,
    headers
});

//Configurate before the request is sent...
axiosAmore.interceptors.request.use(
    (config) => {

        if (config.useAuth) {

            //IF Auth => Take token else undefined
            const token = JSON.parse(localStorage.getItem('auth'))?.token;


            //IF Token => Set token to headers
            if (token)
                config.headers.Authorization = `Bearer ${token}`
        }

        return config;

    }, (error) => Promise.reject(error));






