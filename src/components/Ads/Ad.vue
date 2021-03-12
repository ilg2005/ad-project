<template>
  <v-container>
    <v-row class="mt-5">
      <v-col
          xs="12"
          sm="6"
          offset-sm="3"
      >
        <v-card
            v-if="!loading"
            class="mx-auto"
            max-width="400"
        >
          <v-img
              class="white--text align-end"
              height="200px"
              :src="currentAd.src"
          >
          </v-img>

          <v-card-title class="pb-0">
            {{ currentAd.title }}
          </v-card-title>

          <v-card-text class="text--primary">
            <div>{{ currentAd.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <EditModal :ad="currentAd"></EditModal>

            <v-btn
                color="success"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
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
    </v-row>
  </v-container>
</template>

<script>
import EditModal from "@/components/Ads/EditModal";
export default {
  components: {
    EditModal
  },
  props: ['id'],
  computed: {
    currentAd () {
      return this.$store.getters.ads.find(ad => ad.id === this.$props.id)
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>

</style>
