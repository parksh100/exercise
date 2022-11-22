<template>
  <div class="container">
    <h3 class="mb-5 fw-bold text-center">ISO인증 고객정보 상세페이지</h3>
    <hr />
    <!-- <div class="row mb-3">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">{{ customer.customer_id }}</div>
    </div> -->
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      기본정보
    </h5>
    <table class="table table-bordered table-sm">
      <colgroup>
        <col style="width: 20%" />
        <col style="width: 30%" />
        <col style="width: 20%" />
        <col style="width: 30%" />
      </colgroup>
      <tbody class="text-center table-group-divider">
        <tr>
          <th>심사유형</th>
          <td>
            {{ customer.certification_type }}
          </td>
          <th>사업자등록번호</th>
          <td>{{ customer.business_no }}</td>
        </tr>
        <tr>
          <th>회사명(국문)</th>
          <td>{{ customer.name_ko }}</td>
          <th>회사명(영문)</th>
          <td>{{ customer.name_en }}</td>
        </tr>
        <tr>
          <th>대표자명</th>
          <td>{{ customer.ceo_name }}</td>
          <th>대표자 휴대폰번호</th>
          <td>{{ customer.ceo_phone }}</td>
        </tr>
        <tr>
          <th>대표이메일</th>
          <td>{{ customer.ceo_name }}</td>
          <th>대표팩스번호</th>
          <td>{{ customer.fax }}</td>
        </tr>
        <tr>
          <th>국문 주소</th>
          <td colspan="3">
            {{
              customer.address_ko +
              ' ' +
              customer.address_detail +
              ' ' +
              '(' +
              customer.address_reference +
              ')' +
              ' ' +
              '우편번호:' +
              customer.postcode
            }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>영문 주소</th>
          <td colspan="3">
            {{ customer.address_en_detail + ', ' + customer.address_en }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>담당자명/직위</th>
          <td>{{ customer.contact_name }}</td>
          <th>담당자 휴대폰번호</th>
          <td>{{ customer.contact_phone }}</td>
        </tr>

        <tr>
          <th>담당자 이메일</th>
          <td>{{ customer.contact_email }}</td>
          <th>홈페이지</th>
          <td>{{ customer.homepage }}</td>
        </tr>

        <tr>
          <th>조직의 범위</th>
          <td colspan="3">
            {{ customer.organization_scope }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-5 mb-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      인증신청정보
    </h5>

    <table class="table table-bordered table-sm">
      <colgroup>
        <col style="width: 20%" />
        <col style="width: 30%" />
        <col style="width: 20%" />
        <col style="width: 30%" />
      </colgroup>
      <tbody class="text-center table-group-divider">
        <tr>
          <th>신청 인증표준</th>
          <td>
            {{ customer.certification_standard }}
          </td>
          <th>종업원 수</th>
          <td>{{ customer.employee_count }}</td>
        </tr>
        <tr>
          <th>설계/개발 유무</th>
          <td>{{ customer.design }}</td>
          <th>설계/개발 인원 수</th>
          <td>{{ customer.development_count }}</td>
        </tr>

        <tr>
          <th>국문 인증범위</th>
          <td colspan="3">{{ customer.scope_ko }}</td>
          <!-- <th >담당자 휴대폰번호</th>
          <td>{{ customer.contact_phone }}</td> -->
        </tr>

        <tr>
          <th>영문 인증범위</th>
          <td colspan="3">{{ customer.scope_en }}</td>
          <!-- <th >홈페이지</th>
          <td>{{ customer.homepage }}</td> -->
        </tr>
        <tr>
          <th>심사코드</th>
          <td colspan="3" class="text-start">
            <div class="col-sm-9">
              <div>{{ customer.iaf_code }}</div>
            </div>
          </td>
        </tr>
        <tr>
          <th>인증범위 활동</th>
          <td colspan="3">{{ customer.activity }}</td>
          <!-- <th></th>
          <td></td> -->
        </tr>

        <tr>
          <th>제품(서비스) 공정</th>
          <td colspan="3">{{ customer.process }}</td>
          <!-- <th></th>
          <td></td> -->
        </tr>
        <tr>
          <th>적용제외조항 유무</th>
          <td>{{ customer.exclusion }}</td>
          <th>조항/근거</th>
          <td>{{ customer.exclusion_reason }}</td>
        </tr>
        <tr>
          <th>환경측면정의</th>
          <td>{{ customer.env }}</td>
          <th>심사비{{ customer.audit_fee }}</th>
          <td></td>
        </tr>

        <tr>
          <th>내부심사일</th>
          <td>{{ customer.internal_date }}</td>
          <th>경영검토일</th>
          <td>{{ customer.management_date }}</td>
        </tr>

        <tr>
          <th>외주처리 유무</th>
          <td>{{ customer.outsourcing }}</td>
          <th>외주처리 프로세스</th>
          <td>{{ customer.outsourcing_process }}</td>
        </tr>

        <tr>
          <th>건설면허보유 여부</th>
          <td>{{ customer.construction_license }}</td>
          <th>건설면허 내용</th>
          <td>{{ customer.construction_license_content }}</td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-5 mb-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      환경/안전보건 정보
    </h5>

    <table class="table table-bordered table-sm">
      <colgroup>
        <col style="width: 20%" />
        <col style="width: 30%" />
        <col style="width: 20%" />
        <col style="width: 30%" />
      </colgroup>
      <tbody class="text-center table-group-divider">
        <tr>
          <th>환경측면파악여부</th>
          <td colspan="3">{{ customer.environmental_aspect }}</td>
          <!-- <th></th>
          <td></td> -->
        </tr>
        <tr>
          <th>환경허가신고사항유무</th>
          <td>{{ customer.environmental_permit }}</td>
          <th>환경허가신고내역</th>
          <td>{{ customer.environmental_permit_content }}</td>
        </tr>
        <tr>
          <th>환경사고유무</th>
          <td>{{ customer.environmental_accident }}</td>
          <th>환경사고내역</th>
          <td>{{ customer.environmental_accident_content }}</td>
        </tr>
        <tr>
          <th>환경사고유무</th>
          <td>{{ customer.environmental_accident }}</td>
          <th>환경허가신고내역</th>
          <td>{{ customer.environmental_accident_content }}</td>
        </tr>

        <tr>
          <th>위험요인파악여부</th>
          <td colspan="3">{{ customer.risk_factor }}</td>
          <!-- <th></th>
          <td></td> -->
        </tr>
        <tr>
          <th>사업장 외부 근무자 유무</th>
          <td>{{ customer.outside_worker }}</td>
          <th>외부근무자 업무</th>
          <td>{{ customer.outside_worker_content }}</td>
        </tr>
        <tr>
          <th>안전보건사고유무</th>
          <td>{{ customer.safety_accident }}</td>
          <th>안전보건사고내역</th>
          <td>{{ customer.safety_accident_content }}</td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-5 mb-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사원정보
    </h5>

    <table class="table table-bordered table-sm">
      <colgroup>
        <col style="width: 20%" />
        <col style="width: 30%" />
        <col style="width: 20%" />
        <col style="width: 30%" />
      </colgroup>
      <tbody class="text-center table-group-divider">
        <tr>
          <th>심사원명</th>
          <td>{{ $store.state.user.userInfo.name }}</td>
          <th>심사원 이메일</th>
          <td>{{ $store.state.user.userInfo.email }}</td>
        </tr>
        <tr>
          <th>첨부파일</th>
          <td colspan="2">
            {{ customer.img_license_originalname }}
          </td>
          <td>
            <button class="btn btn-outline-secondary" @click="fileDownload">
              다운로드
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <p>
        당사는 KAI의 인증시스템 심사절차에 따라 제반정보를 제공하고 상기와 같은
        인증신청항목에 대한 인증심사를 수검하고자 관련 서류를 함께
        제출합니다.<button
          class="btn btn-secondary ms-2"
          @click="printApplication"
        >
          인쇄하기
        </button>
      </p>
      <span></span>
    </div>
    <hr class="mt-5 mb-5" />
    <!-- 계약검토 -->
    <!-- <div class="mb-5">
      <h5 class="fw-bold">
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        계약검토
      </h5>
      <table class="table table-bordered table-sm">
        <tbody class="text-center align-middle">
          <tr>
            <th style="width: 20%">심사번호</th>
            <td style="width: 30%">
              {{ cr.audit_no }}
            </td>
            <th style="width: 20%">조직규모</th>
            <td style="width: 30%">
              {{ cr.company_scale }}
            </td>
          </tr>
          <tr>
            <th>환경복잡성</th>
            <td colspan="3" class="text-start">
              {{ cr.env_complexity }}
            </td>
          </tr>
          <tr>
            <th>안전보건 위험성</th>
            <td colspan="3" class="text-start">
              {{ cr.sh_risk }}
            </td>
          </tr>
          <tr>
            <th>심사코드</th>
            <td colspan="3" class="text-start ps-5">
              {{ cr.iafcode }}
            </td>
          </tr>
          <tr>
            <th>심사구분</th>
            <td>
              {{ cr.class_audit }}
            </td>
            <th>심사가능여부</th>
            <td>
              {{ cr.possibility_audit }}
            </td>
          </tr>
          <tr>
            <th>사업장</th>
            <td colspan="3">
              {{ cr.type_workspace }}
            </td>
          </tr>

          <tr>
            <th>내부심사실시</th>
            <td>
              {{ cr.internal_audit }}
            </td>
            <th>경영검토 실시여부</th>
            <td>
              {{ cr.management_review }}
            </td>
          </tr>

          <tr>
            <th>심사팀장</th>
            <td>
              {{ customer.auditor_name }}
            </td>
            <th>심사원</th>
            <td>
              {{ customer.s2_team }}
            </td>
          </tr>

          <tr>
            <th>MD적합성</th>
            <td>
              {{ cr.md_conformity }}
            </td>
            <th>기술전문가</th>
            <td>
              {{ cr.need_tech_expert }}
            </td>
          </tr>

          <tr>
            <th>1단계 심사 MD</th>
            <td>{{ cr.s1_md }} M/D</td>
            <th>2단계 심사 MD</th>
            <td>{{ cr.s2_md }} M/D</td>
          </tr>

          <tr>
            <th>계약자 및 검토자 의견</th>
            <td colspan="3">
              {{ cr.opinion }}
            </td>
          </tr>
          <tr>
            <th>계약변경</th>
            <td colspan="3">
              {{ cr.change }}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>작성자 :</p>
        <p>검토자 :</p>
        <p>승인자 :</p>
        <span></span>
      </div>
    </div> -->

    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <button class="btn btn-primary me-1" @click="goToChange">수정</button>
    <!-- <button class="btn btn-warning me-1" @click="goToCR">계약검토</button> -->
    <button class="btn btn-success me-1" @click="goToApply">심사신청</button>
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
      searchName: '',
      customer: {},
      cr: {
        customer_id: -1,
        audit_no: '22QEOC###',
        company_scale: '소',
        env_complexity: '',
        sh_risk: '',
        iafcode: [],
        class_audit: '',
        cr_result: '',
        possibility_audit: '가능',
        type_workspace: '단일사업장',
        s1_md: null,
        s2_md: null,
        md_conformity: '적합',
        need_tech_expert: '불필요',
        opinion: '',
        change: '',
        internal_audit: '진행완료',
        management_review: '진행완료',
        leader_auditor: '',
        auditors: '',
        audit_fee: '',
        auditor_name: '',
        auditor_email: ''
      }
    }
  },
  setup() {},
  created() {
    // console.log(this.customer)
    // console.log(this.$route.query.id)
    this.id = this.$route.query.customer_id
    console.log(this.id)

    // this.searchName = this.$route.query.searchName
  },
  mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
    console.log(this.id)

    this.getCustomer()
    // this.crInfo()
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
    fileDownload() {
      // request file download
      const dbFilename = this.customer.img_license
      console.log(dbFilename)
      try {
        const element = document.createElement('a')
        element.setAttribute(
          'href',
          `http://localhost:3000/api/file/${dbFilename}`
        )
        element.click()
      } catch (e) {
        console.log(e)
      }
    },
    printApplication() {
      window.print()
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
              customer_id: this.id,
              audit_no: this.cr.audit_no,
              company_scale: this.cr.company_scale,
              env_complexity: this.cr.env_complexity,
              sh_risk: this.cr.sh_risk,
              iafcode: JSON.stringify(this.cr.iafcode),
              cr_result: this.cr.cr_result,
              class_audit: this.cr.class_audit,
              possibility_audit: this.cr.possibility_audit,
              type_workspace: this.cr.type_workspace,
              s1_md: this.cr.s1_md,
              s2_md: this.cr.s2_md,
              md_conformity: this.cr.md_conformity,
              need_tech_expert: this.cr.need_tech_expert,
              opinion: this.cr.opinion,
              change: this.cr.change,
              internal_audit: this.cr.internal_audit,
              management_review: this.cr.management_review
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('계약검토 정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/change',
              query: { customer_id: r.data.insertId }
            })
          }
        }
      })
    },

    goToList() {
      this.$router.push({ path: '/customer/list' })
    },
    // push selected customer id to change page
    goToChange() {
      console.log(this.id)
      this.$router.push({
        path: '/customer/change',
        query: { customer_id: this.id }
      })
    },
    goToCR() {
      console.log(this.id)
      this.$router.push({
        path: '/customer/cr',
        query: { customer_id: this.id }
      })
    },
    goToApply() {
      console.log(this.id)
      this.$router.push({
        path: '/customer/cert',
        query: { customer_id: this.id }
      })
    }
    // goToChange() {
    //   console.log(this.id)
    //   this.$router.push({
    //     name: 'CustomerChangeView',
    //     params: { detailId: this.customer.customer_id }
    //   })
    // }
  }
}
</script>
<style>
td {
  text-align: left;
}
</style>
