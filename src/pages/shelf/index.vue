<template>
  <div>
    <shelf-user-info :user-info="userInfo" :read-day="readDay" :num="shelfList.length"></shelf-user-info>
    <shelf-list :shelfList="shelfList"></shelf-list>
  </div>
</template>

<script>
import ShelfUserInfo from '../../components/shelf/shelf-user-info'
import { getStorageSync } from '../../api/wechat'
import { bookShelf, userDay } from '../../api'
import ShelfList from '../../components/shelf/shelf-list'

export default {
  name: 'Shelf',
  components: {
    ShelfList,
    ShelfUserInfo
  },
  data () {
    return {
      userInfo: {},
      readDay: 0,
      shelfList: []
    }
  },
  onShow () {
    this.userInfo = getStorageSync('userInfo')
    const openId = getStorageSync('openId')
    userDay({ openId }).then(res => {
      this.readDay = res.data.data.day
    })
    bookShelf({ openId }).then(res => {
      this.shelfList = res.data.data
      this.shelfList.push({})
    })
  }
}
</script>

<style scoped>

</style>
