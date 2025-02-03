import axios from 'axios';
import { CONSTANTS } from '../utils/constants';


const headers = {
    appId: '6a3dbc21-7e77-4c8b-b9ea-885d2dc0407',
}

export const axiosAmore = axios.create({
    baseURL: 'https://serv.amoredateapp.com/',
    headers
});

export const axiosAuth = axios.create({
    baseURL: 'http://165.227.142.52:3169/',
    headers
});



axiosAmore.defaults.headers = `appId ${CONSTANTS.appId}`;











