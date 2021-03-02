<template>
  <div>
    <v-container fluid>
      <v-carousel>
        <v-carousel-item
            v-for="ad in ads"
            :key="ad.id"
            :src="ad.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
          <div class="ad-link">
            <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <v-row>
        <v-col
            v-for="ad in ads"
            :key="ad.id"
            xs="12"
            sm="6"
            md="4"
            lg="3"
        >
          <v-card
              class="mx-auto"
              max-width="400"

          >
            <v-img
                class="white--text align-end"
                height="200px"
                :src="ad.src"
            >
              <v-card-title>{{ ad.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Number {{ ad.id }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ ad.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="orange"
                  text
                  :to="'/ad/' + ad.id"
              >
                Open
              </v-btn>

              <v-btn
                  color="primary"
                  elevation="12"
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
          <br>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
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
  .ad-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>
