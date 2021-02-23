import Vue from 'vue'
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBars, faGamepad, faCaretDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch);
library.add(faBars);
library.add(faGamepad);
library.add(faCaretDown);
library.add(faTimesCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// App Setup
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
