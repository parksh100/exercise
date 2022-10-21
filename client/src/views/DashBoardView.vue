<template>
  <div>
    <h1>Dashboard Page</h1>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      const data = this.$store.state.user
      console.log(data)
      return data
      // return this.$store.state.user.user
      // return this.$store.user.userInfo
    }
  },
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
  },
  unmounted() {},
  methods: {}
}
</script>
