/*!***************************************************
 * google-translate.js v1.0.4
 * author: Vitalii P.
 *****************************************************/
let activeLang
const googleTranslateConfig = {
    /* Original language */
    lang: "en",

    /* Если скрипт не работает или работает неправильно, раскомментируйте и укажите основной домен в свойстве domain */
    /* If the script does not work or does not work correctly, uncomment and specify the main domain in the domain property */
};

document.addEventListener("DOMContentLoaded", (event) => {
    /* Подключаем виджет google translate */
    /* Connecting the google translate widget */
    let script = document.createElement("script");
    script.src = `//translate.google.com/translate_a/element.js?cb=TranslateWidgetIsLoaded`;
    document.getElementsByTagName("head")[0].appendChild(script);
});

function TranslateWidgetIsLoaded() {
    TranslateInit(googleTranslateConfig);
}

function TranslateInit(config) {
    if (config.langFirstVisit && !Cookies.get("googtrans")) {
        /* Если установлен язык перевода для первого посещения и куки не назначены */
        /* If the translation language is installed for the first visit and cookies are not assigned */
        TranslateCookieHandler("/auto/" + config.langFirstVisit);
    }

    let code = TranslateGetCode(config);

    TranslateHtmlHandler(code);
    if (code == config.lang) {

        /* Если язык по умолчанию, совпадает с языком на который переводим, то очищаем куки */
        /* If the default language is the same as the language we are translating into, then we clear the cookies */
        TranslateCookieHandler(null, config.domain);
    }
    activeLang = config.lang
    /* Инициализируем виджет с языком по умолчанию */
    /* Initialize the widget with the default language */
    activeLang = code


    if (activeLang) {
        const attr = activeLang
        document.querySelector('.bs-c-site-sidebar__list-text--active-lang').textContent =
            attr === 'en' ? 'English' :
                attr === 'fr' ? 'France' : ''

        document.querySelector('.bs-c-site-sidebar__list-icon--active').setAttribute('src', `/images/img/${attr}.png`)
        document.querySelectorAll("[data-google-lang]").forEach(item => {
            if (item.dataset.googleLang === attr) {
                item.style.display = 'none'
            } else {
                item.style.display = 'block'
            }
        })
    }
    new google.translate.TranslateElement({
        pageLanguage: config.lang,
    });

    /* Вешаем событие  клик на флаги */
    /* Assigning a handler to the flags */
    TranslateEventHandler("click", "[data-google-lang]", function (e) {
        activeLang = e.getAttribute("data-google-lang")
        TranslateCookieHandler(
            "/" + config.lang + "/" + e.getAttribute("data-google-lang"),
            config.domain, e.getAttribute("data-google-lang")
        );
        /* Перезагружаем страницу */
        /* Reloading the page */
        window.location.reload();
    });
}

function TranslateGetCode(config) {
    /* Если куки нет, то передаем дефолтный язык */
    /* If there are no cookies, then we pass the default language */
    let lang =
        Cookies.get("googtrans") != undefined && Cookies.get("googtrans") != "null"
            ? Cookies.get("googtrans")
            : config.lang;
    return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain, attr) {
    /* Записываем куки /язык_который_переводим/язык_на_который_переводим */
    /* Writing down cookies /language_for_translation/the_language_we_are_translating_into */
    Cookies.set("googtrans", val);
    Cookies.set("googtrans", val, {
        domain: "." + document.domain,
    });

    if (domain == "undefined") return;
    /* записываем куки для домена, если он назначен в конфиге */
    /* Writing down cookies for the domain, if it is assigned in the config */
    Cookies.set("googtrans", val, {
        domain: domain,
    });

    Cookies.set("googtrans", val, {
        domain: "." + domain,
    });
    if (activeLang) {

        const attr = activeLang
        document.querySelector('.bs-c-site-sidebar__list-text--active-lang').textContent =
            attr === 'en' ? 'English' :
                attr === 'fr' ? 'France' : ''
        document.querySelector('.bs-c-site-sidebar__list-icon--active').setAttribute('src', `/images/img/${attr}.png`)
        document.querySelectorAll("[data-google-lang]").forEach(item => {
            if (item.dataset.googleLang === attr) {
                item.style.display = 'none'
            } else {
                item.style.display = 'block'
            }
        })
    }
}

function TranslateEventHandler(event, selector, handler) {
    document.addEventListener(event, function (e) {
        let el = e.target.closest(selector);
        if (el) handler(el);
    });
}

function TranslateHtmlHandler(code) {
    /* Получаем язык на который переводим и производим необходимые манипуляции с DOM */
    /* We get the language to which we translate and produce the necessary manipulations with DOM */
    if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
        document
            .querySelector('[data-google-lang="' + code + '"]')
            .classList.add("language__img_active");
    }
}