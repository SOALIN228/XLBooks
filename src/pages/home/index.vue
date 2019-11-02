<template>
  <div>
    <search-bar disabled @onClick="onSearchBarClick"/>
    <home-card></home-card>
    <home-banner img="http://www.youbaobao.xyz/book/res/bg.jpg"
                 title="mpvue练手项目"
                 subTitle="立即体验"
                 @onClick="onBannerClick"
    ></home-banner>
  </div>
</template>

<script>
import SearchBar from '_c/home/search-bar'
import HomeCard from '_c/home/home-card'
import HomeBanner from '_c/home/home-banner'

export default {
  name: 'Home',
  components: {
    SearchBar,
    HomeCard,
    HomeBanner
  },
  data () {
    return {}
  },
  methods: {
    onSearchBarClick () {
      // 跳转搜索页
    },
    onBannerClick () {
      console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .msg {
    color: red;
  }
</style>
