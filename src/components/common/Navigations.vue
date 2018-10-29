<template>
  <div>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      scroll-off-screen
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
  data () {
    return {
      title: 'パズプロ（仮）',
      drawer: false,
      miniVariant: false,
      items: [{
        icon: 'fas fa-shapes',
        title: 'Inspire'
      }]
    }
  }
}
</script>
