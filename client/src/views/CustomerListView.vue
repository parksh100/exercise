<template>
  <div></div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
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
    if (this.user.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/' })
    }
  },
  unmounted() {},
  methods: {}
}
</script>
