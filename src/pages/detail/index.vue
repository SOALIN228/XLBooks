<template>
  <div>
    <detail-book :book="book"></detail-book>
  </div>
</template>

<script>
import DetailBook from '../../components/detail/detail-book'
import { getStorageSync } from '../../api/wechat'
import { bookDetail } from '../../api'

export default {
  name: 'Detail',
  components: {
    DetailBook
  },
  data () {
    return {
      book: {}
    }
  },
  mounted () {
    const openId = getStorageSync('openId')
    const { fileName } = this.$route.query
    if (openId && fileName) {
      bookDetail({ openId, fileName }).then(res => {
        this.book = res.data.data
      })
    }
  }
}
</script>

<style scoped>
</style>
