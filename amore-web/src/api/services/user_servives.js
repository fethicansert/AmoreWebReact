import { axiosAmore } from "../axios";

export const userFcmToken = async ({ type, token, language }) => axiosAmore.post('user/fcmToken',
    { type: type, fcmToken: token, language: 'tr' },
    { useAuth: true })



//Get user data with  given userId
export const getUserData = async ({ userId }) => axiosAmore.get(`user/user?userId=${userId}`, { useAuth: true })
