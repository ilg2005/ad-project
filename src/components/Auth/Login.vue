<template>
  <v-container>
    <v-card class="mx-auto mt-5 elevation-12 col-sm-6">
      <v-card-title class="pa-3 mb-5 info white--text">
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text class="mb-3">
        <v-form ref="loginForm" v-model="valid" lazy-validation>
          <v-text-field
              label="Email"
              type="email"
              v-model="email"
              prepend-icon="mdi-at"
              :rules="emailRules"
              validate-on-blur
              required
          />
          <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              v-model="password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :rules="[v => !!v || 'Password is required']"
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
            :loading="loading"
            :disabled="!valid || loading"
        >
          Submit
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
      email: '',
      emailRules: [
        value => !!value || 'Email is required',
        value => value.indexOf('@') !== 0 || 'Email should have a username',
        value => value.includes('@') || 'Email should include an @ symbol',
        value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain a valid domain',
        value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain extension'
      ],
      password: '',
      showPassword: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onLogin () {

      if (this.$refs.loginForm.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('loginUser', user)
        .then(() => {
          this.$router.push('/')
          console.log('login successful')
        })
          .catch(() => {})
        }

    }
  }
}
</script>

<style scoped>

</style>
