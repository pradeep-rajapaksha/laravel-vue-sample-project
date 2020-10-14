<template>
  <div class="post-create container px-3">
    <div class="card">
      <header class="card-header">
        <h2 class="subtitle is-full has-text-left">
          <p class="card-header-title">
            Create Post
          </p>
        </h2>
      </header>
      <div class="card-content">
        <div class="columns is-full">
        	post create form @here
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Posts from '../components/Posts';
export default {
  name: 'post-create',
  components: {
  	Posts
  }
}
</script>
<style lang="scss" scoped>
  .org-description {
    margin-top: 50px;
  }
</style>