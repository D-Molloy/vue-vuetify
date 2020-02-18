<template>
  <v-app>
    <div class="grey lighten-4">
      <!-- Put header here -->
      <Navbar />
      <v-content>
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
