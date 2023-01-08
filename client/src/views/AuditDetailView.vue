<template>
  <div class="container mt-5">
    <h2 class="mb-4 fw-bold text-center">심사정보 및 현황</h2>
    <hr />
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      현재진행상태
    </h5>
    <div class="bg-light">
      <ul
        class="d-flex justify-content-around p-2 border"
        style="list-style-type: none"
      >
        <li class="p-1">심사계획</li>
        <li class="p-1">인증심사</li>
        <li class="p-1">심사보고서접수</li>
        <li class="p-1">심사보고서승인</li>
        <li class="p-1">심사비정산대기</li>
        <li class="p-1">심사비지급</li>
      </ul>
    </div>
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사정보
    </h5>
    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="text-center table-group-divider">
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
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      진행상태정보
    </h5>
    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="text-center table-group-divider">
        <tr class="bg-light">
          <th>상태</th>
          <th>일자</th>
          <th>상태</th>
          <th>일자</th>
        </tr>

        <tr>
          <th class="bg-light">심사등록</th>
          <td style="text-align: center">
            {{ list.audit_created_date }}
          </td>
          <th class="bg-light">계약검토</th>
          <td style="text-align: center">
            {{ dBcrInfo.cr_created_date }}
          </td>
        </tr>
        <tr
          v-show="
            this.list.audit_type === '전환사후' ||
            this.list.audit_type === '전환갱신'
          "
        >
          <th class="bg-light">전환보고서접수</th>
          <td class="text-center">
            {{ dbTransReportInfo.created_at_trans_report }}
          </td>
          <th class="bg-light">전환보고서승인</th>
          <td style="text-align: center">
            {{ dbTransReportInfo.created_at_trans_report }}
          </td>
        </tr>

        <tr v-show="this.list.audit_type === '최초'">
          <th class="bg-light">S1심사보고서접수</th>
          <td></td>
          <th class="bg-light">S1심사보고서승인</th>
          <td style="text-align: center"></td>
        </tr>
        <tr>
          <th class="bg-light">S2심사보고서접수</th>
          <td></td>
          <th class="bg-light">S2심사보고서승인</th>
          <td style="text-align: center"></td>
        </tr>

        <tr>
          <th class="bg-light">심사비입금</th>
          <td style="text-align: center"></td>
          <th class="bg-light">세금계산서발행</th>
          <td style="text-align: center"></td>
        </tr>

        <tr>
          <th class="bg-light">심사비정산 대기</th>
          <td></td>
          <th class="bg-light">심사비정산</th>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사진행
    </h5>
    <table class="table" style="table-layout: fixed">
      <tbody class="text-center table-group-divider">
        <ul class="d-flex p-2 border" style="list-style-type: none">
          <li
            class="p-1"
            role="button"
            @click="goToCR"
            v-show="this.dBcrInfo.cr_id === undefined"
          >
            <span class="p-2 bg-secondary rounded text-white">계약검토</span>
          </li>
          <!-- <div>{{ dBcrInfo.cr_id }}</div> -->

          <li class="p-1" role="button">
            <span class="p-2 bg-secondary rounded text-white" @click="goToPlan"
              >심사계획서발행</span
            >
          </li>
          <li
            class="p-1"
            role="button"
            v-show="
              (this.list.audit_type === '전환사후' ||
                this.list.audit_type === '전환갱신') &&
              this.dbTransReportInfo.report_trans_id === undefined
            "
          >
            <span
              class="p-2 bg-primary rounded text-white"
              @click="goToTransReport"
              >전환보고서작성</span
            >
          </li>
          <li
            class="p-1"
            role="button"
            v-show="
              this.list.audit_type === '최초' &&
              this.dbS1ReportInfo.report_s1_id === undefined
            "
          >
            <span
              class="p-2 bg-primary rounded text-white"
              @click="goToS1Report"
              >S1보고서작성</span
            >
          </li>
          <li
            class="p-1"
            role="button"
            v-show="this.dbS2ReportInfo.report_s2_id === undefined"
          >
            <span
              class="p-2 bg-primary rounded text-white"
              @click="goToS2Report"
              >S2보고서작성</span
            >
          </li>

          <!-- 보고서 제출(업로드) -->
          <li
            class="p-1"
            role="button"
            v-show="
              (this.list.audit_type === '전환사후' ||
                this.list.audit_type === '전환갱신') &&
              this.dbUploadedReportInfo.report_t_upload_id === null
            "
          >
            <span
              class="p-2 bg-warning rounded text-black"
              @click="goToUploadTrans"
              >전환보고서업로드</span
            >
          </li>

          <li
            class="p-1"
            role="button"
            v-show="
              this.list.audit_type === '최초' &&
              this.dbUploadedReportInfo.report_s1_upload_id === null
            "
          >
            <span
              class="p-2 bg-warning rounded text-black"
              @click="goToUploadS1"
              >S1보고서업로드</span
            >
          </li>
          <li
            class="p-1"
            role="button"
            v-show="this.dbUploadedReportInfo.report_s2_upload_id === null"
          >
            <span
              class="p-2 bg-warning rounded text-black"
              @click="goToUploadS2"
              >S2보고서업로드</span
            >
          </li>
        </ul>
      </tbody>
    </table>
    <!-- <div class="d-flex text-center">
      <p class="col">작성자 :</p>
      <p class="col">검토자 :</p>
      <p class="col">승인자 :</p>
      <span></span>
    </div> -->

    <!-- 버튼 -->
    <div class="d-flex justify-content-center mt-5">
      <button
        class="btn btn-secondary me-1 d-print-none"
        @click="goToAuditList"
      >
        목록
      </button>
      <button class="btn btn-primary d-print-none" @click="printApplication">
        인쇄하기
      </button>
    </div>
  </div>
