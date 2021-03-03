<template>
  <v-container>
    <h1 class="display-1 text--secondary my-5" >Orders</h1>
    <v-layout row>
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
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.user }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn small class="primary" :to="'/ad/' + order.ad_id">Open</v-btn>

              </template>

            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'order_1',
          ad_id: '1',
          user: 'Vladilen',
          phone: '+7 (111) 111-11-11',
          done: false
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
