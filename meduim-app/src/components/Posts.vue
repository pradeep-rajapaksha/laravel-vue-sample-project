<template>
  <div class="posts container px-3">
    <div class="card">
      <header class="card-header">
        <h2 class="subtitle is-full has-text-left">
          <p class="card-header-title">
            Posts
            <router-link :to="'/post/create'" class="button is-pulled-right">Create Post</router-link>
          </p>
        </h2>
      </header>
      <div class="card-content">
        <div class="columns is-full">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Title</th>
                <th>Created</th>
                <th>Published</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :post="post" :key="post.id" class="">
                <td>{{ post.title }}</td>
                <td>{{ post.created_at }}</td>
                <td>{{ post.published_at }}</td>
                <td>{{ post.status }}</td>
                <td class="">
                  <div class="buttons are-small has-text-right">
                    <router-link :to="'/post/'+post.id" class="button is-pulled-right">Event</router-link>
                    <router-link :to="'/post/'+post.id" class="button is-pulled-right">View</router-link>
                    <router-link :to="'/post/edit/'+post.id" class="button is-pulled-right">Edit</router-link>
                    <router-link :to="'/post/delete/'+post.id" class="button is-pulled-right">Delete</router-link>
                    <router-link :to="'/post/medium/publish/'+post.id" class="button is-pulled-right">Publish to Medium</router-link>
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
      posts: [
        {
          "id": 1,
          "title": "Test Post 1",
          "slug": "test-1",
          "content": "Testing 001",
          "image": null,
          "published_at": null,
          "author": null,
          "status": "draft",
          "created_at": "2020-10-11 18:51:53",
          "updated_at": "2020-10-11 18:51:53"
        },
        {
          "id": 2,
          "title": "Test Post 2",
          "slug": "test-2",
          "content": "Testing 002",
          "image": null,
          "published_at": null,
          "author": null,
          "status": "draft",
          "created_at": "2020-10-11 18:52:17",
          "updated_at": "2020-10-11 18:52:17"
        }
      ]
    }    
  }
}
</script>
<style lang="scss" scoped>
  .posts {
  }
</style>