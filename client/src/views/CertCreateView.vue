<template>
  <div class="container mt-5">
    <h3 class="mb-4 fw-bold text-center">인증심사등록</h3>
    <hr />
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      기본정보
    </h5>
    <table class="table text-center">
      <thead>
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 30%" />
          <col style="width: 30%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
        </colgroup>
        <tr>
          <th>회사명</th>
          <th>인증표준</th>
          <th>인증범위</th>
          <th>종업원수</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <td>{{ customer.name_ko }}</td>
          <td>{{ customer.certification_standard }}</td>
          <td>{{ customer.scope_ko }}</td>
          <td>{{ customer.employee_count }} 명</td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5">
            <p class="fst-italic">
              * 추가로 참고할 정보제안은 인증원에 요청해주세요. 즉시 반영될
              것입니다.
            </p>
          </td>
        </tr>
      </tfoot>
    </table>

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사실적
    </h5>
    <table class="table">
      <thead>
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 30%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
        </colgroup>
        <tr>
          <th>심사번호</th>
          <th>심사유형</th>
          <th>차수</th>
          <th>외부심사원</th>
          <th>심사시작일</th>
          <th>심사종료일</th>
          <th>심사비</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="item in auditInfo" :key="item">
          <td>{{ item.audit_no }}</td>
          <td>{{ item.audit_type }}</td>
          <td>{{ item.audit_degree }}</td>
          <td>{{ item.audit_auditor }}</td>
          <td>{{ item.audit_s2_start }}</td>
          <td>{{ item.audit_s2_end }}</td>
          <td>{{ item.audit_fee }}</td>
        </tr>
      </tbody>
    </table>

    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문상호</label>
      <div class="col-sm-9">
        {{ customer.name_ko }}
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">신청 인증표준</label>
      <div class="col-sm-9">
        {{ customer.certification_standard }}
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사팀장</label>
      <div class="col-sm-9">

        {{ customer.auditor_name }}
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">인증범위</label>
      <div class="col-sm-9">
        {{ customer.scope_ko }}
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">종업원 수</label>
      <div class="col-sm-9">{{ customer.employee_count }} 명</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">이전심사유형</label>
      <div class="col-sm-9"></div>
    </div> -->

    <hr />

    <h5 class="fw-bold mt-5 mb-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사등록
    </h5>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사번호</label>
      <div class="col-sm-9">
        {{ auditInfo.audit_no }}
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사유형</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="initial"
            value="최초"
            v-model="auditInfo.audit_type"
          />
          <label class="form-check-label" for="initial">최초심사</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="Surveillance"
            value="사후"
            v-model="auditInfo.audit_type"
          />
          <label class="form-check-label" for="Surveillance">사후심사</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="Renewal"
            value="갱신"
            v-model="auditInfo.audit_type"
          />
          <label class="form-check-label" for="Renewal">갱신심사</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="transSurveillance"
            value="전환사후"
            v-model="auditInfo.audit_type"
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
            v-model="auditInfo.audit_type"
          />
          <label class="form-check-label" for="transRenewal"
            >전환갱신심사</label
          >
        </div>
      </div>
    </div>

    <!-- 심사차수 -->
    <div
      class="row mb-3"
      v-show="
        this.auditInfo.audit_type === '사후' ||
        this.auditInfo.audit_type === '전환사후'
      "
    >
      <label class="col-sm-3 col-form-label">심사차수</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="First"
            value="1차"
            v-model="auditInfo.audit_degree"
          />
          <label class="form-check-label" for="First">1차</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="Second"
            value="2차"
            v-model="auditInfo.audit_degree"
          />
          <label class="form-check-label" for="Second">2차</label>
        </div>
      </div>
    </div>
    <div v-show="this.auditInfo.audit_type === '최초'">
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">1단계 심사시작일</label>
        <div class="col-sm-9">
          <input
            type="date"
            class="form-control"
            v-model.trim="auditInfo.audit_s1_start"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">1단계 심사종료일</label>
        <div class="col-sm-9">
          <input
            type="date"
            class="form-control"
            v-model.trim="auditInfo.audit_s1_end"
          />
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">2단계 심사시작일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="auditInfo.audit_s2_start"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">2단계 심사종료일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="auditInfo.audit_s2_end"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사팀원</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="2단계 심사팀원 성명 (ex. 홍길동, 김철수) 또는 '단독'"
          v-model.trim="auditInfo.audit_auditor"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사비</label>
      <div class="col-sm-9">
        <input
          type="number"
          class="form-control"
          placeholder="VAT별도(원)"
          v-model="auditInfo.audit_fee"
        />
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
          @change="uploadImage($event.target.files)"
        />
        <input
          type="text"
          class="form-control mt-2"
          v-model="customer.img_license_originalname"
          v-if="customer.img_license_originalname"
        />
        <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
      </div>
    </div> -->

    <!-- <div class="alert alert-secondary mb-5" role="alert">
      <ul>
        <li>최대 1개 가능</li>
        <li>파일 확장자 : pdf, png, jpg만 가능</li>
      </ul>
    </div> -->
    <div class="text-end">
      <button class="btn btn-primary me-1" @click="giveNumber">
        심사번호생성
      </button>
      <button class="btn btn-secondary me-1" @click="goToList">취소</button>
      <button
        class="btn btn-danger me-1"
        @click="doSave"
        v-show="this.auditInfo.audit_no"
      >
        저장
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
      isChecked: false,
      // searchName: '',
      imgSrc: '',
      imgExt: '',
      customer: {
        name_ko: '',
        certification_type: '',
        certification_standard: '',
        scope_ko: '',
        employee_count: '',
        auditor_name: '',
        auditor_email: ''
      },
      auditInfo: []
      //   auditInfo: {
      //     audit_id: -1,
      //     audit_no: '',
      //     audit_type: '',
      //     audit_degree: '',
      //     audit_s1_start: '',
      //     audit_s1_end: '',
      //     audit_s2_start: '',
      //     audit_s2_end: '',
      //     audit_leader: '',
      //     audit_auditor: '',
      //     audit_fee: '',
      //     customer_id: '',
      //     created_date: ''
      //   }
    }
  },
  created() {
    // console.log(this.customer)
    // console.log(this.$route.query.id)
    this.id = this.$route.query.customer_id
    console.log('customerList에서 넘어온 customer_id:', this.id)

    // this.searchName = this.$route.query.searchName
  },
  mounted() {
    console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }

    // 1. db에서 데이터 가져오기
    //   const dbData = await this.$get(
    //     `http://localhost:3000/api/customer/${this.id}`
    //   )
    //   console.log('db에서 가져온 data : ', dbData)

    //   this.customer.name_ko = dbData.name_ko
    //   this.customer.certification_standard = dbData.certification_standard
    //   this.customer.scope_ko = dbData.scope_ko
    //   this.customer.employee_count = dbData.employee_count
    this.getCustomer()
    this.getCertListByCustomer()
  },
  unmounted() {},
  methods: {
    giveNumber() {
      if (this.auditInfo.audit_no) {
        this.$swal('이미 심사번호가 생성되었습니다.')
        return
      }

      // 유효성 검사
      if (this.auditInfo.audit_type === '') {
        // alert('심사유형을 선택해주세요.')
        this.$swal('심사유형을 선택하세요.')
        return
      }
      if (this.auditInfo.audit_type === '최초') {
        if (this.auditInfo.audit_s1_start === '') {
          this.$swal('1단계 심사시작일을 선택하세요.')
          return
        }
        if (this.auditInfo.audit_s1_end === '') {
          this.$swal('1단계 심사종료일을 선택하세요.')
          return
        }
        if (this.auditInfo.audit_s2_start === '') {
          this.$swal('2단계 심사시작일을 선택하세요.')
          return
        }
        if (this.auditInfo.audit_s2_end === '') {
          this.$swal('2단계 심사종료일을 선택하세요.')
          return
        }
        // if (this.auditInfo.audit_leader === '') {
        //   this.$swal('심사팀장을 입력하세요.')
        //   return
        // }
        if (this.auditInfo.audit_auditor === '') {
          this.$swal('심사팀원을 입력하세요.')
          return
        }
        if (this.auditInfo.audit_fee === '') {
          this.$swal('심사비를 입력하세요.')
          return
        }
      } else if (
        this.auditInfo.audit_type === '갱신' ||
        this.auditInfo.audit_type === '전환갱신'
      ) {
        if (this.auditInfo.audit_s2_start === '') {
          this.$swal('2단계 심사시작일을 선택하세요.')
          return
        }
        if (this.auditInfo.audit_s2_end === '') {
          this.$swal('2단계 심사종료일을 선택하세요.')
          return
        }
        // if (this.auditInfo.audit_leader === '') {
        //   this.$swal('심사팀장을 입력하세요.')
        //   return
        // }
        if (this.auditInfo.audit_auditor === '') {
          this.$swal('심사팀원을 입력하세요.')
          return
        }
        if (this.auditInfo.audit_fee === '') {
          this.$swal('심사비를 입력하세요.')
          return
        }
      } else {
        if (this.auditInfo.audit_degree === '') {
          this.$swal('심사차수를 선택하세요.')
          return
        }
        if (this.auditInfo.audit_s2_start === '') {
          this.$swal('2단계 심사시작일을 선택하세요.')
          return
        }
        if (this.auditInfo.audit_s2_end === '') {
          this.$swal('2단계 심사종료일을 선택하세요.')
          return
        }
        // if (this.auditInfo.audit_leader === '') {
        //   this.$swal('심사팀장을 입력하세요.')
        //   return
        // }
        if (this.auditInfo.audit_auditor === '') {
          this.$swal('심사팀원을 입력하세요.')
          return
        }
        if (this.auditInfo.audit_fee === '') {
          this.$swal('심사비를 입력하세요.')
          return
        }
      }

      // 사후/갱신 1자리
      let isType = ''
      if (this.auditInfo.audit_type === '최초') {
        isType = 'I'
      }
      if (this.auditInfo.audit_type === '사후') {
        isType = 'S'
      } else if (this.auditInfo.audit_type === '갱신') {
        isType = 'R'
      }
      // console.log('isType : ', isType)

      // 차수 1자리
      let isDegree = ''
      if (this.auditInfo.audit_degree === '1차') {
        isDegree = '1'
      } else if (this.auditInfo.audit_degree === '2차') {
        isDegree = '2'
      } else {
        isDegree = '0'
      }
      // console.log('isDegree : ', isDegree)

      // 년도 2자리
      const year = new Date().getFullYear().toString().substring(2, 4)
      // console.log('년도2자리', year)
      // this.number.year = year

      // 월 2자리
      const month = new Date().getMonth() + 1
      // if (month < 10) {
      //   month = '0' + month
      // } else {
      //   month = month
      // }
      // console.log('월2자리', month)
      // console.log('월2자리', month)

      // 규격 자리(Q,E,O,C)
      // console.log(this.customer.certification_standard)
      const customerStandard = JSON.parse(this.customer.certification_standard)
      // console.log('규격', customerStandard)
      // 배열을 문자열로 변환
      // const stringStandard = customerStandard.join()
      // console.log('표준문자열', stringStandard)
      let scheme = ''
      for (let i = 0; i < customerStandard.length; i++) {
        const standard = ['QMS', 'EMS', 'OHSMS', 'CGMP']
        const standardCode = ['Q', 'E', 'O', 'C']
        for (let j = 0; j < standard.length; j++) {
          if (customerStandard[i] === standard[j]) {
            scheme += standardCode[j]
          }
        }
      }
      // console.log('규격코드', scheme)

      // 일련번호 4자리
      let serialNo = Math.floor(Math.random() * 10000) + 1
      // console.log('일련번호', serialNo.toString().padStart(4, '0'))
      serialNo = serialNo.toString().padStart(4, '0')

      // this.number.serialNo = serialNo

      // 최종번호
      this.auditInfo.audit_no =
        isType + isDegree + year + month + scheme + serialNo
      console.log('최종번호', this.auditInfo.audit_no)
    },
    async getCertListByCustomer() {
      console.log(this.id)
      const dbAuditDataByCustomer = await this.$get(
        // `/api/customer/cert/list/${this.id}`
        `http://localhost:3000/api/customer/cert/list/${this.id}`
      )
      // const dbAuditDataByCustomer = await this.$post(
      //   `/api/customer/cert/list/${this.id}`
      // )
      // const dbAuditDataByCustomer = await this.$get('/api/customer/cert/list')
      console.log('DB에서 가져온 CertListByCustomer', dbAuditDataByCustomer)
      this.auditInfo = dbAuditDataByCustomer
      console.log('this.auditInfo: ', this.auditInfo)
    },
    async getCustomer() {
      console.log(this.id)
      const dbData = await this.$get(
        `http://localhost:3000/api/customer/list/${this.id}`
      )
      console.log(this.customer)
      console.log('db에서 가져온 data : ', dbData)

      this.customer.name_ko = dbData.name_ko
      this.customer.certification_standard = dbData.certification_standard
      this.customer.scope_ko = dbData.scope_ko
      this.customer.employee_count = dbData.employee_count
      this.customer.auditor_email = dbData.auditor_email
      this.customer.auditor_name = dbData.auditor_name
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
          this.customer.auditcode = data.zonecode
        }
      }).open()
    },
    async uploadImage(files) {
      const r = await this.$upload('/api/upload/file', files[0])
      console.log(r)
      this.imgSrc = `http://localhost:3000/static/uploads/${r.filename}`
      this.customer.img_license = r.filename
      this.customer.img_license_originalname = r.originalname
      this.imgExt = r.mimetype

      console.log(this.customer.img_license)
      console.log(this.customer.img_license_originalname)
      // console.log(this.customer.img_license)
    },
    async doSave() {
      // if (this.auditInfo.audit_type === '') {
      //   return this.$swal('심사유형을 선택하세요.')
      // }
      // if (this.auditInfo.audit_s1_start === '') {
      //   return this.$swal('1단계 심사시작일을 선택하세요.')
      // }
      // if (this.auditInfo.audit_s1_end === '') {
      //   return this.$swal('1단계 심사종료일을 선택하세요.')
      // }
      // if (this.auditInfo.audit_s2_start === '') {
      //   return this.$swal('2단계 심사시작일을 선택하세요.')
      // }
      // if (this.auditInfo.audit_s2_end === '') {
      //   return this.$swal('2단계 심사종료일을 선택하세요.')
      // }

      // console.log(this.customer.certification_standard)

      this.$swal({
        title: '심사정보를 저장 하시겠습니까?',
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
          // const postID = this.id
          // console.log(postID)
          const r = await this.$post('/api/cert/audit', {
            param: {
              audit_no: this.auditInfo.audit_no,
              audit_type: this.auditInfo.audit_type,
              audit_degree: this.auditInfo.audit_degree,
              audit_s1_start: JSON.stringify(this.auditInfo.audit_s1_start),
              audit_s1_end: JSON.stringify(this.auditInfo.audit_s1_end),
              audit_s2_start: JSON.stringify(this.auditInfo.audit_s2_start),
              audit_s2_end: JSON.stringify(this.auditInfo.audit_s2_end),
              audit_leader: this.user.userInfo.user_name,
              audit_auditor: this.auditInfo.audit_auditor,
              audit_fee: this.auditInfo.audit_fee,
              customer_id: this.id
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('심사정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/cert/list',
              query: { customer_id: r.data.insertId }
            })
          }
        }
      })
    },
    goToList() {
      this.$router.push({ path: '/customer/list' })
    },
    goToDetail() {
      this.$router.push({
        path: '/customer/detail',
        query: { customer_id: this.id }
      })
    }
  }
}
</script>
<style>
td {
  text-align: center;
}
</style>
