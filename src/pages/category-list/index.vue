<template>
  <div>
    <home-book :data="category"
               :row="category.length / 2"
               :col="2"
               mode="category"
               :show-btn="false"
               :show-title="false"
               @onBookClick="onCategoryClick"
    ></home-book>
  </div>
</template>

<script>
import HomeBook from '../../components/home/home-book'
import { categoryList } from '../../api'

export default {
  name: 'CategoryList',
  components: {
    HomeBook
  },
  data () {
    return {
      category: []
    }
  },
  mounted () {
    categoryList().then(res => {
      this.category = res.data.data
    })
  },
  methods: {
    onCategoryClick (category) {
      this.$router.push({
        path: '/pages/list/main',
        query: {
          key: 'categoryId',
          text: category.category,
          title: category.categoryText
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
