importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');


const firebaseConfig = {
    apiKey: "AIzaSyAz1gVMPpyBl154GGed9LWyhCcm62j2Zj4",
    authDomain: "nodelabsdating.firebaseapp.com",
    projectId: "nodelabsdating",
    storageBucket: "nodelabsdating.firebasestorage.app",
    messagingSenderId: "506440072102",
    appId: "1:506440072102:web:6b2e528789ca1da114ed67",
    measurementId: "G-B0XSLDY017"
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging.isSupported() ? firebase.messaging() : undefined;

if (messaging) {
    messaging.onBackgroundMessage((payload) => {
        console.log(
            '[firebase-messaging-sw.js] Received background message ',
            payload
        );

        const extraData = payload?.data?.extraData ? JSON.parse(payload.data.extraData) : undefined;

        console.log(extraData);

        // Customize notification here
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: extraData.senderImage || '/firebase-logo.png',
            data: { url: `https://fth_1.servicelabs.tech/user/${extraData.userId}` }
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    });

    self.addEventListener('notificationclick', (event) => {
        event.notification.close(); // CLosing the notification when clicked
        const urlToOpen = event.notification.data?.url || 'https://fth_1.servicelabs.tech'

        // Open the URL in the default browser.
        event.waitUntil(
            clients.matchAll({
                type: 'window',
            })
                .then((windowClients) => {
                    // Check if there is already a window/tab open with the target URL
                    for (const client of windowClients) {
                        if (client.url === urlToOpen && 'focus' in client) {
                            return client.focus();
                        }
                    }
                    // If not, open a new window/tab with the target URL
                    if (clients.openWindow) {
                        return clients.openWindow(urlToOpen);
                    }
                })
        );
    });
} else {
    console.log("FCM Not Supported")
}





