<template>
  <div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="header-text">{{headerText}}</div>
      <div class="header-btn" @click="onBtnClick">{{btnText}}</div>
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(text, index) in value" :key="index">
        <tag :text="text" @onClick="onTagClick(text, index)"></tag>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from './tag'

export default {
  name: 'TagGroup',
  components: {
    Tag
  },
  props: {
    headerText: String,
    btnText: String,
    value: Array
  },
  data () {
    return {}
  },
  methods: {
    onTagClick (text, index) {
      this.$emit('onTagClick', text, index)
    },
    onBtnClick () {
      this.$emit('onBtnClick')
    }
  }
}
</script>

<style lang="scss" scoped>
 .tag-group-wrapper {
   margin-top: 35px;
   width: 100%;
   padding-bottom: 10px;
   .tag-group-header {
     display: flex;
     justify-content: space-between;
     padding: 0 16.5px;
     font-size: 14px;
     line-height: 20px;
     .header-text {
       color: #333;
     }
     .header-btn {
       color: #3696ef;
     }
   }
   .tag-group {
     width: 100%;
     display: flex;
     flex-flow: row wrap;
     padding: 4px 10px 0 10px;
     box-sizing: border-box;
     .tag-group-inner {
       max-width: 100%;
       box-sizing: border-box;
       padding: 12px 6px 0 6px;
     }
   }
 }
</style>