</template>

<script>
import Formatter from '@/mixins/formatter'
export default {
  name: 'AuditDetail',
  mixins: [Formatter],
  computed: {
    user() {
      const data = this.$store.state.user
      console.log(data)
      console.log(data.userInfo.name, data.userInfo.email)
      return data

      // return this.$store.state.user.user
      // return this.$store.user.userInfo
    }
  },
  components: {},
  data() {
    return {
      id: '',
      searchName: '',
      userEmail: '',
      imgSrc: '',
      imgExt: '',
      customer: {},
      list: {},
      dBcrInfo: {},
      dbTransReportInfo: {},
      dbS1ReportInfo: {},
      dbS2ReportInfo: {},
      dbAllReportInfo: {},
      dbUploadedReportInfo: {},
      dbUploadedS1Info: [],
      dbUploadedS2Info: []
    }
  },
  created() {
    // this.id = this.$route.query.customer_id
    // console.log('넘어온 id : ', this.id)
    this.id = this.$route.query.audit_no
    console.log('넘어온 audit_no :', this.id)
  },
  async mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }

    // this.list = await this.$get('/api/customer/cert/list')
    // this.list = await this.$get('/api/customer')
    // this.customer = await this.$get('/api/customer')
    // console.log(this.list)
    // console.log(this.id)

    this.getList()
    this.crInfo()
    this.getTransReportInfo()
    this.getS1ReportInfo()
    this.getS2ReportInfo()
    this.getUploadReport()
  },
  unmounted() {},
  methods: {
    // async getUploadReport() {
    //   const loader = this.$loading.show({ canCancel: false })
    //   console.log(this.user.userInfo.email)
    //   // const searchName = `%${this.searchName.toLowerCase()}%`
    //   // console.log(searchName)

    //   this.dbUploadedReportInfo = await this.$post('/api/upload/list/search', {
    //     param: [this.user.userInfo.email, this.id]
    //   })

    //   console.log('업로드보고서목록', this.dbUploadedReportInfo)

    //   console.log(this.dbUploadedReportInfo.data.report_t_upload_id)
    //   console.log(this.dbUploadedReportInfo.data.report_s1_upload_id)
    //   console.log(this.dbUploadedReportInfo.data.report_s2_upload_id)

    //   loader.hide()
    // },

    async getUploadReport() {
      const loader = this.$loading.show({ canCancel: false })
      console.log(this.user.userInfo.email)
      // const searchName = `%${this.searchName.toLowerCase()}%`
      // console.log(searchName)

      this.dbUploadedReportInfo = await this.$get(`/api/upload/list/${this.id}`)

      console.log('업로드보고서목록', this.dbUploadedReportInfo)

      // console.log(this.dbUploadedReportInfo.report_t_upload_id)
      // console.log(this.dbUploadedReportInfo.report_s1_upload_id)
      // console.log(this.dbUploadedReportInfo.report_s2_upload_id)

      loader.hide()
    },

    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get(`/api/customer/cert/list/detail/${this.id}`)
      console.log(this.list)
      console.log(this.list.audit_created_date)
      const dbDate = this.list.audit_created_date
      console.log(dbDate)
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

    async getCustomer() {
      // console.log(this.id)
      this.customer = await this.$get(
        `http://localhost:3000/api/customer/${this.id}`
      )
      console.log(this.customer)
    },

    async crInfo() {
      console.log(this.id)
      const cr = await this.$get(
        `http://localhost:3000/api/customer/cr/detail/${this.id}`
      )
      console.log(cr)
      this.dBcrInfo = cr
      console.log('계약검토정보', this.dBcrInfo)
      // console.log(this.dBcrInfo.cr_id)
      this.dBcrInfo.cr_created_date = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.dBcrInfo.cr_created_date)
      )
      this.dBcrInfo.audit_trans_start = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.dBcrInfo.audit_trans_start)
      )
      this.dBcrInfo.audit_trans_end = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.dBcrInfo.audit_trans_end)
      )
    },

    async getTransReportInfo() {
      console.log(this.id)
      const transReport = await this.$get(
        `http://localhost:3000/api/report/trans/${this.id}`
      )
      console.log(transReport)
      this.dbTransReportInfo = transReport
      console.log('전환보고서정보', this.dbTransReportInfo)
      // if (this.dbTransReportInfo.created_at_trans_report === null) {
      //   this.dbTransReportInfo.created_at_trans_report = ''
      // } else {
      //   this.dbTransReportInfo.created_at_trans_report = Intl.DateTimeFormat(
      //     'fr-CA'
      //   ).format(new Date(this.dbTransReportInfo.created_at_trans_report))
      // }
    },

    async getS1ReportInfo() {
      console.log(this.id)
      const s1Report = await this.$get(
        `http://localhost:3000/api/report/s1/${this.id}`
      )
      this.dbS1ReportInfo = s1Report
      console.log('1단계보고서정보', this.dbS1ReportInfo)
    },

    async getS2ReportInfo() {
      console.log(this.id)
      const s2Report = await this.$get(
        `http://localhost:3000/api/report/s2/${this.id}`
      )
      this.dbS2ReportInfo = s2Report
      console.log('2단계보고서정보', this.dbS2ReportInfo)
    },
    // getReportAllByAuditNo() {
    //   const loader = this.$loading.show({ canCancel: false })
    //   // combine dbTransReportInfo, dbS1ReportInfo, dbS2ReportInfo
    //   const reportAllByAuditNo = {
    //     ...this.dbS1ReportInfo,
    //     ...this.dbS2ReportInfo
    //   }

    //   console.log(reportAllByAuditNo)
    //   loader.hide()
    // },
    async uploadFile(files) {
      const r = await this.$upload('/api/upload/file', files[0])
      console.log(r)
      this.imgSrc = `http://localhost:3000/static/uploads/${r.filename}`
      this.customer.img_license = r.filename
      this.customer.img_license_originalname = r.originalname
      this.imgExt = r.mimetype
      console.log(this.customer.img_license)
      console.log(this.customer.img_license_originalname)
      console.log(this.imgExt)
    },
    async doSave() {
      if (this.customer.certification_type === '') {
        return this.$swal('인증유형을 선택해주세요.')
      }

      this.$swal({
        title: '계약검토를 저장 하시겠습니까?',
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

          const r = await this.$post('/api/cr', {
            param: {
              customer_id: this.customer.id,
              audit_no: this.cr.audit_no,
              env_complexity: this.cr.env_complexity,
              iafcode: JSON.stringify(this.cr.iafcode),
              cr_result: this.cr.cr_result,
              class_audit: this.cr.class_audit,
              possibility_audit: this.cr.possibility_audit,
              type_workspace: this.cr.type_workspace,
              s1_md: this.cr.s1_md,
              s2_md: this.cr.s2_md,
              md_adequity: this.cr.md_adequity,
              need_tech_expert: this.cr.need_tech_expert,
              opinion: this.cr.opinion,
              change: this.cr.change
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('계약검토 정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/list'
              // query: { customer_id: r.data.insertId }
            })
          }
        }
      })
    },
    goToList() {
      this.$router.push({
        path: '/customer/cert/detail',
        query: { audit_no: this.id }
      })
    },
    goToCRList() {
      this.$router.push({ path: '/customer/cr/list' })
    },
    goToAuditList() {
      this.$router.push({
        path: '/customer/cert',
        query: { id: this.list.business_no }
      })
    },
    goToCR() {
      this.$router.push({
        path: '/customer/cr/detail/',
        query: { id: this.list.audit_no }
      })
    },
    goToPlan() {
      this.$router.push({
        path: '/report/audit/plan/',
        query: { id: this.list.audit_no }
      })
    },
    goToMakeReport() {
      if (this.list.audit_type === '최초') {
        this.$router.push({
          path: '/report/s1/',
          query: { audit_no: this.list.audit_no }
        })
      } else {
        this.$router.push({
          path: '/report/s2/',
          query: { audit_no: this.list.audit_no }
        })
      }
    },

    goToTransReport() {
      this.$router.push({
        path: '/report/trans/',
        query: { audit_no: this.list.audit_no }
      })
    },
    goToS1Report() {
      console.log(this.list.audit_no)
      this.$router.push({
        path: '/report/s1/',
        query: { id: this.list.audit_no }
      })
    },
    goToS2Report() {
      this.$router.push({
        path: '/report/s2/',
        query: { id: this.list.audit_no }
      })
    },
    goToUploadTrans() {
      this.$router.push({
        path: '/upload/trans/',
        query: { id: this.list.audit_no }
      })
    },
    goToUploadS1() {
      this.$router.push({
        path: '/upload/s1/',
        query: { id: this.list.audit_no }
      })
    },
    goToUploadS2() {
      this.$router.push({
        path: '/upload/s2/',
        query: { id: this.list.audit_no }
      })
    },
    printApplication() {
      window.print()
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
<style>
td {
  text-align: left;
}
</style>
