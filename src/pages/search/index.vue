<template>
  <div>
    <tag text="测试文本" @onClick="onTagClick"></tag>
  </div>
</template>

<script>
import Tag from '_c/base/tag'

export default {
  name: 'Search',
  components: { Tag },
  data () {
    return {}
  },
  methods: {
    onTagClick () {
      console.log('onTagClick')
    }
  }
}
</script>

<style scoped>

</style>
