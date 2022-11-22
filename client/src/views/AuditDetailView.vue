<template>
  <div class="container mt-5">
    <h2 class="mb-4 fw-bold text-center">심사정보 상세보기</h2>
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
        <!-- <tr>
          <th>고객ID</th>
          <td>
            {{ list.customer_id }}
          </td>
          <th>심사ID</th>
          <td>{{ list.audit_id }}</td>
        </tr> -->
        <tr>
          <th>심사번호</th>
          <td>
            {{ list.audit_no }}
          </td>
          <th>국문상호</th>
          <td>{{ list.name_ko }}</td>
        </tr>

        <tr>
          <th>심사유형</th>
          <td>
            {{ list.audit_type }}
          </td>
          <th>심사차수</th>
          <td>{{ list.audit_degree }}</td>
        </tr>
        <tr>
          <th>심사팀장</th>
          <td>
            {{ list.auditor_name }}
          </td>
          <th>심사팀원</th>
          <td>{{ list.audit_auditor }}</td>
        </tr>

        <tr>
          <th>종업원 수</th>
          <td>{{ list.employee_count }}</td>
          <th>심사비</th>
          <td>{{ $convertNumberFormat(list.audit_fee, '#,###') }}원</td>
        </tr>

        <tr>
          <th>인증표준</th>
          <td colspan="3">{{ list.certification_standard }}</td>
        </tr>

        <tr>
          <th>국문인증범위</th>
          <td colspan="3">{{ list.scope_ko }}</td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>

        <tr>
          <th>1단계심사 시작일</th>
          <td>
            {{ list.audit_s1_start }}
          </td>
          <th>2단계심사 시작일</th>
          <td>{{ list.audit_s2_start }}</td>
        </tr>

        <tr>
          <th>1단계심사 종료일</th>
          <td>
            {{ list.audit_s1_end }}
          </td>
          <th>2단계심사 종료일</th>
          <td>{{ list.audit_s2_end }}</td>
        </tr>
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
      list: {}
    }
  },
  created() {
    // this.id = this.$route.query.customer_id
    // console.log('넘어온 id : ', this.id)
    this.id = this.$route.query.audit_id
    console.log('넘어온 audit_id :', this.id)
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
    console.log(this.list)
    console.log(this.id)

    this.getList()
  },
  unmounted() {},
  methods: {
    async getList() {
      // const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get(`/api/customer/cert/${this.id}`)
      console.log(this.list)
      // loader.hide()
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
    goToAuditList() {
      this.$router.push({ path: '/customer/cert/list' })
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
