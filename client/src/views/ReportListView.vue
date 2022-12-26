<template>
  <div class="container">
    <div class="col mb-3">
      <div class="text-center">
        <h1 class="fw-bold">심사보고서현황</h1>
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
          @keyup.enter="listByEmailAndSearchName"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <button
          class="btn btn-outline-primary me-1"
          @click="listByEmailAndSearchName"
        >
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
          <th style="width: 10%" rowspan="2">심사번호</th>
          <th style="width: 15%" rowspan="2">회사명</th>
          <th style="width: 10%" rowspan="2">표준</th>
          <th style="width: 10%" rowspan="2">심사유형</th>
          <th style="width: 10%" rowspan="2">S2종료일</th>
          <th style="width: 10%" rowspan="2">심사원</th>
          <th colspan="3">전환보고서</th>
        </tr>
        <tr class="bg-light table-group-divider">
          <th style="width: 10%">전환보고서</th>
          <th style="width: 10%">S1보고서</th>
          <th style="width: 10%">S2보고서</th>
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
            {{ $convertDateFormat(item.audit_s2_end, 'YYYY-MM-DD') }}
          </td>
          <td>{{ item.auditor_name }}</td>
          <!-- 전환보고서 -->
          <td class="report" style="word-break: break-all; font-size: 12px">
            {{
              item.audit_type == '전환사후' || item.audit_type === '전환갱신'
                ? item.report_trans_no
                : 'N/A'
            }}
          </td>
          <!-- 1단계보고서 -->
          <td style="word-break: break-all; font-size: 12px">
            {{ item.audit_type === '최초' ? item.report_s1_no : 'N/A' }}
          </td>
          <!-- 2단계보고서 -->
          <td style="word-break: break-all; font-size: 12px">
            {{ item.report_s2_no }}
          </td>
          <!-- 불러오기 -->
          <!--<td>
             <button
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
            </button>
          </td>-->
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
      reportList: [],
      auditor_email: '',
      searchName: '',
      isYellow: false
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

    // this.getList()
    this.getAuditListBySearch()
    this.getReportBySearch()
  },
  unmounted() {},

  methods: {
    yellow() {
      this.isYellow = true
    },
    // 등록된 심사정보 & 조회 적용
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
      // this.listByEmailAndSearchName.replace('QMS', 'Q')

      console.log('db심사정보', this.listByEmailAndSearchName)

      loader.hide()
    },

    // 등록된 심사정보에 audit_no 대한 보고서 정보 및 조회 적용
    async getReportBySearch() {
      // console.log(id)
      const loader = this.$loading.show({ canCancel: false })
      // console.log(this.user.userInfo.email)
      const searchName = `%${this.searchName.toLowerCase()}%`
      // console.log(searchName)

      const result = await this.$post('/api/report/list/search', {
        param: [searchName, this.user.userInfo.email]
      })
      // console.log('db보고서정보', result.data)
      // console.log(this.listByEmailAndSearchName.data)
      // console.log(result.data.length)
      // console.log(this.listByEmailAndSearchName.data.length)
      // console.log(id)
      for (let i = 0; i < result.data.length; i++) {
        // console.log(result.data[i].audit_no)
        for (let j = 0; j < this.listByEmailAndSearchName.data.length; j++) {
          // console.log(j)
          // console.log(result.data[i].audit_no)
          // console.log(this.listByEmailAndSearchName.data[j].audit_no)
          // console.log(result.data[i].audit_no)
          // console.log(this.listByEmailAndSearchName.data[j].audit_no)
          if (
            result.data[i].audit_no ===
            this.listByEmailAndSearchName.data[j].audit_no
          ) {
            this.listByEmailAndSearchName.data[j].audit_no =
              result.data[i].audit_no
            this.listByEmailAndSearchName.data[j].report_s1_no =
              result.data[i].report_s1_no
            this.listByEmailAndSearchName.data[j].report_s2_no =
              result.data[i].report_s2_no
            this.listByEmailAndSearchName.data[j].report_trans_no =
              result.data[i].report_trans_no
          }
        }
        // this.reportList.push(result.data[i].audit_no)
      }

      // console.log('심사번호별보고서작성정보', this.reportList)
      console.log(
        '심사번호별보고서작성정보',
        this.listByEmailAndSearchName.data
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
    }
  }
}
</script>
<style scoped>
th {
  text-align: center;
}
.yellow {
  background-color: yellow;
}
</style>
