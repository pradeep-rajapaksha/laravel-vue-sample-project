<template>
  <div class="posts container px-3">
    <div class="card">
      <header class="card-header">
        <h2 class="subtitle is-fullwidth has-text-left">
          <p class="card-header-title is-block is-flow-root">
            Posts
            <router-link :to="'/post/create'" class="button is-small is-pulled-right">Create Post</router-link>
          </p>
        </h2>
      </header>
      <div class="card-content">
        <div class="columns is-full">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>#</th>
                <th class="has-text-left">Title</th>
                <th class="has-text-left">Created</th>
                <th class="has-text-left">Published</th>
                <th class="has-text-left">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :post="post" :key="post.id" class="">
                <td>{{ post.id }}</td>
                <td class="has-text-left">{{ post.title }}</td>
                <td class="has-text-left">{{ post.created_at }}</td>
                <td class="has-text-left">{{ post.published_at }}</td>
                <td class="has-text-left">{{ post.status }}</td>
                <td class="">
                  <div class="buttons are-small has-text-right">
                    <router-link :to="'/post/'+post.id" class="button is-pulled-right">View</router-link>
                    <!-- <router-link :to="'/post/edit/'+post.id" class="button is-pulled-right">Edit</router-link> -->
                    <!-- <router-link :to="'/post/delete/'+post.id" class="button is-pulled-right">Delete</router-link> -->
                    <!-- <router-link :to="'/post/medium/publish/'+post.id" class="button is-pulled-right">Publish to Medium</router-link> -->
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <div class="columns is-full">
      <div v-for="post in posts" :post="post" :key="event.id" class="column is-one-quarter">
        <router-link :to="'/post/' + post.id">
          <PostCard :post="post" />
        </router-link>
      </div>      
    </div> -->
  </div>
</template>
<script>
// import PostCard from '@/components/PostCard';
export default {
  name: 'Posts',
  components : {
    // PostCard
  },
  data () {
    return {
      post: {},
      posts: []
    }    
  },
  mounted() {
    // console.log(axios);
    this.$axios({ method: "GET", "url": this.$api+"posts", headers: { 'Authorization': 'Bearer '+ this.$auth.accessToken, 'Content-Type': 'application/json' } }).then(response => {
        // console.log(response)
        this.posts = response.data.data;
      }, error => {
        console.error(error);
      });
  }
}
</script>
<style lang="scss" scoped>
  .posts {
  }
  .is-fullwidth { width: 100%; }
  .is-flow-root { display: flow-root;}
</style>