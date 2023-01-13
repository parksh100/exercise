<template>
  <header>
    <nav
      class="navbar navbar-expand-md navbar-dark fixed-top bg-dark d-print-none"
    >
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
                :class="{ active: $route.path == '/' }"
                aria-current="page"
                @click="goToMenu('/')"
                role="button"
                >홈페이지</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/dashboard' }"
                @click="goToMenu('/dashboard')"
                role="button"
                >대시보드
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/customer/create' }"
                @click="goToMenu('/customer/create')"
                role="button"
                >고객사등록</a
              >
            </li>
            <li class="nav-item" v-if="userInfo.role === 'admin'">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/auditor' }"
                @click="goToMenu('/auditor')"
                role="button"
                >심사원현황</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/customer/list/auditor' }"
                @click="goToMenu('/customer/list/auditor')"
                role="button"
                >고객사현황</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/customer/cert/list' }"
                @click="goToMenu('/customer/cert/list')"
                role="button"
                >인증심사현황</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/report/list' }"
                @click="goToMenu('/report/list')"
                role="button"
                >보고서작성현황</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/mgt/signal' }"
                @click="goToMenu('/mgt/signal')"
                role="button"
                >심사진행현황</a
              >
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/report/upload' }"
                @click="goToMenu('/report/upload')"
                role="button"
                >보고서업로드</a
              >
            </li> -->
          </ul>

          <div class="d-flex">
            <span v-if="userInfo.name" class="text-white pt-2 me-4"
              >{{ userInfo.name }} 위원님</span
            >
            <button
              class="btn btn-outline-success"
              v-if="userInfo.name"
              @click="logout"
            >
              로그아웃
            </button>
            <button
              class="btn btn-outline-success"
              v-else
              @click="goToMenu('/login')"
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo // store/index.js/user.js/userInfo정보 가져옴
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
    //   kakaoLogin() {
    //     window.Kakao.Auth.login({
    //       scope: 'profile_nickname, account_email',
    //       success: this.getProfile
    //     })
    //   },
    //   getProfile(authObj) {
    //     console.log(authObj)
    //     window.Kakao.API.request({
    //       url: '/v2/user/me',
    //       success: (res) => {
    //         const kakaoAccount = res.kakao_account
    //         console.log(kakaoAccount)
    //         this.login(kakaoAccount)

    //         alert('로그인 성공')
    //       }
    //     })
    //   },
    //   async login(kakaoAccount) {
    //     await this.$post('/login', {
    //       param: [
    //         {
    //           usr_email: kakaoAccount.email,
    //           user_nickname: kakaoAccount.profile.nickname,
    //           user_role: null
    //         },
    //         { user_nickname: kakaoAccount.profile.nickname, user_role: null }
    //       ]
    //     })
    //     this.$store.commit('user', kakaoAccount)
    //   },
    //   kakaoLogout() {
    //     window.Kakao.Auth.logout((res) => {
    //       console.log(res)
    //       this.$store.commit('user', {})
    //       alert('로그아웃 성공')
    //     })
    //     this.$router.push({ path: '/' })
    //   }
    logout() {
      this.$store.commit('user/setUser', {})

      this.$router.push({ path: '/login' })
    }
  }
}
</script>
<style>
header {
  margin-bottom: 70px;
}
</style>
