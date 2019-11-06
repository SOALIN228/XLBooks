<template>
  <div>
    <search-table :data="data"></search-table>
  </div>
</template>

<script>
import SearchTable from '../../components/search/search-table'
import { searchList } from '../../api'

export default {
  name: 'List',
  components: {
    SearchTable
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.getSearchList()
  },
  methods: {
    getSearchList () {
      const { key, text } = this.$route.query
      const params = {}
      if (key && text) {
        params[key] = text
      }
      searchList(params).then(res => {
        this.data = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
