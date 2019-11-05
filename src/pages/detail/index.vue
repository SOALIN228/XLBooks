<template>
  <div>
    <detail-book :book="book"></detail-book>
    <detail-stat :readers="book.readers"
                 :readerNum="book.readerNum"
                 :rankNum="book.rankNum"
                 :rankAvg="book.rankAvg"
    ></detail-stat>
    <detail-rate :rateValue="book.rateValue" @onRateChange="onRateChange"></detail-rate>
    <detail-contents :contents="contents" v-if="contents.length > 0" @readBook="readBook"></detail-contents>
  </div>
</template>

<script>
import DetailBook from '../../components/detail/detail-book'
import DetailStat from '../../components/detail/detail-stat'
import DetailRate from '../../components/detail/detail-rate'
import DetailContents from '../../components/detail/detail-contents'
import { getStorageSync } from '../../api/wechat'
import { bookDetail, bookRankSave, bookContents } from '../../api'

export default {
  name: 'Detail',
  components: {
    DetailContents,
    DetailRate,
    DetailStat,
    DetailBook
  },
  data () {
    return {
      book: {},
      contents: []
    }
  },
  mounted () {
    this.getBookDetail()
    this.getBookContents()
  },
  methods: {
    readBook (href) {
      console.log(href)
    },
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
    },
    getBookContents () {
      const { fileName } = this.$route.query
      if (fileName) {
        bookContents({ fileName }).then(res => {
          this.contents = res.data.data
          console.log(this.contents)
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
