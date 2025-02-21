import axios from 'axios';
import { CONSTANTS } from '../utils/constants';

const isTesting = true;
const baseURL = isTesting ? 'http://165.227.142.52:3169/' : 'https://serv.amoredateapp.com/';

const headers = {
    appId: CONSTANTS.APP_ID,
}

export const axiosAmore = axios.create({
    baseURL: baseURL,
    headers
});











