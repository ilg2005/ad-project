<template>
  <v-container>
    <v-card width="50%" class="mx-auto mt-5">
      <v-card-title class="pb-5">
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
              label="Username"
              prepend-icon="mdi-account-circle"
          />
          <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" class="v-btn--block">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false
    }
  }
}
</script>

<style scoped>

</style>
