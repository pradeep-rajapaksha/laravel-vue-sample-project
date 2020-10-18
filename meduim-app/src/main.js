import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

import 'bulma/css/bulma.css'

// Import the Auth0 configuration
// import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { OAuthPlugin } from "./oauth";

// Vue.prototype.$router = router;

Vue.use(OAuthPlugin, { 
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.prototype.$axios = axios;
Vue.prototype.$api = 'http://127.0.0.1:8000/api/';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
