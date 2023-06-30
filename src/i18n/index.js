import {createI18n} from 'vue-i18n';
import {setStorage} from 'utils';

// default lang
import messageZh_CN from './message/zh-CN';

export const defaultLang = 'zh-CN';

const messages = {
    'zh-CN': {
        ...Object.assign({}, messageZh_CN)
    }
};

const loadedLanguages = [defaultLang];

// 生成国际化实例
const i18n = createI18n({
    silentTranslationWarn: true,
    locale: defaultLang,
    fallbackLocale: defaultLang,
    globalInjection: true,
    messages // set locale messages
});

function setI18nLanguage(lang) {
    i18n.global.locale = lang;
    // request.headers['Accept-Language'] = lang
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
}

export function loadLanguageAsync(lang = defaultLang) {
    return new Promise((resolve) => {
        // 缓存语言设置
        setStorage('app_language', lang);
        if (i18n.global.locale !== lang) {
            if (!loadedLanguages.includes(lang)) {
                return import(/* webpackChunkName: "lang-[request]" */ `./message/${lang}`).then((msg) => {
                    const locale = msg.default;
                    i18n.global.setLocaleMessage(lang, locale);
                    loadedLanguages.push(lang);
                    return setI18nLanguage(lang);
                });
            }
            return resolve(setI18nLanguage(lang));
        }
        return resolve(lang);
    });
}

export function i18nRender(...args) {
    return i18n.global.t(...args);
}

export default i18n;
