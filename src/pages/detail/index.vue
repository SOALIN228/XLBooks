<template>
  <div>
    <detail-book :book="book"></detail-book>
    <detail-stat :readers="book.readers"
                 :readerNum="book.readerNum"
                 :rankNum="book.rankNum"
                 :rankAvg="book.rankAvg"
    ></detail-stat>
  </div>
</template>

<script>
import DetailBook from '../../components/detail/detail-book'
import { getStorageSync } from '../../api/wechat'
import { bookDetail } from '../../api'
import DetailStat from '../../components/detail/detail-stat'

export default {
  name: 'Detail',
  components: {
    DetailStat,
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
