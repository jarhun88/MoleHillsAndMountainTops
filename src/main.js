import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as VueGoogleMaps from 'vue2-google-maps'
import vuetify from '@/plugins/vuetify'
import VModal from 'vue-js-modal'
 
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCk2WZXMNxFK7eKCdTn-qOm2rPW6bnqQFY',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
})


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
