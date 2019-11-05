<template>
  <div class="search-list-wrapper">
    <search-item icon="apps-o"
                 :title="category"
                 sub-title="Category"
                 @onClick="showList(category, 'category')"
                 v-if="category"
    ></search-item>
    <search-item icon="user-o"
                 :title="author"
                 sub-title="Author"
                 @onClick="showList(author, 'author')"
                 v-if="author"
    ></search-item>
    <search-item icon="newspaper-o"
                 :title="publisher"
                 sub-title="Publisher"
                 @onClick="showList(publisher, 'publisher')"
                 v-if="publisher"
    ></search-item>
    <search-table :data="data.book" @onClick="onBookClick"></search-table>
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
      if (this.data && this.data.category && this.data.category.length > 0) {
        return this.data.category[0].categoryText
      } else {
        return null
      }
    },
    author () {
      if (this.data && this.data.author && this.data.author.length > 0) {
        return this.data.author[0].author
      } else {
        return null
      }
    },
    publisher () {
      if (this.data && this.data.publisher && this.data.publisher.length > 0) {
        return this.data.publisher[0].publisher
      } else {
        return null
      }
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
