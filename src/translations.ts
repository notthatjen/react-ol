import i18n from 'i18next';
import * as en from './translations/en.json'
import * as es from './translations/es.json'

const resources = {
    en: {
        translation: en
    },
    es: {
        translation: es
    }
};

const t = (key: string) => {
    i18n.init({
        resources,
        lng: "en"
    });

    return i18n.t(key)
}


export default t