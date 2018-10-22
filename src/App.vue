<template>
  <v-app>
    <Navigation/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigations.vue'
// import { mapState } from 'vuex'

export default {
  name: 'App',
  mounted: function () {
  },
  data () {
    return {
    }
  },
  components: {
    Navigation
  }
}
</script>
