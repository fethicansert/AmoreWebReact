import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "tr",
    resources: {
        tr: {

            translation: {

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


                home: {
                    hero: {
                        title: "Tadı Damağında Kalacak",
                        subTitle: "Sohbet Et ve Flörtleş",
                        boxLeft: {
                            text: "Sadece gerçek insanlar",
                            subText: "Amore’da sahte profillere yer yok."
                        },
                        boxRight: {
                            text: "Tanış, Konuş, Görüş",
                            subText: "Aşka açılan kapı"
                        }
                    },
                    info: {
                        title: "40.000’dan fazla <pink>kullanıcı</pink>",
                        subTitle: "Dating’den <pink>Çooooook</pink> Daha Fazlası",
                        text: 'Amore, sadece bir dating uygulaması değil; anlamlı ilişkiler, samimi sohbetler ve gerçek bağlar kurabileceğiniz özel bir platform. Yeni arkadaşlıklar keşfedin, sevginizi bulun ve hayatınıza değer katacak deneyimlere adım atın!',
                        infoButton: "Hemen Kaydol",

                    },
                    infoImages: {
                        title: "Tamamen gerçek insanlarla sohbet et",
                    },
                    introduction: {
                        title: "Diğer Dating’lerden Farklıyız",
                        subTitle: "Çünkü",
                        text: "Amore, sadece eşleşmeleri değil, anlamlı ve uzun soluklu ilişkiler kurmayı hedefler. Kullanıcı dostu tasarımı, güvenli ortamı ve samimi topluluğu ile burada aradığınız sevgi ve dostluğu bulmanız için her şey hazır!"
                    },

                    footer: {
                        text: "Uygulamamızı",
                        subText: "Indirmediniz mi !",
                        appleButton: "Uygulama İndirin",
                        googleButton: "Şimdi Katıl"
                    }
                },

                header: {
                    registerButton: 'Kayıt Ol',
                    loginButton: ' Hemen Başla !',
                    continueButton: "Devam Et !",
                    amoreLink1: 'Amore Hakkında',
                    amoreLink2: "Amore Nedir ?",
                },

                register: {

                    phone: {
                        title: "Telefon Numaranı Gir",
                        info: "Sana tek seferlik şifre göndereceğiz.",
                        errorText: "Lütfen telefon numarını gir !",
                        invalidPhoneError: "Girdiğiniz telefon numarası geçersiz",
                        waitNewCodeError: "Yeni bir kod almak için {{otpCooldown}} saniye beklemeniz gerekiyor."
                    },

                    verify: {
                        title: "Doğrulama Kodunu Girin",
                        info: "Telefonunuza 4 haneli bir kod gönderdik. Lütfen doğrulamak için aşağıya girin.",
                        errorText: "Lütfen doğrulama kodunu girin.",
                        sendAgainButton: "Tekrar Gönder"
                    },

                    username: {
                        title: "İsmin ne ?",
                        info: 'Takma adın gerçekten harika olabilir, ancak seni doğru şekilde tanımlayabilmemiz için gerçek adına ihtiyacımız var.',
                        inputPlaceholder: 'İsım Yazın',
                        errorText: "Devam etmek icin ismini yazmalısın !",
                        subErrorText: "İsmin en az üç harf içermelidir !'"
                    },

                    birthDate: {
                        title: "Doğum tarihin ne ?",
                        info: "Doğum tarihinizi öğrenmemiz gerekiyor",
                        dayPlaceholder: "GG",
                        monthPlaceholder: "AA",
                        yearPlaceholder: "YYYY",
                        errorText: "Lütfen boşluklara doğum tarihini gir !",
                        subErrorText: "'Lütfen geçerli bir tarih gir !'"
                    },

                    gender: {
                        title: "Cinsiyetiniz Nedir ?",
                        male: "Erkek",
                        female: "Kadın",
                        info: "Bu bilgileri daha sonra dilediğiniz zaman güncelleyebilirsiniz."
                    },

                    interests: {
                        title: "İlgi Alanlarınız Nedir ?",
                        info: "İlgi alanlarınızı paylaşarak sizinle aynı ilgi alanlarına sahip kişilerle eşleşmemizi sağlayabilirsiniz.",
                        errorText: "En az üç hobi seçmelisin !",
                        interestItems: {
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

                    photo: {
                        title: "Fotoğraf Yükle",
                        subTitle: "Profil Fotoğrafı",
                        info: "Profilini tamamlamak ve diğer kullanıcıların seni daha iyi tanıyabilmesi için net bir fotoğraf yükle.",
                        errorText: "Lütfen fotoğraf ekleyiniz !"
                    },

                    location: {
                        title: "Nerde Yaşıyorsun ?",
                        statePlaceholder: "Şehir Seç",
                        info: "Bulunduğunuz ülke ve şehri seçerek size en uygun deneyimi sunmamıza yardımcı olun.",
                        errorText: "Lütfen konumunuzu şeçin !"
                    },

                    continueButton: "Devam Et",
                    completeButton: "Tamamla",
                    sendButton: "Gönder",
                    sendAgainButton: "Tekrar Gönder",
                    verifyButton: "Doğrula"
                }
            }
        },
        en: {
            translation: {

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
                        TITLE: "",
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

                home: {
                    hero: {
                        title: "A Taste You Won't Forget",
                        subTitle: "Chat and Flirt",
                        boxLeft: {
                            text: "Only real people here",
                            subText: "No fake profiles on Amore."
                        },
                        boxRight: {
                            text: "Meet, Talk, Connect",
                            subText: "The gateway to love"
                        }
                    },
                    info: {
                        title: "Over 40,000 <pink>users</pink>",
                        subTitle: "So Much <pink>Moreeeeeee</pink> Than Dating",
                        text: "Amore is not just a dating app; it's a unique platform where you can build meaningful connections, engage in genuine conversations, and form real bonds. Discover new friendships, find your love, and step into experiences that add value to your life!",
                        infoButton: "Sign Up Now"
                    },
                    infoImages: {
                        title: "Chat with completely real people",
                    },
                    introduction: {
                        title: "We’re Different from Other Dating Apps",
                        subTitle: "Because",
                        text: "Amore doesn’t just focus on matches; it aims to build meaningful and long-lasting relationships. With its user-friendly design, safe environment, and welcoming community, everything is ready here for you to find the love and friendship you’re looking for!"
                    },
                    footer: {
                        text: "Our app",
                        subText: "is waiting for you to download now!",
                        appleButton: "Download On The",
                        googleButton: "Get It On"
                    }
                },

                header: {
                    registerButton: 'Sign Up',
                    loginButton: 'Start Now !',
                    continueButton: "Continue !",
                    amoreLink1: 'About Amore',
                    amoreLink2: 'What is Amore?'
                },

                register: {
                    phone: {
                        title: "Enter Your Phone Number",
                        info: "We'll send you a one-time password.",
                        errorText: "Please enter your phone number !",
                        invalidPhoneError: "The phone number you entered is invalid.",
                        waitNewCodeError: "You can request a new code after {{otpCooldown}} seconds."

                    },
                    verify: {
                        title: "Enter Verification Code",
                        info: "We sent a 4-digit code to your phone. Please enter it below to verify.",
                        errorText: "Please enter the verification code.",
                        sendAgainButton: "Send Again"
                    },
                    username: {
                        title: "What's your name?",
                        info: "Your nickname might be great, but we need your real name to identify you correctly.",
                        inputPlaceholder: "Enter your name",
                        errorText: "You must enter your name to continue !",
                        subErrorText: "Your name must contain at least three letters !"
                    },

                    birthDate: {
                        title: "What's your date of birth?",
                        info: "We need to know your date of birth.",
                        dayPlaceholder: "DD",
                        monthPlaceholder: "MM",
                        yearPlaceholder: "YYYY",
                        errorText: "Please enter your date of birth in the fields!",
                        subErrorText: "Please enter a valid date!"
                    },

                    gender: {
                        title: "What is your gender?",
                        male: "Male",
                        female: "Female",
                        info: "You can update this information anytime later."
                    },

                    interests: {
                        title: "What are your interests?",
                        info: "Sharing your interests helps us match you with people who share the same passions.",
                        errorText: "You must select at least three hobbies!",
                        interestItems: {
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

                    photo: {
                        title: "Upload Photo",
                        subTitle: "Profile Picture",
                        info: "Upload a clear photo to complete your profile and help others get to know you better.",
                        errorText: "Please add a photo!"
                    },

                    location: {
                        title: "Where do you live?",
                        statePlaceholder: "Select City",
                        info: "Help us provide you with the best experience by selecting your country and city.",
                        errorText: "Please select your location!"
                    },

                    continueButton: "Continue",
                    completeButton: "Complete",
                    sendButton: "Send",
                    verifyButton: "Verify",
                    sendAgainButton: "Send Again",
                },
            }
        },

        ar: {
            translation: {
                home: {
                    hero: {
                        title: "سيظل طعمه في فمك",
                        subTitle: "دردش وتواعد",
                        boxLeft: {
                            text: "أشخاص حقيقيون فقط",
                            subText: "في Amore، لا مكان للحسابات المزيفة."
                        },
                        boxRight: {
                            text: "تعرف، تحدث، قابل",
                            subText: "باب إلى الحب"
                        }
                    },
                    info: {
                        title: "أكثر من 40,000 <pink>مستخدم</pink>",
                        subTitle: "أكثر من مجرد <pink>تعارف</pink>",
                        text: 'Amore ليس مجرد تطبيق تعارف، بل هو منصة خاصة يمكنك من خلالها بناء علاقات ذات معنى، محادثات حميمة، وروابط حقيقية. اكتشف صداقات جديدة، وابحث عن حبك، واتخذ خطوات نحو تجارب تضيف قيمة لحياتك!',
                        infoButton: "سجل الآن"
                    },
                    infoImages: {
                        title: "الدردشة مع أشخاص حقيقيين فقط",
                    },
                    introduction: {
                        title: "نحن مختلفون عن تطبيقات التعارف الأخرى",
                        subTitle: "لأن",
                        text: "Amore لا يركز فقط على التوافقات، بل يهدف إلى بناء علاقات ذات معنى وطويلة الأمد. مع تصميمه سهل الاستخدام، وبيئته الآمنة، ومجتمعه الحميم، كل شيء هنا جاهز لكي تجد الحب والصداقة التي تبحث عنها!"
                    },
                    footer: {
                        text: "تطبيقنا",
                        subText: "لم تقم بتحميله بعد!"
                    }
                },

                header: {
                    registerButton: 'سجل',
                    loginButton: 'تسجيل الدخول',
                    amoreLink1: 'عن Amore',
                    amoreLink2: "ما هو Amore؟",
                },

                register: {
                    username: {
                        title: "ما هو اسمك؟",
                        info: 'قد يكون لديك اسم مستعار رائع، لكننا بحاجة إلى اسمك الحقيقي لكي نتمكن من التعرف عليك بشكل صحيح.',
                        inputPlaceholder: 'اكتب اسمك',
                        errorText: "يجب عليك كتابة اسمك للاستمرار",
                        subErrorText: "يجب أن يتضمن اسمك على الأقل ثلاثة أحرف!"
                    },

                    birthDate: {
                        title: "ما هو تاريخ ميلادك؟",
                        info: "نحتاج إلى معرفة تاريخ ميلادك",
                        dayPlaceholder: "اليوم",
                        monthPlaceholder: "الشهر",
                        yearPlaceholder: "السنة",
                        errorText: "يرجى إدخال تاريخ ميلادك في الحقول!",
                        subErrorText: "يرجى إدخال تاريخ صالح!"
                    },

                    gender: {
                        title: "ما هو جنسك؟",
                        male: "ذكر",
                        female: "أنثى",
                        info: "يمكنك تحديث هذه المعلومات في أي وقت لاحق."
                    },

                    interests: {
                        title: "ما هي اهتماماتك؟",
                        info: "مشاركة اهتماماتك يساعدنا في مطابقتك مع الأشخاص الذين يشاركونك نفس الاهتمامات.",
                        errorText: "يجب عليك اختيار ثلاث اهتمامات على الأقل!",
                        interestItems: {
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

                    photo: {
                        title: "رفع صورة",
                        subTitle: "صورة الملف الشخصي",
                        info: "أكمل ملفك الشخصي ورفع صورة واضحة لكي يتمكن الآخرون من التعرف عليك بشكل أفضل.",
                        errorText: "يرجى إضافة صورة!"
                    },

                    location: {
                        title: "أين تعيش؟",
                        statePlaceholder: "اختر المدينة",
                        info: "ساعدنا في تقديم أفضل تجربة لك عن طريق اختيار البلد والمدينة التي تعيش فيها."
                    },

                    continueButton: "استمر",
                    completeButton: "أكمل"
                }
            }
        }

    }

});

export default i18n;