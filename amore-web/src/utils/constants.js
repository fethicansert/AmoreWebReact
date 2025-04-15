
//APP INFO
export const APP_INFO = {
    TITLE: "Amore",
    APP_ID: "6a3dbc21-7e77-4c8b-b9ea-885d2dc0407"
}

//ROUTES
export const ROUTES = {
    HOME: '/',
    DASHBOARD: 'dashboard',
    REGISTER: 'register',
    USER_SWIPE: 'user-swipe',
    DISCOVER: 'discover',
    MATCHES: 'matches',
    CHAT: 'chat',
    MARKET: 'market',
    PREMIM_SUBSCRIPTION: 'premium-subscription',
    USER_PROFILE: 'user-profile',
    PAYMENT: '/dashboard/payment'
};

//MOBILE APP LINKS
export const LINKS = {
    GOOGLE_PLAY: 'https://play.google.com/store/apps/details?id=com.albsoftware.app&hl=tr',
    APPLE_STORE: 'https://apps.apple.com/tr/app/amore-bulu%C5%9Fma-sohbet-fl%C3%B6rt/id6569249182?l=tr'
};

//INPUT VALIDATION REGEX
export const REGEXES = {
    NUMBER_REGEX: /^$|^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/
}

//FIREBASE CLOUD MESSAGING
export const FCM = {
    API_KEY: "AIzaSyAz1gVMPpyBl154GGed9LWyhCcm62j2Zj4",
    AUTH_DOMAIN: "nodelabsdating.firebaseapp.com",
    PROJECT_ID: "nodelabsdating",
    STORAGE_BUCKET: "nodelabsdating.firebasestorage.app",
    MESSAGING_SENDER_ID: "506440072102",
    APP_ID: "1:506440072102:web:6b2e528789ca1da114ed67",
    MEASUREMENT_ID: "G-B0XSLDY017"
};


export const VIDEO_TYPES = ['webm', 'mp4', 'x-matroska', 'ogg'];
export const VIDEO_CODECS = ['vp9', 'vp9.0', 'vp8', 'vp8.0', 'avc1', 'av1', 'h265', 'h.265', 'h264', 'h.264', 'mpeg', 'theora'];

export const AUDIO_TYPES = ['webm', 'mp3', 'mp4', 'x-matroska', 'ogg', 'wav'];
export const AUDIO_CODECS = ['opus', 'vorbis', 'aac', 'mpeg', 'mp4a', 'pcm'];