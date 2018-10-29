<template>
  <v-container fluid style='padding: 0'>
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
