<template>
  <v-container>
    <v-row class="mt-5">
      <v-col
          xs="12"
          sm="6"
          offset-sm="3"
      >
        <v-card
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
            <v-btn
                color="orange"
            >
              Edit
            </v-btn>

            <v-btn
                color="success"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    currentAd () {
      return this.$store.getters.ads.find(ad => ad.id === this.$props.id)
    }
  }
}
</script>

<style scoped>

</style>
