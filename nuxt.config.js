module.exports = {
    ssr: false ,
    server: {
        port: 5000,
        host: '0.0.0.0'
    },
    modules: [
        '@nuxtjs/pwa'
    ],
    head: {
        title: "Krtvas | IITD",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: "Krtvas | IITD"}
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icon.jpg' }
        ]
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    loading: '~/components/Loading.vue',
    loadingIndicator: {
        name: 'cube-grid',
        color: 'white',
        background: '#2C323D'
    },
    build: {
        vendor: [
            'animejs',
            'lodash/throttle',
            '~/plugins/pieces.js',
            '~/plugins/segment.js',
            '~/plugins/text-scramble.js'
        ]
    }
};
