import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        workstate: [{
               title: "GDLWebCam",
                desc: "Identity, Mockup",
                img: false,
                text: false,
                description: "Plastic Credit Card Portfolio We’ve created a unique visual system and strategy across the wide existing spectrum of visible mobile applications and found yourself in a wide, straggling with wainscots.",
                characteristics: {
                    Strategy: ['Brand Strategy', 'UX Strategy'],
                    Design: ["UI/UX Design", "Art Direction"],
                    Client: ["Envato"],
                },
                task: "Rebuild a unified visual system for the advertising agency, made of steel which can change the world in a while.",
                imagen1: "https://i.ibb.co/YRvxx4n/gdl-Inicio.jpg",
                linkSite: "https://gdl-webcam-dhd.netlify.app",
                // imagen2: "https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062_960_720.jpg",
            },
            {
                title: "Blog De Cafe",
                desc: "Identity,Mockup",
                img: false,
                text: false,
                description: "Dinámica LifeStyle Portfolio We’ve created a unique visual system and strategy across the wide existing spectrum of visible mobile applications and found yourself in a wide, straggling with wainscots.",
                characteristics: {
                    Strategy: ['Brand Strategy', 'UX Strategy'],
                    Design: ["UI/UX Design", "Art Direction"],
                    Client: ["Envato"],
                },
                task: "Rebuild a unified visual system for the advertising agency, made of steel which can change the world in a while.",
                imagen1: "https://i.ibb.co/rbD0gQW/cafe-index.png",
                linkSite: "https://blog-cafe-dhd.netlify.app",
                // imagen2: "https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062_960_720.jpg",
            },
            {
                title: "Bienes Raices",
                desc: "Identity,Mockup",
                img: false,
                text: false,
                description: "Diseño de Moda Portfolio We’ve created a unique visual system and strategy across the wide existing spectrum of visible mobile applications and found yourself in a wide, straggling with wainscots.",
                characteristics: {
                    Strategy: ['Brand Strategy', 'UX Strategy'],
                    Design: ["UI/UX Design", "Art Direction"],
                    Client: ["Envato"],
                },
                task: "Rebuild a unified visual system for the advertising agency, made of steel which can change the world in a while.",
                imagen1: "https://i.ibb.co/Sx2mzSR/bienes-index.jpg",
                linkSite: "https://bienes-raices-dhd.netlify.app",
                // imagen2: "https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062_960_720.jpg",
            },
            {
                title: "Front-end Store",
                desc: "Identity,Mockup",
                img: false,
                text: false,
                description: "Captive Brigth Utensile Portfolio We’ve created a unique visual system and strategy across the wide existing spectrum of visible mobile applications and found yourself in a wide, straggling with wainscots.",
                characteristics: {
                    Strategy: ['Brand Strategy', 'UX Strategy'],
                    Design: ["UI/UX Design", "Art Direction"],
                    Client: ["Envato"],
                },
                task: "Rebuild a unified visual system for the advertising agency, made of steel which can change the world in a while.",
                imagen1: "https://i.ibb.co/3z4hMZt/store-index.jpg",
                linkSite: "https://frontend-store-dhd.netlify.app",
                // imagen2: "https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062_960_720.jpg",
            },
        ],

        infoPersonal: {
            Name: "Daniel Huillcahuari Durand",
            "Zip Code": 15494,
            "Date of Birt": "25/02/1998",
            Email: "daniitoo.0102@gmail.com",
            Address: "Perú, Lima LMA",
            Cell: "+51 929-080-069",
        },

        newInfoPersonal: [],
        newBreadItems: [],

        breadItems: [{
                text: "Home",
                disabled: false,
                href: "/",
            },
            {
                text: "About Me",
                disabled: true,
                href: "/about",
                title: "About us",
            },
            {
                text: "Contact",
                disabled: true,
                href: "/contact",
                title: "Contact us",
            },
            {
                text: "Services",
                disabled: true,
                href: "/services",
                title: "What I Do?",
            },
            {
                text: "Work",
                disabled: true,
                href: "/work",
                title: "Portfolio",
            }
            // {
            //     text: this.$store.state.workstate[this.$route.params.id].title,
            //     disabled: true,
            //     href: "/portfolio/" + this.$route.params.id,
            //     show: this.$store.state.workstate[this.$route.params.id].title,
            // }
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        newInfo: (state) => {
            let e = state.infoPersonal;
            state.newInfoPersonal.push({
                Name: e.Name,
                Email: e.Email,
                Cell: e.Cell,
                Address: e.Address,
            });
            return state.newInfoPersonal[0];
        },

        // getPortfolio: state => {
        //     let bread = state.workstate
        //     state.newBreadItems.push({
        //         text: this.$store.state.workstate[this.$route.params.id].title,
        //         disabled: true,
        //         href: "/portfolio/" + this.$route.params.id,
        //         show: this.$store.state.workstate[this.$route.params.id].title,
        //     })
        // }
    },
});