<template>
  <div class="tag-wrapper" @click="onClick">
    <div class="tag">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-wrapper {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  background: #f7f7f9;
  border-radius: 16px;
  padding: 6px 17px;
  .tag {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #272e37;
  }
}
</style>
