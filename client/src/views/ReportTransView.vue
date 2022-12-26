<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <p class="text-black-50 fst-italic">Doc No: KAI-PF960-03(Rev.0)</p>
      <p class="text-black-50 fst-italic">Transfer Audit Report</p>
    </div>
    <div class="row">
      <div class="col">
        <img src="@/assets/20221213_KAI로고.png" style="width: 27%" alt="" />
      </div>
      <div class="col">
        <div class="text-center">
          <h1 class="fw-bold">전환심사보고</h1>
          <p>www.kaicert.co.kr</p>
        </div>
      </div>
      <div class="col">
        <img
          src="@/assets/IAS로고.png"
          style="width: 27%; float: right"
          alt=""
        />
      </div>
    </div>
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      인증기업 개요
    </h5>
    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="text-center table-group-divider">
        <tr>
          <th class="bg-light">회사명</th>
          <td>
            {{ list.name_ko }}
          </td>
          <th class="bg-light">대표자</th>
          <td>{{ list.ceo_name }}</td>
          <th class="bg-light">TEL</th>
          <td>{{ list.phone }}</td>
        </tr>

        <tr>
          <th class="bg-light">주소</th>
          <td colspan="3">
            {{ list.address_ko + ' ' + list.address_detail }}
          </td>
          <!-- <th class="bg-light">심사차수</th> -->
          <!-- <td>{{ list.audit_degree }}</td> -->
          <th class="bg-light">E-mail</th>
          <td>{{ list.email }}</td>
        </tr>
        <tr>
          <th class="bg-light">담당자</th>
          <td>
            {{ list.contact_name }}
          </td>
          <th class="bg-light">담당자 연락처</th>
          <td>{{ list.contact_phone }}</td>
          <th class="bg-light">담당자 이메일</th>
          <td>{{ list.contact_email }}</td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      인증정보
    </h5>
    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="table-group-divider">
        <tr>
          <th class="bg-light">적용규격</th>
          <td colspan="5">
            {{ list.audit_standard }}
          </td>
          <!-- <th class="bg-light">대표자</th>
          <td>{{ list.name_ko }}</td>
          <th class="bg-light">TEL</th>
          <td>{{ list.name_ko }}</td> -->
        </tr>

        <tr>
          <th class="bg-light">인증유지상태</th>
          <td colspan="5">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="certification_status_1"
                value="정상유지"
                v-model="addTransReport.certification_status"
                name=""
              />
              <label class="form-check-label" for="certification_status_1"
                >정상유지</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="certification_status_2"
                value="정지"
                v-model="addTransReport.certification_status"
                name=""
              />
              <label class="form-check-label" for="certification_status_2"
                >정지상태</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="certification_status_3"
                value="취소"
                v-model="addTransReport.certification_status"
                name=""
              />
              <label class="form-check-label" for="certification_status_3"
                >취소</label
              >
            </div>
          </td>
          <!-- <th class="bg-light">심사차수</th> -->
          <!-- <td>{{ list.audit_degree }}</td> -->
          <!-- <th class="bg-light">E-mail</th>
          <td>{{ list.name_ko }}</td> -->
        </tr>
        <tr>
          <th class="bg-light">인증범위</th>
          <td colspan="5">
            {{ list.scope_ko }}
          </td>
          <!-- <th class="bg-light">부서</th>
          <td>{{ list.audit_auditor }}</td>
          <th class="bg-light">직위</th>
          <td>{{ list.audit_auditor }}</td> -->
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      전환심사 결과
    </h5>
    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="table-group-divider">
        <tr>
          <th class="bg-light">기관변경사유</th>
          <td colspan="5">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="change_reason_1"
                value="불만"
                name=""
                v-model="addTransReport.change_reason"
              />
              <label class="form-check-label" for="change_reason_1"
                >기존기관에 대한 불만</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="change_reason_2"
                value="고객요청"
                name=""
                v-model="addTransReport.change_reason"
              />
              <label class="form-check-label" for="change_reason_2"
                >고객의 요청사항</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="change_reason_3"
                value="기타"
                name=""
                v-model="addTransReport.change_reason"
              />
              <label class="form-check-label" for="change_reason_3">기타</label>
            </div>
          </td>
          <!-- <th class="bg-light">대표자</th>
          <td>{{ list.name_ko }}</td>
          <th class="bg-light">TEL</th>
          <td>{{ list.name_ko }}</td> -->
        </tr>

        <tr>
          <th class="bg-light">최근심사</th>
          <td colspan="5">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="recent_audit_result_1"
                value="최초심사"
                v-model.trim="addTransReport.recent_audit"
                name=""
              />
              <label class="form-check-label" for="recent_audit_result_1"
                >최초심사</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="recent_audit_result_2"
                value="사후심사"
                v-model.trim="addTransReport.recent_audit"
                name=""
              />
              <label class="form-check-label" for="recent_audit_result_2"
                >사후심사</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="recent_audit_result_3"
                value="갱신심사"
                v-model.trim="addTransReport.recent_audit"
                name=""
              />
              <label class="form-check-label" for="recent_audit_result_3"
                >갱신심사</label
              >
            </div>
          </td>
          <!-- <th class="bg-light">심사차수</th> -->
          <!-- <td>{{ list.audit_degree }}</td> -->
          <!-- <th class="bg-light">E-mail</th>
          <td>{{ list.name_ko }}</td> -->
        </tr>
        <tr>
          <th class="bg-light">불만사항처리</th>
          <td colspan="5">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="complaint_handling_1"
                value="접수실적있음/조치완료"
                v-model.trim="addTransReport.complaint_handling"
                name=""
              />
              <label class="form-check-label" for="complaint_handling_1"
                >접수실적있음/조치완료</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="complaint_handling_2"
                value="접수실적있음/조치미완료"
                v-model.trim="addTransReport.complaint_handling"
                name=""
              />
              <label class="form-check-label" for="complaint_handling_2"
                >접수실적있음/조치미완료</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="complaint_handling_3"
                value="접수실적없음"
                v-model.trim="addTransReport.complaint_handling"
                name=""
              />
              <label class="form-check-label" for="complaint_handling_3"
                >접수실적없음</label
              >
            </div>
          </td>
          <!-- <th class="bg-light">부서</th>
          <td>{{ list.audit_auditor }}</td>
          <th class="bg-light">직위</th>
          <td>{{ list.audit_auditor }}</td> -->
        </tr>
        <tr>
          <th class="bg-light">인증유효성 확인</th>
          <td colspan="5">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="certification_validity_1"
                value="인증추천"
                v-model.trim="addTransReport.certification_validity"
                name=""
              />
              <label class="form-check-label" for="certification_validity_1"
                >기존 인증서의 효력이 유지되고 있으며 인증전환에 하자
                없음(인증추천함)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="certification_validity_2"
                value="선조치요망"
                v-model.trim="addTransReport.certification_validity"
                name=""
              />
              <label class="form-check-label" for="certification_validity_2"
                >일부 미비사항이 발견되었으며 이에 대한 조치가 선결되어야
                함</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="certification_validity_3"
                value="전환불가능"
                v-model.trim="addTransReport.certification_validity"
              />
              <label class="form-check-label" for="certification_validity_3"
                >인증전황이 불가능하며 확인심사 또는 신규심사로 처리되어야
                함</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="certification_validity_4"
                value="재심사"
                v-model.trim="addTransReport.certification_validity"
              />
              <label class="form-check-label" for="certification_validity_4"
                >객관적 증거부족으로 추후 재방문 심사를 통하여 처리함</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <th class="bg-light">심사총평</th>
          <td colspan="5">
            <div>
              <textarea
                class="form-control"
                v-model.trim="addTransReport.total_evaluation"
              ></textarea>
            </div>
          </td>
        </tr>
        <tr>
          <th class="bg-light">전환심사일</th>
          <td colspan="5">
            <div>
              <input
                type="date"
                class="form-control"
                name=""
                id=""
                v-model="addTransReport.trans_audit_date"
              />
            </div>
          </td>
        </tr>
        <tr>
          <th class="bg-light">자료첨부</th>
          <td colspan="5">
            <!-- 이전인증서 첨부 -->
            <div class="row mb-2">
              <label class="col-sm-3 col-form-label">이전인증서</label>
              <div class="col-sm-9">
                <input
                  type="file"
                  class="form-control"
                  accept="application/pdf, image/*"
                  accept-charset="utf-8"
                  @change="uploadFile($event.target.files)"
                />
                <input
                  type="text"
                  class="form-control mt-2"
                  v-model="addTransReport.attachment_transCert_originalname"
                  v-if="addTransReport.attachment_transCert_originalname"
                />
              </div>
              <!-- <img
        :src="imgSrc"
        alt=""
        style="width: 100px; height: auto"
      /> -->
            </div>

            <div class="alert alert-secondary mb-5" role="alert">
              <ul>
                <li>최대 1개 가능</li>
                <li>2개 이상 파일은 하나의 파일로 합친 후 업로드</li>
                <li>파일 확장자 : pdf, 이미지 파일만 가능</li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-end">
      <button class="btn btn-secondary me-1" @click="goToList">목록</button>
      <button class="btn btn-primary" @click="doSave">저장</button>
    </div>

    <!-- <p class="mt-5 text-end">
      심사원명 :
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(서명)
    </p>

    <p class="mt-5">
      ※ 본 전환심사보고서는 인증신청서와 함께 제출되어야 합니다
    </p> -->
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
      imgSrc: '',
      imgExt: '',
      list: {},
      customer: {},
      dBcrInfo: {},
      addTransReport: {
        certification_status: '정상유지',
        change_reason: '고객요청',
        recent_audit: '',
        complaint_handling: '접수실적없음',
        certification_validity: '인증추천',
        total_evaluation:
          '전환심사 결과, 인증의 유효성이 확인되었으며, 인증전환이 가능함을 확인하였습니다.',
        attachment_transCert_originalname: '',
        attachment_transCert: '',
        attachment_transCert_ext: '',
        leader_name: '',
        business_no: '',
        trans_audit_date: null
      }
    }
  },
  created() {
    // this.id = this.$route.query.customer_id
    // console.log('넘어온 id : ', this.id)
    this.id = this.$route.query.audit_no
    console.log('넘어온 audit_no :', this.id)
  },
  mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }

    this.getList()
    this.crInfo()
  },
  unmounted() {},
  methods: {
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get(`/api/customer/cert/list/detail/${this.id}`)
      console.log(this.list)

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
      // console.log(this.dBcrInfo)
      // this.dBcrInfo.cr_created_date = Intl.DateTimeFormat('fr-CA').format(
      //   new Date(this.dBcrInfo.cr_created_date)
      // )
      // this.dBcrInfo.audit_trans_start = Intl.DateTimeFormat('fr-CA').format(
      //   new Date(this.dBcrInfo.audit_trans_start)
      // )
      // this.dBcrInfo.audit_trans_end = Intl.DateTimeFormat('fr-CA').format(
      //   new Date(this.dBcrInfo.audit_trans_end)
      // )
    },
    execDaumPostcode() {
      // @click을 사용할 때 함수는 이렇게 작성해야 한다.
      new window.daum.Postcode({
        oncomplete: (data) => {
          console.log(data)
          if (this.customer.address_extra !== '') {
            this.customer.address_extra = ''
          }
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            this.customer.address_ko = data.roadAddress
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.customer.address_ko = data.jibunAddress
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              this.customer.address_reference += data.bname
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              this.customer.address_reference +=
                this.customer.address_reference !== ''
                  ? `, ${data.buildingName}`
                  : data.buildingName
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.customer.address_detail !== '') {
              this.customer.address_detail = `(${this.customer.address_detail})`
            }
          } else {
            this.customer.address_reference = ''
          }

          // 영문주소
          this.customer.address_en = data.addressEnglish

          // 우편번호를 입력한다.
          this.customer.postcode = data.zonecode
        }
      }).open()
    },
    async uploadFile(files) {
      const r = await this.$upload('/api/upload/file', files[0])
      console.log(r)
      this.imgSrc = `http://localhost:3000/static/uploads/${r.filename}`
      this.addTransReport.attachment_transCert = r.filename
      this.addTransReport.attachment_transCert_originalname = r.originalname
      this.attachment_transCert_ext = r.mimetype
      console.log(this.addTransReport.attachment_transCert)
      console.log(this.addTransReport.attachment_transCert_originalname)
      console.log(this.attachment_transCert_ext)
    },
    async doSave() {
      // if (this.customer.certification_type === '') {
      //   return this.$swal('인증유형을 선택해주세요.')
      // }
      // if (this.customer.name_ko === '') {
      //   return this.$swal('국문회사명을 입력하세요.')
      // }
      // if (this.customer.name_en === '') {
      //   return this.$swal('영문회사명을 입력하세요.')
      // }
      // if (this.customer.business_no === '') {
      //   return this.$swal('사업자등록번호를 입력하세요.')
      // }
      // if (this.customer.ceo_name === '') {
      //   return this.$swal('대표자명을 입력하세요.')
      // }
      // if (this.customer.email === '') {
      //   return this.$swal('대표이메일을 입력하세요.')
      // }
      // if (this.customer.phone === '') {
      //   return this.$swal('대표전화번호를 입력하세요.')
      // }
      // if (this.customer.address_ko === '') {
      //   return this.$swal('주소를 입력하세요.')
      // }
      // if (this.customer.contact_name === '') {
      //   return this.$swal('담당자명/직위를 입력하세요.')
      // }
      // if (this.customer.contact_phone === '') {
      //   return this.$swal('담당자 연락처를 입력하세요.')
      // }
      // if (this.customer.contact_email === '') {
      //   return this.$swal('담당자 이메일을 입력하세요.')
      // }
      // if (this.customer.organization_scope === '') {
      //   return this.$swal('조직의 범위를 입력하세요.')
      // }
      // if (this.customer.certification_standard === '') {
      //   return this.$swal('신청 인증표준을 입력하세요.')
      // }
      // if (this.customer.design === '') {
      //   return this.$swal('설계/개발 유무를 입력하세요.')
      // }
      // if (this.customer.scope_ko === '') {
      //   return this.$swal('국문 인증범위를 입력하세요.')
      // }

      this.$swal({
        title: '전환심사보고서를 생성 하시겠습니까?',
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

          const r = await this.$post('/api/report/trans', {
            param: {
              certification_status: this.addTransReport.certification_status,
              change_reason: this.addTransReport.change_reason,
              recent_audit: this.addTransReport.recent_audit,
              complaint_handling: this.addTransReport.complaint_handling,
              certification_validity:
                this.addTransReport.certification_validity,
              total_evaluation: this.addTransReport.total_evaluation,
              attachment_transCert_originalname:
                this.addTransReport.attachment_transCert_originalname,
              attachment_transCert: this.addTransReport.attachment_transCert,
              attachment_transCert_ext:
                this.addTransReport.attachment_transCert_ext,
              business_no: this.list.business_no,
              audit_no: this.list.audit_no,
              leader_name: this.list.audit_leader,
              trans_audit_date: this.addTransReport.trans_audit_date,
              report_trans_no: 't4' + this.list.audit_no,
              auditor_email: this.$store.state.user.userInfo.email
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('전환심사보고서 정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/cert/detail',
              query: { audit_no: this.id }
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
    }
  }
}
</script>
<style scoped>
th {
  text-align: center;
}
</style>
