import axios from 'axios';
import { CONSTANTS } from '../utils/constants';

const headers = {
    appId: CONSTANTS.APP_ID,
}

export const axiosAmore = axios.create({
    baseURL: 'https://serv.amoredateapp.com/',
    headers
});

export const axiosAuth = axios.create({
    baseURL: 'http://165.227.142.52:3169/',
    headers
});













