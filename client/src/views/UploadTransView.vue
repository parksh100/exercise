<template>
  <div class="container">
    <div class="col mb-3">
      <div class="text-center">
        <h1 class="fw-bold">전환보고서 업로드</h1>
      </div>
      <hr />
    </div>

    <!-- 심사기본정보 -->
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사정보
    </h5>
    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="table-group-divider">
        <tr>
          <th class="bg-light">심사번호</th>
          <td>
            {{ list.audit_no }}
          </td>
          <th class="bg-light">국문상호</th>
          <td>{{ list.name_ko }}</td>
        </tr>

        <tr>
          <th class="bg-light">심사유형</th>
          <td>
            {{ list.audit_type }}
          </td>
          <th class="bg-light">심사차수</th>
          <td>{{ list.audit_degree }}</td>
        </tr>
        <tr>
          <th class="bg-light">심사팀장</th>
          <td>
            {{ list.auditor_name }}
          </td>
          <th class="bg-light">심사팀원</th>
          <td>{{ list.audit_auditor }}</td>
        </tr>

        <tr>
          <th class="bg-light">종업원 수</th>
          <td>{{ list.employee_count }}</td>
          <th class="bg-light">심사비</th>
          <td>{{ $convertNumberFormat(list.audit_fee, '#,###') }}원</td>
        </tr>

        <tr>
          <th class="bg-light">인증표준</th>
          <td colspan="3">{{ list.audit_standard }}</td>
        </tr>

        <tr>
          <th class="bg-light">국문인증범위</th>
          <td colspan="3">{{ list.scope_ko }}</td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>

        <tr
          v-show="
            this.list.audit_type === '전환사후' ||
            this.list.audit_type === '전환갱신'
          "
        >
          <th class="bg-light">전환심사시작일</th>
          <td>{{ list.audit_trans_start }}</td>
          <th class="bg-light">전환심사종료일</th>
          <td>{{ list.audit_trans_end }}</td>
        </tr>

        <tr v-show="this.list.audit_type === '최초'">
          <th class="bg-light">1단계심사 시작일</th>
          <td>
            {{ list.audit_s1_start }}
          </td>
          <th class="bg-light">1단계심사 종료일</th>
          <td>{{ list.audit_s1_end }}</td>
        </tr>

        <tr>
          <th class="bg-light">2단계심사 시작일</th>
          <td>
            {{ list.audit_s2_start }}
          </td>
          <th class="bg-light">2단계심사 종료일</th>
          <td>{{ list.audit_s2_end }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 전환보고서 업로드 -->
    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      전환보고서 업로드
    </h5>

    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="table-group-divider">
        <tr>
          <th class="bg-light" style="width: 25%" rowspan="2">
            전환보고서업로드
          </th>
          <td style="width: 75%">
            <input
              type="file"
              class="form-control"
              accept="application/pdf"
              accept-charset="utf-8"
              @change="uploadTrans($event.target.files)"
            />
            <input
              type="text"
              class="form-control mt-2"
              v-model="file_transReport_originalname"
              v-if="file_transReport_originalname"
            />
          </td>
        </tr>
        <tr>
          <!-- <th class="bg-light">보고서업로드</th> -->
          <td>
            <div class="alert alert-secondary" role="alert">
              <ul>
                <li>최대 1개 가능</li>
                <li>파일 확장자 : pdf 파일만 가능</li>
              </ul>
            </div>
            <div class="text-end">
              <button class="btn btn-secondary me-1" @click="goToList">
                목록
              </button>
              <button class="btn btn-primary" @click="doSaveTrans">저장</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- S1보고서 업로드 -->
    <!-- <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      S1보고서 업로드
    </h5>

    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="table-group-divider">
        <tr>
          <th class="bg-light" style="width: 25%" rowspan="2">
            S1보고서업로드
          </th>
          <td style="width: 75%">
            <input
              type="file"
              class="form-control"
              accept="application/pdf"
              accept-charset="utf-8"
              @change="uploadS1($event.target.files)"
            />
            <input
              type="text"
              class="form-control mt-2"
              v-model="file_s1Report_originalname"
              v-if="file_s1Report_originalname"
            />
          </td>
        </tr>
        <tr>
          <td>
            <div class="alert alert-secondary" role="alert">
              <ul>
                <li>최대 1개 가능</li>
                <li>파일 확장자 : pdf 파일만 가능</li>
              </ul>
            </div>
            <div class="text-end">
              <button class="btn btn-secondary me-1" @click="goToList">
                목록
              </button>
              <button class="btn btn-primary" @click="uploadS1">저장</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table> -->

    <!-- S2보고서 업로드 -->
    <!-- <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      S2보고서 업로드
    </h5>

    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="table-group-divider">
        <tr>
          <th class="bg-light" style="width: 25%" rowspan="2">
            S2보고서업로드
          </th>
          <td style="width: 75%">
            <input
              type="file"
              class="form-control"
              accept="application/pdf"
              accept-charset="utf-8"
              @change="uploadS2($event.target.files)"
            />
            <input
              type="text"
              class="form-control mt-2"
              v-model="file_s2Report_originalname"
              v-if="file_s2Report_originalname"
            />
          </td>
        </tr>
        <tr>
          <td>
            <div class="alert alert-secondary" role="alert">
              <ul>
                <li>최대 1개 가능</li>
                <li>파일 확장자 : pdf 파일만 가능</li>
              </ul>
            </div>
            <div class="text-end">
              <button class="btn btn-secondary me-1" @click="goToList">
                목록
              </button>
              <button class="btn btn-primary" @click="uploadS2">저장</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table> -->
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
      fileTrans: '',
      fileS1: '',
      fileS2: '',
      id: '',
      list: {},
      listByAuditor: [],
      listByEmailAndSearchName: [],
      reportList: [],
      auditor_email: '',
      searchName: '',
      file_transReport: '',
      file_transReport_originalname: '',
      file_transReport_Ext: '',
      file_s1Report: '',
      file_s1Report_originalname: '',
      file_s1Report_Ext: '',
      file_s2Report: '',
      file_s2Report_originalname: '',
      file_s2Report_Ext: ''
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
    // console.log('넘어온 id : ', this.id)
    this.id = this.$route.query.id
    console.log('넘어온 audit_no :', this.id)
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

    this.getList()
  },
  unmounted() {},

  methods: {
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get(`/api/customer/cert/list/detail/${this.id}`)
      console.log(this.list)
      // console.log(this.list.audit_created_date)
      const dbDate = this.list.audit_created_date
      // console.log(dbDate)
      this.list.audit_created_date = Intl.DateTimeFormat('fr-CA').format(
        new Date(dbDate)
      )
      if (this.list.audit_s1_start === null) {
        this.list.audit_s1_start = ''
      } else {
        this.list.audit_created_date = Intl.DateTimeFormat('fr-CA').format(
          new Date(dbDate)
        )
      }

      if (this.list.audit_s1_end === null) {
        this.list.audit_s1_end = ''
      } else {
        this.list.audit_s1_end = Intl.DateTimeFormat('fr-CA').format(
          new Date(this.list.audit_s1_end)
        )
      }

      this.list.audit_s2_start = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.list.audit_s2_start)
      )
      this.list.audit_s2_end = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.list.audit_s2_end)
      )

      loader.hide()
    },
    async uploadTrans(files) {
      const r = await this.$upload('/api/upload/file', files[0])
      console.log(r)
      this.fileTrans = `http://localhost:3000/static/uploads/${r.filename}`
      this.file_transReport = r.filename
      this.file_transReport_originalname = r.originalname
      this.file_transReport_Ext = r.mimetype
      console.log(this.file_transReport)
      console.log(this.ile_transReport_originalname)
      console.log(this.file_transReport_Ext)
    },
    // async uploadS1(files) {
    //   const r = await this.$upload('/api/upload/file', files[0])
    //   console.log(r)
    //   this.fileS1 = `http://localhost:3000/static/uploads/${r.filename}`
    //   this.file_s1Report = r.filename
    //   this.file_s1Report_originalname = r.originalname
    //   this.file_s1Report_Ext = r.mimetype
    //   console.log(this.file_s1Report)
    //   console.log(this.file_s1Report_originalname)
    //   console.log(this.file_s1Report_Ext)
    // },

    // async uploadS2(files) {
    //   const r = await this.$upload('/api/upload/file', files[0])
    //   console.log(r)
    //   this.fileS2 = `http://localhost:3000/static/uploads/${r.filename}`
    //   this.file_s2Report = r.filename
    //   this.file_s2Report_originalname = r.originalname
    //   this.file_s2Report_Ext = r.mimetype
    //   console.log(this.file_s2Report)
    //   console.log(this.file_s2Report_originalname)
    //   console.log(this.file_s2Report_Ext)
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
    doSaveTrans() {
      if (this.file_transReport_originalname === '') {
        this.$swal('전환보고서를 첨부하세요.')
        return
      }
      this.$swal({
        title: '전환보고서를 업로드 하시겠습니까?',
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

          const r = await this.$post('/api/upload/trans', {
            param: {
              report_trans: this.file_transReport,
              report_trans_originalname: this.file_transReport_originalname,
              report_trans_ext: this.file_transReport_Ext,
              audit_no: this.list.audit_no,
              business_no: this.list.business_no
            }
          })

          loader.hide()

          if (r.status === 200) {
            // this.$refs.btnClose.click()
            this.$swal('전환보고서가 저장되었습니다.')
            this.$router.push({
              path: '/customer/cert/detail',
              query: { audit_no: this.id }
            })
            // this.getList()
          }
        }
      })
    },
    doSaveS1() {
      this.$swal({
        title: 'S1보고서를 업로드 하시겠습니까?',
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

          const r = await this.$post('/api/upload/s1', {
            param: {
              report_trans: this.file_s1Report,
              report_trans_originalname: this.file_s1Report_originalname,
              report_trans_ext: this.file_s1Report_Ext,
              audit_no: this.list.audit_no,
              business_no: this.list.business_no
            }
          })

          loader.hide()

          if (r.status === 200) {
            // this.$refs.btnClose.click()
            this.$swal('S1보고서가 저장되었습니다.')
            // this.$router.push({
            //   path: '/customer/list/auditor',
            //   query: { customer_id: r.data.insertId }
            // })
            // this.getList()
          }
        }
      })
    },
    doSaveS2() {
      this.$swal({
        title: 'S2보고서를 업로드 하시겠습니까?',
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

          const r = await this.$post('/api/upload/s2', {
            param: {
              report_trans: this.file_s2Report,
              report_trans_originalname: this.file_s2Report_originalname,
              report_trans_ext: this.file_s2Report_Ext,
              audit_no: this.list.audit_no,
              business_no: this.list.business_no
            }
          })

          loader.hide()

          if (r.status === 200) {
            // this.$refs.btnClose.click()
            this.$swal('S2보고서가 저장되었습니다.')
            // this.$router.push({
            //   path: '/customer/list/auditor',
            //   query: { customer_id: r.data.insertId }
            // })
            // this.getList()
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
      this.$router.push({
        path: '/customer/cert/detail',
        query: { audit_no: this.id }
      })
    },
    goToDetailAudit(id) {
      console.log(id)
      this.$router.push({
        path: '/customer/cert/detail',
        query: { audit_no: id }
      })
    },
    goToTransReport(id) {
      console.log(id)
      this.$router.push({
        path: '/report/trans/detail',
        query: { audit_no: id }
      })
    },
    goToS1Report(id) {
      console.log(id)
      this.$router.push({
        path: '/report/s1/detail',
        query: { id: id }
      })
    },
    goToS2Report(id) {
      console.log(id)
      this.$router.push({
        path: '/report/s2/detail',
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
.yellow {
  background-color: yellow;
}
</style>
