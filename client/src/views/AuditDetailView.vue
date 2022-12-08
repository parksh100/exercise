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

        <tr>
          <th class="bg-light">1단계심사 시작일</th>
          <td>
            {{ list.audit_s1_start }}
          </td>
          <th class="bg-light">2단계심사 시작일</th>
          <td>{{ list.audit_s2_start }}</td>
        </tr>

        <tr>
          <th class="bg-light">1단계심사 종료일</th>
          <td>
            {{ list.audit_s1_end }}
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
          <td style="text-align: center">{{ dBcrInfo.cr_created_date }}</td>
        </tr>
        <tr>
          <th class="bg-light">전환심사</th>
          <td style="text-align: center"></td>
          <th class="bg-light"></th>
          <td style="text-align: center"></td>
        </tr>

        <tr>
          <th class="bg-light">심사보고서접수</th>
          <td></td>
          <th class="bg-light">심사보고서승인</th>
          <td style="text-align: center"></td>
        </tr>

        <tr>
          <th class="bg-light">심사비입금</th>
          <td style="text-align: center"></td>
          <th class="bg-light">세금계산서발행</th>
          <td style="text-align: center"></td>
        </tr>

        <tr>
          <th class="bg-light">심사비지급</th>
          <td></td>
          <th class="bg-light">심사비지급</th>
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
          <li class="p-1" role="button" @click="goToCR">
            <span class="p-2 bg-secondary rounded text-white">계약검토</span>
          </li>
          <li class="p-1" role="button">
            <span class="p-2 bg-secondary rounded text-white" @click="goToPlan"
              >심사계획서발행</span
            >
          </li>
          <li class="p-1" role="button">
            <span class="p-2 bg-secondary rounded text-white"
              >심사보고서작성</span
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
      <button class="btn btn-secondary me-1" @click="goToAuditList">
        목록
      </button>
      <button class="btn btn-primary" @click="printApplication">
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
      // searchName: '',
      userEmail: '',
      imgSrc: '',
      imgExt: '',
      customer: {},
      list: {},
      dBcrInfo: {}
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
  },
  unmounted() {},
  methods: {
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
      this.list.audit_s1_start = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.list.audit_s1_start)
      )
      this.list.audit_s1_end = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.list.audit_s1_end)
      )
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
      // console.log(this.id)
      const cr = await this.$get(
        `http://localhost:3000/api/customer/cr/detail/${this.id}`
      )
      this.dBcrInfo = cr
      console.log(this.dBcrInfo)
      this.dBcrInfo.cr_created_date = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.dBcrInfo.cr_created_date)
      )
    },
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
      // if (this.customer.certification_type === '') {
      //   return this.$swal('인증유형을 선택해주세요.')
      // }

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
      this.$router.push({ path: '/customer/list' })
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
    printApplication() {
      window.print()
    }
  }
}
</script>
<style>
td {
  text-align: left;
}
</style>
