<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawerOpen = !drawerOpen"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Denny</span>
        <span class="font-weight-light">Todo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on: menu }">
          <v-btn color="grey" outlined v-on="{ ...tooltip, ...menu }">
            <v-icon color="grey" left>mdi-menu-swap-outline</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{
                link.text
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- dropdown menu -->
      <v-btn text class="grey--text">
        <span>Signout</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- App needs to be included for theprojec drawer to -->
    <v-navigation-drawer v-model="drawerOpen" app class="primary">
      <v-col cols="12" class="d-flex flex-column align-center mt-5">
        <v-avatar size="100" class="grey lighten-2">
          <img src="/avatar-1.png" />
        </v-avatar>
        <p class="white--text subtitle-1">The Net Ninja</p>
      </v-col>
      <v-list>
        <!-- router prop  -->
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" flat>
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{
              link.text
              }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawerOpen: false,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-folder", text: "My Projects", route: "/projects" },
      { icon: "mdi-account", text: "Team", route: "/team" }
    ],
    items: [
      { title: "Click Me1" },
      { title: "Click Me2" },
      { title: "Click Me3" },
      { title: "Click Me4" }
    ]
  })
  // methods: ()
};
</script>
