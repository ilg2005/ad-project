<template>
  <v-app>
    <v-card
        color="grey lighten-4"
        flat
        height="48px"
        tile
    >
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>Link One</v-btn>
          <v-btn text>Link Two</v-btn>
          <v-btn text>Link Tree</v-btn>
        </v-toolbar-items>

      </v-toolbar>
    </v-card>
    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

export default {};
</script>

<style>

</style>
