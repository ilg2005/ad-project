<template>
  <v-container>
    <v-layout row>
      <v-col
          xs="12"
          sm="6"
          offset-sm="3"
      >
        <h1 class="display-1 text--secondary my-3">My Ads</h1>

        <v-container v-if="!loading && myAds.length !== 0">
          <v-row>
            <v-col
                v-for="ad in myAds"
                :key="ad.id"
                cols="12"
            >
              <v-card>
                <div class="d-flex flex-no-wrap justify-space-around">
                  <v-avatar
                      class="ma-3"
                      size="150"
                      tile
                  >
                    <v-img :src="ad.src"></v-img>
                  </v-avatar>

                  <div>
                    <v-card-title
                        class="headline"
                        v-text="ad.title"
                    ></v-card-title>

                    <v-card-subtitle
                        class="mb-5"
                        v-text="ad.description"
                    >
                    </v-card-subtitle>

                    <v-card-actions class="">
                      <v-btn
                          class="primary elevation-2 mx-auto"
                          dark
                          small
                          width="80px"
                          :to="'/ad/' + ad.id"
                      >
                        Open
                      </v-btn>
                    </v-card-actions>
                  </div>

                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <div v-else-if="!loading && myAds.length === 0">
          <p class="text--secondary text-center mt-5">You have not any ads!</p>
        </div>
        <div v-else>
          <v-container>
            <v-row>
              <v-col class="text-center pt-15">
                <v-progress-circular
                    :size="100"
                    :width="7"
                    color="purple"
                    indeterminate
                ></v-progress-circular>
              </v-col>
            </v-row>
          </v-container>
        </div>

      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>

</style>
