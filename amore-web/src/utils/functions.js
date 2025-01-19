import { axiosAmore } from "../api/axios"


export const createOtp = async ({
    phone,
    onStart,
    onFinally }) => {

    if (onStart) onStart();
    const body = {
        phone
    };
    let request = {
        response: {},
        error: {},
        status: null,
        otpId: null,
        errorMessage: '',
        cooldown: null,
    }

    try {
        request.response = await axiosAmore.post('/otp/create', body);
        if (request.response?.status === 200) {
            request.status = request.response?.status
            request.otpId = request.response?.data?.data?.oneTimePasswordId;
        }
    } catch (e) {

        request.status = request?.response?.status || 400
        request.error = e;

        const errorMessage = e?.response?.data?.response?.message || e.code;
        request.errorMessage = errorMessage;

        if (errorMessage === 'OTP_WAIT_FOR_NEW_CODE')
            request.cooldown = e.response.data.response.code;

    } finally {
        if (onFinally) onFinally();
    }
    return request;
}

export const login = async ({ phone, otpId, otpCode, onStart,
    onFinally }) => {
    if (onStart) onStart();
    const body = {
        phone,
        otpId,
        otpCode
    };
    let request = {
        response: {},
        error: {},
        data: {},
        status: null,
        errorMessage: '',
    };
    try {
        const response = await axiosAmore.post('user/login', body);
        if (response.status === 200) {
            request.response = response;
            request.status = response.status;
            request.data = response.data.data;
        }
    } catch (e) {
        request.error = e;
        request.status = e.status;
        request.errorMessage = e?.response?.data?.message;
    } finally {
        if (onFinally) onFinally();
    }

    return request;
}

export function getFormData(obj) {
    const formData = new FormData();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            formData.append(key, obj[key]);
        }
    }
    return formData;
}