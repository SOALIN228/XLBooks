<template>
  <div>
    <detail-book :book="book"></detail-book>
    <detail-stat :readers="book.readers"
                 :readerNum="book.readerNum"
                 :rankNum="book.rankNum"
                 :rankAvg="book.rankAvg"
    ></detail-stat>
    <detail-rate :rateValue="book.rateValue" @onRateChange="onRateChange"></detail-rate>
  </div>
</template>

<script>
import DetailBook from '../../components/detail/detail-book'
import DetailStat from '../../components/detail/detail-stat'
import DetailRate from '../../components/detail/detail-rate'
import { getStorageSync } from '../../api/wechat'
import { bookDetail, bookRankSave } from '../../api'

export default {
  name: 'Detail',
  components: {
    DetailRate,
    DetailStat,
    DetailBook
  },
  data () {
    return {
      book: {}
    }
  },
  mounted () {
    this.getBookDetail()
  },
  methods: {
    onRateChange (value) {
      const openId = getStorageSync('openId')
      const { fileName } = this.$route.query
      bookRankSave({ openId, fileName, rank: value }).then(() => {
        this.getBookDetail()
      })
    },
    getBookDetail () {
      const openId = getStorageSync('openId')
      const { fileName } = this.$route.query
      if (openId && fileName) {
        bookDetail({ openId, fileName }).then(res => {
          this.book = res.data.data
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
