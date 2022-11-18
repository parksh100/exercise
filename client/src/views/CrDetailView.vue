<template>
  <div class="container mt-5">
    <h2 class="mb-4 fw-bold text-center">인증심사 계약검토보고서</h2>
    <hr />
    <table class="table table-bordered" style="table-layout: fixed">
      <!-- <thead>
        <tr>
          <th class="col">#</th>
          <th class="col">First</th>
          <th class="col">Last</th>
          <th class="col">Handle</th>
        </tr>
      </thead> -->
      <tbody class="text-center">
        <tr>
          <th>심사번호</th>
          <td>
            {{ cr.audit_no }}
          </td>
          <th>국문상호</th>
          <td>{{ customer.name_ko }}</td>
        </tr>

        <tr>
          <th>심사팀장</th>
          <td>
            {{ customer.auditor_name }}
          </td>
          <th>심사팀원</th>
          <td>{{ customer.s2_team }}</td>
        </tr>

        <tr>
          <th>심사유형</th>
          <td>{{ customer.certification_type }}</td>
          <th>대표자명</th>
          <td>{{ customer.ceo_name }}</td>
        </tr>
        <tr>
          <th>종업원 수</th>
          <td>{{ customer.employee_count }}</td>
          <th>회사규모</th>
          <td>{{ cr.organization_scale }}</td>
        </tr>
        <tr>
          <th>인증표준</th>
          <td>{{ customer.certification_standard }}</td>
          <th>사업장</th>
          <td>{{ cr.type_workspace }}</td>
        </tr>
        <tr>
          <th>국문인증범위</th>
          <td colspan="3">
            {{ customer.scope_ko }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>영문인증범위</th>
          <td colspan="3">
            {{ customer.scope_en }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>환경복잡성</th>
          <td>{{ cr.env_complexity }}</td>
          <th>안전보건위험성</th>
          <td>{{ cr.sh_risk }}</td>
        </tr>

        <tr>
          <th>심사코드</th>
          <td>{{ cr.iafcode }}</td>
          <th>심사가능여부</th>
          <td>{{ cr.possibility_audit }}</td>
        </tr>

        <tr>
          <th>내부심사여부</th>
          <td>
            {{ cr.internal_audit }}
          </td>
          <th>경영검토여부</th>
          <td>{{ cr.management_review }}</td>
        </tr>

        <tr>
          <th>1단계 MD</th>
          <td>
            {{ cr.s1_md }}
          </td>
          <th>2단계 MD</th>
          <td>{{ cr.s2_md }}</td>
        </tr>

        <tr>
          <th>1단계심사 시작일</th>
          <td>
            {{ customer.s1_start_date }}
          </td>
          <th>2단계심사 시작일</th>
          <td>{{ customer.s1_end_date }}</td>
        </tr>

        <tr>
          <th>1단계심사 종료일</th>
          <td>
            {{ customer.s2_start_date }}
          </td>
          <th>2단계심사 종료일</th>
          <td>{{ customer.s2_end_date }}</td>
        </tr>

        <tr>
          <th>MD적합성</th>
          <td>
            {{ cr.md_adequity }}
          </td>
          <th>기술전문가 필요성</th>
          <td>{{ cr.need_tech_expert }}</td>
        </tr>
        <tr>
          <th>심사비</th>
          <td>
            {{ cr.audit_fee }}
          </td>
          <th>심사구분</th>
          <td>{{ cr.class_audit }}</td>
        </tr>
        <tr>
          <th>계약자 및 검토자 의견</th>
          <td>
            {{ cr.opinion }}
          </td>
          <th>계약변경</th>
          <td>{{ cr.change }}</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex text-center">
      <p class="col">작성자 :</p>
      <p class="col">검토자 :</p>
      <p class="col">승인자 :</p>
      <span></span>
    </div>

    <!-- 버튼 -->
    <div class="d-flex justify-content-center mt-5">
      <button class="btn btn-secondary me-1" @click="goToCRList">목록</button>
      <button class="btn btn-primary" @click="printApplication">
        인쇄하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
      cr: {
        customer_id: -1,
        audit_no: '',
        certification_type: '',
        name_ko: '',
        name_en: '',
        ceo_name: '',
        organization_scale: '',
        certification_standard: [],
        employee_count: '',
        scope_ko: '',
        scope_en: '',
        env_complexity: '',
        sh_risk: '',
        iafcode: [],
        cr_result: '',
        class_audit: '',
        possibility_audit: '',
        type_workspace: '',
        s1_md: null,
        s2_md: null,
        md_adequity: '',
        need_tech_expert: '',
        opinion: '',
        change: '',
        s1_start_date: '',
        s1_end_date: '',
        s2_start_date: '',
        s2_end_date: '',
        s2_team: '',
        manual_date: '',
        internal_audit: '',
        management_review: '',
        leader_auditor: '',
        auditors: '',
        audit_fee: '',
        auditor_name: '',
        auditor_email: ''
      }
    }
  },
  created() {
    this.id = this.$route.query.customer_id
  },
  mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
    console.log(this.id)

    this.getCustomer()
    this.crInfo()
  },
  unmounted() {},
  methods: {
    async getCustomer() {
      // console.log(this.id)
      this.customer = await this.$get(
        `http://localhost:3000/api/customer/${this.id}`
      )
      console.log(this.customer)
    },
    async crInfo() {
      // console.log(this.id)
      this.cr = await this.$get(
        `http://localhost:3000/api/customer/cr/${this.id}`
      )
      console.log(this.cr)
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
    printApplication() {
      window.print()
    }
  }
}
</script>
