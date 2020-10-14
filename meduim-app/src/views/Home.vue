<template>
	<div class="home">
		<section v-if="!$auth.isAuthenticated" class="hero is-primary is-fullheight">
		  <div class="hero-body">
		    <div class="container">
		      <div class="columns is-centered">
		        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
		          <div class="buttons">
		            <!-- Check that the SDK client is not currently loading before accessing is methods -->
		            <div v-if="!$auth.loading">
		              <!-- show login when not authenticated -->
		              <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Authenticate with Auth0</strong></a>	
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
		<section v-if="$auth.isAuthenticated">
	  	<Posts />
		</section>
	</div>
</template>
<script>
import Posts from '../components/Posts';
export default {
  name: 'home',
  components: {
  	Posts
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    }
  }
}
</script>
<style lang="scss" scoped>
  .hero {    
    text-align: center;
    /*background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');*/
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>