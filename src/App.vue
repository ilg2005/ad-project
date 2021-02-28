<template>
  <v-app>
    <v-card
        color="grey lighten-4"
        flat
        height="48px"
        tile
    >
      <v-navigation-drawer
          app
          temporary
          v-model="drawer"
      >

      </v-navigation-drawer>
      <v-toolbar dense dark color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Ad Application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>
            <v-icon dark left>mdi-bug</v-icon>
            Link One
          </v-btn>
        </v-toolbar-items>

      </v-toolbar>
    </v-card>
    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

export default {
  data () {
    return {
      drawer: false
    }
  }
};
</script>

<style>

</style>
