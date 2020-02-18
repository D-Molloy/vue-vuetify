<template>
  <v-app>
    <Navbar />
    <div class="grey lighten-4">
      <!-- Put header here -->
      <v-content class="mx-5 mb-4">
        <router-view></router-view>
      </v-content>
      <!-- Put footer here -->
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: { Navbar }
};
</script>
