
import axios from 'axios';
import { CONSTANTS } from '../data/constants';

export const axiosAmore = axios.create({
    baseURL: 'https://serv.amoredateapp.com/',
});

axiosAmore.defaults.headers = `appId ${CONSTANTS.appId}`;
axiosAmore.defaults.headers = "Content-Type multipart/form-data";





