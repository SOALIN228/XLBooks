<template>
  <div class="search-list-wrapper">
    <search-item :icon="category.icon"
                 :title="category.title"
                 :sub-title="category.subTitle"
                 @onClick="showList(category.title, 'category')"
    ></search-item>
    <search-item :icon="author.icon"
                 :title="author.title"
                 :sub-title="author.subTitle"
                 @onClick="showList(author.title, 'author')"
    ></search-item>
    <search-item :icon="publishe.icon"
                 :title="publishe.title"
                 :sub-title="publishe.subTitle"
                 @onClick="showList(publishe.title, 'publishe')"
    ></search-item>
    <search-table :data="data.list" @onClick="onBookClick"></search-table>
  </div>
</template>

<script>
import SearchItem from './search-item'
import SearchTable from './search-table'

export default {
  name: 'SearchList',
  components: {
    SearchTable,
    SearchItem
  },
  props: {
    data: Object
  },
  computed: {
    category () {
      return this.data.item[0]
    },
    author () {
      return this.data.item[1]
    },
    publishe () {
      return this.data.item[2]
    }
  },
  data () {
    return {}
  },
  methods: {
    showList (text, key) {
      console.log(text, key)
    },
    onBookClick (book) {
      console.log(book)
    }
  }
}
</script>

<style scoped>

</style>
