<template>
  <v-container>
    <v-app-bar app color="white" :elevation="0" shrink-on-scroll>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <!-- logo goes here -->

      <v-toolbar-title
        class="font-weight-bold dark-blue--text"
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          class="font-weight-bold"
          color="dark-blue"
          variant="text"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-if="drawer" v-model="drawer" app left>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          exact
          :to="item.path"
        >
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
export default {
  name: "MenuBar",
  data: () => ({
    drawer: false,
    menuItems: [
      {
        title: "about",
        path: "/",
      },
      {
        title: "experience",
        path: "/",
      },
      {
        title: "work",
        path: "/",
      },
      {
        title: "contact",
        path: "/",
      },
    ],
  }),
};
</script>
