<template>
  <div class="home">
    <h1>Home Page</h1>
    <v-btn class="pink white--text mx-2">Click Me</v-btn>
    <v-btn color="primary mx-2">Click Me</v-btn>
    <v-btn color="pink" dark depressed class="mx-2">Click Me</v-btn>
    <v-btn color="pink" flat class="mx-2">Click me</v-btn>
    <v-btn depressed class="purple mx-2">
      <v-icon color="white" left>mdi-email</v-icon>
      <span class="white--text">Email me</span>
    </v-btn>
    <v-btn depressed small class="purple mx-2">
      <v-icon color="white" small left>mdi-email</v-icon>
      <span class="white--text">Email me</span>
    </v-btn>
    <v-btn depressed large class="purple mx-2">
      <span class="white--text" left>Email me</span>
      <v-icon color="white" large right>mdi-email</v-icon>
    </v-btn>
    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-email</v-icon>
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
};
</script>
