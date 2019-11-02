<template>
  <div>
    <span class="msg">hello</span>
    <van-button type="primary" @click="jump">按钮</van-button>
  </div>
</template>

<script>
import { get } from '@/utils/request'

export default {
  data () {
    return {}
  },
  methods: {
    jump () {
      get('https://www.baidu.com').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .msg {
    color: red;
  }
</style>
