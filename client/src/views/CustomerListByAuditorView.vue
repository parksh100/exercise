<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          @keyup.enter="getSearch"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-outline-primary me-1" @click="getSearch">
          조회
        </button>
        <button class="btn btn-outline-success me-1" @click="goToList">
          생성
        </button>
        <button class="btn btn-outline-dark me-1" @click="doExcel">
          엑셀다운로드
        </button>
      </div>
    </div>
    <table
      class="table table-bordered"
      style="table-layout: fixed; font-size: 15px"
    >
      <thead>
        <tr class="bg-light table-group-divider">
          <!-- <th width="4%">ID</th> -->
          <th style="width: 20%">회사명</th>
          <!-- <th style="width: 7%">인증유형</th> -->
          <th style="width: 7%">구분</th>
          <th style="width: 7%">인원수</th>
          <th style="width: 26%">인증범위</th>
          <th style="width: 10%">심사원</th>
          <th style="width: 5%">상태</th>
          <th style="width: 10%">신청일</th>
          <th style="width: 10%">바로가기</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr :key="item.customer_id" v-for="item in listByAuditor.data">
          <!-- <td>{{ item.customer_id }}</td> -->
          <td>
            <!-- <a
              @click="goToDetail(item.customer_id)"
              style="text-decoration: underline"
              role="button"
              >{{ item.name_ko }}</a
            > -->
            <a
              @click="goToDetail(item.business_no)"
              style="text-decoration: underline"
              role="button"
              >{{ item.name_ko }}</a
            >
          </td>
          <!-- <td>{{ item.certification_type }}</td> -->
          <td style="word-break: break-all">
            {{ item.customer_type }}
          </td>
          <td>{{ item.employee_count }}</td>
          <td>{{ item.scope_ko }}</td>
          <td>{{ item.auditor_name }}</td>
          <td>{{ item.status_yn }}</td>
          <td>
            {{ item.customer_created_date.substring(0, 10) }}
          </td>
          <td>
            <!-- <button
              class="btn btn-primary btn-sm me-1"
              @click="goToDetail(item.customer_id)"
            >
              상세보기
            </button> -->
            <!-- <button
              class="btn btn-danger btn-sm me-1"
              @click="doDelete(item.customer_id)"
            >
              삭제
            </button> -->
            <!-- <p>{{ item.customer_id }}</p> -->
            <button
              class="btn btn-primary btn-sm me-1"
              @click="goToApply(item.business_no)"
            >
              심사신청
            </button>
            <!-- <router-link
              :to="{
                name: 'CertCreateView',
                params: { customer_id: item.customer_id }
              }"
              class="btn btn-primary btn-sm me-1"
              >심사신청</router-link
            > -->

            <!--<button
              class="btn btn-info btn-sm me-1"
              @click="goToCR(item.customer_id)"
            >
              계약검토
            </button>

            <button class="btn btn-success btn-sm me-1">심사계획서</button>
            <button
              class="btn btn-warning btn-sm me-1"
              @click="
                changeStatus(
                  item.customer_id,
                  item.status_yn === 'Y' ? 'N' : 'Y'
                )
              "
            >
              {{ item.status_yn === 'Y' ? '사용중지' : '사용' }}
            </button> -->
          </td>
        </tr>
      </tbody>
    </table>
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
      headers: [
        { title: '고객구분', key: 'customer_type' },
        { title: '국문상호', key: 'name_ko' },
        { title: '영문상호', key: 'name_en' },
        { title: '사업자등록번호', key: 'business_no' },
        { title: '대표자명', key: 'ceo_name' },
        { title: '대표자휴대번호', key: 'ceo_phone' },
        { title: '대표전화번호', key: 'phone' },
        { title: '대표팩스번호', key: 'fax' },
        { title: '국문주소', key: 'address_ko' },
        { title: '상세주소', key: 'address_detail' },
        { title: '담당자명/직위', key: 'contact_name' },
        { title: '담당자이메일', key: 'contact_email' },
        { title: '조직의범위', key: 'organization_scope' },
        { title: '설계개발유무', key: 'design' },
        { title: '종업원수', key: 'employee_count' },
        { title: '인증범위', key: 'scope_ko' },
        { title: '인증범위활동', key: 'activity' },
        { title: 'IAF코드', key: 'iaf_code' },
        { title: '적용제외유무', key: 'exclusion' },
        { title: '건설면허보유여부', key: 'construction_license' },
        { title: '심사원명', key: 'auditor_name' },
        { title: '인증상태', key: 'status_yn' },
        { title: '생성일', key: 'created_date' }
      ],
      id: '',
      list: [],
      listByAuditor: [],
      listByEmailAndSearchName: [],
      auditor_email: '',
      searchName: ''
      // selectedItem: {
      //   auditor_id: -1,
      //   auditor_name: '',
      //   auditor_scheme: '',
      //   auditor_grade: '',
      //   auditor_email: '',
      //   auditor_pw: ''
      // }
    }
  },
  setup() {},
  created() {
    // this.id = this.$route.query.customer_id
    // console.log('id', this.id)
  },
  async mounted() {
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }

    // this.list = await this.$get('/api/customer/all')
    // console.log('list', this.list)
    // this.listByAuditor = await this.$post('/api/customer/list/auditor', {
    //   param: this.user.userInfo.email
    // })
    // console.log('listByAuditor', this.listByAuditor)
    console.log('userEmail', this.user.userInfo.email)
    console.log('searchName', this.searchName)

    if (this.user.userInfo.role === 'auditor') {
      this.getSearch()
    } else {
      this.getAllCustomerSearch()
    }
  },
  unmounted() {},
  methods: {
    async getSearch() {
      const loader = this.$loading.show({ canCancel: false })
      console.log(this.user.userInfo.email)
      console.log(this.user.userInfo.role)
      const searchName = `%${this.searchName.toLowerCase()}%`
      console.log(searchName)

      this.listByAuditor = await this.$post('/api/customer/auditor/search', {
        param: [searchName, this.user.userInfo.email]
      })

      console.log('listByAuditor', this.listByAuditor)

      loader.hide()
    },

    async getAllCustomerSearch() {
      const loader = this.$loading.show({ canCancel: false })
      console.log(this.user.userInfo.email)
      const searchName = `%${this.searchName.toLowerCase()}%`
      console.log(searchName)

      this.listByAuditor = await this.$post('/api/customer/search', {
        param: [searchName]
      })

      console.log('listByAuditor', this.listByAuditor)

      loader.hide()
    },

    // async getList() {
    //   const loader = this.$loading.show({ canCancel: false })
    //   console.log(this.user.userInfo.email)

    //   this.listByAuditor = await this.$get(
    //     `/api/customer/${this.user.userInfo.email}`,
    //     {
    //       param: `%${this.searchName.toLowerCase()}%`
    //     }
    //   )

    //   console.log(this.listByAuditor)
    //   // this.list = (
    //   //   await this.$post('/api/customer/search', {
    //   //     param: `%${this.searchName.toLowerCase()}%`
    //   //   })
    //   // ).data
    //   // console.log(this.list)
    //   loader.hide()
    // },

    goToDetail(id) {
      // console.log('Detail로 넘긴 customer_id', id)
      console.log('Detail로 넘긴 cid', id.replace(/[^0-9]/g, ''))

      this.$router.push({
        path: '/customer/detail',
        query: { id: id.replace(/[^0-9]/g, '') }
      })
    },

    // goToCert(id) {
    //   // go to /cert/post with customer_id
    //   this.$router.push({
    //     path: '/customer/cert/list',
    //     query: { customer_id: id }
    //   })
    // this.$router.push({
    //   path: '/cert/post',
    //   query: { customer_id: id }
    // })
    //   console.log('심사신청으로 넘긴 id :', id)
    // },

    goToCR(id) {
      this.$router.push({
        path: '/customer/cr/list',
        query: { customer_id: id }
      })
    },
    // query방식으로 넘기기
    goToApply(id) {
      console.log(id)
      this.$router.push({
        path: '/customer/cert',
        query: { id: id }
      })
    },
    // params방식으로 넘기기
    // goToApply(id) {
    //   console.log(id)
    //   this.$router.push({
    //     name: 'CertCreateView',
    //     params: { id: id }
    //   })
    //   console.log('심사신청으로 넘긴 id: ', id)
    // },

    // router-link로 넘기기

    doExcel() {
      this.$ExcelFromTable(this.headers, this.listByAuditor, 'customers', {})
    },
    doDelete(id) {
      this.$swal({
        title: '심사원정보를 정말 삭제 하시겠습니까?',
        text: '삭제된 데이터는 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '삭제'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$delete(`/api/customer/${id}`)
          console.log(r)

          loader.hide()

          if (r.status === 200) {
            this.$swal('심사원 정보가 삭제 되었습니다.')
            this.getList()
          } else if (r.status === 501) {
            this.$swal(
              `삭제하려는 심사원의 심사정보가 ${r.count}건 존재합니다.`
            )
          }
        }
      })
    },
    changeStatus(id, useYN) {
      let title = '고객사 인증을 취소하시겠습니까?'
      if (useYN === 'Y') {
        title = '고객사 인증을 \n다시 사용하시겠습니까?'
      }
      this.$swal({
        title: title,
        // text: '삭제된 데이터는 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '상태변경'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$put(`/api/customer/${id}`, {
            param: { status_yn: useYN }
          })
          console.log(r)

          loader.hide()

          if (r.status === 200) {
            this.$swal('카테고리가 상태가 \n변경 되었습니다.')
            this.getList()
          }
        }
      })
    },
    doSave() {
      this.$swal({
        title: '심사원 정보를 수정 하시겠습니까?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '저장'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$put(
            `/api/auditor/${this.selectedItem.auditor_id}`,
            {
              param: {
                auditor_name: this.selectedItem.auditor_name,
                auditor_scheme: this.selectedItem.auditor_scheme,
                auditor_grade: this.selectedItem.auditor_grade,
                auditor_email: this.selectedItem.auditor_email,
                auditor_pw: this.selectedItem.auditor_pw
              }
            }
          )

          loader.hide()

          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('심사원 정보가 저장되었습니다.')
            this.getList()
          }
        }
      })
    },
    doCreate() {
      this.$swal({
        title: '심사원정보를 생성 하시겠습니까?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '생성'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$post('/api/auditor', {
            param: {
              auditor_name: this.selectedItem.auditor_name,
              auditor_scheme: this.selectedItem.auditor_scheme,
              auditor_grade: this.selectedItem.auditor_grade,
              auditor_email: this.selectedItem.auditor_email,
              auditor_pw: this.selectedItem.auditor_pw
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('심사원정보가 생성 되었습니다.')
            this.getList()
          }
        }
      })
    },
    openModal(id) {
      if (id === undefined) {
        this.selectedItem = {
          auditor_id: -1,
          auditor_name: '',
          auditor_scheme: '',
          auditor_grade: '',
          auditor_email: '',
          auditor_pw: ''
        }
      } else {
        this.selectedItem = JSON.parse(
          JSON.stringify(this.list.filter((item) => item.auditor_id === id)[0])
        )
      }
    },
    clearSelectedItem() {
      this.selectedItem = {
        auditor_id: -1,
        auditor_name: '',
        auditor_scheme: '',
        auditor_grade: '',
        auditor_email: '',
        auditor_pw: ''
      }
    },
    goToList() {
      this.$router.push({ path: '/customer/create' })
    }
  }
}
</script>
<style scoped>
th {
  text-align: center;
}
</style>
