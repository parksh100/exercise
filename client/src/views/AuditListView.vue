<template>
  <div></div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  computed: {
    user() {
      // return this.$store.state.user.user
      return this.$store.getters['user/isLogin']
    }
  },
  setup() {},
  created() {},
  mounted() {
    if (this.user.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/' })
    }
  },
  unmounted() {},
  methods: {}
}
</script>
