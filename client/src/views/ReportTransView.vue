<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <p class="text-black-50 fst-italic">Doc No: KAI-P960-03</p>
      <p class="text-black-50 fst-italic">Transfer Audit Report</p>
    </div>
    <h3 class="mb-4 fw-bold text-center">인증전환심사보고서</h3>
    <!-- <hr style="width: 50%" /> -->
    <h5 class="fw-bold">[인증기업 개요]</h5>
    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사유형</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="initial"
            value="최초"
            v-model="customer.certification_type"
          />
          <label class="form-check-label" for="initial">최초심사</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="transSurveillance"
            value="전환사후"
            v-model="customer.certification_type"
          />
          <label class="form-check-label" for="transSurveillance"
            >전환사후심사</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="transRenewal"
            value="전환갱신"
            v-model="customer.certification_type"
          />
          <label class="form-check-label" for="transRenewal"
            >전환갱신심사</label
          >
        </div>
      </div>
    </div> -->

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문상호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          ref="name_ko"
          v-model.trim="customer.name_ko"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표자명</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" ref="" />
      </div>
    </div>

    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">사업자등록번호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.business_no"
          placeholder="숫자만 입력"
        />
      </div>
    </div> -->

    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표자 휴대폰번호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.ceo_phone"
        />
      </div>
    </div> -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표이메일</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model.trim="customer.email" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표전화번호</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model.trim="customer.phone" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표팩스번호</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model.trim="customer.fax" />
      </div>
    </div>

    <!-- 국문주소 -->
    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address_ko"
        />
      </div>
    </div> -->
    <!-- end 국문주소 -->

    <!--start daum api  -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">우편번호</label>
      <div class="col-sm-5">
        <input
          type="text"
          class="form-control"
          id="postcode"
          v-model="customer.postcode"
          disabled
        />
      </div>
      <div class="col-sm-4">
        <button class="btn btn-secondary" @click="execDaumPostcode">
          주소검색
        </button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="address"
          v-model="customer.address_ko"
          disabled
        />
      </div>
    </div>
    <!-- <label class="col-sm-3 col-form-label">지번주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="jibunAddress"
          v-model.trim="customer.address_jibun"
        />
      </div> -->

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">상세주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="detailAddress"
          v-model="customer.address_detail"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">참고항목</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="extraAddress"
          v-model="customer.address_reference"
          disabled
        />
      </div>
    </div>

    <!--end daum api  -->

    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">영문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address_en"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">영문 상세주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address_en_detail"
        />
      </div>
    </div> -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">담당자명/직위</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="홍길동/대표이사"
          v-model.trim="customer.contact_name"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">담당자 휴대번호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="010-1234-5678"
          v-model.trim="customer.contact_phone"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">담당자 이메일</label>
      <div class="col-sm-9">
        <input
          type="email"
          class="form-control"
          v-model.trim="customer.contact_email"
        />
      </div>
    </div>
    <!-- ==================================== -->
    <h5 class="mt-3 fw-bold">[인증정보]</h5>
    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">홈페이지</label>
      <div class="col-sm-9">
        <input
          type="email"
          class="form-control"
          v-model.trim="customer.homepage"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">조직의 범위</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.organization_scope"
        />
      </div>
    </div> -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">신청 인증표준</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_standard_1"
            value="QMS"
            v-model="customer.certification_standard"
          />
          <label class="form-check-label" for="certification_standard_1"
            >ISO9001</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_standard_2"
            value="EMS"
            v-model="customer.certification_standard"
          />
          <label class="form-check-label" for="certification_standard_2"
            >ISO14001</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_standard_3"
            value="OHSMS"
            v-model="customer.certification_standard"
          />
          <label class="form-check-label" for="certification_standard_3"
            >ISO45001</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_standard_4"
            value="CGMP"
            v-model="customer.certification_standard"
          />
          <label class="form-check-label" for="certification_standard_4"
            >ISO22716</label
          >
        </div>
        <div>{{ customer.certification_standard }}</div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">종업원 수</label>
      <div class="col-sm-9">
        <input
          type="number"
          class="form-control"
          v-model.trim="customer.employee_count"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">인증유지상태</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="certification_status_1"
            value="정상유지"
          />
          <label class="form-check-label" for="certification_status_1"
            >정상유지</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="certification_status_2"
            value="정지중"
          />
          <label class="form-check-label" for="certification_status_2"
            >정지중</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="certification_status_3"
            value="취소"
          />
          <label class="form-check-label" for="certification_status_3"
            >취소</label
          >
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문 인증범위</label>
      <div class="col-sm-9">
        <div>
          <textarea
            class="form-control"
            id="scope_ko"
            v-model.trim="customer.scope_ko"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- ==================================== -->
    <h5 class="mt-3 fw-bold">[전환심사결과]</h5>

    <!-- 변경사유 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">기관변경사유</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="change_reason_1"
            value="불만"
          />
          <label class="form-check-label" for="change_reason_1"
            >기존기관에 대한 불만</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="change_reason_2"
            value="KAI신뢰"
          />
          <label class="form-check-label" for="change_reason_2"
            >KAI에 대한 신뢰</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="change_reason_3"
            value="고객요청사항"
            v-model="customer.activity"
          />
          <label class="form-check-label" for="change_reason_3"
            >고객요청사항</label
          >
        </div>
      </div>
    </div>

    <!-- 최근심사결과 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">최근심사결과</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="recent_result_1"
            value="최초심사"
          />
          <label class="form-check-label" for="recent_result_1">최초심사</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="recent_result_2"
            value="사후심사"
          />
          <label class="form-check-label" for="recent_result_2">사후심사</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="recent_result_3"
            value="고객요청사항"
          />
          <label class="form-check-label" for="recent_result_3">갱신심사</label>
        </div>
      </div>
    </div>

    <!-- 불만사항처리 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">불만처리사항</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="complaint_1"
            value="조치완료"
          />
          <label class="form-check-label" for="complaint_1"
            >모두 조치되었음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="complaint_2"
            value="미조치"
          />
          <label class="form-check-label" for="complaint_2"
            >미조치 되었음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="complaint_3"
            value="고객요청사항"
          />
          <label class="form-check-label" for="complaint_3"
            >접수실적 없음</label
          >
        </div>
      </div>
    </div>

    <!-- 이전시정조치처리 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">이전시정조치 처리</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="previous_1"
            value="조치완료"
          />
          <label class="form-check-label" for="previous_1"
            >모두 조치되었음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="previous_2"
            value="미조치"
          />
          <label class="form-check-label" for="previous_2"
            >미조치/지연되고 있음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="complaint_3"
            value="없음"
          />
          <label class="form-check-label" for="complaint_3"
            >이전시정조치 없음</label
          >
        </div>
      </div>
    </div>

    <!-- 인증유효성 확인 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">인증유효성 확인</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="validity_1"
            value="인증추천"
          />
          <label class="form-check-label" for="validity_1"
            >기존 인증서의 효력이 유지되고 있으며 인증전환에 하자 없음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="validity_2"
            value="선조치요망"
          />
          <label class="form-check-label" for="validity_2"
            >일부 미비사항이 발견되었으며 이에 대한 조치가 선결되어야 함</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="validity_3"
            value="전환불가능"
          />
          <label class="form-check-label" for="validity_3"
            >인증전황이 불가능하며 확인심사 또는 신규심사로 처리되어야 함</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="validity_4"
            value="재심사"
          />
          <label class="form-check-label" for="validity_4"
            >객관적 증거부족으로 추후 재방문 심사를 통하여 처리함</label
          >
        </div>
      </div>
    </div>

    <!-- 심사총평 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사총평</label>
      <div class="col-sm-9">
        <div>
          <textarea class="form-control"></textarea>
        </div>
      </div>
    </div>

    <!-- 날짜 -->
    <div class="row mb-3" v-show="customer.certification_type !== 'initial'">
      <label class="col-sm-3 col-form-label">전환(방문)심사일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.transfer_date"
        />
      </div>
    </div>

    <p class="mt-5 text">
      심사원명 :
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(서명)
    </p>

    <P class="mt-5"
      >※ 본 전환심사보고서는 인증신청서와 함께 제출되어야 합니다</P
    >
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
      customer: {
        // id: -1,
        certification_type: '',
        name_ko: '',
        name_en: '',
        business_no: '',
        ceo_name: '',
        ceo_phone: '',
        email: '',
        phone: '',
        fax: '',
        postcode: '',
        // address_jibun: '',
        address_ko: '',
        address_detail: '',
        address_reference: '',
        address_en: '',
        address_en_detail: '',
        contact_name: '',
        contact_phone: '',
        contact_email: '',
        homepage: '',
        organization_scope: '',
        certification_standard: [],
        employee_count: '',
        design: '',
        development_count: '',
        scope_ko: '',
        scope_en: '',
        activity: [],
        process: '',
        shift: '',
        shift_work_count: '',
        exclusion: '',
        exclusion_reason: '',
        transfer_date: '',
        s1_start_date: '',
        s1_end_date: '',
        s2_start_date: '',
        s2_end_date: '',
        s2_team: '',
        manual_date: '',
        internal_date: '',
        management_date: '',
        outsourcing: '',
        outsourcing_process: '',
        construction_license: '',
        construction_license_content: '',
        hazardous_chemical: '',
        hazardous_chemical_content: '',
        location: '',
        production_method: '',
        production_method_etc: '',
        environmental_permit: '',
        environmental_permit_content: '',
        environmental_accident: '',
        environmental_accident_content: '',
        safety_accident: '',
        safety_accident_content: '',
        outside_worker: '',
        outside_worker_content: '',
        hazardous_chemical_worker: '',
        hazardous_chemical_worker_content: '',
        air_pollution: [],
        air_pollution_content: '',
        soil_pollution: [],
        soil_pollution_content: '',
        water_pollution: [],
        water_pollution_content: '',
        natural_resource_pollution: [],
        natural_resource_pollution_content: '',
        energy_pollution: [],
        energy_pollution_content: '',
        waste_pollution: [],
        waste_pollution_content: '',
        machine_factor: [],
        electric_factor: [],
        chemical_factor: [],
        biological_factor: [],
        work_factor: [],
        work_env: [],
        img_license: '',
        img_license_originalname: '',
        imgExt: '',
        auditor_name: '',
        auditor_email: ''
      }
    }
  },
  created() {},
  mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
  },
  unmounted() {},
  methods: {
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
        title: '인증신청을 생성 하시겠습니까?',
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

          const r = await this.$post('/api/customer', {
            param: {
              certification_type: this.customer.certification_type,
              certification_standard: JSON.stringify(
                this.customer.certification_standard
              ),
              name_ko: this.customer.name_ko,
              name_en: this.customer.name_en,
              business_no: this.customer.business_no,
              ceo_name: this.customer.ceo_name,
              ceo_phone: this.customer.ceo_phone,
              email: this.customer.email,
              phone: this.customer.phone,
              fax: this.customer.fax,
              postcode: this.customer.postcode,
              address_ko: this.customer.address_ko,
              address_detail: this.customer.address_detail,
              address_reference: this.customer.address_reference,
              address_en: this.customer.address_en,
              address_en_detail: this.customer.address_en_detail,
              contact_name: this.customer.contact_name,
              contact_phone: this.customer.contact_phone,
              contact_email: this.customer.contact_email,
              homepage: this.customer.homepage,
              organization_scope: this.customer.organization_scope,
              employee_count: this.customer.employee_count,
              design: this.customer.design,
              scope_ko: this.customer.scope_ko,
              scope_en: this.customer.scope_en,
              activity: JSON.stringify(this.customer.activity),
              process: this.customer.process,
              shift: this.customer.shift,
              shift_work_count: this.customer.shift_work_count,
              exclusion: this.customer.exclusion,
              exclusion_reason: this.customer.exclusion_reason,
              transfer_date: JSON.stringify(this.customer.transfer_date),
              s1_start_date: JSON.stringify(this.customer.s1_start_date),
              s1_end_date: JSON.stringify(this.customer.s1_end_date),
              s2_start_date: JSON.stringify(this.customer.s2_start_date),
              s2_end_date: JSON.stringify(this.customer.s2_end_date),
              s2_team: this.customer.s2_team,
              manual_date: JSON.stringify(this.customer.manual_date),
              internal_date: JSON.stringify(this.customer.internal_date),
              management_date: JSON.stringify(this.customer.management_date),
              outsourcing: this.customer.outsourcing,
              outsourcing_process: this.customer.outsourcing_process,
              construction_license: this.customer.construction_license,
              construction_license_content:
                this.customer.construction_license_content,
              hazardous_chemical: this.customer.hazardous_chemical,
              hazardous_chemical_content:
                this.customer.hazardous_chemical_content,
              location: this.customer.location,
              environmental_permit: this.customer.environmental_permit,
              environmental_permit_content:
                this.customer.environmental_permit_content,
              environmental_accident: this.customer.environmental_accident,
              environmental_accident_content:
                this.customer.environmental_accident_content,
              safety_accident: this.customer.safety_accident,
              safety_accident_content: this.customer.safety_accident_content,
              outside_worker: this.customer.outside_worker,
              outside_worker_content: this.customer.outside_worker_content,
              hazardous_chemical_worker:
                this.customer.hazardous_chemical_worker,
              air_pollution: JSON.stringify(this.customer.air_pollution),
              air_pollution_content: this.customer.air_pollution_content,
              soil_pollution_content: this.customer.soil_pollution_content,
              water_pollution: JSON.stringify(this.customer.water_pollution),
              water_pollution_content: JSON.stringify(
                this.customer.water_pollution_content
              ),
              natural_resource_pollution: JSON.stringify(
                this.customer.natural_resource_pollution
              ),
              natural_resource_pollution_content:
                this.customer.natural_resource_pollution_content,
              energy_pollution: JSON.stringify(this.customer.energy_pollution),
              energy_pollution_content: this.customer.energy_pollution_content,
              waste_pollution: JSON.stringify(this.customer.waste_pollution),
              waste_pollution_content: this.customer.waste_pollution_content,
              machine_factor: JSON.stringify(this.customer.machine_factor),
              electric_factor: JSON.stringify(this.customer.electric_factor),
              chemical_factor: JSON.stringify(this.customer.chemical_factor),
              biological_factor: JSON.stringify(
                this.customer.biological_factor
              ),
              work_factor: JSON.stringify(this.customer.work_factor),
              work_env: JSON.stringify(this.customer.work_env),
              auditor_name: this.$store.state.user.userInfo.name,
              auditor_email: this.$store.state.user.userInfo.email,
              img_license: this.customer.img_license,
              img_license_originalname: this.customer.img_license_originalname,
              imgExt: this.customer.imgExt
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('인증신청 정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/list',
              query: { customer_id: r.data.insertId }
            })
          }
        }
      })
    },
    goToList() {
      this.$router.push({ path: '/customer/list' })
    }
  }
}
</script>
