import Vue from 'vue';
import MultiLanguage from 'vue-multilanguage/src/vue-multilanguage.js';

Vue.use(MultiLanguage, {
    default: 'en',
    en: {
        hi: 'Hello',
        welcome: 'Welcome, {name}'
    },
    pt: {
        hi: 'Ola',
        welcome: 'Bem-vindo, {name}'
    }
});
