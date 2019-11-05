<template>
  <div>
    <tag-group :value="tags"
               header-text="热门搜索"
               btn-text="换一批"
               @onTagClick="onTagClick"
               @onBtnClick="onBtnClick"
    ></tag-group>
  </div>
</template>

<script>
import TagGroup from '_c/base/tag-group'

export default {
  name: 'Search',
  components: {
    TagGroup
  },
  data () {
    return {
      tags: [
        'aaa',
        'bbb',
        'cccccccccc',
        'dddddddddddddddd'
      ]
    }
  },
  methods: {
    onTagClick (text, index) {
      console.log('onTagClick', text, index)
    },
    onBtnClick () {
      console.log('onBtnClick')
    }
  }
}
</script>

<style scoped>

</style>
