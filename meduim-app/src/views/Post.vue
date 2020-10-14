<template>
  <div v-if="post" class="post-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ post.title }}
          </h1>
          <h2 class="subtitle ">
            <strong>Created:</strong> <span class="is-capitalized">{{ post.created_at }}</span>
            <br>
            <strong>Status:</strong> <span class="is-capitalized">{{ post.status }}</span>
          </h2>
        </div>
      </div>
    </section>
    <section class="post-content">
      <div class="container">
        <p class="is-size-4 description">{{ post.content }}</p>
        <div class="post-images columns is-multiline has-text-centered">
          <!-- <div v-for="image in post.images" :key="image.id" class="column is-one-third"> -->
          <div class="column is-one-third">
            <img :src="post.image" :alt="post.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Post',
  data () {
    return {
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
      ],
      post: {}
    }    
  },
  created() {
    const ID = Number(this.$route.params.id);
    let post = this.posts.find(post => post.id === ID);
    // console.log(post)
    this.post = post;
  }
}
</script>