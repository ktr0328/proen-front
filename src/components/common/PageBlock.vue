<template>
  <div class='block' :class='{ pad: !full }'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page-block',
  props: {
    full: Boolean
  },
  mounted: function () {
  }
}
</script>

<style lang='sass' scoped>
.block
  height: 600px
  width: 100%
  img
    width: 100%
    height: 100%
.pad
  padding: 10px
</style>
