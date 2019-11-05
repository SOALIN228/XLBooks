<template>
  <div>
    <tag-group :value="tags"
               header-text="热门搜索"
               btn-text="换一批"
               @onTagClick="onTagClick"
               @onBtnClick="onBtnClick"
    ></tag-group>
    <search-item icon="apps-o" title="计算机科学" sub-title="类别"></search-item>
    <search-item icon="apps-o" title="计算机科学" sub-title="类别"></search-item>
    <search-item icon="apps-o" title="计算机科学" sub-title="类别"></search-item>
    <search-item icon="apps-o" title="计算机科学" sub-title="类别"></search-item>
  </div>
</template>

<script>
import TagGroup from '_c/base/tag-group'
import SearchItem from '_c/search/search-item'

export default {
  name: 'Search',
  components: {
    SearchItem,
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
