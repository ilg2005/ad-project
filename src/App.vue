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
        <v-list dense>

          <v-list-item-group
              v-model="selectedItem"
              color="primary"
          >
            <v-list-item
                v-for="(link, i) in links"
                :key="i"
                :to="link.url"
            >
              <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-list-item-group>

        </v-list>

      </v-navigation-drawer>

      <v-toolbar dense dark color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

        <v-toolbar-title>Ad Application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text
                 v-for="(link, i) in links"
                 :key="i"
                 :to="link.url"
          >
            <v-icon dark left>{{link.icon}}</v-icon>
            {{link.text}}
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
  data() {
    return {
      drawer: false,
      selectedItem: null,
      links: [
        {text: 'Login', icon: 'mdi-lock', url: '/login'},
        {text: 'Registration', icon: 'mdi-face', url: '/registration'},
        {text: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
        {text: 'New ad', icon: 'mdi-file-plus', url: '/new'},
        {text: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'},
      ],
    }
  }
};
</script>

<style>

</style>
