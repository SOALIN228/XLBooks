<template>
  <div class="search-bar" @click="onSearchBarClick">
    <div class="search-bar-wrapper">
      <van-icon name="search" class="search" size="16px" color="#858c96"></van-icon>
      <input type="text"
             class="search-bar-input"
             :focus="focus"
             :maxlength="limit"
             :disabled="disabled"
             :placeholder="hotSearch.length === 0 ? '搜索' : hotSearch"
             placeholder-style="color: #adb4be"
             v-model="searchWord"
             @input="onChange"
             confirm-type="search"
             @confirm="onConfirm"
      >
      <van-icon name="clear" class="clear" size="16px" color="#858c96"
                @click="onClearClick"
                v-if="searchWord.length > 0"
      ></van-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearchBarClick () {
      this.$emit('onClick')
    },
    onClearClick () {
      this.searchWord = ''
      this.$emit('onClear')
    },
    onChange (e) {
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm (e) {
      const { value } = e.mp.detail
      this.$emit('onConfirm', value)
    },
    setValue (v) {
      this.searchWord = v
    },
    getValue () {
      return this.searchWord
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-bar {
    padding: 15px 15.5px;

    .search-bar-wrapper {
      display: flex;
      align-items: center;
      height: 40px;
      box-sizing: border-box;
      background: #f5f7f9;
      border-radius: 20px;
      padding: 12px 17px;

      .search-bar-input {
        flex: 1;
        margin: 0 12px;
      }

      .search,
      .clear {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
</style>
