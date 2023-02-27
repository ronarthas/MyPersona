import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "../locales/fr.json";
import en from "../locales/en.json";



i18n.use(initReactI18next).init({
    resources:{
        fr,
        en
    },
    lng:"fr",
    interpolation: {
        escapeValue: false // react already safes from xss
      }
})

export default i18n;