<template>
  <div>
    <search-bar disabled @onClick="onSearchBarClick" :hot-search="hotSearch"/>
    <home-card :data="homeCard"></home-card>
    <home-banner img="http://www.youbaobao.xyz/book/res/bg.jpg"
                 title="mpvue练手项目"
                 subTitle="立即体验"
                 @onClick="onBannerClick"
    ></home-banner>
    <div style="margin-top: 23px">
      <home-book title="为你推荐"
                 :data="recommend"
                 :row="1"
                 :col="3"
                 mode="col"
                 btnText="换一批"
                 @onMoreClick="recommendChange('recommend')"
                 @onBookClick="onHomeBookClick"
      ></home-book>
    </div>
    <div style="margin-top: 23px">
      <home-book title="免费阅读"
                 :data="freeRead"
                 :row="2"
                 :col="2"
                 mode="row"
                 btnText="换一批"
                 @onMoreClick="recommendChange('freeRead')"
                 @onBookClick="onHomeBookClick"
      ></home-book>
    </div>
    <div style="margin-top: 23px">
      <home-book title="当前最热"
                 :data="hotBook"
                 :row="1"
                 :col="4"
                 mode="col"
                 btnText="换一批"
                 @onMoreClick="recommendChange('hotBook')"
                 @onBookClick="onHomeBookClick"
      ></home-book>
    </div>
    <div style="margin-top: 23px">
      <home-book title="分类"
                 :data="category"
                 :row="2"
                 :col="2"
                 mode="category"
                 btnText="查看全部"
                 @onMoreClick="onCategoryMoreClick"
                 @onBookClick="onHomeBookClick"
      ></home-book>
    </div>
  </div>
</template>

<script>
import SearchBar from '_c/home/search-bar'
import HomeCard from '_c/home/home-card'
import HomeBanner from '_c/home/home-banner'
import HomeBook from '_c/home/home-book'
import { getHomeData, recommend, freeRead, hotBook } from '@/api/home'

export default {
  name: 'Home',
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook
  },
  data () {
    return {
      hotSearch: '',
      homeCard: {},
      banner: [],
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: []
    }
  },
  mounted () {
    this.getHomeData()
  },
  methods: {
    getHomeData () {
      getHomeData({ openId: '1234' }).then(res => {
        const {
          data: {
            hotSearch: {
              keyword
            },
            shelf,
            banner,
            recommend,
            freeRead,
            hotBook,
            category,
            shelfCount
          }
        } = res.data
        this.hotSearch = keyword
        this.banner = banner
        this.recommend = recommend
        this.freeRead = freeRead
        this.hotBook = hotBook
        this.category = category
        this.homeCard = {
          bookList: shelf,
          num: shelfCount,
          userInfo: {
            avatar: 'https://www.youbaobao.xyz/mpvue-res/logo.jpg',
            nickname: '米老鼠'
          }
        }
      })
    },
    onSearchBarClick () {
    },
    recommendChange (key) {
      switch (key) {
        case 'recommend':
          recommend().then(res => {
            this.recommend = res.data.data
          })
          break
        case 'freeRead':
          freeRead().then(res => {
            this.freeRead = res.data.data
          })
          break
        case 'hotBook':
          hotBook().then(res => {
            this.hotBook = res.data.data
          })
          break
      }
    },
    onCategoryMoreClick () {
      console.log('onCategoryMoreClick')
    },
    onHomeBookClick () {
      console.log('onHomeBookClick')
    }
  }
}
</script>

<style lang="scss" scoped>
  .msg {
    color: red;
  }
</style>
