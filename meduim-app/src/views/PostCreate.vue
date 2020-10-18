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
        	<form v-on:submit.prevent="submit" ref="form" enctype="multipart/form-data">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label is-left">Title</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input is-small title" id="title" name="title" v-model="form.title" type="text" required />
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label is-left">Content</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <textarea class="textarea is-normal content" id="content" name="content" v-model="form.content" required></textarea>
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label is-left">Status</label>
              </div>
              <div class="field-body">
                <div class="field">
                    <div class="select">
                      <select id="status is-small" name="status" v-model="form.status" required>
                        <option value="draft">Draft</option>
                        <option value="published">Publish</option>
                        <!-- <option value="unpublished">Unpublish</option> -->
                        <!-- <option value="deleted">Delete</option> -->
                      </select>
                    </div>
                  <p class="control">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label is-left">&nbsp;</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <div class="file has-name is-right">
                      <label class="file-label">
                        <input class="file-input is-small image" type="file" id="image" name="image" ref="file" v-on:change="handleFileUpload()" />
                        <span class="file-cta">
                          <span class="file-icon">
                            <i class="fas fa-upload"></i>
                          </span>
                          <span class="file-label">Browse</span>
                        </span>
                        <span class="file-name">{{form.image_name}}</span>
                      </label>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label is-left">&nbsp;</label>
              </div>
              <div class="field-body">
                <button class="button px-6">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PostCreate',
    data() {
    	return {
        form: {
          title: '',
          content: '',
          status: '',
          image: '',
          image_name:'Choose a image...'
        }
      }
    },
    methods: {
      handleFileUpload(){
        this.form.image = this.$refs.file.files[0];
        this.form.image_name = this.form.image.name
        // console.log(this.form.image)
      },
      submit() {
        // console.log(this.form);
        let formData = new FormData();
        formData.append('title', this.form.title);
        formData.append('content', this.form.content);
        formData.append('status', this.form.status);
        formData.append('image', this.form.image);

        this.$axios.post(this.$api+"posts", formData, { headers: { 'Authorization': 'Bearer '+ this.$auth.accessToken, 'Content-type': 'multipart/form-data'} })
        .then((res) => {
          var post = res.data.data;
          // console.log(post)
          this.$refs.form.reset();
          this.$router.push({ name: 'Post', params: { id: post.id }})
          // this.$router.push('/post/'+)
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  form {
    width: 50%;
  }
  .field .field-label {}
  .field .field-body {}
  .select, .select select, .file-label { width: 100%; }
</style>