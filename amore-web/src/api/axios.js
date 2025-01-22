
import axios from 'axios';
import { CONSTANTS } from '../data/constants';

export const axiosAmore = axios.create({
    baseURL: 'https://serv.amoredateapp.com/',
});

export const axiosAuth = axios.create({
    baseURL: 'http://165.227.142.52:3169/',
    headers: {
        appId: '6a3dbc21-7e77-4c8b-b9ea-885d2dc0407',
    }
});


axiosAmore.defaults.headers = `appId ${CONSTANTS.appId}`;
axiosAmore.defaults.headers = "Content-Type multipart/form-data";










