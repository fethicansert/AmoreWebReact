import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "tr",
    resources: {

        tr: {
            translation: {

                //NOTIFICATIONS
                NOTIFICATION: {
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

                //STATUS
                STATUS: {
                    ONLINE: "Çevrim içi",
                    OFFLINE: "Çevrim dışı"
                },

                //GENDERS
                GENDER: {
                    FEMALE: "Kadın",
                    MALE: "Erkek"
                },

                //DASHBOARD
                DASHBOARD: {
                    TITLES: {
                        QUICK_MESSAGES: "Hızlı Mesajlar",
                        LIKES: "Beğeniler",
                        SEE_ALL: "Tümünü Gör"
                    },

                    SWIPE: {
                        SEND_MESSAGE_BUTTON: "Mesaj Gönder",
                        USERINFO: {
                            TITLE: "Ben Kimim?",
                            NO_JOB_TITLE: "Meslek Bilgisi Yok",
                            NO_SCOOL_TITLE: "Okul Bilgisi Yok",
                            AGE: "{{age}} Yaşında"
                        }
                    }
                }
            }
        },
        en: {
            translation: {

                //NOTIFICATIONS
                NOTIFICATION: {
                    MESSAGE: {
                        TITLE: "{{user}}",
                        DESCRIPTION: "{{message}}"
                    },
                    VISIT_FREE: {
                        TITLE: "Someone visited your profile 👀",
                        DESCRIPTION: "Your profile caught someone's attention! Check your profile now to meet your visitor."
                    },
                    LIKE_FREE: {
                        TITLE: "Someone liked you 😍",
                        DESCRIPTION: "Great news! Maybe you've found your soulmate. Click now to see who liked you!"
                    },
                    GIFT: {
                        TITLE: "Gift",
                        DESCRIPTION: "{{user}} sent you a gift."
                    },
                    SUPERLIKE: {
                        TITLE: "Super Like !",
                        DESCRIPTION: "Someone special super liked you! Click now to discover this special person."
                    },
                    CONSUMABLE: {
                        TITLE: "Token Loaded",
                        DESCRIPTION: "Tokens have been successfully loaded."
                    },
                    SUPPORT_ANSWER: {
                        TITLE: "Support System",
                        DESCRIPTION: "Your support request has been answered. ✅"
                    },
                    GIFT_CREDIT: {
                        TITLE: "Gift Tokens",
                        DESCRIPTION: "{{user}} has gifted you {{jetonQuantity}} tokens."
                    },
                    MATCH: {
                        TITLE: "You matched with {{user}}",
                        DESCRIPTION: "Great news! You matched with {{user}}. Click now to start chatting with this special person!"
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

                // DASHBOARD
                DASHBOARD: {
                    TITLES: {
                        QUICK_MESSAGES: "Quick Messages",
                        LIKES: "Likes",
                        SEE_ALL: "See All"
                    },

                    SWIPE: {
                        SEND_MESSAGE_BUTTON: "Send Message",
                        USERINFO: {
                            TITLE: "Who Am I?",
                            NO_JOB_TITLE: "No Job Information",
                            NO_SCOOL_TITLE: "No School Information",
                            AGE: "{{age}} Years Old"
                        }
                    }
                }

            }
        },

        ar: {
            translation: {

                // HOME
                HOME: {
                    HERO: {
                        TITLE: "سيظل طعمه في فمك",
                        SUB_TITLE: "دردش وتواعد",
                        BOX_LEFT: {
                            TEXT: "أشخاص حقيقيون فقط",
                            SUB_TEXT: "في Amore، لا مكان للحسابات المزيفة."
                        },
                        BOX_RIGHT: {
                            TEXT: "تعرف، تحدث، قابل",
                            SUB_TEXT: "باب إلى الحب"
                        }
                    },
                    INFO: {
                        TITLE: "أكثر من 40,000 <pink>مستخدم</pink>",
                        SUB_TITLE: "أكثر من مجرد <pink>تعارف</pink>",
                        TEXT: "Amore ليس مجرد تطبيق تعارف، بل هو منصة خاصة يمكنك من خلالها بناء علاقات ذات معنى، محادثات حميمة، وروابط حقيقية. اكتشف صداقات جديدة، وابحث عن حبك، واتخذ خطوات نحو تجارب تضيف قيمة لحياتك!",
                        INFO_BUTTON: "سجل الآن"
                    },
                    INFO_IMAGES: {
                        TITLE: "الدردشة مع أشخاص حقيقيين فقط"
                    },
                    INTRODUCTION: {
                        TITLE: "نحن مختلفون عن تطبيقات التعارف الأخرى",
                        SUB_TITLE: "لأن",
                        TEXT: "Amore لا يركز فقط على التوافقات، بل يهدف إلى بناء علاقات ذات معنى وطويلة الأمد. مع تصميمه سهل الاستخدام، وبيئته الآمنة، ومجتمعه الحميم، كل شيء هنا جاهز لكي تجد الحب والصداقة التي تبحث عنها!"
                    },
                    FOOTER: {
                        TEXT: "تطبيقنا",
                        SUB_TEXT: "لم تقم بتحميله بعد!"
                    }
                },

                // HEADER
                HEADER: {
                    REGISTER_BUTTON: "سجل",
                    LOGIN_BUTTON: "تسجيل الدخول",
                    AMORE_LINK_1: "عن Amore",
                    AMORE_LINK_2: "ما هو Amore؟"
                },

                // REGISTER
                REGISTER: {
                    USERNAME: {
                        TITLE: "ما هو اسمك؟",
                        INFO: "قد يكون لديك اسم مستعار رائع، لكننا بحاجة إلى اسمك الحقيقي لكي نتمكن من التعرف عليك بشكل صحيح.",
                        INPUT_PLACEHOLDER: "اكتب اسمك",
                        ERROR_TEXT: "يجب عليك كتابة اسمك للاستمرار",
                        SUB_ERROR_TEXT: "يجب أن يتضمن اسمك على الأقل ثلاثة أحرف!"
                    },
                    BIRTH_DATE: {
                        TITLE: "ما هو تاريخ ميلادك؟",
                        INFO: "نحتاج إلى معرفة تاريخ ميلادك",
                        DAY_PLACEHOLDER: "اليوم",
                        MONTH_PLACEHOLDER: "الشهر",
                        YEAR_PLACEHOLDER: "السنة",
                        ERROR_TEXT: "يرجى إدخال تاريخ ميلادك في الحقول!",
                        SUB_ERROR_TEXT: "يرجى إدخال تاريخ صالح!"
                    },
                    GENDER: {
                        TITLE: "ما هو جنسك؟",
                        MALE: "ذكر",
                        FEMALE: "أنثى",
                        INFO: "يمكنك تحديث هذه المعلومات في أي وقت لاحق."
                    },
                    INTERESTS: {
                        TITLE: "ما هي اهتماماتك؟",
                        INFO: "مشاركة اهتماماتك يساعدنا في مطابقتك مع الأشخاص الذين يشاركونك نفس الاهتمامات.",
                        ERROR_TEXT: "يجب عليك اختيار ثلاث اهتمامات على الأقل!",
                        INTEREST_ITEMS: {
                            INTEREST_NATURE: "طبيعة",
                            INTEREST_ARCHITECTURE: "هندسة معمارية",
                            INTEREST_ANIMALS: "حيوانات",
                            INTEREST_GYM_FITNESS: "رياضة ولياقة بدنية",
                            INTEREST_FASHION: "أزياء",
                            INTEREST_LANGUAGE: "لغة",
                            INTEREST_BOOK: "كتاب",
                            INTEREST_FOOTBALL: "كرة القدم",
                            INTEREST_DANCING: "رقص",
                            INTEREST_GAMING: "ألعاب",
                            INTEREST_PAINTING: "رسم",
                            INTEREST_PHOTOGRAPHY: "تصوير",
                            INTEREST_MUSIC: "موسيقى",
                            INTEREST_WRITING: "كتابة",
                            INTEREST_PEOPLE: "الناس",
                            INTEREST_MOVIE: "أفلام"
                        }
                    },
                    PHOTO: {
                        TITLE: "رفع صورة",
                        SUB_TITLE: "صورة الملف الشخصي",
                        INFO: "أكمل ملفك الشخصي ورفع صورة واضحة لكي يتمكن الآخرون من التعرف عليك بشكل أفضل.",
                        ERROR_TEXT: "يرجى إضافة صورة!"
                    },
                    LOCATION: {
                        TITLE: "أين تعيش؟",
                        STATE_PLACEHOLDER: "اختر المدينة",
                        INFO: "ساعدنا في تقديم أفضل تجربة لك عن طريق اختيار البلد والمدينة التي تعيش فيها."
                    },
                    CONTINUE_BUTTON: "استمر",
                    COMPLETE_BUTTON: "أكمل"
                }
            }
        }



    }

});

export default i18n;