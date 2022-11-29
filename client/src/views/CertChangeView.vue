<template>
  <div class="container mt-5">
    <h3 class="mb-4 fw-bold text-center">인증심사정보 수정화면</h3>
    <hr />
    <p>심사번호: {{ id }}</p>
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
          <th>고객구분</th>
          <th>인증범위</th>
          <th>종업원수</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <td>{{ dbAuditDataByAuditNo.name_ko }}</td>
          <td>{{ dbAuditDataByAuditNo.customer_type }}</td>
          <td>{{ dbAuditDataByAuditNo.scope_ko }}</td>
          <td>{{ dbAuditDataByAuditNo.employee_count }} 명</td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5">
            <p class="fst-italic text-start">
              * 추가로 참고할 정보제안은 인증원에 요청해주세요. 즉시 반영될
              것입니다.
            </p>
          </td>
        </tr>
      </tfoot>
    </table>

    <hr />

    <h5 class="fw-bold mt-5 mb-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사등록
    </h5>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사번호</label>
      <div class="col-sm-9">{{ dbAuditDataByAuditNo.audit_no }}</div>
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
            v-model="this.dbAuditDataByAuditNo.audit_type"
            disabled
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
            v-model="this.dbAuditDataByAuditNo.audit_type"
            disabled
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
            v-model="this.dbAuditDataByAuditNo.audit_type"
            disabled
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
            v-model="this.dbAuditDataByAuditNo.audit_type"
            disabled
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
            v-model="this.dbAuditDataByAuditNo.audit_type"
            disabled
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
      v-if="this.dbAuditDataByAuditNo.audit_type !== '최초'"
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
            v-model="this.dbAuditDataByAuditNo.audit_degree"
            disabled
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
            v-model="this.dbAuditDataByAuditNo.audit_degree"
            disabled
          />
          <label class="form-check-label" for="Second">2차</label>
        </div>
      </div>
    </div>
    <div v-if="this.dbAuditDataByAuditNo.audit_type === '최초'">
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">1단계 심사시작일</label>
        <div class="col-sm-9">
          <input
            type="date"
            class="form-control"
            v-model="this.dbAuditDataByAuditNo.audit_s1_start"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">1단계 심사종료일</label>
        <div class="col-sm-9">
          <input
            type="date"
            class="form-control"
            v-model="this.dbAuditDataByAuditNo.audit_s1_end"
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
          v-model="this.dbAuditDataByAuditNo.audit_s2_start"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">2단계 심사종료일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model="this.dbAuditDataByAuditNo.audit_s2_end"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사팀원</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="2단계 심사팀원 성명 (ex. 심사원1, 심사원2) 또는 '단독'"
          v-model="this.dbAuditDataByAuditNo.audit_auditor"
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
          v-model="this.dbAuditDataByAuditNo.audit_fee"
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
      <!-- <button class="btn btn-primary me-1" @click="giveNumber">
        심사번호생성
      </button> -->
      <button class="btn btn-secondary me-1" @click="goToList">목록</button>
      <button class="btn btn-danger me-1" @click="doSave">저장</button>
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
      customer_id: '',
      isChecked: false,
      // searchName: '',
      imgSrc: '',
      imgExt: '',
      dbAuditDataByAuditNo: {
        audit_no: '',
        audit_type: '',
        audit_degree: '',
        audit_s1_start: '',
        audit_s1_end: '',
        audit_s2_start: '',
        audit_s2_end: '',
        audit_auditor: '',
        audit_fee: ''
      }
    }
  },
  created() {
    // console.log(this.customer)
    // console.log(this.$route.query.id)
    this.id = this.$route.query.audit_no
    this.customer_id = this.$route.query.customer_id
    console.log('심사실적에서 넘어온 수정 audit_no:', this.id)

    // this.searchName = this.$route.query.searchName
  },
  mounted() {
    console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
    this.getAuditListByAuditNo()
  },
  unmounted() {},
  methods: {
    async getAuditListByAuditNo() {
      // console.log('넘어온 심사번호', this.id)
      const dbAuditListByAuditNo = await this.$get(
        // `/api/customer/cert/list/${this.id}`
        `http://localhost:3000/api/customer/audit/${this.id}`
      )
      // const dbAuditDataByCustomer = await this.$post(
      //   `/api/customer/cert/list/${this.id}`
      // )
      // const dbAuditDataByCustomer = await this.$get('/api/customer/cert/list')
      console.log('DB에서 가져온 AuditListByAuditNo', dbAuditListByAuditNo)
      this.dbAuditDataByAuditNo = dbAuditListByAuditNo
      this.dbAuditDataByAuditNo.audit_s1_start = JSON.parse(
        dbAuditListByAuditNo.audit_s1_start
      )
      this.dbAuditDataByAuditNo.audit_s1_end = JSON.parse(
        dbAuditListByAuditNo.audit_s1_end
      )
      this.dbAuditDataByAuditNo.audit_s2_start = JSON.parse(
        dbAuditListByAuditNo.audit_s2_start
      )
      this.dbAuditDataByAuditNo.audit_s2_end = JSON.parse(
        dbAuditListByAuditNo.audit_s2_end
      )
      this.dbAuditDataByAuditNo.audit_fee = dbAuditListByAuditNo.audit_fee
    },

    async doSave() {
      this.$swal({
        title: '심사정보를 수정 하시겠습니까?',
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
          const putId = this.dbAuditDataByAuditNo.audit_no
          console.log(putId)
          const r = await this.$put(`/api/customer/cert/${putId}`, {
            param: {
              audit_s1_start: JSON.stringify(
                this.dbAuditDataByAuditNo.audit_s1_start
              ),
              audit_s1_end: JSON.stringify(
                this.dbAuditDataByAuditNo.audit_s1_end
              ),
              audit_s2_start: JSON.stringify(
                this.dbAuditDataByAuditNo.audit_s2_start
              ),
              audit_s2_end: JSON.stringify(
                this.dbAuditDataByAuditNo.audit_s2_end
              ),
              audit_auditor: this.dbAuditDataByAuditNo.audit_auditor,
              audit_fee: this.dbAuditDataByAuditNo.audit_fee
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('심사정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/cert/',
              query: { id: this.dbAuditDataByAuditNo.audit_no }
            })
          }
        }
      })
    },
    goToChange() {
      console.log(this.id)
      this.$router.push({
        path: '/customer/cert/change',
        query: { customer_id: this.id }
      })
    },
    goToList() {
      this.$router.push({
        path: '/customer/cert',
        query: { id: this.dbAuditDataByAuditNo.business_no }
      })
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
