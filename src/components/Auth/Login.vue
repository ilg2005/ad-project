<template>
  <v-container>
    <v-card class="mx-auto mt-5 elevation-12 col-sm-6">
      <v-card-title class="pa-3 mb-5 info white--text">
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text class="mb-3">
        <v-form ref="form" v-model="valid">
          <v-text-field
              label="Username"
              v-model="username"
              prepend-icon="mdi-account-circle"
              :rules="[v => !!v || 'Item is required']"
              required
          />
          <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              v-model="password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :rules="[v => !!v || 'Item is required']"
              required
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
            color="info"
            class="v-btn--block"
            @click="onLogin"
            :disabled="!valid"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      username: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    onLogin () {
      const user = {
        name: this.username,
        pwd: this.password
      }
      console.log(user)
    }
  }
}
</script>

<style scoped>

</style>
