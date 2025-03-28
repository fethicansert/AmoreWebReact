import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "tr",
    resources: {

        tr: {
            translation: {

                ERRORS: {
                    UNEXPECTED_ERROR: {
                        TITLE: "Beklenmedik bir hata oluştu !",
                        SUB_TITLE: "Lütfen birazdan tekrar dene."
                    }
                },

                PREMIUM_SUBSCRIPTION: {
                    PREMIUM_FEATURE_TITLE_1: "Seni Beğenenleri Gör",
                    PREMIUM_FEATURE_TEXT_1: "Premium’a geçerek kimlerle eşleştiğini gör. Sana ilgi duyanları hemen keşfet!",
                    BE_PREMIUM: "Premium Ol",
                    PREMIUM_SUBSCRIPTION_BOX_TITLE: "Hemen Premium Ol",
                    SUBSCRIPTION: "Abonelik",
                    TITLE: "Premium Üyelik",
                    MONTHLY_SUBSCRIPTION: "Aylık Abonelik",
                    WEEKLY_SUBSCRIPTION: "Haftalık Abonelik",
                    MONTHLY_TOTAL: "Ay için toplam"
                },

                DATE: {
                    MONTH: "Ay",
                    WEEK: "Hafta"
                },

                BUTTONS: {
                    SEND_MESSAGE_BUTTON: "Mesaj Gönder",
                    PAY_BUTTON: "Ödeme Yap",
                    OKAY_BUTTON: "Tamam"
                },

                USER_CARD: {
                    ONLY_PREMIUM_USERS: "Sadece Premim Üyeler"
                },

                LIMITED_OFFER: {
                    TITLE: "Sınırlı Teklif",
                    SUB_TITLE: "Jeton paketini seçerek bonus kazanın ve yeni bölümlerin kilidini açın!",
                    BONUSES: {
                        TITLE: "Alacağınız Bonuslar",
                        PREMIUM_ACCOUNT: "Premim Hesap",
                        MORE_MATCHES: "Daha fazla Eşleşme",
                        FEATURED: "Öne Çıkarma",
                        MORE_LIKE: "Daha fazla Beğeni"
                    },
                    JETONS: {
                        JETON: "Jeton",
                        TITLE: "Kilidi açmak için bir jeton paketi seçin",
                        TIME: "Başına haftalık"
                    },
                    NAVIGATE_MARKET: "Tüm Jetonları Gör",
                    NAVIGATE_SUBSCRIPTIONS: "Tüm Abonelikleri Gör"
                },

                LOGIN_POPUP: {
                    TITLE: "Hemen Başla !",
                    SUB_TITLE: "Mesajını göndermek için kayıt ol",
                    TEXT: "Aşk peşindeysen, kayıt ol",
                    BUTTON_TEXT: "Telefonla Devam Et"
                },

                LOGOUT: {
                    TITLE: "Çıkış Yap",
                    TEXT: "Çıkış yapmak istersen hesabın tarayıcıda kapatılacak, çıkış yapmak istediğinden emin misin?",
                    LOGOUT_BUTTON: "Çıkış Yap",
                    CLOSE_BUTTON: "Kapat"
                },

                FILTER: {
                    NAME: "İsim",
                    NAME_PLACEHOLDER: "Kullanıcı aramaya başla !",
                    GENDER: "Cinsiyet",
                    AGE: "Yaş",
                    DISTANCE: "Mesafe",
                    USER_STATUS: "Kullanıcı Durumu",
                    FILTER_BUTTON: "Filtrele",
                    HIDE_BUTTON: "Sakla",
                    RESET_BUTTON: "Sıfırla",
                    APPLY_FILTER_BUTTON: "Filtreyi Uygula",
                },

                ROUTE_NAMES: {
                    MAIN_PAGE: 'Ana Sayfa',
                    NOTIFICATIONS: "Bildirimler",
                    DISCOVER: "Keşfet",
                    MATCHES: "Eşleşmeler",
                    MESSAGES: "Mesajlar",
                    MARKET: "Jeton Al",
                    PREMIUM_SUBSCRIPTION: "Premium Ol",
                    PROFILE: 'Profil',
                    VISITS: "Ziyaretler",
                    LIKES: "Beğeniler",
                },

                //BİLDİRİMLER  
                NOTIFICATION: {
                    QUICK_NOTIFICATIONS: {
                        TITLE: "{{user}}",
                        TEXT: "{{message}}",
                        LIKE: "<span>{{user}}</span> seni beğendi!",
                        CALL: "{{user}} seni aradı 📞",
                        CALL_REQUEST: "{{user}} seni aradı 📞",
                        VIDEO_CALL_REQUEST: "{{user}} seni görüntülü aradı 🎥",
                        AUDIO: "{{user}} bir ses kaydı gönderdi 🎵",
                        IMAGE: "{{user}} bir fotoğraf gönderdi 📷",
                        GIFT: "{{user}} bir gift gönderdi 🎁",

                    },
                    MESSAGE: {
                        TITLE: "{{user}}",
                        DESCRIPTION: "{{message}}"
                    },
                    VISIT: {
                        TITLE: "{{user}} profilini ziyaret etti 👀",
                        DESCRIPTION: "Profilin birinin dikkatini çekti! Ziyaretçinle tanışmak için hemen profilini kontrol et."
                    },
                    VISIT_FREE: {
                        TITLE: "Biri profilini ziyaret etti 👀",
                        DESCRIPTION: "Profilin birinin dikkatini çekti! Ziyaretçinle tanışmak için hemen profilini kontrol et."
                    },
                    LIKE: {
                        TITLE: "{{user}} seni beğendi 😍",
                        DESCRIPTION: "Harika haber! Belki de ruh eşini buldun. Seni beğenen kişiyi görmek için hemen tıkla!"
                    },
                    LIKE_FREE: {
                        TITLE: "Biri seni beğendi 😍",
                        DESCRIPTION: "Harika haber! Belki de ruh eşini buldun. Seni beğenen kişiyi görmek için hemen tıkla!"
                    },
                    SUPERLIKE: {
                        TITLE: "Özel biri seni süper beğendi! Bu özel kişiyi keşfetmek için hemen tıkla.",
                        DESCRIPTION: "{{user}} seni süper beğendi 🌟"
                    },
                    GIFT: {
                        TITLE: "Hediye",
                        DESCRIPTION: "{{user}} sana bir hediye gönderdi."
                    },
                    CONSUMABLE: {
                        TITLE: "Jeton Yüklendi",
                        DESCRIPTION: "Jetonlar başarıyla yüklendi."
                    },
                    SUPPORT_ANSWER: {
                        TITLE: "Destek Sistemi",
                        DESCRIPTION: "Destek talebin yanıtlandı. ✅"
                    },
                    SUPPORT_REQUEST: {
                        TITLE: "Destek Talebi",
                        DESCRIPTION: "Destek talebin yanıtlandı. ✅"
                    },
                    GIFT_CREDIT: {
                        TITLE: "Hediye Jetonlar",
                        DESCRIPTION: "{{user}} sana {{jetonQuantity}} jeton hediye etti."
                    },
                    MATCH: {
                        TITLE: "{{user}} ile eşleştiniz 💖",
                        DESCRIPTION: "Harika haber! {{user}} ile eşleştiniz. Bu özel kişiyle sohbet etmeye başlamak için hemen tıklayın!"
                    },
                    CALL_ADMIN_REQUEST_STARTED: {
                        TITLE: "Yeni Çağrı Talebi",
                        DESCRIPTION: "{{user}} tarafından yeni bir çağrı talebi alındı."
                    },
                    CALL_ADMIN_REQUEST_MISSED: {
                        TITLE: "Kaçırılan Çağrı Talebi",
                        DESCRIPTION: "{{user}} tarafından yapılan çağrı talebi kaçırıldı."
                    },
                    AUDIO_CALL_MISSED: {
                        TITLE: "Kaçırılan Sesli Arama",
                        DESCRIPTION: "{{user}} tarafından gelen sesli arama talebini kaçırdınız."
                    },
                    VIDEO_CALL_MISSED: {
                        TITLE: "Kaçırılan Görüntülü Arama",
                        DESCRIPTION: "{{user}} tarafından gelen görüntülü arama talebini kaçırdınız."
                    }
                },

                //HOME
                HOME: {
                    HERO: {
                        TITLE: "Tadı Damağında Kalacak",
                        SUB_TITLE: "Sohbet Et ve Flörtleş",
                        BOX_LEFT: {
                            TEXT: "Sadece gerçek insanlar",
                            SUB_TEXT: "Amore’da sahte profillere yer yok."
                        },
                        BOX_RIGHT: {
                            TEXT: "Tanış, Konuş, Görüş",
                            SUB_TEXT: "Aşka açılan kapı"
                        }
                    },
                    INFO: {
                        TITLE: "40.000’dan fazla <pink>kullanıcı</pink>",
                        SUB_TITLE: "Dating’den <pink>Çooooook</pink> Daha Fazlası",
                        TEXT: 'Amore, sadece bir dating uygulaması değil; anlamlı ilişkiler, samimi sohbetler ve gerçek bağlar kurabileceğiniz özel bir platform. Yeni arkadaşlıklar keşfedin, sevginizi bulun ve hayatınıza değer katacak deneyimlere adım atın!',
                        INFO_BUTTON: "Hemen Kaydol",
                    },
                    INFO_IMAGES: {
                        TITLE: "Tamamen gerçek insanlarla sohbet et",
                    },
                    INTRODUCTION: {
                        TITLE: "Diğer Dating’lerden Farklıyız",
                        SUB_TITLE: "Çünkü",
                        TEXT: "Amore, sadece eşleşmeleri değil, anlamlı ve uzun soluklu ilişkiler kurmayı hedefler. Kullanıcı dostu tasarımı, güvenli ortamı ve samimi topluluğu ile burada aradığınız sevgi ve dostluğu bulmanız için her şey hazır!"
                    },
                    FOOTER: {
                        TEXT: "Uygulamamızı",
                        SUB_TEXT: "Indirmediniz mi !",
                        APPLE_BUTTON: "Uygulama İndirin",
                        GOOGLE_BUTTON: "Şimdi Katıl"
                    }
                },

                //HEADER
                HEADER: {
                    LOGIN_BUTTON: ' Hemen Başla !',
                    CONTINUE_BUTTON: "Devam Et !",
                    AMORE_LINK_1: 'Amore Hakkında',
                    AMORE_LINK_2: "Amore Nedir ?",
                },

                //REGISTER
                REGISTER: {
                    PHONE: {
                        TITLE: "Telefon Numaranı Gir",
                        INFO: "Sana tek seferlik şifre göndereceğiz.",
                        ERROR_TEXT: "Lütfen telefon numarını gir !",
                        INVALID_PHONE_ERROR: "Girdiğiniz telefon numarası geçersiz",
                        WAIT_NEW_CODE_ERROR: "Yeni bir kod almak için {{otpCooldown}} saniye beklemeniz gerekiyor."
                    },
                    VERIFY: {
                        TITLE: "Doğrulama Kodunu Girin",
                        INFO: "Telefonunuza 4 haneli bir kod gönderdik. Lütfen doğrulamak için aşağıya girin.",
                        ERROR_TEXT: "Lütfen doğrulama kodunu girin.",
                        SEND_AGAIN_BUTTON: "Tekrar Gönder"
                    },
                    USERNAME: {
                        TITLE: "İsmin ne ?",
                        INFO: 'Takma adın gerçekten harika olabilir, ancak seni doğru şekilde tanımlayabilmemiz için gerçek adına ihtiyacımız var.',
                        INPUT_PLACEHOLDER: 'İsım Yazın',
                        ERROR_TEXT: "Devam etmek icin ismini yazmalısın !",
                        SUB_ERROR_TEXT: "İsmin en az üç harf içermelidir !'"
                    },
                    BIRTH_DATE: {
                        TITLE: "Doğum tarihin ne ?",
                        INFO: "Doğum tarihinizi öğrenmemiz gerekiyor",
                        DAY_PLACEHOLDER: "GG",
                        MONTH_PLACEHOLDER: "AA",
                        YEAR_PLACEHOLDER: "YYYY",
                        ERROR_TEXT: "Lütfen boşluklara doğum tarihini gir !",
                        SUB_ERROR_TEXT: "Lütfen geçerli bir tarih gir !"
                    },
                    GENDER: {
                        TITLE: "Cinsiyetiniz Nedir ?",
                        INFO: "Bu bilgileri daha sonra dilediğiniz zaman güncelleyebilirsiniz."
                    },
                    INTERESTS: {
                        TITLE: "İlgi Alanlarınız Nedir ?",
                        INFO: "İlgi alanlarınızı paylaşarak sizinle aynı ilgi alanlarına sahip kişilerle eşleşmemizi sağlayabilirsiniz.",
                        ERROR_TEXT: "En az üç hobi seçmelisin !",
                        INTEREST_ITEMS: {
                            INTEREST_NATURE: "Doğa",
                            INTEREST_ARCHITECTURE: "Mimar",
                            INTEREST_ANIMALS: "Hayvanlar",
                            INTEREST_GYM_FITNESS: "Spor ve Fitness",
                            INTEREST_FASHION: "Moda",
                            INTEREST_LANGUAGE: "Dil",
                            INTEREST_BOOK: "Kitap",
                            INTEREST_FOOTBALL: "Futbol",
                            INTEREST_DANCING: "Dans",
                            INTEREST_GAMING: "Oyun",
                            INTEREST_PAINTING: "Resim",
                            INTEREST_PHOTOGRAPHY: "Fotoğrafçılık",
                            INTEREST_MUSIC: "Müzik",
                            INTEREST_WRITING: "Yazı",
                            INTEREST_PEOPLE: "İnsanlar",
                            INTEREST_MOVIE: "Filmler"
                        }
                    },
                    PHOTO: {
                        TITLE: "Fotoğraf Yükle",
                        SUB_TITLE: "Profil Fotoğrafı",
                        INFO: "Profilini tamamlamak ve diğer kullanıcıların seni daha iyi tanıyabilmesi için net bir fotoğraf yükle.",
                        ERROR_TEXT: "Lütfen fotoğraf ekleyiniz !"
                    },
                    LOCATION: {
                        TITLE: "Nerde Yaşıyorsun ?",
                        STATE_PLACEHOLDER: "Şehir Seç",
                        INFO: "Bulunduğunuz ülke ve şehri seçerek size en uygun deneyimi sunmamıza yardımcı olun.",
                        ERROR_TEXT: "Lütfen konumunuzu şeçin !"
                    },

                    //REGISTER_BUTTONS
                    CONTINUE_BUTTON: "Devam Et",
                    COMPLETE_BUTTON: "Tamamla",
                    SEND_BUTTON: "Gönder",
                    SEND_AGAIN_BUTTON: "Tekrar Gönder",
                    VERIFY_BUTTON: "Doğrula"
                },

                GIFTS: {
                    CATEGORIE_TITLES:{
                        ALL:"Tüm İçerikler",
                        SPECIAL: "Özel",
                        FLOWERS: "Çiçekler",
                        ROMANCE: "Romantizm",
                        DRINKS: "İçecekler",
                        HEARTS: "Kalpler",
                        CELEBRATION: "Kutlama"
                    }  
                },

                //STATUS
                STATUS: {
                    TITLE: "Kullanıc Durumu",
                    ONLINE: "Çevrim içi",
                    OFFLINE: "Çevrim dışı"
                },

                //GENDERS
                GENDER: {
                    TITLE: "Cinsiyet",
                    FEMALE: "Kadın",
                    MALE: "Erkek"
                },

                PURCHASE: {
                    JETON: "Jeton",
                    DISCOUNT: "İndirim",
                    NO_DISCOUNT: "İndirim Yok",
                    LIMITED_TIME: "Sınırlı Süre",
                    SPECIAL_OFFER: "Size Özel",
                    WEEKLY: "Haftalık",
                    MONTHLY: "Aylık"
                },

                PERMISSION: {
                    LOCATION_BANNER_TEXT: "Daha iyi bir deneyim için konum iznini aktif edin",
                    LOCATION_POPUP_TITLE: "Konum Aç",
                    LOCATION_POPUP_TEXT: "En iyi eşleşmeleri sana gösterebilmemiz için ayarlara giderek konum erişimini açmalı ve ardından sayfayı yenilemelisin.",
                    NOTIFICATION_BANNER_TEXT: "Daha iyi bir deneyim için bildirimlerinizi açın",
                    NOTIFICATION_POPUP_TITLE: "Bildirimleri Aç",
                    NOTIFICATION_POPUP_TEXT: "Yeni eşleşmeler ve mesajları kaçırmamak için ayarlardan bildirimleri açmalı ve ardından sayfayı yenilemelisin.",

                },

                //DASHBOARD
                DASHBOARD: {
                    TITLES: {
                        NOTIFICATIONS_TITLE: "Bildirimler",
                        QUICK_MESSAGES: "Hızlı Mesajlar",
                        EMPTY_MESSAGE: "Mesaj kutunuz boş.",
                        LIKES: "Beğeniler",
                        EMPTY_LIKES: "Henüz beğeni almadın.",
                        SEE_ALL: "Tümünü Gör",
                        EMPTY_NOTIFICATIONS_TITLE: "Burda Çok Yalnızım !",
                        EMPTY_NOTIFICATIONS_SUB_TITLE: "Etkilişeme geçip bana yardımcı ol.",
                        FILTER_CHANGE_TITLE: "Aranan Niteliklerde Kullanıcı Bulunamiyor !",
                        FILTER_CHANGE_SUB_TITLE: "Filtre seçeneklerini değiştirmeyi denemelisin."
                    },

                    SWIPE: {
                        SEND_MESSAGE_BUTTON: "Mesaj Gönder",
                        USERINFO: {
                            BIO_TITLE: "Ben Kimim?",
                            NO_BIO_TEXT: "Bu kullanıcının biyografisi yok.",
                            INTEREST_TITLE: "İlgi Alanlarım",
                            NO_INTEREST_TEXT: "Bu kullanıcının ilgi alanları henüz eklenemdi.",
                            SOCIAL_PLATFORM_TITLE: "Sosyal Platformlarım",
                            NO_JOB_TITLE: "Meslek Bilgisi Yok",
                            NO_SCOOL_TITLE: "Okul Bilgisi Yok",
                            AGE: "{{age}} Yaşında"
                        },
                    },

                    PREMIUM_SUBSCRIPTION: {
                        TITLE: "Premium Dünyasına",
                        SUB_TITLE: "Hoş Geldin",
                        FOOTER_TEXT: "Hangi premium seçenek sana daha uygun?",
                        CHOOSE_PLAN_BUTTON: "Planı seç"
                    },


                    MARKET: {
                        PREMIUM_SUBSCRIPTION_HEADER: {
                            TITLE: "Premium Üyelik",
                            SUB_TITLE: "Premium üye olarak avantajların tadını çıkar.",
                            BUTTON_TEXT: "Hemen Başla"
                        },
                        FOOTER_TEXT: "Daha büyük paketlerde daha fazla indirim! Satın aldığınız jeton miktarı arttıkça, daha fazla indirim kazanırsınız."
                    },

                    PAYMENT: {
                        CARD_USER_NAME_TITLE: "Kart Üzerindeki İsin",
                        CARD_USER_NAME_SUB_TITLE: "Kart üzerindeki ismi yazın",
                        CARD_USER_NAME_PLACEHOLDER: "Kart Sahibi",
                        CARD_NUMBER_TITLE: "Kart Numarası",
                        CARD_NUMBER_SUB_TITLE: "Kart üzerindeki 16 haneli kart numarasını girin",
                        CARD_NUMBER_PLACEHOLDER: "Kart Numarası",
                        CARD_CVV_TITLE: "CVV Numarası",
                        CARD_CVV_SUB_TITLE: "3 haneli numarayı girin",
                        CARD_CVV_PLACEHOLDER: "CVV",
                        CARD_EXPIRATION_DATE_TITLE: "Son kullanma tarihi",
                        CARD_EXPIRATION_DATE_SUB_TITLE: "Son kullanma tarihini girin",
                        CARD_EXPIRATION_DATE_YEAR_PLACEHOLDER: "YY",
                        CARD_EXPIRATION_DATE_MONTH_PLACEHOLDER: "MM",

                        CHECKOUT: {
                            NAME_SURNAME_PLACEHOLDER: "Adı Soyadı",
                            TITLE: "Alışveriş Bilgileri",
                            TOTAL: "Sonuç Tutar"
                        }
                    }


                }
            }
        },
        en: {
            translation: {

                ERRORS: {
                    UNEXPECTED_ERROR: {
                        TITLE: "An unexpected error occurred!",
                        SUB_TITLE: "Please try again later."
                    }
                },

                PREMIUM_SUBSCRIPTION: {
                    PREMIUM_FEATURE_TITLE_1: "See Who Likes You",
                    PREMIUM_FEATURE_TEXT_1: "Upgrade to Premium to see your matches. Discover who is interested in you instantly!",
                    BE_PREMIUM: "Be Premium",
                    PREMIUM_SUBSCRIPTION_BOX_TITLE: "Get Premium Now",
                    SUBSCRIPTION: "Subscription",
                    TITLE: "Premium Subscription",
                    MONTHLY_SUBSCRIPTION: "Month Subscription",
                    WEEKLY_SUBSCRIPTION: "Weekly Subscription",
                    MONTHLY_TOTAL: "Total for the Month",
                },

                DATE: {
                    MONTH: "Month",
                    WEEK: "Week"
                },

                BUTTONS: {
                    SEND_MESSAGE_BUTTON: "Send Message",
                    PAY_BUTTON: "Make Payment",
                    OKAY_BUTTON: "Okay"
                },

                USER_CARD: {
                    ONLY_PREMIUM_USERS: "Premium Members Only"
                },

                LIMITED_OFFER: {
                    TITLE: "Limited Offer",
                    SUB_TITLE: "Select a token package to earn bonuses and unlock new features!",
                    BONUSES: {
                        TITLE: "Bonuses You Will Receive",
                        PREMIUM_ACCOUNT: "Premium Account",
                        MORE_MATCHES: "More Matches",
                        FEATURED: "Highlighted Profle",
                        MORE_LIKE: "Get More Likes"
                    },
                    JETONS: {
                        JETON: "Token",
                        TITLE: "Select a token package to unlock",
                        TIME: "Per week"
                    },
                    NAVIGATE_MARKET: "View All Tokens",
                    NAVIGATE_SUBSCRIPTIONS: "View All Subscriptions"
                },

                LOGIN_POPUP: {
                    TITLE: "Get Started Now !",
                    SUB_TITLE: "Sign up to send your message",
                    TEXT: "If you're looking for love, sign up",
                    BUTTON_TEXT: "Continue with Phone"
                },

                LOGOUT: {
                    TITLE: "Log Out",
                    TEXT: "If you log out, your account will be closed in the browser. Are you sure you want to log out?",
                    LOGOUT_BUTTON: "Log Out",
                    CLOSE_BUTTON: "Close"
                },

                //FILTER
                FILTER: {
                    NAME: "Name",
                    NAME_PLACEHOLDER: "Start searching for a user!",
                    GENDER: "Gender",
                    AGE: "Age",
                    DISTANCE: "Distance",
                    USER_STATUS: "User Status",
                    FILTER_BUTTON: 'Filter',
                    HIDE_BUTTON: "Hide",
                    RESET_BUTTON: "Reset",
                    APPLY_FILTER_BUTTON: "Apply Filter"
                },

                // ROUTE NAMES
                ROUTE_NAMES: {
                    MAIN_PAGE: 'Home',
                    NOTIFICATIONS: 'Notifications',
                    DISCOVER: 'Discover',
                    MATCHES: 'Matches',
                    MESSAGES: 'Messages',
                    MARKET: 'Buy Tokens',
                    PREMIUM_SUBSCRIPTION: 'Go Premium',
                    PROFILE: 'Profile',
                    VISITS: "Visits",
                    LIKES: "Likes",
                },

                //NOTIFICATIONS
                NOTIFICATION: {
                    QUICK_NOTIFICATIONS: {
                        TITLE: "{{user}}",
                        TEXT: "{{message}}",
                        LIKE: "<span>{{user}}</span> liked you!",
                        CALL: "{{user}} called you 📞",
                        CALL_REQUEST: "{{user}} called you 📞",
                        VIDEO_CALL_REQUEST: "{{user}} made a video call 🎥",
                        AUDIO: "{{user}} sent a voice message 🎵",
                        IMAGE: "{{user}} sent a photo 📷",
                        GIFT: "{{user}} sent a gift 🎁",
                    },
                    MESSAGE: {
                        TITLE: "{{user}}",
                        DESCRIPTION: "{{message}}"
                    },
                    VISIT: {
                        TITLE: "{{user}} visited your profile 👀",
                        DESCRIPTION: "Your profile caught someone's attention! Check your profile now to meet your visitor."
                    },
                    VISIT_FREE: {
                        TITLE: "Someone visited your profile 👀",
                        DESCRIPTION: "Your profile caught someone's attention! Check your profile now to meet your visitor."
                    },
                    LIKE: {
                        TITLE: "{{user}} liked you 😍",
                        DESCRIPTION: "Great news! Maybe you've found your soulmate. Click now to see who liked you!"
                    },
                    LIKE_FREE: {
                        TITLE: "Someone liked you 😍",
                        DESCRIPTION: "Great news! Maybe you've found your soulmate. Click now to see who liked you!"
                    },
                    SUPERLIKE: {
                        TITLE: "Someone special super liked you! Click now to discover this special person.",
                        DESCRIPTION: "{{user}} super liked you 🌟"
                    },
                    GIFT: {
                        TITLE: "Gift",
                        DESCRIPTION: "{{user}} sent you a gift."
                    },
                    CONSUMABLE: {
                        TITLE: "Token Loaded",
                        DESCRIPTION: "Tokens have been successfully loaded."
                    },
                    SUPPORT_ANSWER: {
                        TITLE: "Support System",
                        DESCRIPTION: "Your support request has been answered. ✅"
                    },
                    SUPPORT_REQUEST: {
                        TITLE: "Support Request",
                        DESCRIPTION: "Your support request has been answered. ✅"
                    },
                    GIFT_CREDIT: {
                        TITLE: "Gift Tokens",
                        DESCRIPTION: "{{user}} has gifted you {{jetonQuantity}} tokens."
                    },
                    MATCH: {
                        TITLE: "You matched with {{user}} 💖",
                        DESCRIPTION: "Great news! You matched with {{user}}. Click now to start chatting with this special person!"
                    },
                    CALL_ADMIN_REQUEST_STARTED: {
                        TITLE: "New Call Request",
                        DESCRIPTION: "A new call request has been received from {{user}}."
                    },
                    CALL_ADMIN_REQUEST_MISSED: {
                        TITLE: "Missed Call Request",
                        DESCRIPTION: "The call request from {{user}} was missed."
                    },
                    AUDIO_CALL_MISSED: {
                        TITLE: "Missed Voice Call",
                        DESCRIPTION: "You missed a voice call request from {{user}}."
                    },
                    VIDEO_CALL_MISSED: {
                        TITLE: "Missed Video Call",
                        DESCRIPTION: "You missed a video call request from {{user}}."
                    }
                },

                //HOME
                HOME: {
                    HERO: {
                        TITLE: "A Taste You Won't Forget",
                        SUB_TITLE: "Chat and Flirt",
                        BOX_LEFT: {
                            TEXT: "Only real people here",
                            SUB_TEXT: "No fake profiles on Amore."
                        },
                        BOX_RIGHT: {
                            TEXT: "Meet, Talk, Connect",
                            SUB_TEXT: "The gateway to love"
                        }
                    },
                    INFO: {
                        TITLE: "Over 40,000 <pink>users</pink>",
                        SUB_TITLE: "So Much <pink>Moreeeeeee</pink> Than Dating",
                        TEXT: "Amore is not just a dating app; it's a unique platform where you can build meaningful connections, engage in genuine conversations, and form real bonds. Discover new friendships, find your love, and step into experiences that add value to your life!",
                        INFO_BUTTON: "Sign Up Now"
                    },
                    INFO_IMAGES: {
                        TITLE: "Chat with completely real people"
                    },
                    INTRODUCTION: {
                        TITLE: "We’re Different from Other Dating Apps",
                        SUB_TITLE: "Because",
                        TEXT: "Amore doesn’t just focus on matches; it aims to build meaningful and long-lasting relationships. With its user-friendly design, safe environment, and welcoming community, everything is ready here for you to find the love and friendship you’re looking for!"
                    },
                    FOOTER: {
                        TEXT: "Our app",
                        SUB_TEXT: "is waiting for you to download now!",
                        APPLE_BUTTON: "Download On The",
                        GOOGLE_BUTTON: "Get It On"
                    }
                },

                //HEADER
                HEADER: {
                    REGISTER_BUTTON: "Sign Up",
                    LOGIN_BUTTON: "Start Now !",
                    CONTINUE_BUTTON: "Continue !",
                    AMORE_LINK_1: "About Amore",
                    AMORE_LINK_2: "What is Amore?"
                },

                //REGISTER
                REGISTER: {
                    PHONE: {
                        TITLE: "Enter Your Phone Number",
                        INFO: "We'll send you a one-time password.",
                        ERROR_TEXT: "Please enter your phone number !",
                        INVALID_PHONE_ERROR: "The phone number you entered is invalid.",
                        WAIT_NEW_CODE_ERROR: "You can request a new code after {{otpCooldown}} seconds."
                    },
                    VERIFY: {
                        TITLE: "Enter Verification Code",
                        INFO: "We sent a 4-digit code to your phone. Please enter it below to verify.",
                        ERROR_TEXT: "Please enter the verification code.",
                        SEND_AGAIN_BUTTON: "Send Again"
                    },
                    USERNAME: {
                        TITLE: "What's your name?",
                        INFO: "Your nickname might be great, but we need your real name to identify you correctly.",
                        INPUT_PLACEHOLDER: "Enter your name",
                        ERROR_TEXT: "You must enter your name to continue !",
                        SUB_ERROR_TEXT: "Your name must contain at least three letters !"
                    },
                    BIRTH_DATE: {
                        TITLE: "What's your date of birth?",
                        INFO: "We need to know your date of birth.",
                        DAY_PLACEHOLDER: "DD",
                        MONTH_PLACEHOLDER: "MM",
                        YEAR_PLACEHOLDER: "YYYY",
                        ERROR_TEXT: "Please enter your date of birth in the fields!",
                        SUB_ERROR_TEXT: "Please enter a valid date!"
                    },
                    GENDER: {
                        TITLE: "What is your gender?",
                        MALE: "Male",
                        FEMALE: "Female",
                        INFO: "You can update this information anytime later."
                    },
                    INTERESTS: {
                        TITLE: "What are your interests?",
                        INFO: "Sharing your interests helps us match you with people who share the same passions.",
                        ERROR_TEXT: "You must select at least three hobbies!",
                        INTEREST_ITEMS: {
                            INTEREST_NATURE: "Nature",
                            INTEREST_ARCHITECTURE: "Architecture",
                            INTEREST_ANIMALS: "Animals",
                            INTEREST_GYM_FITNESS: "Gym and Fitness",
                            INTEREST_FASHION: "Fashion",
                            INTEREST_LANGUAGE: "Language",
                            INTEREST_BOOK: "Books",
                            INTEREST_FOOTBALL: "Football",
                            INTEREST_DANCING: "Dancing",
                            INTEREST_GAMING: "Gaming",
                            INTEREST_PAINTING: "Painting",
                            INTEREST_PHOTOGRAPHY: "Photography",
                            INTEREST_MUSIC: "Music",
                            INTEREST_WRITING: "Writing",
                            INTEREST_PEOPLE: "People",
                            INTEREST_MOVIE: "Movies"
                        }
                    },
                    PHOTO: {
                        TITLE: "Upload Photo",
                        SUB_TITLE: "Profile Picture",
                        INFO: "Upload a clear photo to complete your profile and help others get to know you better.",
                        ERROR_TEXT: "Please add a photo!"
                    },
                    LOCATION: {
                        TITLE: "Where do you live?",
                        STATE_PLACEHOLDER: "Select City",
                        INFO: "Help us provide you with the best experience by selecting your country and city.",
                        ERROR_TEXT: "Please select your location!"
                    },
                    CONTINUE_BUTTON: "Continue",
                    COMPLETE_BUTTON: "Complete",
                    SEND_BUTTON: "Send",
                    VERIFY_BUTTON: "Verify",
                    SEND_AGAIN_BUTTON: "Send Again"
                },

                //GIFTS
                GIFTS: {
                    CATEGORIE_TITLES:{
                        ALL:"All Contents",
                        SPECIAL:"Special",
                        FLOWERS:"FLowers",
                        ROMANCE:"Romance",
                        DRINKS:"Drinks",
                        HEARTS:"Hearts",
                        CELEBRATION:"Celebration"
                    }  
                },

                // STATUS
                STATUS: {
                    ONLINE: "Online",
                    OFFLINE: "Offline"
                },

                // GENDERS
                GENDER: {
                    FEMALE: "Female",
                    MALE: "Male"
                },

                PURCHASE: {
                    JETON: "Token",
                    DISCOUNT: "Discount",
                    NO_DISCOUNT: "No Discount",
                    LIMITED_TIME: "Limited Time",
                    SPECIAL_OFFER: "Exclusive for You",
                    WEEKLY: "Weekly",
                    MONTHLY: "Monthly"
                },

                PERMISSION: {
                    LOCATION_BANNER_TEXT: "Enable location permission for a better experience",
                    LOCATION_POPUP_TITLE: "Allow Location",
                    LOCATION_POPUP_TEXT: "To show you the best matches, you must enable location access in settings and then refresh the page.",
                    NOTIFICATION_BANNER_TEXT: "Turn on your notifications for a better experience",
                    NOTIFICATION_POPUP_TITLE: "Allow Notifications",
                    NOTIFICATION_POPUP_TEXT: "To avoid missing new matches and messages, you should turn on notifications from settings and then refresh the page.",
                },
                // DASHBOARD
                DASHBOARD: {

                    TITLES: {
                        NOTIFICATIONS_TITLE: "Notifications",
                        QUICK_MESSAGES: "Quick Messages",
                        EMPTY_MESSAGES: "Message box is empty.",
                        LIKES: "Likes",
                        EMPTY_LIKES: "You haven't received any likes yet.",
                        SEE_ALL: "See All",
                        EMPTY_NOTIFICATIONS_TITLE: "I Feel So Alone Here !",
                        EMPTY_NOTIFICATIONS_SUB_TITLE: "Start interacting and help me out.",
                        FILTER_CHANGE_TITLE: "No Users Found with the Searched Criteria!",
                        FILTER_CHANGE_SUB_TITLE: "You should try changing the filter options."
                    },

                    MARKET: {
                        PREMIUM_SUBSCRIPTION_HEADER: {
                            TITLE: "Premium Membership",
                            SUB_TITLE: "Enjoy the benefits of being a premium member.",
                            BUTTON_TEXT: "Get Started Now"
                        },
                        FOOTER_TEXT: "More discounts on larger packages! The more tokens you purchase, the more discount you get."
                    },

                    PREMIUM_SUBSCRIPTION: {
                        TITLE: "Premium World",
                        SUB_TITLE: "Welcome",
                        FOOTER_TEXT: "Which premium option suits you better?",
                        CHOOSE_PLAN_BUTTON: "Choose plan"
                    },

                    SWIPE: {
                        SEND_MESSAGE_BUTTON: "Send Message",
                        USERINFO: {
                            BIO_TITLE: "Who Am I ?",
                            NO_BIO_TEXT: "This user has no biography.",
                            INTEREST_TITLE: "My Interests",
                            NO_INTEREST_TEXT: "This user's interests have not been added yet.",
                            SOCIAL_PLATFORM_TITLE: "My Social Platforms",
                            NO_JOB_TITLE: "No Job Information",
                            NO_SCOOL_TITLE: "No School Information",
                            AGE: "{{age}} Years Old"
                        }
                    },

                    PAYMENT: {
                        CARD_USER_NAME_TITLE: "Name on Card",
                        CARD_USER_NAME_SUB_TITLE: "Enter the name on the card",
                        CARD_USER_NAME_PLACEHOLDER: "Cardholder Name",
                        CARD_NUMBER_TITLE: "Card Number",
                        CARD_NUMBER_SUB_TITLE: "Enter the 16-digit card number",
                        CARD_NUMBER_PLACEHOLDER: "Card Number",
                        CARD_CVV_TITLE: "CVV Number",
                        CARD_CVV_SUB_TITLE: "Enter the 3-digit number",
                        CARD_CVV_PLACEHOLDER: "CVV",
                        CARD_EXPIRATION_DATE_TITLE: "Expiration Date",
                        CARD_EXPIRATION_DATE_SUB_TITLE: "Enter the expiration date",
                        CARD_EXPIRATION_DATE_YEAR_PLACEHOLDER: "YY",
                        CARD_EXPIRATION_DATE_MONTH_PLACEHOLDER: "MM",

                        CHECKOUT: {
                            NAME_SURNAME_PLACEHOLDER: "Full Name",
                            TITLE: "Checkout Information",
                            TOTAL: "Total Amount"
                        },
                    },

                }

            }
        },

        fr: {
            translation: {

                ERRORS: {
                    UNEXPECTED_ERROR: {
                        TITLE: "Une erreur inattendue s'est produite !",
                        SUB_TITLE: "Veuillez réessayer plus tard."
                    }
                },

                PREMIUM_SUBSCRIPTION: {
                    PREMIUM_FEATURE_TITLE_1: "Voir qui vous aime",
                    PREMIUM_FEATURE_TEXT_1: "Passez à Premium pour voir vos correspondances. Découvrez qui est intéressé par vous instantanément !",
                    BE_PREMIUM: "Devenir Premium",
                    PREMIUM_SUBSCRIPTION_BOX_TITLE: "Obtenez Premium Maintenant",
                    SUBSCRIPTION: "Abonnement",
                    TITLE: "Abonnement Premium",
                    MONTHLY_SUBSCRIPTION: "Abonnement Mensuel",
                    WEEKLY_SUBSCRIPTION: "Abonnement Hebdomadaire",
                    MONTHLY_TOTAL: "Total pour le Mois",
                },

                DATE: {
                    MONTH: "Mois",
                    WEEK: "Semaine"
                },

                BUTTONS: {
                    SEND_MESSAGE_BUTTON: "Envoyer un Message",
                    PAY_BUTTON: "Effectuer le Paiement"
                },

                USER_CARD: {
                    ONLY_PREMIUM_USERS: "Membres Premium Uniquement"
                },

                LIMITED_OFFER: {
                    TITLE: "Offre Limitée",
                    SUB_TITLE: "Sélectionnez un pack de jetons pour gagner des bonus et débloquer de nouvelles fonctionnalités !",
                    BONUSES: {
                        TITLE: "Bonus que vous recevrez",
                        PREMIUM_ACCOUNT: "Compte Premium",
                        MORE_MATCHES: "Plus de Correspondances",
                        FEATURED: "Profil Mis en Avant",
                        MORE_LIKE: "Obtenez Plus de Likes"
                    },
                    JETONS: {
                        JETON: "Jeton",
                        TITLE: "Sélectionnez un pack de jetons à débloquer",
                        TIME: "Par semaine"
                    },
                    NAVIGATE_MARKET: "Voir Tous les Jetons",
                    NAVIGATE_SUBSCRIPTIONS: "Voir Tous les Abonnements"
                },

                LOGIN_POPUP: {
                    TITLE: "Commencez Maintenant !",
                    SUB_TITLE: "Inscrivez-vous pour envoyer votre message",
                    TEXT: "Si vous cherchez l'amour, inscrivez-vous",
                    BUTTON_TEXT: "Continuer avec le Téléphone"
                },

                LOGOUT: {
                    TITLE: "Déconnexion",
                    TEXT: "Si vous vous déconnectez, votre compte sera fermé dans le navigateur. Êtes-vous sûr de vouloir vous déconnecter ?",
                    LOGOUT_BUTTON: "Déconnexion",
                    CLOSE_BUTTON: "Fermer"
                },

                //FILTER
                FILTER: {
                    NAME: "Nom",
                    NAME_PLACEHOLDER: "Commencez à rechercher un utilisateur !",
                    GENDER: "Genre",
                    AGE: "Âge",
                    DISTANCE: "Distance",
                    USER_STATUS: "Statut de l'Utilisateur",
                    FILTER_BUTTON: 'Filtrer',
                    HIDE_BUTTON: "Masquer",
                    RESET_BUTTON: "Réinitialiser",
                    APPLY_FILTER_BUTTON: "Appliquer le Filtre"
                },

                // ROUTE NAMES
                ROUTE_NAMES: {
                    MAIN_PAGE: 'Accueil',
                    NOTIFICATIONS: 'Notifications',
                    DISCOVER: 'Découvrir',
                    MATCHES: 'Correspondances',
                    MESSAGES: 'Messages',
                    MARKET: 'Acheter des Jetons',
                    PREMIUM_SUBSCRIPTION: 'Devenir Premium',
                    PROFILE: 'Profil',
                    VISITS: "Visites",
                    LIKES: "Likes",
                },

                //NOTIFICATIONS
                NOTIFICATION: {
                    QUICK_NOTIFICATIONS: {
                        TITLE: "{{user}}",
                        TEXT: "{{message}}",
                        LIKE: "<span>{{user}}</span> vous a aimé!",
                        CALL: "{{user}} vous a appelé 📞",
                        VIDEO_CALL_REQUEST: "{{user}} a fait un appel vidéo 🎥",
                        AUDIO: "{{user}} a envoyé un message vocal 🎵",
                        IMAGE: "{{user}} a envoyé une photo 📷",
                        GIFT: "{{user}} a envoyé un cadeau 🎁",
                    },
                    MESSAGE: {
                        TITLE: "{{user}}",
                        DESCRIPTION: "{{message}}"
                    },
                    VISIT: {
                        TITLE: "{{user}} a visité votre profil 👀",
                        DESCRIPTION: "Votre profil a attiré l'attention de quelqu'un ! Consultez votre profil maintenant pour rencontrer votre visiteur."
                    },
                    VISIT_FREE: {
                        TITLE: "Quelqu'un a visité votre profil 👀",
                        DESCRIPTION: "Votre profil a attiré l'attention de quelqu'un ! Consultez votre profil maintenant pour rencontrer votre visiteur."
                    },
                    LIKE: {
                        TITLE: "{{user}} vous a aimé 😍",
                        DESCRIPTION: "Bonne nouvelle ! Vous avez peut-être trouvé votre âme sœur. Cliquez maintenant pour voir qui vous a aimé !"
                    },
                    LIKE_FREE: {
                        TITLE: "Quelqu'un vous a aimé 😍",
                        DESCRIPTION: "Bonne nouvelle ! Vous avez peut-être trouvé votre âme sœur. Cliquez maintenant pour voir qui vous a aimé !"
                    },
                    SUPERLIKE: {
                        TITLE: "Quelqu'un de spécial vous a super aimé ! Cliquez maintenant pour découvrir cette personne spéciale.",
                        DESCRIPTION: "{{user}} vous a super aimé 🌟"
                    },
                    GIFT: {
                        TITLE: "Cadeau",
                        DESCRIPTION: "{{user}} vous a envoyé un cadeau."
                    },
                    CONSUMABLE: {
                        TITLE: "Jetons Chargés",
                        DESCRIPTION: "Les jetons ont été chargés avec succès."
                    },
                    SUPPORT_ANSWER: {
                        TITLE: "Système de Support",
                        DESCRIPTION: "Votre demande de support a reçu une réponse. ✅"
                    },
                    SUPPORT_REQUEST: {
                        TITLE: "Demande de Support",
                        DESCRIPTION: "Votre demande de support a reçu une réponse. ✅"
                    },
                    GIFT_CREDIT: {
                        TITLE: "Jetons Offerts",
                        DESCRIPTION: "{{user}} vous a offert {{jetonQuantity}} jetons."
                    },
                    MATCH: {
                        TITLE: "Vous avez matché avec {{user}} 💖",
                        DESCRIPTION: "Bonne nouvelle ! Vous avez matché avec {{user}}. Cliquez maintenant pour commencer à discuter avec cette personne spéciale !"
                    },
                    CALL_ADMIN_REQUEST_STARTED: {
                        TITLE: "Nouvelle Demande d'Appel",
                        DESCRIPTION: "Une nouvelle demande d'appel a été reçue de {{user}}."
                    },
                    CALL_ADMIN_REQUEST_MISSED: {
                        TITLE: "Demande d'Appel Manquée",
                        DESCRIPTION: "La demande d'appel de {{user}} a été manquée."
                    },
                    AUDIO_CALL_MISSED: {
                        TITLE: "Appel Vocal Manqué",
                        DESCRIPTION: "Vous avez manqué une demande d'appel vocal de {{user}}."
                    },
                    VIDEO_CALL_MISSED: {
                        TITLE: "Appel Vidéo Manqué",
                        DESCRIPTION: "Vous avez manqué une demande d'appel vidéo de {{user}}."
                    }
                },

                //HOME
                HOME: {
                    HERO: {
                        TITLE: "Un goût que vous n'oublierez pas",
                        SUB_TITLE: "Discutez et Flirtez",
                        BOX_LEFT: {
                            TEXT: "Seulement des vraies personnes ici",
                            SUB_TEXT: "Aucun faux profil sur Amore."
                        },
                        BOX_RIGHT: {
                            TEXT: "Rencontrez, Parlez, Connectez-vous",
                            SUB_TEXT: "La porte d'entrée vers l'amour"
                        }
                    },
                    INFO: {
                        TITLE: "Plus de 40 000 <pink>utilisateurs</pink>",
                        SUB_TITLE: "Beaucoup <pink>Plus</pink> Que du Rencontre",
                        TEXT: "Amore n'est pas seulement une application de rencontre ; c'est une plateforme unique où vous pouvez créer des connexions significatives, engager des conversations authentiques et former des liens réels. Découvrez de nouvelles amitiés, trouvez votre amour et vivez des expériences qui ajoutent de la valeur à votre vie !",
                        INFO_BUTTON: "Inscrivez-vous Maintenant"
                    },
                    INFO_IMAGES: {
                        TITLE: "Discutez avec des personnes complètement réelles"
                    },
                    INTRODUCTION: {
                        TITLE: "Nous sommes Différents des Autres Applications de Rencontre",
                        SUB_TITLE: "Parce que",
                        TEXT: "Amore ne se concentre pas seulement sur les correspondances ; il vise à construire des relations significatives et durables. Avec son design convivial, son environnement sécurisé et sa communauté accueillante, tout est prêt ici pour que vous trouviez l'amour et l'amitié que vous recherchez !"
                    },
                    FOOTER: {
                        TEXT: "Notre application",
                        SUB_TEXT: "vous attend pour être téléchargée maintenant !",
                        APPLE_BUTTON: "Télécharger sur",
                        GOOGLE_BUTTON: "Disponible sur"
                    }
                },

                //HEADER
                HEADER: {
                    REGISTER_BUTTON: "S'inscrire",
                    LOGIN_BUTTON: "Commencez Maintenant !",
                    CONTINUE_BUTTON: "Continuez !",
                    AMORE_LINK_1: "À propos d'Amore",
                    AMORE_LINK_2: "Qu'est-ce qu'Amore ?"
                },

                //REGISTER
                REGISTER: {
                    PHONE: {
                        TITLE: "Entrez votre numéro de téléphone",
                        INFO: "Nous vous enverrons un mot de passe à usage unique.",
                        ERROR_TEXT: "Veuillez entrer votre numéro de téléphone !",
                        INVALID_PHONE_ERROR: "Le numéro de téléphone que vous avez entré est invalide.",
                        WAIT_NEW_CODE_ERROR: "Vous pouvez demander un nouveau code après {{otpCooldown}} secondes."
                    },
                    VERIFY: {
                        TITLE: "Entrez le code de vérification",
                        INFO: "Nous avons envoyé un code à 4 chiffres sur votre téléphone. Veuillez l'entrer ci-dessous pour vérifier.",
                        ERROR_TEXT: "Veuillez entrer le code de vérification.",
                        SEND_AGAIN_BUTTON: "Envoyer à nouveau"
                    },
                    USERNAME: {
                        TITLE: "Quel est votre nom ?",
                        INFO: "Votre pseudo pourrait être génial, mais nous avons besoin de votre vrai nom pour vous identifier correctement.",
                        INPUT_PLACEHOLDER: "Entrez votre nom",
                        ERROR_TEXT: "Vous devez entrer votre nom pour continuer !",
                        SUB_ERROR_TEXT: "Votre nom doit contenir au moins trois lettres !"
                    },
                    BIRTH_DATE: {
                        TITLE: "Quelle est votre date de naissance ?",
                        INFO: "Nous avons besoin de connaître votre date de naissance.",
                        DAY_PLACEHOLDER: "JJ",
                        MONTH_PLACEHOLDER: "MM",
                        YEAR_PLACEHOLDER: "AAAA",
                        ERROR_TEXT: "Veuillez entrer votre date de naissance dans les champs !",
                        SUB_ERROR_TEXT: "Veuillez entrer une date valide !"
                    },
                    GENDER: {
                        TITLE: "Quel est votre genre ?",
                        MALE: "Homme",
                        FEMALE: "Femme",
                        INFO: "Vous pouvez mettre à jour cette information à tout moment plus tard."
                    },
                    INTERESTS: {
                        TITLE: "Quels sont vos centres d'intérêt ?",
                        INFO: "Partager vos centres d'intérêt nous aide à vous faire correspondre avec des personnes qui partagent les mêmes passions.",
                        ERROR_TEXT: "Vous devez sélectionner au moins trois hobbies !",
                        INTEREST_ITEMS: {
                            INTEREST_NATURE: "Nature",
                            INTEREST_ARCHITECTURE: "Architecture",
                            INTEREST_ANIMALS: "Animaux",
                            INTEREST_GYM_FITNESS: "Gym et Fitness",
                            INTEREST_FASHION: "Mode",
                            INTEREST_LANGUAGE: "Langue",
                            INTEREST_BOOK: "Livres",
                            INTEREST_FOOTBALL: "Football",
                            INTEREST_DANCING: "Danse",
                            INTEREST_GAMING: "Jeux",
                            INTEREST_PAINTING: "Peinture",
                            INTEREST_PHOTOGRAPHY: "Photographie",
                            INTEREST_MUSIC: "Musique",
                            INTEREST_WRITING: "Écriture",
                            INTEREST_PEOPLE: "Personnes",
                            INTEREST_MOVIE: "Films"
                        }
                    },
                    PHOTO: {
                        TITLE: "Téléchargez une photo",
                        SUB_TITLE: "Photo de profil",
                        INFO: "Téléchargez une photo claire pour compléter votre profil et aider les autres à mieux vous connaître.",
                        ERROR_TEXT: "Veuillez ajouter une photo !"
                    },
                    LOCATION: {
                        TITLE: "Où habitez-vous ?",
                        STATE_PLACEHOLDER: "Sélectionnez une ville",
                        INFO: "Aidez-nous à vous fournir la meilleure expérience en sélectionnant votre pays et votre ville.",
                        ERROR_TEXT: "Veuillez sélectionner votre localisation !"
                    },
                    CONTINUE_BUTTON: "Continuer",
                    COMPLETE_BUTTON: "Terminer",
                    SEND_BUTTON: "Envoyer",
                    VERIFY_BUTTON: "Vérifier",
                    SEND_AGAIN_BUTTON: "Envoyer à nouveau"
                },
                // STATUS
                STATUS: {
                    ONLINE: "En ligne",
                    OFFLINE: "Hors ligne"
                },

                // GENDERS
                GENDER: {
                    FEMALE: "Femme",
                    MALE: "Homme"
                },

                PURCHASE: {
                    JETON: "Jeton",
                    DISCOUNT: "Réduction",
                    NO_DISCOUNT: "Pas de Réduction",
                    LIMITED_TIME: "Temps Limité",
                    SPECIAL_OFFER: "Exclusif pour Vous",
                    WEEKLY: "Hebdomadaire",
                    MONTHLY: "Mensuel"
                },


                // DASHBOARD
                DASHBOARD: {
                    TITLES: {
                        QUICK_MESSAGES: "Messages Rapides",
                        EMPTY_MESSAGES: "La boîte de messages est vide.",
                        LIKES: "Likes",
                        EMPTY_LIKES: "Vous n'avez pas encore reçu de likes.",
                        SEE_ALL: "Voir Tout",
                        EMPTY_NOTIFICATIONS_TITLE: "Je me sens si seul ici",
                        EMPTY_NOTIFICATIONS_SUB_TITLE: "Commencez à interagir et aidez-moi.",
                        FILTER_CHANGE_TITLE: "Aucun utilisateur trouvé avec les critères recherchés !",
                        FILTER_CHANGE_SUB_TITLE: "Vous devriez essayer de modifier les options de filtre."
                    },

                    MARKET: {
                        PREMIUM_SUBSCRIPTION_HEADER: {
                            TITLE: "Adhésion Premium",
                            SUB_TITLE: "Profitez des avantages d'être membre premium.",
                            BUTTON_TEXT: "Commencez Maintenant"
                        },
                        FOOTER_TEXT: "Plus de réductions sur les packs plus importants ! Plus vous achetez de jetons, plus vous obtenez de réduction."
                    },

                    PREMIUM_SUBSCRIPTION: {
                        TITLE: "Monde Premium",
                        SUB_TITLE: "Bienvenue",
                        FOOTER_TEXT: "Quelle option premium vous convient le mieux ?",
                        CHOOSE_PLAN_BUTTON: "Choisir un plan"
                    },

                    SWIPE: {
                        SEND_MESSAGE_BUTTON: "Envoyer un Message",
                        USERINFO: {
                            BIO_TITLE: "Qui suis-je ?",
                            NO_BIO_TEXT: "Cet utilisateur n'a pas de biographie.",
                            INTEREST_TITLE: "Mes Centres d'Intérêt",
                            NO_INTEREST_TEXT: "Les centres d'intérêt de cet utilisateur n'ont pas encore été ajoutés.",
                            SOCIAL_PLATFORM_TITLE: "Mes Plateformes Sociales",
                            NO_JOB_TITLE: "Aucune Information sur le Travail",
                            NO_SCOOL_TITLE: "Aucune Information sur l'École",
                            AGE: "{{age}} Ans"
                        }
                    },

                    PAYMENT: {
                        CARD_USER_NAME_TITLE: "Nom sur la Carte",
                        CARD_USER_NAME_SUB_TITLE: "Entrez le nom sur la carte",
                        CARD_USER_NAME_PLACEHOLDER: "Nom du titulaire de la carte",
                        CARD_NUMBER_TITLE: "Numéro de Carte",
                        CARD_NUMBER_SUB_TITLE: "Entrez le numéro de carte à 16 chiffres",
                        CARD_NUMBER_PLACEHOLDER: "Numéro de Carte",
                        CARD_CVV_TITLE: "Numéro CVV",
                        CARD_CVV_SUB_TITLE: "Entrez le numéro à 3 chiffres",
                        CARD_CVV_PLACEHOLDER: "CVV",
                        CARD_EXPIRATION_DATE_TITLE: "Date d'Expiration",
                        CARD_EXPIRATION_DATE_SUB_TITLE: "Entrez la date d'expiration",
                        CARD_EXPIRATION_DATE_YEAR_PLACEHOLDER: "AA",
                        CARD_EXPIRATION_DATE_MONTH_PLACEHOLDER: "MM",

                        CHECKOUT: {
                            NAME_SURNAME_PLACEHOLDER: "Nom Complet",
                            TITLE: "Informations de Paiement",
                            TOTAL: "Montant Total"
                        },
                    },

                }

            },
        }
    }

});

export default i18n;

