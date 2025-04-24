import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './lang_tr.json';
import en from './lang_en.json'
import fr from './lang_fr.json'

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "tr",
    resources: { tr, en, fr }
});

export default i18n;

