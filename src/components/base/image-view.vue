<template>
  <div class="image-view" @click="onClick" :style="{height}">
    <img :src="src"
         :class="round ? 'round image' : 'image'"
         :style="{height}"
         :mode="mode"
         :lazy-load="lazyLoad"
         @load="onLoad"
         @error="onError"
         v-show="!isLoading && !error"
    >
    <img src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg"
         :class="round ? 'round image' : 'image'"
         :style="{height}"
         :mode="mode"
         :lazy-load="lazyLoad"
         v-show="isLoading || error"
    >
  </div>
</template>

<script>
export default {
  name: 'ImageView',
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'widthFix'
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      isLoading: true,
      error: false
    }
  },
  watch: {
    src (newValue, oldValue) {
      if (newValue && newValue.length > 0 && newValue !== oldValue) {
        this.isLoading = true
        this.error = false
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    },
    onLoad () {
      this.isLoading = false
      this.error = false
    },
    onError () {
      this.error = true
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-view {
    width: 100%;

    .image {
      width: 100%;

      &.round {
        border-radius: 50%;
      }
    }
  }
</style>
