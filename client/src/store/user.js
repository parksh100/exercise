import VueCookies from 'vue-cookies'

export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {} // 로그인 정보를 어떻게 저장할지가 관건이다. 정보를 넣기 위해서는 mutation setUser를 사용해야 한다.
    }
  },
  getters: {
    isLogin(state) {
      // if(state.userInfo.name){
      //   return true}
      //   else{return false}
      // }

      if (VueCookies.get('userInfo')) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    // vue-cookies 설치
    // vuex-persistedstate 설치
    setUser(state, userInfo) {
      // userInfo는 로그인 후 받아온 정보이다.
      state.userInfo = userInfo
      VueCookies.set('userInfo', userInfo, '8h') // 사용자 정보를 쿠키에 저장한다. 1시간 동안 유지한다.
    },
    logout(state) {
      this.state.userInfo = {} // vuex-persistedstate를 사용할때
      this.VueCookies.remove('userInfo') // vue-cookies를 사용할때
    }
  },
  actions: {
    // 비동기
    // 서버에 저장함.
  }
}
