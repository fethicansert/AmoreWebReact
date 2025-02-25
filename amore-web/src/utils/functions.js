import { axiosAmore } from "../api/axios"

//Create OTP Request
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
        request.response = await axiosAmore.post('/otp/create', body,);
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

//User login request
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

//Transform object to fotmdata
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

//Scroll Page
export const scrollPage = ({ top, left, behavior = 'smooth' }) => {
    window.scrollTo({
        top,
        left,
        behavior
    });
}

//Calculate age with given birthday date
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

//changes theme color of root element
export const changeRootThemeColor = (color) =>
    document.querySelector('meta[name="theme-color"]').setAttribute('content', color);


export const formatTimeAgo = (dateString, language) => {

    const date = new Date(dateString);
    const now = new Date();

    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHrs = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHrs / 24);

    // Eğer bugün içindeyse → "13:00"
    if (diffDays === 0) {
        return date.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' });
    }

    // Eğer dünse → "Dün"
    if (diffDays === 1) {
        return "Dün";
    }

    // Eğer son 7 gün içindeyse → "Pazartesi", "Salı" ...
    if (diffDays < 7) {
        return date.toLocaleDateString(language, { weekday: 'long' });
    }

    // Eğer 1 haftadan eskiyse → "12.01.2024"
    return date.toLocaleDateString(language, { day: '2-digit', month: '2-digit', year: 'numeric' });
}
