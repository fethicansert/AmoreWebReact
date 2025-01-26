import { axiosAuth } from "../api/axios"


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
        request.response = await axiosAuth.post('/otp/create', body,);
        if (request.response?.status === 200) {
            request.status = request.response?.status
            request.otpId = request.response?.data?.data?.oneTimePasswordId;
        }

    } catch (e) {

        console.log(e);

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
        const response = await axiosAuth.post('user/login', body);
        console.log(body);
        console.log(response);

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

export function objectToFormData(obj, formData = new FormData(), parentKey = '') {
    if (obj && typeof obj === 'object' && !(obj instanceof Date) && !(obj instanceof File)) {
        // Eğer nesne bir dizi ise
        if (Array.isArray(obj)) {
            obj.forEach((value, index) => {
                objectToFormData(value, formData, `${parentKey}[${index}]`);
            });
        } else {
            // Eğer nesne bir nesne ise
            Object.keys(obj).forEach(key => {
                const value = obj[key];
                const newKey = parentKey ? `${parentKey}.${key}` : key;
                objectToFormData(value, formData, newKey);
            });
        }
    } else {
        // Temel değerleri FormData'ya ekleyin
        formData.append(parentKey, obj);
    }

    return formData;
};


//CHEKCS if given date adult age
export const isAdult = (birthDate) => {
    const today = new Date();
    const adultDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return birthDate <= adultDate;
}


//SCROLL Page
export const scrollPage = ({ top, left, behavior = 'smooth' }) => {

    console.log("Heloo");

    window.scrollTo({
        top,
        left,
        behavior
    });
    ;
}


export const calculateAge = (birthday) => {
    const today = new Date(); // Bugünün tarihi
    const birthDate = new Date(birthday); // Doğum tarihi

    let age = today.getFullYear() - birthDate.getFullYear(); // Yıl farkını al

    // Ay ve gün kontrolü yap
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--; // Ay veya gün henüz geçilmediyse yaşı bir azalt
    }

    return age;
}

