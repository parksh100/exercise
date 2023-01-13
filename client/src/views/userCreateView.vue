<template>
  <div class="container mt-5">
    <h3 class="mb-4 fw-bold text-center">심사원정보등록</h3>
    <hr />
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">성명</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model.trim="auditor.name" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">Email</label>
      <div class="col-sm-9">
        <input
          type="email"
          class="form-control"
          placeholder=""
          v-model="auditor.email"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">비밀번호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="auditor.pw"
          maxlength="12"
          placeholder=""
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">Role</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="role_1"
            value="auditor"
            v-model="auditor.role"
          />
          <label class="form-check-label" for="role_1">심사원</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="role_2"
            value="lead_auditor"
            v-model="auditor.role"
          />
          <label class="form-check-label" for="role_2">선임심사원</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="role_3"
            value="senior_auditor"
            v-model="auditor.role"
          />
          <label class="form-check-label" for="role_3">검증심사원</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="role_4"
            value="admin"
            v-model="auditor.role"
          />
          <label class="form-check-label" for="role_4">관리자</label>
        </div>
      </div>
    </div>

    <!--start daum api  -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">우편번호</label>
      <div class="col-sm-5">
        <input
          type="text"
          class="form-control"
          id="postcode"
          v-model="auditor.postcode"
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
          v-model="auditor.address_ko"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">상세주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="detailAddress"
          v-model="auditor.address_detail"
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
          v-model="auditor.address_reference"
        />
      </div>
    </div>

    <!--end daum api  -->

    <!-- 심사가능코드 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사가능코드</label>
      <div class="col-sm-9">
        <div>
          <div>
            {{ auditor.iaf_code }}
            <small class="text-primary"
              >* 인증원의 계약검토를 통해 확정됩니다.</small
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_35"
              value="01"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_35">01(농,수산업)</label>
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_36"
              value="02"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_36"
              >02(광업 및 채석업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_1"
              value="03"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_1"
              >03(음식료 및 담배)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_2"
              value="04"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_2"
              >04(섬유 및 섬유제품)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_3"
              value="05"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_3"
              >05(가죽 및 가죽제품)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_4"
              value="06"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_4"
              >06(목재 및 목재제품)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_5"
              value="07"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_5"
              >07(펄프, 종이, 종이제품)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_6"
              value="08"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_6">08(출판업)</label>
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_7"
              value="09"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_7">09(인쇄업)</label>
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_8"
              value="10"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_8"
              >10(코크스, 연탄 및 석유정제품 제조업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_9"
              value="12"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_9"
              >12(화학물질, 화학제품 및 화학섬유 제조업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_10"
              value="13"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_10"
              >13(의료용 물질 및 의약품 제조업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_11"
              value="14"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_11"
              >14(고무제품 및 플라스틱제품 제조업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_12"
              value="15"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_12"
              >15(비금속 광물제품 제조업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_13"
              value="16"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_13"
              >16(콘크리트, 시멘트, 석회 및 플라스터 등 제조업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_14"
              value="17"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_14"
              >17(1차 금속 및 금속가공제품 제조업 중 1차 금속 제조업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_15"
              value="18"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_15"
              >18(기계 및 장비 제조업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_16"
              value="19"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_16"
              >19(전기기기 및 광학기기 제조업)</label
            >
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_17"
              value="20"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_17">20(조선업)</label>
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_18"
              value="21"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_18"
              >21(항공기 제조업)</label
            >
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_19"
              value="22"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_19"
              >22(기타 운송장비 제조업)</label
            >
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_20"
              value="23"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_20"
              >23(기타 제조업)</label
            >
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_40"
              value="24"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_40">24(재생업)</label>
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_21"
              value="25"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_21">25(전기공급업)</label>
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_22"
              value="26"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_22"
              >26(연료용 가스 공급업)</label
            >
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_23"
              value="27"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_23"
              >27(수도 및 증기 공급업)</label
            >
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_24"
              value="28"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_24">28(건설업)</label>
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_25"
              value="29"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_25"
              >29(도소매업, 자동차 및 모터사이클 수리업, 개인 및 가정용품
              수리업)</label
            >
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_26"
              value="30"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_26"
              >30(숙박업, 음식점업 및 주점업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_27"
              value="31"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_27"
              >31(운송업, 창고업 및 통신업)</label
            >
          </div>
          <br />

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_28"
              value="32"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_28"
              >32(금융업, 보험업, 부동산업 및 임대업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_29"
              value="33"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_29">33(정보기술업)</label>
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_41"
              value="34"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_41"
              >34(전문, 과학 및 기술서비스업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_30"
              value="35"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_30"
              >35(기타 서비스업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_31"
              value="36"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_31">36(공공 행정)</label>
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_32"
              value="37"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_32"
              >37(교육 서비스업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_33"
              value="38"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_33"
              >38(보건업 및 사회복지 서비스업)</label
            >
          </div>
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_34"
              value="39"
              v-model="auditor.iaf_code"
            />
            <label class="form-check-label" for="code_34"
              >39(기타 사회 서비스업)</label
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 사업자등록증 첨부 -->
    <!-- <div class="row mb-2">
      <label class="col-sm-3 col-form-label">사업자등록증 첨부</label>
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
          v-model="auditor.img_license_originalname"
          v-if="auditor.img_license_originalname"
        />
      </div>
    </div> -->

    <!-- <div class="alert alert-secondary mb-5" role="alert">
      <ul>
        <li>최대 1개 가능</li>
        <li>파일 확장자 : pdf, 이미지 파일만 가능</li>
      </ul>
    </div> -->

    <div class="text-end">
      <button class="btn btn-secondary me-1" @click="goToList">목록</button>
      <button class="btn btn-primary" @click="doSave">저장</button>
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
      imgSrc: '',
      fileCert: '',
      imgExt: '',
      ceo_phone: '',
      business_no: '',
      phone: '',
      fax: '',
      contact_phone: '',
      auditor: {
        // id: -1,
        name: '',
        email: '',
        pw: '',
        role: '',
        postcode: '',
        address_ko: '',
        address_detail: '',
        address_reference: '',
        iaf_code: [],
        img_license: '',
        img_license_originalname: '',
        imgExt: ''
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
          if (this.auditor.address_extra !== '') {
            this.auditor.address_extra = ''
          }
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            this.auditor.address_ko = data.roadAddress
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.auditor.address_ko = data.jibunAddress
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              this.auditor.address_reference += data.bname
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              this.auditor.address_reference +=
                this.auditor.address_reference !== ''
                  ? `, ${data.buildingName}`
                  : data.buildingName
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.auditor.address_detail !== '') {
              this.auditor.address_detail = `(${this.auditor.address_detail})`
            }
          } else {
            this.auditor.address_reference = ''
          }

          // 영문주소
          this.auditor.address_en = data.addressEnglish

          // 우편번호를 입력한다.
          this.auditor.postcode = data.zonecode
        }
      }).open()
    },

    async uploadFile(files) {
      const r = await this.$upload('/api/upload/file', files[0])
      console.log(r)
      this.imgSrc = `http://localhost:3000/static/uploads/${r.filename}`
      this.auditor.img_license = r.filename
      this.auditor.img_license_originalname = r.originalname
      this.imgExt = r.mimetype
      console.log(this.auditor.img_license)
      console.log(this.auditor.img_license_originalname)
      console.log(this.imgExt)
    },
    async doSave() {
      // if (this.customer.customer_type === '') {
      //   return this.$swal('고객구분을 선택해주세요.')
      // }

      this.$swal({
        title: '심사원정보를 저장 하시겠습니까?',
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

          const r = await this.$post('/api/auditor', {
            param: {
              user_email: this.auditor.email,
              user_pw: this.auditor.pw,
              user_name: this.auditor.name,
              user_role: this.auditor.role,
              user_auditable_code: JSON.stringify(this.auditor.iaf_code)
              // img_license: this.auditor.img_license,
              // img_license_originalname: this.auditor.img_license_originalname,
              // imgExt: this.auditor.imgExt
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('심사원정보가 저장되었습니다.')
            // this.$router.push({
            //   path: '/auditor/list/auditor',
            //   query: { auditor: r.data.insertId }
            // })
          }
        }
      })
    },
    goToList() {
      this.$router.push({ path: '/auditor/list' })
    }
  }
}
</script>
