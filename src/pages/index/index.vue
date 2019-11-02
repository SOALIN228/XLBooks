<template>
  <div>
    <search-bar disabled @onClick="onSearchBarClick"/>
    <home-card></home-card>
  </div>
</template>

<script>
import SearchBar from '_c/home/search-bar'
import HomeCard from '_c/home/home-card'

export default {
  name: 'Index',
  components: {
    SearchBar,
    HomeCard
  },
  data () {
    return {}
  },
  methods: {
    onSearchBarClick () {
      // 跳转搜索页
    }
  }
}
</script>

<style lang="scss" scoped>
  .msg {
    color: red;
  }
</style>
