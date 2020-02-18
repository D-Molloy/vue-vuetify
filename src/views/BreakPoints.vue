<template>
  <div class="about">
    <h1>Home Page</h1>
    <v-btn class="hidden-md-and-down">Hidden on MD and down</v-btn>
    <v-btn color="purple" dark class="hidden-sm-and-up"
      >Hidden on MD and up</v-btn
    >
    <v-btn color="blue" dark class="hidden-sm-only">hidden on small</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
};
</script>
