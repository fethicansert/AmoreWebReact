import { axiosAmore } from "../axios";

//Asing user FCM (Firebase Cloud Messaging) Token to backend
export const userFcmToken = async ({ type, token, language }) => axiosAmore.post('user/fcmToken',
    { type: type, fcmToken: token, language: 'tr' },
    { useAuth: true })


//Get user data with  given userId
export const getUserData = async ({ userId }) => axiosAmore.get(`user/user?userId=${userId}`, { useAuth: true })


//Handle swipe intercations(like-superlike-pass)
export const userSwipe = async ({ type }) => {

}
