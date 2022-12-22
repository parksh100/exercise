<template>
  <div class="container mt-5">
    <h2 class="mb-4 fw-bold text-center">인증심사 계약검토</h2>
    <hr />
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      계약검토대상
    </h5>
    <table class="table table-bordered" style="table-layout: fixed">
      <!-- <thead>
        <tr>
          <th class="col">#</th>
          <th class="col">First</th>
          <th class="col">Last</th>
          <th class="col">Handle</th>
        </tr>
      </thead> -->
      <tbody class="text-center table-group-divider">
        <tr>
          <th>심사번호</th>
          <td>
            {{ cr.audit_no }}
          </td>
          <th>국문상호</th>
          <td>{{ cr.name_ko }}</td>
        </tr>

        <tr>
          <th>심사팀장</th>
          <td>
            {{ cr.auditor_name }}
          </td>
          <th>심사팀원</th>
          <td>{{ cr.audit_auditor }}</td>
        </tr>

        <tr>
          <th>심사유형</th>
          <td>{{ cr.audit_type }}</td>
          <th>대표자명</th>
          <td>{{ cr.ceo_name }}</td>
        </tr>
        <tr>
          <th>종업원 수</th>
          <td>{{ cr.employee_count }}</td>
          <th>인증표준</th>
          <td>{{ cr.audit_standard }}</td>
        </tr>
        <tr>
          <th>국문인증범위</th>
          <td colspan="3">
            {{ cr.scope_ko }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>영문인증범위</th>
          <td colspan="3">
            {{ cr.scope_en }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>환경복잡성</th>
          <td>{{ cr.audit_env_complexity }}</td>
          <th>안전보건위험성</th>
          <td>{{ cr.audit_ohs_risk }}</td>
        </tr>

        <tr>
          <th>심사코드</th>
          <td>{{ cr.iaf_code }}</td>
          <th></th>
          <td></td>
        </tr>

        <!-- <tr>
          <th>내부심사여부</th>
          <td>
            {{ cr.audit_internal_date }}
          </td>
          <th>경영검토여부</th>
          <td>{{ cr.audit_management_date }}</td>
        </tr> -->

        <tr></tr>
        <tr v-show="cr.audit_type === '최초'">
          <th>1단계심사 시작일</th>
          <td>
            {{ cr.audit_s1_start }}
          </td>
          <th>1단계심사 종료일</th>
          <td>
            {{ cr.audit_s1_end }}
          </td>
        </tr>

        <tr>
          <th>2단계심사 시작일</th>
          <td>{{ cr.audit_s2_start }}</td>
          <th>2단계심사 종료일</th>
          <td>{{ cr.audit_s2_end }}</td>
        </tr>

        <tr>
          <th>심사비</th>
          <td>{{ $convertNumberFormat(cr.audit_fee, '#,###') }}원</td>
          <th>심사구분</th>
          <td>{{ cr.audit_classify }}</td>
        </tr>

        <tr class="bg-light">
          <th>MD</th>
          <td>
            {{ cr.audit_md }}
          </td>
          <th>MD적합성</th>
          <td>
            {{ addCR.cr_md_conformity }}
            <!-- <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name=""
                  id="auditPossibility1"
                  value="적합"
                  v-model="addCR.cr_md_conformity"
                />
                <label class="form-check-label" for="auditPossibility1"
                  >적합</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name=""
                  id="auditPossibility2"
                  value="부적합"
                  v-model="addCR.cr_md_conformity"
                />

                <label class="form-check-label" for="auditPossibility2"
                  >부적합</label
                >
              </div>
            </div> -->
          </td>
        </tr>

        <tr class="bg-light">
          <th>기술전문가 필요성</th>
          <td>
            {{ addCR.cr_expert }}
            <!-- <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="expert1"
                id="expert1"
                value="필요"
                v-model="addCR.cr_expert"
              />
              <label class="form-check-label" for="expert1">필요</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="expert2"
                id="expert2"
                value="불필요"
                v-model="addCR.cr_expert"
              />

              <label class="form-check-label" for="expert2">불필요</label>
            </div> -->
          </td>
          <th>심사가능여부</th>
          <td>
            {{ addCR.cr_possibility }}
            <!-- <div class="">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="적합"
                  v-model="addCR.cr_possibility"
                />
                <label class="form-check-label" for="inlineRadio1">적합</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="부적합"
                  v-model="addCR.cr_possibility"
                />

                <label class="form-check-label" for="inlineRadio2"
                  >부적합</label
                >
              </div>
            </div> -->
          </td>
        </tr>
        <tr class="bg-light">
          <th>계약자 및 검토자 의견</th>
          <td>
            {{ addCR.cr_opinion }}
            <!-- <textarea
              class="form-control"
              rows="2"
              v-model="addCR.cr_opinion"
            ></textarea> -->
          </td>
          <th>계약변경</th>
          <td>
            {{ addCR.cr_change }}
            <!-- <textarea
              class="form-control"
              rows="2"
              v-model="addCR.cr_change"
            ></textarea> -->
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex text-center mt-5">
      <p class="col">작성자 : 이상영</p>
      <p class="col">검토자 : 박수빈</p>
      <p class="col">승인자 : 박성훈</p>
      <span></span>
    </div>

    <!-- 버튼 -->
    <div class="d-flex justify-content-center mt-5">
      <button class="btn btn-secondary me-1" @click="goToCRList">목록</button>
      <button class="btn btn-secondary me-1" @click="doSave">저장</button>
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
      cr: {},
      addCR: {
        customer_id: '',
        cr_possibility: '적합',
        cr_md: 0,
        cr_md_conformity: '적합',
        cr_expert: '불필요',
        cr_opinion: '해당없음',
        cr_change: '해당없음'
      }
    }
  },
  created() {
    this.id = this.$route.query.id
    console.log(this.id)
  },
  mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
    console.log(this.id)

    this.getCR()
  },
  unmounted() {},
  methods: {
    classifyComplexity() {
      console.log(this.customer.iaf_code)
      if (
        this.cr.iaf_code.includes('05') ||
        this.cr.iaf_code.includes('12') ||
        this.cr.iaf_code.includes('28')
      ) {
        this.cr.environment_complexity = '높음'
      } else if (
        this.cr.iaf_code.includes('03') ||
        this.cr.iaf_code.includes('04') ||
        this.cr.iaf_code.includes('07') ||
        this.cr.iaf_code.includes('15') ||
        this.cr.iaf_code.includes('16') ||
        this.cr.iaf_code.includes('20') ||
        this.cr.iaf_code.includes('22') ||
        this.cr.iaf_code.includes('24') ||
        this.cr.iaf_code.includes('31') ||
        this.cr.iaf_code.includes('39') ||
        this.cr.iaf_code.includes('17')
      ) {
        this.cr.environment_complexity = '보통'
      } else {
        this.cr.environment_complexity = '낮음'
      }
    },
    classifyRisk() {
      console.log(this.cr.iaf_code)
      if (
        this.cr.iaf_code.includes('05') ||
        this.cr.iaf_code.includes('12') ||
        this.cr.iaf_code.includes('17') ||
        this.cr.iaf_code.includes('28')
      ) {
        this.cr.safety_health_risk = '높음'
      } else if (
        this.cr.iaf_code.includes('03') ||
        this.cr.iaf_code.includes('04') ||
        this.cr.iaf_code.includes('06') ||
        this.cr.iaf_code.includes('07') ||
        this.cr.iaf_code.includes('08') ||
        this.cr.iaf_code.includes('15') ||
        this.cr.iaf_code.includes('16') ||
        this.cr.iaf_code.includes('20') ||
        this.cr.iaf_code.includes('22') ||
        this.cr.iaf_code.includes('24') ||
        this.cr.iaf_code.includes('31') ||
        this.cr.iaf_code.includes('39')
      ) {
        this.cr.safety_health_risk = '보통'
      } else {
        this.cr.safety_health_risk = '낮음'
      }
    },
    async getCR() {
      // console.log(this.id)
      const loader = this.$loading.show({ canCancel: false })
      this.cr = await this.$get(`/api/customer/cert/list/detail/${this.id}`)
      console.log(this.cr)
      loader.hide()
      console.log(this.cr.iaf_code)
      this.cr.audit_internal_date = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.cr.audit_internal_date)
      )
      this.cr.audit_management_date = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.cr.audit_management_date)
      )
      this.cr.audit_s1_start = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.cr.audit_s1_start)
      )
      this.cr.audit_s1_end = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.cr.audit_s1_end)
      )
      this.cr.audit_s2_start = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.cr.audit_s2_start)
      )
      this.cr.audit_s2_end = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.cr.audit_s2_end)
      )
    },
    async crInfo() {
      // console.log(this.id)
      this.cr = await this.$get(
        `http://localhost:3000/api/customer/cr/${this.id}`
      )
      this.cr.iaf_code = JSON.parse(this.cr.iaf_code)
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
              customer_id: this.cr.customer_id,
              audit_no: this.id,
              cr_possibility: this.addCR.cr_possibility,
              cr_md: this.addCR.cr_md,
              cr_md_conformity: this.addCR.cr_md_conformity,
              cr_expert: this.addCR.cr_expert,
              cr_opinion: this.addCR.cr_opinion,
              cr_change: this.addCR.cr_change
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('계약검토 정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/cert/detail',
              query: { audit_no: this.id }
            })
          }
        }
      })
    },
    goToList() {
      this.$router.push({ path: '/customer/list' })
    },
    goToCRList() {
      this.$router.push({
        path: '/customer/cert/detail',
        query: { audit_no: this.id }
      })
    },
    printApplication() {
      window.print()
    }
  }
}
</script>
