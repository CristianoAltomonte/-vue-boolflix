import Vue from 'vue'
import App from './App.vue'

import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

//Importazione di bootstrap 5.2
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faStarSolid, faStarRegular, faStarHalfStroke)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
