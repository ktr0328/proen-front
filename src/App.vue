<template>
  <v-app>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <Navigation/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/common/Navigations.vue'
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

<style lang="sass">
.link
  cursor: pointer
</style>
