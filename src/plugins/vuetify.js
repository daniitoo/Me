import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

// Vue.use(Vuetify);
Vue.use(Vuetify, {
    iconfont: 'fa'
})


export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#d5c455",
                // primary: "#d90a2c",
                secondary: "#262626",
                texto: "#545454",

                footerTitle: "#8b8a8d",
                footerText: "#CCC9BD",

                background: "#f1f1f1",
                borde: "#ffffff",
                white: "#ffffff",
                footer: "#17161a",

                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
            },
            dark: {
                primary: "#d5c455",
                background: "#262626",
                borde: "#545454",
                footer: "#000000",
            },
        },
    },
});