<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-carousel>
        <v-carousel-item
            v-for="ad in promoAds"
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
              ID {{ ad.id }}
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
              <buy-modal
                  :ad="ad"
              ></buy-modal>

            </v-card-actions>
          </v-card>
          <br>
        </v-col>
      </v-row>
    </v-container>
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
</template>

<script>
import BuyModal from "@/components/User/BuyModal";
export default {
  components: {BuyModal},
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    },
  },
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
