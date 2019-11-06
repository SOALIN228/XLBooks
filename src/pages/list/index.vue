<template>
  <div>
    <search-table :data="data"></search-table>
  </div>
</template>

<script>
import SearchTable from '../../components/search/search-table'
import { searchList, setNavigationBarTitle } from '../../api'
import { showToast } from '../../api/wechat'

export default {
  name: 'List',
  components: {
    SearchTable
  },
  data () {
    return {
      data: [],
      page: 1
    }
  },
  mounted () {
    this.page = 1
    this.getSearchList()
    const { title } = this.$route.query
    setNavigationBarTitle(title)
  },
  onReachBottom () {
    this.page++
    this.getSearchList()
  },
  methods: {
    getSearchList () {
      const { key, text } = this.$route.query
      const params = {}
      if (key && text) {
        params[key] = text
      }
      params.page = this.page
      searchList(params).then(res => {
        const { data } = res.data
        if (data.length > 0) {
          this.data.push(...data)
        } else {
          showToast('别拉了，没了!')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
