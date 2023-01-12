<template>
  <div class="container">
    <div class="col mb-3">
      <div class="text-center">
        <h1 class="fw-bold">심사종합현황</h1>
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
          @keyup.enter="searchFunction"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-outline-primary me-1" @click="searchFunction">
          조회
        </button>
        <button class="btn btn-outline-success me-1" @click="goToList">
          심사신청
        </button>
        <!-- <button class="btn btn-outline-dark me-1" @click="doExcel">
          엑셀다운로드
        </button> -->
        <small> *금액: VAT포함기준</small>
      </div>
    </div>
    <table
      class="table table-bordered"
      style="table-layout: fixed; font-size: 15px"
    >
      <thead>
        <tr class="bg-light table-group-divider align-middle">
          <!-- <th width="4%">ID</th> -->
          <th class="align-middle" style="width: 15%">심사번호</th>
          <th class="align-middle" style="width: 15%">회사명</th>
          <!-- <th class="align-middle" style="width: 15%">표준</th> -->
          <!-- <th class="align-middle" style="width: 15%">심사유형</th> -->
          <th
            class="align-middle"
            style="width: 10%; background-color: #f2f2f2"
          >
            TR작성
          </th>
          <th
            class="align-middle"
            style="width: 10%; background-color: #f2f2f2"
          >
            S1작성
          </th>
          <th
            class="align-middle"
            style="width: 10%; background-color: #f2f2f2"
          >
            S2작성
          </th>
          <th class="align-middle" style="width: 10%">TR제출</th>
          <th class="align-middle" style="width: 10%">S1제출</th>
          <th class="align-middle" style="width: 10%">S2제출</th>
          <th class="align-middle" style="width: 10%">
            계산서<br />발행<br /><small>(천원)</small>
          </th>
          <th class="align-middle" style="width: 10%">
            입금액<br /><small>(천원)</small>
          </th>
          <th class="align-middle" style="width: 10%">
            공제액<br /><small>(천원)</small>
          </th>
          <th class="align-middle" style="width: 10%">
            정산예정<br /><small>(천원)</small>
          </th>
          <th class="align-middle" style="width: 10%">
            정산처리<br /><small>(천원)</small>
          </th>

          <th class="align-middle" style="width: 10%">인증서<br />발행</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="item in allJoinAuditInfo" :key="item" class="align-middle">
          <td style="word-break: break-all">
            <a
              @click="goToDetailAudit(item.audit_no)"
              class="text-decoration-underline"
              role="button"
              >{{ item.audit_no }}</a
            >
          </td>
          <td>
            <a
              @click="goToDetail(item.business_no)"
              class="text-decoration-underline"
              role="button"
              >{{ item.name_ko }}</a
            >
          </td>
          <!-- <td style="word-break: break-all">{{ item.audit_standard }}</td> -->
          <!-- <td style="word-break: break-all">
            {{ item.audit_type + item.audit_degree }}
          </td> -->

          <!-- 보고서 작성 램프 -->
          <td style="font-size: 12px; background-color: #f2f2f2">
            <div
              v-if="
                (item.audit_type === '전환사후' ||
                  item.audit_type === '전환갱신') &&
                item.created_at_trans_report
              "
            >
              <a
                @click="goToTransReport(item.audit_no)"
                role="button"
                class="text-decoration-underline"
              >
                {{ item.created_at_trans_report }}</a
              >
            </div>
            <div
              v-else-if="
                (item.audit_type === '전환사후' ||
                  item.audit_type === '전환갱신') &&
                item.created_at_trans_report === null
              "
            >
              <button
                class="btn btn-danger btn-sm"
                @click="goToMakeTransReport(item.audit_no)"
              >
                작성
              </button>
            </div>
            <div v-else>N/A</div>
          </td>
          <td style="font-size: 12px; background-color: #f2f2f2">
            <div v-if="item.audit_type === '최초' && item.s1_report_created">
              <a
                @click="goToS1Report(item.audit_no)"
                role="button"
                class="text-decoration-underline"
              >
                {{ item.s1_report_created }}</a
              >
            </div>
            <div
              v-else-if="
                item.audit_type === '최초' && item.s1_report_created === null
              "
            >
              <button
                class="btn btn-danger btn-sm"
                @click="goToMakeS1Report(item.audit_no)"
              >
                작성
              </button>
            </div>
            <div v-else>N/A</div>
          </td>
          <!-- 2단계보고서 작성 -->
          <td style="font-size: 12px; background-color: #f2f2f2">
            <div v-if="item.s2_report_created">
              <a
                @click="goToS2Report(item.audit_no)"
                role="button"
                class="text-decoration-underline"
              >
                {{ item.s2_report_created }}</a
              >
            </div>
            <div v-else>
              <button
                class="btn btn-danger btn-sm"
                @click="goToMakeS2Report(item.audit_no)"
              >
                작성
              </button>
            </div>
          </td>

          <!-- 보고서 업로드 -->
          <td style="font-size: 12px">
            <div
              v-if="
                (item.audit_type === '전환사후' ||
                  item.audit_type === '전환갱신') &&
                item.report_t_upload_created
              "
            >
              <a
                @click="goToUploadedTransReport(item.audit_no)"
                role="button"
                class="text-decoration-underline"
              >
                {{ item.report_t_upload_created }}</a
              >
            </div>
            <div
              v-else-if="
                (item.audit_type === '전환사후' ||
                  item.audit_type === '전환갱신') &&
                item.report_t_upload_created === null
              "
            >
              <button
                class="btn btn-danger btn-sm"
                @click="goToUploadTransReport(item.audit_no)"
              >
                제출
              </button>
            </div>
            <div v-else>N/A</div>
          </td>
          <td style="font-size: 12px">
            <div
              v-if="item.audit_type === '최초' && item.report_s1_upload_created"
            >
              <a
                @click="goToUploadedS1Report(item.audit_no)"
                role="button"
                class="text-decoration-underline"
              >
                {{ item.report_s1_upload_created }}</a
              >
            </div>
            <div
              v-else-if="
                item.audit_type === '최초' &&
                item.report_t_upload_created === null
              "
            >
              <button
                class="btn btn-danger btn-sm"
                @click="goToUploadS1Report(item.audit_no)"
              >
                제출
              </button>
            </div>
            <div v-else>N/A</div>
            <!-- <div v-if="item.report_s1_upload_created">
              <a
                @click="goToUploadedS1Report(item.audit_no)"
                role="button"
                class="text-decoration-underline"
              >
                {{
                  item.audit_type === '최초'
                    ? item.report_s1_upload_created
                    : 'NA'
                }}</a
              >
            </div>
            <div v-else>
              {{
                item.audit_type === '최초'
                  ? item.report_s1_upload_created
                  : 'N/A'
              }}
            </div> -->
          </td>
          <td style="font-size: 12px">
            <div v-if="item.report_s2_upload_created">
              <a
                @click="goToUploadedS2Report(item.audit_no)"
                role="button"
                class="text-decoration-underline"
              >
                {{ item.report_s2_upload_created }}</a
              >
            </div>
            <div v-else>
              <button
                class="btn btn-danger btn-sm"
                @click="goToUploadS2Report(item.audit_no)"
              >
                제출
              </button>
            </div>
          </td>
          <td style="word-break: break-all" class="text-end">
            <div v-if="item.tax_invoice_amount">
              {{
                $convertNumberFormat(
                  (item.tax_invoice_amount * 1.1) / 1000,
                  '#,###'
                )
              }}
            </div>
            <div v-else>
              <button
                class="btn btn-warning btn-sm"
                :disabled="this.user.userInfo.role === 'auditor'"
                @click="goToCreateTI(item.audit_no)"
              >
                미발행
              </button>
            </div>
          </td>
          <td style="word-break: break-all" class="text-end" v>
            <div v-if="item.cash_amount">
              {{ $convertNumberFormat(item.cash_amount / 1000, '#,###') }}
            </div>
            <div v-else>
              <button
                class="btn btn-warning btn-sm"
                :disabled="this.user.userInfo.role === 'auditor'"
                @click="goToCreateCash(item.audit_no)"
              >
                미입금
              </button>
            </div>
          </td>
          <td class="text-end">
            {{
              item.deduct_amount
                ? $convertNumberFormat(item.deduct_amount / 1000, '#,###')
                : ''
            }}
          </td>
          <td class="text-end">
            {{
              $convertNumberFormat(
                (item.cash_amount - item.deduct_amount) / 1000,
                '#,###'
              )
            }}
          </td>
          <td class="text-end"></td>
          <td style="word-break: break-all">
            <div v-if="item.created_at_issue_certification">
              {{ item.created_at_issue_certification }}
            </div>
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
      allJoinAuditInfo: [],
      auditor_email: '',
      searchName: '',
      searchFunction: '',
      deductAmount: null

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

    if (this.user.userInfo.role === 'auditor') {
      this.getJoinAuditInfoBySearch()
      this.searchFunction = this.getJoinAuditInfoBySearch
    } else {
      this.getJoinAuditInfoAllBySearch()
      this.searchFunction = this.getJoinAuditInfoAllBySearch
    }
    console.log(this.allJoinAuditInfo.audit_type)
    this.getDeductAmount()
  },
  unmounted() {},

  methods: {
    // 등록된 심사정보 Join by auditor & 조회 적용
    async getJoinAuditInfoBySearch() {
      const loader = this.$loading.show({ canCancel: false })
      // console.log(this.user.userInfo.email)
      const searchName = `%${this.searchName.toLowerCase()}%`
      // console.log(searchName)

      const result = await this.$post('/api/mgt/signal/search', {
        param: [searchName, this.user.userInfo.email]
      })
      console.log('Auditor result', result)
      this.allJoinAuditInfo = result.data
      // console.log('allJoinAuditInfo', this.allJoinAuditInfo)
      // console.log('allJoinAuditInfo.length', this.allJoinAuditInfo.length)

      loader.hide()
    },

    // 등록된 심사정보 Join admin & 조회 적용
    async getJoinAuditInfoAllBySearch() {
      const loader = this.$loading.show({ canCancel: false })
      // console.log(this.user.userInfo.email)
      const searchName = `%${this.searchName.toLowerCase()}%`
      // console.log(searchName)

      const result = await this.$post('/api/mgt/signal/all', {
        param: [searchName]
      })
      console.log('Admin result', result.data)
      this.allJoinAuditInfo = result.data
      // console.log('allJoinAuditInfo', this.allJoinAuditInfo)
      // console.log('allJoinAuditInfo.length', this.allJoinAuditInfo.length)

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
    // 공제액 산출식
    getDeductAmount() {
      if (this.allJoinAuditInfo.audit_type === '최초') {
        if (
          this.result.data.audit_standard === 'QMS' ||
          this.result.data.audit_standard === 'CGMP'
        ) {
          this.deductAmount = 225000
        } else if (
          this.result.data.audit_standard === 'QMS' &&
          this.result.data.audit_standard === 'EMS'
        ) {
          this.deductAmount = 450000
        } else if (
          this.result.data.audit_standard === 'QMS' &&
          this.result.data.audit_standard === 'EMS' &&
          this.result.data.audit_standard === 'OHSMS'
        ) {
          this.deductAmount = 750000
        } else if (
          this.result.data.audit_standard === 'EMS' &&
          this.result.data.audit_standard === 'OHSMS'
        ) {
          this.deductAmount = 600000
        }
      }
      if (
        this.result.data.audit_type === '사후' ||
        this.result.data.audit_type === '전환사후'
      ) {
        if (
          this.result.data.audit_standard === 'QMS' ||
          this.result.data.audit_standard === 'CGMP'
        ) {
          this.deductAmount = 150000
        } else if (
          this.result.data.audit_standard === 'QMS' &&
          this.result.data.audit_standard === 'EMS'
        ) {
          this.deductAmount = 300000
        } else if (
          this.result.data.audit_standard === 'QMS' &&
          this.result.data.audit_standard === 'EMS' &&
          this.result.data.audit_standard === 'OHSMS'
        ) {
          this.deductAmount = 450000
        } else if (
          this.result.data.audit_standard === 'EMS' &&
          this.result.data.audit_standard === 'OHSMS'
        ) {
          this.deductAmount = 300000
        }
      }
      if (
        this.result.data.audit_type === '갱신' ||
        this.result.data.audit_type === '전환갱신'
      ) {
        if (
          this.result.data.audit_standard === 'QMS' ||
          this.result.data.audit_standard === 'CGMP'
        ) {
          this.deductAmount = 225000
        } else if (
          this.result.data.audit_standard === 'QMS' &&
          this.result.data.audit_standard === 'EMS'
        ) {
          this.deductAmount = 300000
        } else if (
          this.result.data.audit_standard === 'QMS' &&
          this.result.data.audit_standard === 'EMS' &&
          this.result.data.audit_standard === 'OHSMS'
        ) {
          this.deductAmount = 600000
        } else if (
          this.result.data.audit_standard === 'EMS' &&
          this.result.data.audit_standard === 'OHSMS'
        ) {
          this.deductAmount = 450000
        }
      }
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
      console.log('Detail로 넘긴 customer_id', id)
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
    },
    goToUploadedTransReport(id) {
      console.log(id)
      this.$router.push({
        path: '/upload/detail/trans',
        query: { id: id }
      })
    },
    goToUploadTransReport(id) {
      console.log(id)
      this.$router.push({
        path: '/upload/trans',
        query: { id: id }
      })
    },
    goToUploadedS1Report(id) {
      console.log(id)
      this.$router.push({
        path: '/upload/detail/s1',
        query: { id: id }
      })
    },
    goToUploadS1Report(id) {
      console.log(id)
      this.$router.push({
        path: '/upload/s1',
        query: { id: id }
      })
    },
    goToUploadedS2Report(id) {
      console.log(id)
      this.$router.push({
        path: '/upload/detail/s2',
        query: { id: id }
      })
    },
    goToUploadS2Report(id) {
      console.log(id)
      this.$router.push({
        path: '/upload/s2',
        query: { id: id }
      })
    },
    goToCreateTI(id) {
      console.log(id)
      this.$router.push({
        path: '/mgt/tax',
        query: { id: id }
      })
    },
    goToCreateCash(id) {
      console.log(id)
      this.$router.push({
        path: '/mgt/fee',
        query: { id: id }
      })
    },
    goToMakeTransReport(id) {
      console.log(id)
      this.$router.push({
        path: '/report/trans',
        query: { audit_no: id }
      })
    },
    goToMakeS1Report(id) {
      console.log(id)
      this.$router.push({
        path: '/report/s1',
        query: { id: id }
      })
    },
    goToMakeS2Report(id) {
      console.log(id)
      this.$router.push({
        path: '/report/s2',
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
