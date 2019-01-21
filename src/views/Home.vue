<template lang='pug'>
  v-container(fluid text-xs-center)
    app-page-block
      p(v-for='(v, i) in Array(5)' :key='i') プログラミングをパズルで解くゲームです
    app-page-block(full)
      img(src='https://user-images.githubusercontent.com/25787913/50053097-41011400-0172-11e9-97ec-055dcf7c5e12.png')
    app-page-block(full)
      h1 せつめー
</template>

<script>
import AppPageBlock from '@/components/common/AppPageBlock.vue'

export default {
  name: 'home',
  mounted: function () {},
  data () {
    return {}
  },
  components: {
    AppPageBlock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
h1
  font-size: 2em
p
  font-size: 1.5em
</style>
