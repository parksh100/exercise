<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">KAI CERTIFICATION</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/home' }"
                aria-current="page"
                @click="goToMenu('/home')"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/auditor' }"
                @click="goToMenu('/auditor')"
                >Auditor</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/customer/list' }"
                @click="goToMenu('/customer/list')"
                >Customer</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/customer/create' }"
                @click="goToMenu('/customer/create')"
                >인증심사신청</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/order/create' }"
                @click="goToMenu('/order/create')"
                >Order</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/shipper' }"
                @click="goToMenu('/shipper')"
                >Shipper</a
              >
            </li>
            <li v-if="user.email == undefined">
              <button class="btn btn-primary" @click="kakaoLogin">
                로그인
              </button>
            </li>
            <li v-else>
              <button class="btn btn-danger" @click="kakaoLogout">
                로그아웃
              </button>
            </li>
          </ul>
          <!-- <div class="d-flex">
            <span v-if="userInfo.name" class="text-white">{{
              userInfo.name
            }}</span>
            <button class="btn btn-outline-success" @click="logout">
              로그아웃
            </button>
          </div> -->
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    goToMenu(path) {
      this.$router.push({ path: path })
    },
    // logout() {
    //   this.$store.commit('user/logout')

    //   this.$router.push({ path: '/' })
    // }
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email',
        success: this.getProfile
      })
    },
    getProfile(authObj) {
      console.log(authObj)
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoAccount = res.kakao_account
          console.log(kakaoAccount)
          this.login(kakaoAccount)

          alert('로그인 성공')
        }
      })
    },
    async login(kakaoAccount) {
      await this.$post('/login', {
        param: [
          {
            usr_email: kakaoAccount.email,
            user_nickname: kakaoAccount.profile.nickname,
            user_role: null
          },
          { user_nickname: kakaoAccount.profile.nickname, user_role: null }
        ]
      })
      this.$store.commit('user', kakaoAccount)
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((res) => {
        console.log(res)
        this.$store.commit('user', {})
        alert('로그아웃 성공')
      })
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
header {
  margin-bottom: 70px;
}
</style>
