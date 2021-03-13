<template>
  <v-dialog width="400px" v-model="modal">
    <template
        v-slot:activator="{ on, attrs }"
    >
      <v-btn
          color="primary"
          elevation="12"
          v-bind="attrs"
          v-on="on"
      >
        Buy
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Do you really want to buy it?</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="orderForm" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    label="Name*"
                    v-model="customerName"
                    :rules="[v => !!v || 'Name is required']"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                    label="Phone*"
                    v-model="customerPhone"
                    rows="1"
                    :rules="[v => !!v || 'Phone is required']"
                    required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="onCancelModal"
            :disabled="localLoading"
        >
          Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="onOrder"
            :disabled="localLoading"
            :loading="localLoading"
        >
          Order
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data() {
    return {
      valid: false,
      modal: false,
      customerName: '',
      customerPhone: '',
      localLoading: false
    }
  },
  methods: {
    onCancelModal() {
      this.$refs.orderForm.reset()
      this.$refs.orderForm.resetValidation()
      this.modal = false
    },
    onOrder() {
      if (this.$refs.orderForm.validate()) {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.customerName,
          phone: this.customerPhone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
        .finally(() => {
          this.$refs.orderForm.reset()
          this.$refs.orderForm.resetValidation()
          this.localLoading = false

          this.modal = false
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
