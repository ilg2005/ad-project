<template>
  <v-container>
    <v-layout row>
      <v-col
          xs="12"
          sm="6"
          offset-sm="3"
      >
        <h1 class="display-1 text--secondary my-3">My Ads</h1>

          <v-container>
            <v-row>
              <v-col
                  v-for="ad in ads"
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
                            outlined
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

      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          id: '1',
          title: 'First ad',
          description: 'First description',
          promo: false,
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          id: '2',
          title: 'Second ad',
          description: 'Second description',
          promo: true,
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          id: '3',
          title: 'Third ad',
          description: 'Third description',
          promo: true,
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          id: '4',
          title: 'Fourth ad',
          description: 'Fourth description',
          promo: false,
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
