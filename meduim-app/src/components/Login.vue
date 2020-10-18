<template>
  <div class="auth container px-3">
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered">
            <div class="column">
              <div class="buttons">
                <!-- Check that the SDK client is not currently loading before accessing is methods -->
                <div v-if="oauth && !oauth.loading">
                  <!-- show login when not authenticated -->
                  <!-- <p>{{ oauth.url }}</p> -->
                  <a v-if="!$auth.isAuthenticated && oauth.url" :href="oauth.url" @click="login" class="button is-dark"><strong>Authenticate with Medium</strong></a> 
                </div>
                <div v-if="oauth && oauth.loading">
                  <!-- show login when not authenticated -->
                  <a class="button is-dark"><strong>Authorizing...</strong></a> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import oauth from '../oauth';
export default {
  name: 'Login',
  components : {
    // PostCard
  },
  data () {
    return {
      oauth: {
        loading: false,
        url: ''
      }
    }    
  },
  created() {
    // console.log('route.params', this.$route.query);
    // this.$route.params
    if(this.$route.query && this.$route.query.state && this.$route.query.code) {
      this.oauth.loading = true;
      // 
      this.$auth.handleRedirectCallback(this.$route.query.code, this.$route.query.state);
    }
  },
  mounted() {
    // get medium oauth link 
    this.$axios({ method: "GET", "url": this.$api+"medium/oauth" }).then(response => {
        let data = response.data.data;
        this.oauth.url = data.url;
      }, error => {
        console.error(error);
      });
  },
  methods: {
    // Log the user in
    login() { 
      // this.$auth.login();
    }
  }
}
</script>
<style lang="scss" scoped>

</style>