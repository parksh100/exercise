<template>
  <div class="container">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        value="QMS"
        v-model="checked"
      />
      <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox2"
        value="EMS"
        v-model="checked"
      />
      <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox3"
        value="OHSMS"
        v-model="checked"
      />
      <label class="form-check-label" for="inlineCheckbox3">3</label>
    </div>
    <p>{{ checked }}</p>
    <button class="btn btn-primary" @click="doSave">저장하기</button>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      const data = this.$store.state.user
      return data
      // return this.$store.state.user.user
      // return this.$store.user.userInfo
    }
  },
  components: {},
  data() {
    return {
      checked: []
    }
  },
  setup() {},
  created() {},
  async mounted() {
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }

    this.list = await this.$get('/api/auditor')
    // console.log(r)
  },
  unmounted() {},
  methods: {
    async doSave() {
      console.log(this.checked)
      const result = await this.$post('/api/checkbox', {
        param: [this.checked]
      })
      console.log(result)
    }
  }
}
</script>
