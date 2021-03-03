<template>
  <v-container>
    <v-card class="mx-auto mt-5 elevation-12 col-sm-6">
      <v-card-title class="pa-3 mb-5 info white--text">
        <h1 class="display-1">Create New Ad</h1>
      </v-card-title>
      <v-card-text class="mb-3">
        <v-form ref="newAdForm" v-model="valid" lazy-validation>
          <v-text-field
              label="Ad Title"
              v-model="title"
              :rules="[v => !!v || 'Title is required']"
              required
          />
          <v-textarea
              label="Ad Description"
              rows="2"
              v-model="description"
              :rules="[v => !!v || 'Description is required']"
              required
          />
          <v-file-input
              :rules="[v => !!v || 'Image is required']"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an image"
              prepend-icon="mdi-camera"
              label="Ad image"
          ></v-file-input>
          <v-row justify="center" class="my-3">
            <v-img
                src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                lazy-src="https://picsum.photos/id/11/100/60"
                max-height="200"
            >
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                  <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-row>

          <v-switch
              v-model="switch1"
              label="Add to promo"
          ></v-switch>

        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
            color="info"
            class="v-btn--block"
            @click="onCreate"
            :disabled="!valid"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      title: '',
      description: '',
      switch1: true
    }
  },
  methods: {
    onCreate () {

      if (this.$refs.newAdForm.validate()) {
        const newAd = {
          title: this.title,
          description: this.description
        }

        console.log(newAd)
      }
    }
  }
}
</script>

<style scoped>

</style>
