<template>
  <div v-if="post" class="post-single">
    <section class="hero is-primary has-text-left">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-four-fifths">
              <h1 class="title">
                {{ post.title }}
              </h1>
              <h2 class="subtitle">
                <strong>Created:</strong> <span class="is-capitalized">{{ post.created_at }}</span>
                <br>
                <strong>Status:</strong> <span class="is-capitalized">{{ post.status }}</span>
              </h2>
            </div>
            <div v-if="post.status == 'draft'" class="column">
              <button class="button px-6 is-small is-link" @click="submit">Submit to Medium</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="post-content has-text-left">
      <div class="container">
        <p class="is-size-4 description py-5">{{ post.content }}</p>
        <div class="post-images columns is-multiline has-text-centered" v-if="post.image">
          <div class="column is-one-third">
            <figure class="image">
              <img :src="post.image.url" :alt="post.name">
            </figure>
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
      post: {}
    }    
  },
  methods: {
    submit() {
      // const id = Number(this.$route.params.id);
      this.$axios({ method: "POST", url: this.$api+"posts/"+this.post.id+"/submit", headers: { 'Authorization': 'Bearer '+ this.$auth.accessToken, 'Content-Type': 'application/json' } }).then(response => {
          // console.log(response)
          this.post = response.data.data;
        }, error => {
          console.error(error);
        });
    }
  },
  mounted() {
    const id = Number(this.$route.params.id);
    // console.log(axios);
    this.$axios({ method: "GET", url: this.$api+"posts/"+id, headers: { 'Authorization': 'Bearer '+ this.$auth.accessToken, 'Content-Type': 'application/json' } }).then(response => {
        // console.log(response)
        this.post = response.data.data;
      }, error => {
        console.error(error);
      });
  }
}
</script>