<template>
  <div class="container">
    <div class="col mb-3">
      <div class="text-center">
        <h1 class="fw-bold">인증심사현황</h1>
      </div>
      <hr />
    </div>

    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          @keyup.enter="SearchFunction"
          placeholder="Name"
        />
      </div>

      <div class="col-12">
        <button class="btn btn-outline-primary me-1" @click="SearchFunction">
          조회
        </button>
        <button class="btn btn-outline-success me-1" @click="goToList">
          생성
        </button>
        <button class="btn btn-outline-dark me-1" @click="doExcel">
          엑셀다운로드
        </button>
      </div>
      <small class="text-end"
        >※ 심사원이 등록한 전체 심사정보현황입니다. S2심사 시작일을 기준
        최신순으로 정렬되며, 회사명으로 조회가능합니다.</small
      >
    </div>
    <table
      class="table table-bordered"
      style="table-layout: fixed; font-size: 15px"
      v-if="this.user.userInfo.role === 'auditor'"
    >
      <thead>
        <tr class="bg-light table-group-divider">
          <!-- <th width="4%">ID</th> -->
          <th style="width: 13%">심사번호</th>
          <th style="width: 15%">회사명</th>
          <!-- <th style="width: 7%">인증유형</th> -->
          <th style="width: 15%; word-break: break-all">표준</th>
          <th style="width: 9%">유형</th>
          <th style="width: 10%">시작일</th>
          <th style="width: 10%">종료일</th>
          <th style="width: 8%">심사원</th>
          <th style="width: 10%">심사비</th>
          <th style="width: 10%">바로가기</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr
          :key="item.customer_id"
          v-for="item in listByEmailAndSearchName.data"
        >
          <td style="word-break: break-all">
            <a
              @click="goToDetailAudit(item.audit_no)"
              class="text-decoration-underline"
              role="button"
              >{{ item.audit_no }}</a
            >
          </td>
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
              class="text-decoration-underline"
              role="button"
              >{{ item.name_ko }}</a
            >
          </td>
          <!-- <td>{{ item.certification_type }}</td> -->
          <td style="word-break: break-all">{{ item.audit_standard }}</td>
          <td>{{ item.audit_type + item.audit_degree }}</td>
          <td>
            {{ $convertDateFormat(item.audit_s2_start, 'YYYY-MM-DD') }}
          </td>
          <td>
            {{ $convertDateFormat(item.audit_s2_end, 'YYYY-MM-DD') }}
          </td>
          <td>{{ item.auditor_name }}</td>
          <td class="text-end">
            {{ $convertNumberFormat(item.audit_fee, '#,###') }}원
          </td>
          <td>
            <button
              class="btn btn-primary btn-sm me-1"
              @click="goToDetailAudit(item.audit_no)"
            >
              보고서작성
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- admin Table -->
    <table
      class="table table-bordered"
      style="table-layout: fixed; font-size: 15px"
      v-if="this.user.userInfo.role === 'admin'"
    >
      <thead>
        <tr class="bg-light table-group-divider">
          <!-- <th width="4%">ID</th> -->
          <th style="width: 13%">심사번호</th>
          <th style="width: 15%">회사명</th>
          <!-- <th style="width: 7%">인증유형</th> -->
          <th style="width: 15%; word-break: break-all">표준</th>
          <th style="width: 9%">유형</th>
          <th style="width: 10%">시작일</th>
          <th style="width: 10%">종료일</th>
          <th style="width: 8%">심사원</th>
          <!-- <th style="width: 10%">심사비</th> -->
          <th style="width: 40%">바로가기</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr
          :key="item.customer_id"
          v-for="item in listByEmailAndSearchName.data"
        >
          <td style="word-break: break-all">
            <a
              @click="goToDetailAudit(item.audit_no)"
              class="text-decoration-underline"
              role="button"
              >{{ item.audit_no }}</a
            >
          </td>
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
              class="text-decoration-underline"
              role="button"
              >{{ item.name_ko }}</a
            >
          </td>
          <!-- <td>{{ item.certification_type }}</td> -->
          <td style="word-break: break-all">{{ item.audit_standard }}</td>
          <td>{{ item.audit_type + item.audit_degree }}</td>
          <td>
            {{ $convertDateFormat(item.audit_s2_start, 'YYYY-MM-DD') }}
          </td>
          <td>
            {{ $convertDateFormat(item.audit_s2_end, 'YYYY-MM-DD') }}
          </td>
          <td>{{ item.auditor_name }}</td>
          <!-- <td class="text-end">
            {{ $convertNumberFormat(item.audit_fee, '#,###') }}원
          </td> -->
          <td>
            <button
              class="btn btn-primary btn-sm me-1"
              @click="goToDetailAudit(item.audit_no)"
            >
              보고서작성
            </button>
            <button
              class="btn btn-warning btn-sm me-1"
              @click="goToTaxCreate(item.audit_no)"
            >
              T/I등록
            </button>
            <button
              class="btn btn-danger btn-sm me-1"
              @click="goToCashCreate(item.audit_no)"
            >
              Cash등록
            </button>
            <button
              class="btn btn-success btn-sm me-1"
              @click="goToCertUpload(item.audit_no)"
            >
              인증서등록
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Formatter from '@/mixins/formatter.js'
export default {
  mixins: [Formatter],
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
        { title: '심사번호', key: 'customer_type' },
        { title: '국문상호', key: 'name_ko' },
        { title: '인증표준', key: 'name_ko' },
        { title: 'S2심사시작일', key: 'name_ko' },
        { title: 'S2심사종료일', key: 'name_ko' },
        { title: '심사원', key: 'auditor_name' },
        { title: '심사비', key: 'status_yn' },
        { title: '생성일', key: 'created_date' }
      ],
      id: '',
      list: [],
      listByAuditor: [],
      listByEmailAndSearchName: [],
      listAuditBySearchName: [],
      auditor_email: '',
      searchName: '',
      SearchFunction: ''
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
    console.log('userRole', this.user.userInfo.role)

    console.log('searchName', this.searchName)

    // this.getList()
    if (this.user.userInfo.role === 'auditor') {
      this.getAuditListBySearch()
      this.SearchFunction = this.getAuditListBySearch
    } else {
      this.getAllAuditListBySearch()
      this.SearchFunction = this.getAllAuditListBySearch
    }
  },
  unmounted() {},
  methods: {
    // 조회 적용
    async getAuditListBySearch() {
      const loader = this.$loading.show({ canCancel: false })
      console.log(this.user.userInfo.email)
      const searchName = `%${this.searchName.toLowerCase()}%`
      console.log(searchName)

      this.listByEmailAndSearchName = await this.$post(
        '/api/cert/auditor/search',
        {
          param: [searchName, this.user.userInfo.email]
        }
      )

      console.log(
        'auditListByEmailAndSearchName',
        this.listByEmailAndSearchName
      )
      console.log(this.listByEmailAndSearchName.audit_s1_start)
      loader.hide()
    },
    // admin 조회 적용
    async getAllAuditListBySearch() {
      const loader = this.$loading.show({ canCancel: false })
      console.log(this.user.userInfo.email)
      const searchName = `%${this.searchName.toLowerCase()}%`
      console.log(searchName)

      this.listByEmailAndSearchName = await this.$post('/api/cert/search', {
        param: [searchName]
      })

      console.log(
        'auditListByEmailAndSearchName',
        this.listByEmailAndSearchName
      )
      loader.hide()
    },

    // 등록된 심사정보 모두 가져오기 by auditor
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      console.log(this.user.userInfo.email)

      this.listByAuditor = await this.$get(
        `/api/cert/list/${this.user.userInfo.email}`,
        {
          param: [this.user.userInfo.email]
        }
      )

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
    },
    goToDetailAudit(id) {
      console.log(id)
      this.$router.push({
        path: '/customer/cert/detail',
        query: { audit_no: id }
      })
    },
    goToTaxCreate(id) {
      this.$router.push({
        path: '/mgt/tax/',
        query: { id: id }
      })
    },
    goToCashCreate(id) {
      this.$router.push({
        path: '/mgt/fee/',
        query: { id: id }
      })
    },
    goToCertUpload(id) {
      this.$router.push({
        path: '/mgt/upload/cert',
        query: { id: id }
      })
    }
  }
}
</script>
<style scoped>
th {
  text-align: center;
}
</style>
