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
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>

          <v-card-title class="pb-0">
            Number 10
          </v-card-title>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
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
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
