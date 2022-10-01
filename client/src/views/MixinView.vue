<template>
  <div>믹스인페이지</div>
</template>
<script>
import Axios from '@/mixins/axios.js'
export default {
  mixins: [Axios],
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log('컴포넌트에서 출력')
    this.getAuditor()
  },
  unmounted() {},
  methods: {
    async getAuditor() {
      const auditors = await this.get('http://localhost:3000/api/auditor')
      console.log(auditors)
    }
  }
}
</script>
