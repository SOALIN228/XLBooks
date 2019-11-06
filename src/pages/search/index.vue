<template>
  <div>
    <search-bar :focus="searchFocus"
                :hot-search="hotSearchKeyword"
                @onChange="onChange"
                @onClear="onClear"
                @onConfirm="onConfirm"
                ref="searchBar"
    ></search-bar>
    <tag-group header-text="热门搜索"
               btn-text="换一批"
               :value="hotSearchArray"
               @onBtnClick="changeHotSearch"
               @onTagClick="showBookDetail"
               v-if="hotSearchArray.length > 0 && !showList"
    ></tag-group>
    <tag-group header-text="历史搜索"
               btn-text="清空"
               :value="historySearch"
               @onBtnClick="clearHistorySearch"
               @onTagClick="searchKeyWord"
               v-if="historySearch.length > 0 && !showList"
    ></tag-group>
    <search-list :data="searchList" v-if="showList"></search-list>
  </div>
</template>

<script>
import SearchTable from '../../components/search/search-table'
import SearchList from '../../components/search/search-list'
import SearchBar from '../../components/home/search-bar'
import TagGroup from '../../components/base/tag-group'
import { getStorageSync, setStorageSync, showToast } from '../../api/wechat'
import { search, hotSearch } from '../../api'

export default {
  name: 'Search',
  components: {
    TagGroup,
    SearchBar,
    SearchList,
    SearchTable
  },
  data () {
    return {
      hotSearch: [],
      hotSearchKeyword: '',
      historySearch: [],
      searchList: {},
      searchFocus: true,
      openId: '',
      page: 1
    }
  },
  computed: {
    showList () {
      const key = Object.keys(this.searchList)
      return key.length > 0
    },
    hotSearchArray () {
      const _hotSearch = []
      this.hotSearch.forEach(item => _hotSearch.push(item.title))
      return _hotSearch
    }
  },
  mounted () {
    this.page = 1
    this.openId = getStorageSync('openId')
    hotSearch().then(res => {
      this.hotSearch = res.data.data
    })
    this.hotSearchKeyword = this.$route.query.hotSearch
    this.historySearch = getStorageSync('historySearch') || []
  },
  onPageScroll () {
    if (this.searchFocus) {
      this.searchFocus = false
    }
  },
  onReachBottom () {
    if (this.showList) {
      this.page++
      const searchWord = this.$refs.searchBar.getValue()
      search({
        keyword: searchWord,
        openId: this.openId,
        page: this.page
      }).then(res => {
        const { book } = res.data.data
        if (book && book.length > 0) {
          this.searchList.book.push(...book)
        } else {
          showToast('别拉了，没了!')
        }
      })
    }
  },
  methods: {
    onConfirm (keyword) {
      if (!keyword || keyword.trim().length === 0) { // 使用默认热门搜索
        keyword = this.hotSearchKeyword
        this.$refs.searchBar.setValue(keyword)
      }

      this.onSearch(keyword)

      if (!this.historySearch.includes(keyword)) { // 写入历史记录
        this.historySearch.push(keyword)
        setStorageSync('historySearch', this.historySearch)
      }
      this.searchFocus = false
    },
    onClear () {
      this.page = 1
      this.searchList = {}
    },
    onChange (keyword) {
      if (!keyword || keyword.trim().length === 0) {
        this.searchList = {}
        return
      }
      this.page = 1
      this.onSearch(keyword)
    },
    onSearch (keyword) {
      search({
        keyword,
        openId: this.openId,
        page: this.page
      }).then(res => {
        this.searchList = res.data.data
      })
    },
    changeHotSearch () {
      hotSearch().then(res => {
        this.hotSearch = res.data.data
      })
    },
    showBookDetail (text, index) {
      console.log('showBookDetail', index)
    },
    clearHistorySearch () {
      this.historySearch = []
      setStorageSync('historySearch', this.historySearch)
    },
    searchKeyWord (text) {
      this.$refs.searchBar.setValue(text)
      this.onSearch(text)
    }
  }
}
</script>

<style scoped>

</style>
