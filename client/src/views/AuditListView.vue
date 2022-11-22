<template>
  <div class="container">
    <h3 class="mb-4 fw-bold text-center">인증심사현황</h3>
    <hr />
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          @keyup.enter="getList"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-outline-primary me-1" @click="getList">
          조회
        </button>
        <button class="btn btn-outline-success me-1" @click="getList">
          생성
        </button>
        <button class="btn btn-outline-dark me-1" @click="doExcel">
          엑셀다운로드
        </button>
      </div>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <!-- <th width="4%">ID</th> -->
          <th style="width: 20%">회사명</th>
          <th style="width: 10%">심사번호</th>
          <th style="width: 10%">심사유형</th>
          <th style="width: 10%">심사차수</th>
          <th style="width: 10%">심사비</th>
          <th style="width: 10%">심사원</th>
          <th style="width: 10%">등록일</th>
          <th style="width: 20%">비고</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr :key="item.customer_id" v-for="item in list">
          <!-- <td>{{ item.customer_id }}</td> -->
          <td>
            <!-- <a
              @click="goToDetail(item.customer_id)"
              style="text-decoration: underline"
              role="button"
              >{{ item.name_ko }}</a
            > -->
            {{ item.name_ko }}
          </td>
          <td>{{ item.audit_no }}</td>
          <td>{{ item.audit_type }}</td>
          <td>{{ item.audit_degree }}</td>
          <td>{{ $convertNumberFormat(item.audit_fee, '#,###') }}원</td>
          <td>{{ item.audit_auditor }}</td>
          <td>{{ item.created_date.substr(0, 10) }}</td>
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
            <button
              class="btn btn-primary btn-sm me-1"
              @click="goToAuditDetail(item.audit_id)"
            >
              상세보기
            </button>
            <!-- <button
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
      return data
      // return this.$store.state.user.user
      // return this.$store.user.userInfo
    }
  },
  components: {},
  data() {
    return {
      headers: [
        { title: 'ID', key: 'customer_id' },
        { title: '회사명', key: 'name_ko' },
        { title: '인증유형', key: 'certification_type' },
        { title: '인증표준', key: 'certification_standard' },
        { title: '대표자명', key: 'ceo_name' },
        { title: '종업원수', key: 'employee_count' },
        { title: '인증범위', key: 'scope_ko' },
        { title: '담당자명', key: 'contact_name' },
        { title: '심사원명', key: 'auditor_name' },
        { title: '인증상태', key: 'status_yn' },
        { title: '생성일', key: 'created_date' }
      ],
      list: [],
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
  created() {},
  async mounted() {
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }

    this.list = await this.$get('/api/customer/cert/list')
    // this.list = await this.$get('/api/customer')
    // this.customer = await this.$get('/api/customer')
    console.log(this.list)
  },
  unmounted() {},
  methods: {
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = (
        await this.$post('/api/customer/cert/list/search', {
          param: `%${this.searchName.toLowerCase()}%`
        })
      ).data
      console.log(this.list)
      loader.hide()
    },
    goToDetail(id) {
      this.$router.push({
        path: '/customer/detail',
        query: { customer_id: id }
      })
    },
    goToCR(id) {
      this.$router.push({
        path: '/customer/cr',
        query: { customer_id: id }
      })
    },
    goToCrDetail(id) {
      this.$router.push({
        path: '/customer/cr/detail',
        query: { customer_id: id }
      })
    },
    goToAuditDetail(id) {
      console.log(id)
      this.$router.push({
        path: '/customer/cert/detail',
        query: { audit_id: id }
      })
    },
    // goToAuditDetail(id) {
    //   this.$router.push({
    //     path: '/customer/cert/detail',
    //     query: { customer_id: id }
    //   })
    // },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.list, 'customers', {})
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
