// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {sync} from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from '@/store/store'
import VueYoutube from 'vue-youtube-embed'

Vue.use(VueYoutube)
Vue.use(Vuetify)
Vue.config.productionTip = false

sync(store, router)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
