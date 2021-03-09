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
            <v-list-item
                v-if="isUserLoggedIn"
                @click="onLogout"
            >
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-list-item-group>

        </v-list>

      </v-navigation-drawer>

      <v-toolbar dense dark color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link" class="pointer">Ad Application</span>
           </router-link>
        </v-toolbar-title>

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
          <v-btn
              v-if="isUserLoggedIn"
              text
              @click="onLogout"
          >
            <v-icon dark left>mdi-logout</v-icon>
            Logout
          </v-btn>
        </v-toolbar-items>

      </v-toolbar>
    </v-card>
    <v-main>
      <router-view></router-view>
    </v-main>
    <div v-if="error">
    <v-snackbar
        v-model="snackbar"
        :multi-line="true"
        :timeout="-1"
        color="error"
        dark
    >
      {{ error }}

      <template v-slot:action="{ attrs }">
        <v-btn
            dark
            text
            v-bind="attrs"
            @click="closeError"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </div>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      snackbar: true,
      drawer: false,
      selectedItem: null,
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    links () {
      if (this.$store.getters.isLoggedIn) {
        return [
          {text: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
          {text: 'New ad', icon: 'mdi-file-plus', url: '/new'},
          {text: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'},
        ]
      } else {
        return [
          {text: 'Login', icon: 'mdi-lock', url: '/login'},
          {text: 'Registration', icon: 'mdi-face', url: '/registration'},
        ]
      }
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('onUserLogout')
      if (this.$route.name !== 'home') {
        this.$router.push('/')
      }
    }
  }
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
