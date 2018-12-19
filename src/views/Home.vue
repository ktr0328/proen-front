<template>
  <v-container fluid text-xs-center>
    <PageBlock>
      <h1><span class='orange--text'>パズ</span>ル & <span class='orange--text'>プロ</span>グラミング(仮)</h1>
      <p v-for='(v, i) in Array(5)' :key='i'>せつめー せつめー せつめー せつめー せつめー せつめー せつめー せつめー せつめー せつめー </p>
    </PageBlock>
    <PageBlock full>
      <img
        src='https://user-images.githubusercontent.com/25787913/50053097-41011400-0172-11e9-97ec-055dcf7c5e12.png'
      />
    </PageBlock>
    <PageBlock full>
      <h1>hoge</h1>
    </PageBlock>
  </v-container>
</template>

<script>
import PageBlock from '@/components/common/PageBlock.vue'

export default {
  name: 'home',
  mounted: function () {},
  data () {
    return {}
  },
  components: {
    PageBlock
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
