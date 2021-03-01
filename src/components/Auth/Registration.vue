<template>
  <v-container>
    <v-card class="mx-auto mt-5 elevation-12 col-sm-6">
      <v-card-title class="pa-3 mb-5 info white--text">
        <h1 class="display-1">SignUp</h1>
      </v-card-title>
      <v-card-text class="mb-3">
        <v-form ref="signUpForm" v-model="valid" lazy-validation>
          <v-text-field
              label="Username"
              v-model="username"
              prepend-icon="mdi-account-circle"
              :rules="usernameRules"
              validate-on-blur
              required
          />
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
              :rules="passwordRules"
              validate-on-blur
              counter=""
              required
          />
          <v-text-field
              :type="showPasswordConfirm ? 'text' : 'password'"
              label="Password confirmation"
              v-model="passwordConfirm"
              prepend-icon="mdi-lock-check"
              :append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPasswordConfirm = !showPasswordConfirm"
              :rules="passwordConfirmRules"
              validate-on-blur
              required
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
            color="info"
            class="v-btn--block"
            @click="onSubmit"
            :disabled="!valid"
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
      username: '',
      usernameRules: [
        value => !!value || 'Username is required',
        value => value.length > 1 || 'Minimum length is 2',
      ],
      email: '',
      emailRules: [
        value => !!value || 'Email is required',
        value => value.indexOf('@') !== 0 || 'Email should have a username',
        value => value.includes('@') || 'Email should include an @ symbol',
        value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain a valid domain',
        value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain extension'
      ],
      password: '',
      showPassword: false,
      passwordRules: [
        value => !!value || 'Password is required',
        value => value.length > 7 || 'Password should contain at least 8 symbols'
      ],
      passwordConfirm: '',
      showPasswordConfirm: false,
      passwordConfirmRules: [
        value => !!value || 'Password confirmation is required',
        value => value === this.password || 'Should match the password above'

      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.signUpForm.validate()) {
        const user = {
          name: this.username,
          email: this.email
        }

        console.log(user)
      }
    }
  }
}
</script>

<style scoped>

</style>
