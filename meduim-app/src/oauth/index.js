import Vue from "vue";
import router from '../router';
import axios from "axios";

/** Define a default action to perform after authentication */
const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

let instance;

/** Returns the current instance of the SDK */
export const getInstance = () => instance;

/** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
export const useOAuth = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = window.location.origin
}) => {
  if (instance) return instance;

  // The 'instance' is simply a Vue object
  instance = new Vue({
    data() {
      return {
        loading: true,
        isAuthenticated: this._isAuthenticated(),
        user: this._getAuth(),
        auth0Client: null,
        accessToken: this._getAccessToken(),
        popupOpen: false,
        error: null
      };
    },
    methods: {
      login() {
        this.logout();
        location.href = '/';
      },
      _getAuth() {
        if(localStorage && localStorage.getItem('user')) {
          return JSON.parse(localStorage.getItem('user'));
        }
      },
      _isAuthenticated() {
        if(localStorage && localStorage.getItem('user')) {
          return true;
        }
      },
      _getAccessToken() {
        console.log('_getAccessToken')
        if(this._isAuthenticated()) {
          var user = this._getAuth();
          return user.access_token;
        }
      },
      handleRedirectCallback(code, state) {
        this.$axios({ method: "POST", "url": this.$api+"medium/oauth/callback", data: { "code": code, "state": state }}).then(response => {
            if(response.data.data) {
              let user = response.data.data;
              this.user = user;
              if(localStorage) {
                localStorage.setItem('user', JSON.stringify(this.user));
              }
              // console.log(user);
              location.href = '/';
            }
          }, error => {
            console.error(error);
            location.href = '/';
          });
      },
      logout() {
        if(localStorage) {
          localStorage.removeItem('user');
        }
        this.isAuthenticated = false;
        this.user = {};
        location.href = '/';
      }
    },
    /** Use this lifecycle method to instantiate the SDK client */
    async created() {
        // Initialize the internal authentication state
        this.isAuthenticated = await this._isAuthenticated();
        this.user = await this._getAuth();
        this.loading = false;
    }
  });

  return instance;
}

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const OAuthPlugin = {
  install(Vue, options) {
    Vue.prototype.$auth = useOAuth(options);
  }
};