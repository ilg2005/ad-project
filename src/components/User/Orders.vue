<template>
  <v-container>
    <h1 class="display-1 text--secondary my-5" >Orders</h1>
    <v-row v-if="!loading && orders.length !== 0">
      <v-col
          xs="12"
          sm="6"
      >

        <v-list
            subheader
            two-line
            flat
        >

          <v-list-item-group
              multiple
          >
            <v-list-item
                v-for="order in orders"
                :key="order.id"
            >
              <template v-slot:default="{ active, }">
                <v-list-item-action>
                  <v-checkbox
                      :input-value="active"
                      color="primary"
                      v-model="order.done"
                      @click="markDone(order)"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn small class="primary" :to="'/ad/' + order.adId">Open</v-btn>

              </template>

            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <div v-else-if="!loading && orders.length === 0">
      <p class="text--secondary text-center mt-5">No orders yet!</p>
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

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      currentUserId: ''
    }
  },
  computed: {
    orders () {
      return this.$store.getters.orders
    },
    loading () {
      return this.$store.getters.loading
    },
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
    }
  },
  created () {
    this.currentUserId = this.$store.getters.currentUser.uid
    this.$store.dispatch('fetchOrders', this.currentUserId)
  }
}
</script>

<style scoped>

</style>
