<template>
  <v-container fluid style='padding: 0'>
    <PageBlock full>
      <v-img
        src='https://user-images.githubusercontent.com/25787913/47685923-e0e2fc80-dc1b-11e8-959b-c442696c54f3.png'
      />
    </PageBlock>
    <PageBlock>
      <h1>aaaaaaaa</h1>
    </PageBlock>
    <PageBlock>
      <h1>bbbbbbb</h1>
    </PageBlock>
    <PageBlock full>
      <v-img
        src='https://cdn-ak.f.st-hatena.com/images/fotolife/v/vintraw/20170502/20170502014952.jpg' alt='img'
        aspect-ratio="2.75"
      />
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
</style>
