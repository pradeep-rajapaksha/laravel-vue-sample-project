<template>
	<div class="home">
		<section v-if="!$auth.isAuthenticated" class="hero is-primary is-fullheight">
      <Login />
		</section>
		<section v-if="$auth.isAuthenticated">
	  	<Posts />
		</section>
	</div>
</template>
<script>
import Posts from '../components/Posts';
import Login from '../components/Login';
export default {
  name: 'home',
  components: {
  	Posts, 
    Login
  }
}
</script>
<style lang="scss" scoped>

</style>