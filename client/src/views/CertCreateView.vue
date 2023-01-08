<template>
  <div class="container mt-5">
    <h3 class="mb-4 fw-bold text-center">인증심사등록</h3>
    <hr />
    <!-- <p style="font-size: small">{{ id }}</p> -->
    <!-- <p style="font-size: small">{{ customer.iaf_code }}</p> -->
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
          <th class="bg-light">회사명</th>
          <th class="bg-light">고객구분</th>
          <th class="bg-light">인증범위</th>
          <th class="bg-light">종업원수</th>
          <th class="bg-light">비고</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <td>{{ customer.name_ko }}</td>
          <td>{{ customer.customer_type }}</td>
          <td>{{ customer.scope_ko }}</td>
          <td>{{ customer.employee_count }} 명</td>
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

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사실적
    </h5>
    <table class="table table-bordered">
      <thead>
        <colgroup>
          <col style="width: 10%" />
          <col style="width: 20%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
        </colgroup>
        <tr>
          <th class="bg-light">심사번호</th>
          <th class="bg-light">심사표준</th>
          <th class="bg-light">심사유형</th>
          <th class="bg-light">차수</th>
          <th class="bg-light">외부심사원</th>
          <th class="bg-light">S2심사시작일</th>
          <th class="bg-light">S2심사종료일</th>
          <th class="bg-light">심사비</th>
          <th class="bg-light">비고</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="item in dbAuditInfo" :key="item">
          <td>
            <a
              @click="goToDetailAudit(item.audit_no)"
              class="text-decoration-underline"
              role="button"
              >{{ item.audit_no }}</a
            >
          </td>
          <td>{{ item.audit_standard }}</td>
          <td>{{ item.audit_type }}</td>
          <td>{{ item.audit_degree }}</td>
          <td>{{ item.audit_auditor }}</td>
          <td>{{ item.audit_s2_start.substr(0, 10) }}</td>
          <td>{{ item.audit_s2_end.substr(0, 10) }}</td>
          <td>{{ $convertNumberFormat(item.audit_fee, '#,###') }}</td>
          <td>
            <button
              class="btn btn-warning btn-sm"
              @click="goToChange(item.audit_no)"
            >
              수정
            </button>
          </td>
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
    <hr />
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사번호</label>
      <div class="col-sm-9">
        {{ addAuditInfo.audit_no }}
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">신청 인증표준</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_standard_1"
            value="QMS"
            v-model="addAuditInfo.audit_standard"
            @change="getClassifyAudit(), classifyComplexity(), classifyRisk()"
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
            v-model="addAuditInfo.audit_standard"
            @change="getClassifyAudit(), classifyComplexity(), classifyRisk()"
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
            v-model="addAuditInfo.audit_standard"
            @change="getClassifyAudit(), classifyComplexity(), classifyRisk()"
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
            v-model="addAuditInfo.audit_standard"
            @change="getClassifyAudit(), classifyComplexity(), classifyRisk()"
          />
          <label class="form-check-label" for="certification_standard_4"
            >ISO22716</label
          >
        </div>
        <div>{{ addAuditInfo.audit_standard }}</div>
      </div>
    </div>
    <!-- 계약검토 심사구분 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사구분</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="classify_1"
            value="단일심사"
            v-model="addAuditInfo.audit_classify"
            disabled
          />
          <label class="form-check-label" for="classify_1">단일심사</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="classify_2"
            value="통합심사"
            v-model="addAuditInfo.audit_classify"
            disabled
          />

          <label class="form-check-label" for="classify_2">통합심사</label>
        </div>
      </div>
    </div>

    <!-- 환경복잡성 -->
    <div
      class="row mb-3"
      v-show="addAuditInfo.audit_standard.includes('EMS') == true"
    >
      <label class="col-sm-3 col-form-label">환경복잡성</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="environment_complexity_1"
            value="높음"
            v-model="addAuditInfo.audit_env_complexity"
            disabled
          />
          <label class="form-check-label" for="environment_complexity_1"
            >높음</label
          >
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="environment_complexity_2"
            value="보통"
            v-model="addAuditInfo.audit_env_complexity"
            disabled
          />
          <label class="form-check-label" for="environment_complexity_2"
            >보통</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="environment_complexity_3"
            value="낮음"
            v-model="addAuditInfo.audit_env_complexity"
            disabled
          />
          <label class="form-check-label" for="environment_complexity_3"
            >낮음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="environment_complexity_4"
            value="제한"
            v-model="addAuditInfo.audit_env_complexity"
            disabled
          />
          <label class="form-check-label" for="environment_complexity_4"
            >제한</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="environment_complexity_5"
            value="특별"
            v-model="addAuditInfo.audit_env_complexity"
            disabled
          />
          <label class="form-check-label" for="environment_complexity_5"
            >특별</label
          >
        </div>
      </div>
    </div>

    <!-- 안전보건위험성 -->
    <div
      class="row mb-3"
      v-show="addAuditInfo.audit_standard.includes('OHSMS') == true"
    >
      <label class="col-sm-3 col-form-label">안전보건위험성</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="safety_health_risk_1"
            value="높음"
            v-model="addAuditInfo.audit_ohs_risk"
            disabled
          />
          <label class="form-check-label" for="safety_health_risk_1"
            >높음</label
          >
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="safety_health_risk_2"
            value="보통"
            v-model="addAuditInfo.audit_ohs_risk"
            disabled
          />
          <label class="form-check-label" for="safety_health_risk_2"
            >보통</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="safety_health_risk_3"
            value="낮음"
            v-model="addAuditInfo.audit_ohs_risk"
            disabled
          />
          <label class="form-check-label" for="safety_health_risk_3"
            >낮음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="safety_health_risk_4"
            value="제한"
            v-model="addAuditInfo.audit_ohs_risk"
            disabled
          />
          <label class="form-check-label" for="safety_health_risk_4"
            >제한</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="safety_health_risk_5"
            value="특별"
            v-model="addAuditInfo.audit_ohs_risk"
            disabled
          />
          <label class="form-check-label" for="safety_health_risk_5"
            >특별</label
          >
        </div>
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
            v-model="addAuditInfo.audit_type"
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
            v-model="addAuditInfo.audit_type"
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
            v-model="addAuditInfo.audit_type"
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
            v-model="addAuditInfo.audit_type"
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
            v-model="addAuditInfo.audit_type"
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
        this.addAuditInfo.audit_type === '사후' ||
        this.addAuditInfo.audit_type === '전환사후'
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
            v-model="addAuditInfo.audit_degree"
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
            v-model="addAuditInfo.audit_degree"
          />
          <label class="form-check-label" for="Second">2차</label>
        </div>
      </div>
    </div>
    <hr />
    <!-- <div class="row mb-3" v-show="this.addAuditInfo.audit_type === '최초'">
      <label class="col-sm-3 col-form-label">매뉴얼 제/개정일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="addAuditInfo.audit_manual_date"
        />
      </div>
    </div> -->
    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">내부심사일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="addAuditInfo.audit_internal_date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">경영검토일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="addAuditInfo.audit_management_date"
        />
      </div>
    </div> -->
    <!-- <hr /> -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">필요 심사M/D</label>
      <div class="col-sm-9 d-flex justify-content-between">
        <p>
          <span v-if="addAuditInfo.audit_md"
            >{{ addAuditInfo.audit_md }} M/D
            <small> (※전환인 경우 전환심사M/D 별도)</small></span
          >
        </p>
        <button class="btn btn-primary btn-sm" @click="calculateMD">
          MD계산
        </button>
      </div>
    </div>

    <div
      v-if="
        this.addAuditInfo.audit_type === '전환사후' ||
        this.addAuditInfo.audit_type === '전환갱신'
      "
    >
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">전환심사시작일</label>
        <div class="col-sm-9">
          <input
            type="date"
            class="form-control"
            v-model.trim="addAuditInfo.audit_trans_start"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">전환심사종료일</label>
        <div class="col-sm-9">
          <input
            type="date"
            class="form-control"
            v-model.trim="addAuditInfo.audit_trans_end"
          />
        </div>
      </div>
    </div>

    <div v-if="this.addAuditInfo.audit_type === '최초'">
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">1단계 심사시작일</label>
        <div class="col-sm-9">
          <input
            type="date"
            class="form-control"
            v-model.trim="addAuditInfo.audit_s1_start"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">1단계 심사종료일</label>
        <div class="col-sm-9">
          <input
            type="date"
            class="form-control"
            v-model.trim="addAuditInfo.audit_s1_end"
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
          v-model.trim="addAuditInfo.audit_s2_start"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">2단계 심사종료일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="addAuditInfo.audit_s2_end"
        />
      </div>
    </div>
    <hr />
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사팀원</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="2단계 심사팀원 성명 (ex. 심사원1, 심사원2) 또는 '단독'"
          v-model.trim="addAuditInfo.audit_auditor"
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
          v-model="addAuditInfo.audit_fee"
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
      <button class="btn btn-secondary me-1" @click="goToList">목록</button>
      <button
        class="btn btn-danger me-1"
        @click="doSave"
        v-show="this.addAuditInfo.audit_no"
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
      customer_id: '',
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
        auditor_email: '',
        customer_id: '',
        iaf_code: []
      },
      dbAuditInfo: [],
      addAuditInfo: {
        audit_id: -1,
        audit_standard: [],
        audit_classify: '',
        audit_no: '',
        business_no: '',
        audit_type: '',
        audit_degree: '',
        audit_trans_start: null,
        audit_trans_end: null,
        audit_s1_start: null,
        audit_s1_end: null,
        audit_s2_start: null,
        audit_s2_end: null,
        // audit_manual_date: null,
        // audit_internal_date: null,
        // audit_management_date: null,
        audit_leader: '',
        audit_auditor: '',
        audit_fee: '',
        customer_id: '',
        created_date: '',
        audit_md: null,
        audit_env_complexity: '',
        audit_ohs_risk: ''
      }
    }
  },
  created() {
    // console.log(this.customer)
    console.log(this.$route.query.id)
    this.id = this.$route.query.id
    console.log('customerList에서 넘어온 cid:', this.id)

    // this.searchName = this.$route.query.searchName
  },
  mounted() {
    console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
    console.log(this.addAuditInfo.audit_trans_start)
    this.getCustomer()
    this.getCertListByBizNo()
  },
  unmounted() {},
  methods: {
    classifyComplexity() {
      console.log(this.customer.iaf_code)
      if (this.addAuditInfo.audit_standard.includes('EMS')) {
        if (
          this.customer.iaf_code.includes('05') ||
          this.customer.iaf_code.includes('12') ||
          this.customer.iaf_code.includes('28')
        ) {
          this.addAuditInfo.audit_env_complexity = '높음'
        } else if (
          this.customer.iaf_code.includes('03') ||
          this.customer.iaf_code.includes('04') ||
          this.customer.iaf_code.includes('07') ||
          this.customer.iaf_code.includes('15') ||
          this.customer.iaf_code.includes('16') ||
          this.customer.iaf_code.includes('20') ||
          this.customer.iaf_code.includes('22') ||
          this.customer.iaf_code.includes('24') ||
          this.customer.iaf_code.includes('31') ||
          this.customer.iaf_code.includes('39') ||
          this.customer.iaf_code.includes('17')
        ) {
          this.addAuditInfo.audit_env_complexity = '보통'
        } else {
          this.addAuditInfo.audit_env_complexity = '낮음'
        }
      } else {
        this.addAuditInfo.audit_env_complexity = ''
      }
    },
    classifyRisk() {
      if (this.addAuditInfo.audit_standard.includes('OHSMS')) {
        if (
          this.customer.iaf_code.includes('05') ||
          this.customer.iaf_code.includes('12') ||
          this.customer.iaf_code.includes('17') ||
          this.customer.iaf_code.includes('28')
        ) {
          this.addAuditInfo.audit_ohs_risk = '높음'
        } else if (
          this.customer.iaf_code.includes('03') ||
          this.customer.iaf_code.includes('04') ||
          this.customer.iaf_code.includes('06') ||
          this.customer.iaf_code.includes('07') ||
          this.customer.iaf_code.includes('08') ||
          this.customer.iaf_code.includes('15') ||
          this.customer.iaf_code.includes('16') ||
          this.customer.iaf_code.includes('20') ||
          this.customer.iaf_code.includes('22') ||
          this.customer.iaf_code.includes('24') ||
          this.customer.iaf_code.includes('31') ||
          this.customer.iaf_code.includes('39')
        ) {
          this.addAuditInfo.audit_ohs_risk = '보통'
        } else {
          this.addAuditInfo.audit_ohs_risk = '낮음'
        }
      } else {
        this.addAuditInfo.audit_ohs_risk = ''
      }
    },
    calculateMD() {
      console.log(this.addAuditInfo.audit_standard)
      console.log(this.addAuditInfo.audit_standard[0])
      console.log(this.addAuditInfo.audit_standard.length)
      const NoOfStandard = this.addAuditInfo.audit_standard.length
      const NoOfEmployee = this.customer.employee_count
      const envComplexity = this.addAuditInfo.audit_env_complexity
      const ohsRisk = this.addAuditInfo.audit_ohs_risk
      console.log(envComplexity)

      if (this.addAuditInfo.audit_standard.length === 0) {
        this.$swal('인증표준을 선택하세요.')
        return
      }
      if (this.addAuditInfo.audit_type === '') {
        this.$swal('인증유형을 선택하세요.')
        return
      }

      if (NoOfStandard === 1 && this.addAuditInfo.audit_standard[0] === 'QMS') {
        if (this.addAuditInfo.audit_type === '최초') {
          if (NoOfEmployee <= 5) {
            this.addAuditInfo.audit_md = 1.5
          } else if (NoOfEmployee <= 10) {
            this.addAuditInfo.audit_md = 2.0
          } else if (NoOfEmployee <= 15) {
            this.addAuditInfo.audit_md = 2.5
          } else if (NoOfEmployee <= 25) {
            this.addAuditInfo.audit_md = 3.0
          } else if (NoOfEmployee <= 45) {
            this.addAuditInfo.audit_md = 4.0
          } else if (NoOfEmployee <= 65) {
            this.addAuditInfo.audit_md = 5.0
          } else if (NoOfEmployee <= 85) {
            this.addAuditInfo.audit_md = 6.0
          } else if (NoOfEmployee <= 125) {
            this.addAuditInfo.audit_md = 7.0
          } else if (NoOfEmployee <= 175) {
            this.addAuditInfo.audit_md = 8.0
          } else if (NoOfEmployee <= 275) {
            this.addAuditInfo.audit_md = 9.0
          } else if (NoOfEmployee <= 425) {
            this.addAuditInfo.audit_md = 10.0
          } else if (NoOfEmployee <= 625) {
            this.addAuditInfo.audit_md = 11.0
          } else if (NoOfEmployee <= 875) {
            this.addAuditInfo.audit_md = 12.0
          } else if (NoOfEmployee <= 1175) {
            this.addAuditInfo.audit_md = 13.0
          } else if (NoOfEmployee <= 1550) {
            this.addAuditInfo.audit_md = 14.0
          } else if (NoOfEmployee <= 2025) {
            this.addAuditInfo.audit_md = 15.0
          } else if (NoOfEmployee <= 2675) {
            this.addAuditInfo.audit_md = 16.0
          } else if (NoOfEmployee <= 3450) {
            this.addAuditInfo.audit_md = 17.0
          } else if (NoOfEmployee <= 4350) {
            this.addAuditInfo.audit_md = 18.0
          } else if (NoOfEmployee <= 5450) {
            this.addAuditInfo.audit_md = 19.0
          } else if (NoOfEmployee <= 6800) {
            this.addAuditInfo.audit_md = 20.0
          } else if (NoOfEmployee <= 8500) {
            this.addAuditInfo.audit_md = 21.0
          } else if (NoOfEmployee <= 10700) {
            this.addAuditInfo.audit_md = 22.0
          } else {
            this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
          }
        } else if (
          this.addAuditInfo.audit_type === '사후' ||
          this.addAuditInfo.audit_type === '전환사후'
        ) {
          if (this.customer.employee_count <= 20) {
            this.addAuditInfo.audit_md = 1.0
          } else if (this.customer.employee_count <= 45) {
            this.addAuditInfo.audit_md = 1.5
          } else if (this.customer.employee_count <= 85) {
            this.addAuditInfo.audit_md = 2.0
          } else if (this.customer.employee_count <= 125) {
            this.addAuditInfo.audit_md = 2.5
          } else if (this.customer.employee_count <= 275) {
            this.addAuditInfo.audit_md = 3.0
          } else if (this.customer.employee_count <= 425) {
            this.addAuditInfo.audit_md = 3.5
          } else if (this.customer.employee_count <= 875) {
            this.addAuditInfo.audit_md = 4.0
          } else if (this.customer.employee_count <= 1175) {
            this.addAuditInfo.audit_md = 4.5
          } else if (this.customer.employee_count <= 2025) {
            this.addAuditInfo.audit_md = 5.0
          } else if (this.customer.employee_count <= 2675) {
            this.addAuditInfo.audit_md = 5.5
          } else if (this.customer.employee_count <= 4350) {
            this.addAuditInfo.audit_md = 6.0
          } else if (this.customer.employee_count <= 5450) {
            this.addAuditInfo.audit_md = 6.5
          } else if (this.customer.employee_count <= 8500) {
            this.addAuditInfo.audit_md = 7.0
          } else if (this.customer.employee_count <= 10700) {
            this.addAuditInfo.audit_md = 7.5
          } else {
            this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
          }
        } else if (
          this.addAuditInfo.audit_type === '갱신' ||
          this.addAuditInfo.audit_type === '전환갱신'
        ) {
          if (this.customer.employee_count <= 10) {
            this.addAuditInfo.audit_md = 1.5
          } else if (this.customer.employee_count <= 25) {
            this.addAuditInfo.audit_md = 2.0
          } else if (this.customer.employee_count <= 45) {
            this.addAuditInfo.audit_md = 3.0
          } else if (this.customer.employee_count <= 65) {
            this.addAuditInfo.audit_md = 3.5
          } else if (this.customer.employee_count <= 85) {
            this.addAuditInfo.audit_md = 4.0
          } else if (this.customer.employee_count <= 125) {
            this.addAuditInfo.audit_md = 5.0
          } else if (this.customer.employee_count <= 175) {
            this.addAuditInfo.audit_md = 5.5
          } else if (this.customer.employee_count <= 275) {
            this.addAuditInfo.audit_md = 6.0
          } else if (this.customer.employee_count <= 425) {
            this.addAuditInfo.audit_md = 7.0
          } else if (this.customer.employee_count <= 625) {
            this.addAuditInfo.audit_md = 7.5
          } else if (this.customer.employee_count <= 875) {
            this.addAuditInfo.audit_md = 8.0
          } else if (this.customer.employee_count <= 1175) {
            this.addAuditInfo.audit_md = 9.0
          } else if (this.customer.employee_count <= 1550) {
            this.addAuditInfo.audit_md = 9.5
          } else if (this.customer.employee_count <= 2025) {
            this.addAuditInfo.audit_md = 10.0
          } else if (this.customer.employee_count <= 2675) {
            this.addAuditInfo.audit_md = 11.0
          } else if (this.customer.employee_count <= 3450) {
            this.addAuditInfo.audit_md = 11.5
          } else if (this.customer.employee_count <= 4350) {
            this.addAuditInfo.audit_md = 12.0
          } else if (this.customer.employee_count <= 5450) {
            this.addAuditInfo.audit_md = 13.0
          } else if (this.customer.employee_count <= 6800) {
            this.addAuditInfo.audit_md = 13.5
          } else if (this.customer.employee_count <= 8500) {
            this.addAuditInfo.audit_md = 14.0
          } else if (this.customer.employee_count <= 10700) {
            this.addAuditInfo.audit_md = 15.0
          } else {
            this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
          }
        }
      } else if (
        NoOfStandard === 1 &&
        this.addAuditInfo.audit_standard[0] === 'CGMP'
      ) {
        if (this.addAuditInfo.audit_type === '최초') {
          if (NoOfEmployee <= 5) {
            this.addAuditInfo.audit_md = 1.5
          } else if (NoOfEmployee <= 10) {
            this.addAuditInfo.audit_md = 2.0
          } else if (NoOfEmployee <= 15) {
            this.addAuditInfo.audit_md = 2.5
          } else if (NoOfEmployee <= 25) {
            this.addAuditInfo.audit_md = 3.0
          } else if (NoOfEmployee <= 45) {
            this.addAuditInfo.audit_md = 4.0
          } else if (NoOfEmployee <= 65) {
            this.addAuditInfo.audit_md = 5.0
          } else if (NoOfEmployee <= 85) {
            this.addAuditInfo.audit_md = 6.0
          } else if (NoOfEmployee <= 125) {
            this.addAuditInfo.audit_md = 7.0
          } else if (NoOfEmployee <= 175) {
            this.addAuditInfo.audit_md = 8.0
          } else if (NoOfEmployee <= 275) {
            this.addAuditInfo.audit_md = 9.0
          } else if (NoOfEmployee <= 425) {
            this.addAuditInfo.audit_md = 10.0
          } else if (NoOfEmployee <= 625) {
            this.addAuditInfo.audit_md = 11.0
          } else if (NoOfEmployee <= 875) {
            this.addAuditInfo.audit_md = 12.0
          } else if (NoOfEmployee <= 1175) {
            this.addAuditInfo.audit_md = 13.0
          } else if (NoOfEmployee <= 1550) {
            this.addAuditInfo.audit_md = 14.0
          } else if (NoOfEmployee <= 2025) {
            this.addAuditInfo.audit_md = 15.0
          } else if (NoOfEmployee <= 2675) {
            this.addAuditInfo.audit_md = 16.0
          } else if (NoOfEmployee <= 3450) {
            this.addAuditInfo.audit_md = 17.0
          } else if (NoOfEmployee <= 4350) {
            this.addAuditInfo.audit_md = 18.0
          } else if (NoOfEmployee <= 5450) {
            this.addAuditInfo.audit_md = 19.0
          } else if (NoOfEmployee <= 6800) {
            this.addAuditInfo.audit_md = 20.0
          } else if (NoOfEmployee <= 8500) {
            this.addAuditInfo.audit_md = 21.0
          } else if (NoOfEmployee <= 10700) {
            this.addAuditInfo.audit_md = 22.0
          } else {
            this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
          }
        } else if (
          this.addAuditInfo.audit_type === '사후' ||
          this.addAuditInfo.audit_type === '전환사후'
        ) {
          if (this.customer.employee_count <= 5) {
            this.addAuditInfo.audit_md = 1.0
          } else if (this.customer.employee_count <= 15) {
            this.addAuditInfo.audit_md = 1.5
          } else if (this.customer.employee_count <= 25) {
            this.addAuditInfo.audit_md = 2.0
          } else if (this.customer.employee_count <= 45) {
            this.addAuditInfo.audit_md = 2.5
          } else if (this.customer.employee_count <= 85) {
            this.addAuditInfo.audit_md = 3.0
          } else if (this.customer.employee_count <= 175) {
            this.addAuditInfo.audit_md = 4.0
          } else if (this.customer.employee_count <= 275) {
            this.addAuditInfo.audit_md = 4.5
          } else if (this.customer.employee_count <= 425) {
            this.addAuditInfo.audit_md = 5.0
          } else if (this.customer.employee_count <= 625) {
            this.addAuditInfo.audit_md = 5.5
          } else if (this.customer.employee_count <= 875) {
            this.addAuditInfo.audit_md = 6.0
          } else if (this.customer.employee_count <= 1175) {
            this.addAuditInfo.audit_md = 6.5
          } else if (this.customer.employee_count <= 2025) {
            this.addAuditInfo.audit_md = 7.0
          } else if (this.customer.employee_count <= 2675) {
            this.addAuditInfo.audit_md = 8.0
          } else if (this.customer.employee_count <= 3450) {
            this.addAuditInfo.audit_md = 8.5
          } else if (this.customer.employee_count <= 4350) {
            this.addAuditInfo.audit_md = 9.0
          } else if (this.customer.employee_count <= 6800) {
            this.addAuditInfo.audit_md = 10.0
          } else if (this.customer.employee_count <= 8500) {
            this.addAuditInfo.audit_md = 11.0
          } else if (this.customer.employee_count <= 10700) {
            this.addAuditInfo.audit_md = 11.5
          } else {
            this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
          }
        } else if (
          this.addAuditInfo.audit_type === '갱신' ||
          this.addAuditInfo.audit_type === '전환갱신'
        ) {
          if (this.customer.employee_count <= 10) {
            this.addAuditInfo.audit_md = 1.5
          } else if (this.customer.employee_count <= 25) {
            this.addAuditInfo.audit_md = 2
          } else if (this.customer.employee_count <= 45) {
            this.addAuditInfo.audit_md = 3
          } else if (this.customer.employee_count <= 65) {
            this.addAuditInfo.audit_md = 3.5
          } else if (this.customer.employee_count <= 85) {
            this.addAuditInfo.audit_md = 4
          } else if (this.customer.employee_count <= 125) {
            this.addAuditInfo.audit_md = 5
          } else if (this.customer.employee_count <= 175) {
            this.addAuditInfo.audit_md = 5.5
          } else if (this.customer.employee_count <= 275) {
            this.addAuditInfo.audit_md = 6
          } else if (this.customer.employee_count <= 425) {
            this.addAuditInfo.audit_md = 7
          } else if (this.customer.employee_count <= 625) {
            this.addAuditInfo.audit_md = 7.5
          } else if (this.customer.employee_count <= 875) {
            this.addAuditInfo.audit_md = 8
          } else if (this.customer.employee_count <= 1175) {
            this.addAuditInfo.audit_md = 9
          } else if (this.customer.employee_count <= 1550) {
            this.addAuditInfo.audit_md = 9.5
          } else if (this.customer.employee_count <= 2025) {
            this.addAuditInfo.audit_md = 10
          } else if (this.customer.employee_count <= 2675) {
            this.addAuditInfo.audit_md = 11
          } else if (this.customer.employee_count <= 3450) {
            this.addAuditInfo.audit_md = 11.5
          } else if (this.customer.employee_count <= 4350) {
            this.addAuditInfo.audit_md = 12
          } else if (this.customer.employee_count <= 5450) {
            this.addAuditInfo.audit_md = 13
          } else if (this.customer.employee_count <= 6800) {
            this.addAuditInfo.audit_md = 13.5
          } else if (this.customer.employee_count <= 8500) {
            this.addAuditInfo.audit_md = 14
          } else if (this.customer.employee_count <= 10700) {
            this.addAuditInfo.audit_md = 15
          } else {
            this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
          }
        }
      } else if (
        NoOfStandard === 1 &&
        this.addAuditInfo.audit_standard[0] === 'EMS'
      ) {
        if (envComplexity === '높음') {
          if (this.addAuditInfo.audit_type === '최초') {
            // ======================================== EMS 높음 최초
            if (NoOfEmployee <= 5) {
              this.addAuditInfo.audit_md = 3.0
            } else if (NoOfEmployee <= 10) {
              this.addAuditInfo.audit_md = 3.5
            } else if (NoOfEmployee <= 15) {
              this.addAuditInfo.audit_md = 4.5
            } else if (NoOfEmployee <= 25) {
              this.addAuditInfo.audit_md = 5.5
            } else if (NoOfEmployee <= 45) {
              this.addAuditInfo.audit_md = 7
            } else if (NoOfEmployee <= 65) {
              this.addAuditInfo.audit_md = 8
            } else if (NoOfEmployee <= 85) {
              this.addAuditInfo.audit_md = 9
            } else if (NoOfEmployee <= 125) {
              this.addAuditInfo.audit_md = 11
            } else if (NoOfEmployee <= 175) {
              this.addAuditInfo.audit_md = 12
            } else if (NoOfEmployee <= 275) {
              this.addAuditInfo.audit_md = 13
            } else if (NoOfEmployee <= 425) {
              this.addAuditInfo.audit_md = 15
            } else if (NoOfEmployee <= 625) {
              this.addAuditInfo.audit_md = 16
            } else if (NoOfEmployee <= 875) {
              this.addAuditInfo.audit_md = 17
            } else if (NoOfEmployee <= 1175) {
              this.addAuditInfo.audit_md = 19
            } else if (NoOfEmployee <= 1550) {
              this.addAuditInfo.audit_md = 20
            } else if (NoOfEmployee <= 2025) {
              this.addAuditInfo.audit_md = 21
            } else if (NoOfEmployee <= 2675) {
              this.addAuditInfo.audit_md = 23
            } else if (NoOfEmployee <= 3450) {
              this.addAuditInfo.audit_md = 25
            } else if (NoOfEmployee <= 4350) {
              this.addAuditInfo.audit_md = 27
            } else if (NoOfEmployee <= 5450) {
              this.addAuditInfo.audit_md = 28
            } else if (NoOfEmployee <= 6800) {
              this.addAuditInfo.audit_md = 30
            } else if (NoOfEmployee <= 8500) {
              this.addAuditInfo.audit_md = 32
            } else if (NoOfEmployee <= 10700) {
              this.addAuditInfo.audit_md = 34
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            // ======================================== EMS 높음 사후
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 1
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 6.5
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 8.5
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 11.5
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            // ======================================== EMS 높음 갱신
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 7.5
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 13.5
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 15.1
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 20.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 21.5
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 25.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        } else if (envComplexity === '보통') {
          if (this.addAuditInfo.audit_type === '최초') {
            // ========================================================= EMS 보통 최초
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 15.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 20.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 21.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 23.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 25.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 27.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            // ======================================== EMS 보통 사후
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 1.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 1.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 6.5
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 7.5
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 8.5
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 9.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            // ======================================== EMS 보통 갱신
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 7.5
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 11.5
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 13.5
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 15.5
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 18.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        } else if (envComplexity === '낮음') {
          if (this.addAuditInfo.audit_type === '최초') {
            // =========================== EMS 낮음 최초
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 15.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 20.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            // ======================================== EMS 낮음 사후
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 1
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 1.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 1.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 6.5
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 7.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            // ======================================== EMS 낮음 갱신
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 7.5
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 9.5
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 11.5
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 13.5
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        }
      } else if (
        NoOfStandard === 1 &&
        this.addAuditInfo.audit_standard[0] === 'OHSMS'
      ) {
        if (ohsRisk === '높음') {
          if (this.addAuditInfo.audit_type === '최초') {
            // ======================================== OHSMS 높음 최초
            if (NoOfEmployee <= 5) {
              this.addAuditInfo.audit_md = 3.0
            } else if (NoOfEmployee <= 10) {
              this.addAuditInfo.audit_md = 3.5
            } else if (NoOfEmployee <= 15) {
              this.addAuditInfo.audit_md = 4.5
            } else if (NoOfEmployee <= 25) {
              this.addAuditInfo.audit_md = 5.5
            } else if (NoOfEmployee <= 45) {
              this.addAuditInfo.audit_md = 7
            } else if (NoOfEmployee <= 65) {
              this.addAuditInfo.audit_md = 8
            } else if (NoOfEmployee <= 85) {
              this.addAuditInfo.audit_md = 9
            } else if (NoOfEmployee <= 125) {
              this.addAuditInfo.audit_md = 11
            } else if (NoOfEmployee <= 175) {
              this.addAuditInfo.audit_md = 12
            } else if (NoOfEmployee <= 275) {
              this.addAuditInfo.audit_md = 13
            } else if (NoOfEmployee <= 425) {
              this.addAuditInfo.audit_md = 15
            } else if (NoOfEmployee <= 625) {
              this.addAuditInfo.audit_md = 16
            } else if (NoOfEmployee <= 875) {
              this.addAuditInfo.audit_md = 17
            } else if (NoOfEmployee <= 1175) {
              this.addAuditInfo.audit_md = 19
            } else if (NoOfEmployee <= 1550) {
              this.addAuditInfo.audit_md = 20
            } else if (NoOfEmployee <= 2025) {
              this.addAuditInfo.audit_md = 21
            } else if (NoOfEmployee <= 2675) {
              this.addAuditInfo.audit_md = 23
            } else if (NoOfEmployee <= 3450) {
              this.addAuditInfo.audit_md = 25
            } else if (NoOfEmployee <= 4350) {
              this.addAuditInfo.audit_md = 27
            } else if (NoOfEmployee <= 5450) {
              this.addAuditInfo.audit_md = 28
            } else if (NoOfEmployee <= 6800) {
              this.addAuditInfo.audit_md = 30
            } else if (NoOfEmployee <= 8500) {
              this.addAuditInfo.audit_md = 32
            } else if (NoOfEmployee <= 10700) {
              this.addAuditInfo.audit_md = 34
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            // ======================================== OHSMS 높음 사후
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 1
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 6.5
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 8.5
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 11.5
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            // ======================================== OHSMS 높음 갱신
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 7.5
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 13.5
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 15.1
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 20.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 21.5
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 25.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        } else if (ohsRisk === '보통') {
          if (this.addAuditInfo.audit_type === '최초') {
            // ======================================== OHSMS 보통 최초
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 15.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 20.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 21.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 23.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 25.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 27.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            // ======================================== OHSMS 보통 사후
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 1.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 1.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 6.5
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 7.5
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 8.5
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 9.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            // ======================================== OHSMS 보통 갱신
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 7.5
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 11.5
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 13.5
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 15.5
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 18.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        } else if (ohsRisk === '낮음') {
          if (this.addAuditInfo.audit_type === '최초') {
            // ======================================== OHSMS 낮음 최초
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 15.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 20.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            // ======================================== OHSMS 낮음 사후
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 1
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 1.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 1.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 1.5
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 4.5
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 6.5
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 7.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            // ======================================== OHSMS 낮음 갱신
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 2.5
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 3.5
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 5.5
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 7.5
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 9.5
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 11.5
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 13.5
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        }
      } else if (NoOfStandard === 2) {
        if (
          this.addAuditInfo.audit_standard.includes('QMS') ||
          this.addAuditInfo.audit_standard.includes('CGMP')
        ) {
          // TODO: 인원별로 qms md와 ems md를 합하여 80% 계산된 값 입력
          // TODO: 높음, 중간, 낮음을 구분해서 계산
          if (ohsRisk === '높음' || envComplexity === '높음') {
            if (this.addAuditInfo.audit_type === '최초') {
              // 표준 2개 높은 최초
              if (NoOfEmployee <= 5) {
                this.addAuditInfo.audit_md = 4.0
              } else if (NoOfEmployee <= 10) {
                this.addAuditInfo.audit_md = 4.0
              } else if (NoOfEmployee <= 15) {
                this.addAuditInfo.audit_md = 6.0
              } else if (NoOfEmployee <= 25) {
                this.addAuditInfo.audit_md = 7.0
              } else if (NoOfEmployee <= 45) {
                this.addAuditInfo.audit_md = 9.0
              } else if (NoOfEmployee <= 65) {
                this.addAuditInfo.audit_md = 10.0
              } else if (NoOfEmployee <= 85) {
                this.addAuditInfo.audit_md = 12.0
              } else if (NoOfEmployee <= 125) {
                this.addAuditInfo.audit_md = 14.0
              } else if (NoOfEmployee <= 175) {
                this.addAuditInfo.audit_md = 16.0
              } else if (NoOfEmployee <= 275) {
                this.addAuditInfo.audit_md = 18.0
              } else if (NoOfEmployee <= 425) {
                this.addAuditInfo.audit_md = 20.0
              } else if (NoOfEmployee <= 625) {
                this.addAuditInfo.audit_md = 22.0
              } else if (NoOfEmployee <= 875) {
                this.addAuditInfo.audit_md = 23.0
              } else if (NoOfEmployee <= 1175) {
                this.addAuditInfo.audit_md = 26.0
              } else if (NoOfEmployee <= 1550) {
                this.addAuditInfo.audit_md = 27.0
              } else if (NoOfEmployee <= 2025) {
                this.addAuditInfo.audit_md = 29.0
              } else if (NoOfEmployee <= 2675) {
                this.addAuditInfo.audit_md = 31.0
              } else if (NoOfEmployee <= 3450) {
                this.addAuditInfo.audit_md = 33.0
              } else if (NoOfEmployee <= 4350) {
                this.addAuditInfo.audit_md = 36.0
              } else if (NoOfEmployee <= 5450) {
                this.addAuditInfo.audit_md = 38.0
              } else if (NoOfEmployee <= 6800) {
                this.addAuditInfo.audit_md = 40.0
              } else if (NoOfEmployee <= 8500) {
                this.addAuditInfo.audit_md = 42.0
              } else if (NoOfEmployee <= 10700) {
                this.addAuditInfo.audit_md = 45.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '사후' ||
              this.addAuditInfo.audit_type === '전환사후'
            ) {
              // 높음 사후
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 15.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '갱신' ||
              this.addAuditInfo.audit_type === '전환갱신'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 15.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 19.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 21.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 23.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 24.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 26.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 27.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 28.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 32.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            }
          } else if (ohsRisk === '보통' || envComplexity === '보통') {
            if (this.addAuditInfo.audit_type === '최초') {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 15.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 17.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 20.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 24.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 26.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 27.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 29.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 30.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 32.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 34.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 37.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 39.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '사후' ||
              this.addAuditInfo.audit_type === '전환사후'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 13.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '갱신' ||
              this.addAuditInfo.audit_type === '전환갱신'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 15.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 17.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 20.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 20.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 23.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 25.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 26.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            }
          } else if (ohsRisk === '낮음' || envComplexity === '낮음') {
            if (this.addAuditInfo.audit_type === '최초') {
              // ======================================== OHSMS 낮음 최초
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 19.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 21.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 23.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 25.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 26.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 28.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 30.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 32.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 34.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '사후' ||
              this.addAuditInfo.audit_type === '전환사후'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 12.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '갱신' ||
              this.addAuditInfo.audit_type === '전환갱신'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 17.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 19.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 20.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 23.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            }
          }
        } else {
          // 표준이 2개이고 qms가 포함되지 않은 경우
          if (ohsRisk === '높음' || envComplexity === '높음') {
            if (this.addAuditInfo.audit_type === '최초') {
              // 표준 2개 높은 최초
              if (NoOfEmployee <= 5) {
                this.addAuditInfo.audit_md = 5.0
              } else if (NoOfEmployee <= 10) {
                this.addAuditInfo.audit_md = 6.0
              } else if (NoOfEmployee <= 15) {
                this.addAuditInfo.audit_md = 7.0
              } else if (NoOfEmployee <= 25) {
                this.addAuditInfo.audit_md = 9.0
              } else if (NoOfEmployee <= 45) {
                this.addAuditInfo.audit_md = 11.0
              } else if (NoOfEmployee <= 65) {
                this.addAuditInfo.audit_md = 13.0
              } else if (NoOfEmployee <= 85) {
                this.addAuditInfo.audit_md = 14.0
              } else if (NoOfEmployee <= 125) {
                this.addAuditInfo.audit_md = 18.0
              } else if (NoOfEmployee <= 175) {
                this.addAuditInfo.audit_md = 19.0
              } else if (NoOfEmployee <= 275) {
                this.addAuditInfo.audit_md = 21.0
              } else if (NoOfEmployee <= 425) {
                this.addAuditInfo.audit_md = 24.0
              } else if (NoOfEmployee <= 625) {
                this.addAuditInfo.audit_md = 26.0
              } else if (NoOfEmployee <= 875) {
                this.addAuditInfo.audit_md = 27.0
              } else if (NoOfEmployee <= 1175) {
                this.addAuditInfo.audit_md = 30.0
              } else if (NoOfEmployee <= 1550) {
                this.addAuditInfo.audit_md = 32.0
              } else if (NoOfEmployee <= 2025) {
                this.addAuditInfo.audit_md = 34.0
              } else if (NoOfEmployee <= 2675) {
                this.addAuditInfo.audit_md = 37.0
              } else if (NoOfEmployee <= 3450) {
                this.addAuditInfo.audit_md = 40.0
              } else if (NoOfEmployee <= 4350) {
                this.addAuditInfo.audit_md = 43.0
              } else if (NoOfEmployee <= 5450) {
                this.addAuditInfo.audit_md = 45.0
              } else if (NoOfEmployee <= 6800) {
                this.addAuditInfo.audit_md = 48.0
              } else if (NoOfEmployee <= 8500) {
                this.addAuditInfo.audit_md = 51.0
              } else if (NoOfEmployee <= 10700) {
                this.addAuditInfo.audit_md = 54.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '사후' ||
              this.addAuditInfo.audit_type === '전환사후'
            ) {
              // 높음 사후
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 18.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '갱신' ||
              this.addAuditInfo.audit_type === '전환갱신'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 19.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 21.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 25.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 27.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 29.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 30.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 32.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 34.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 40.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            }
          } else if (ohsRisk === '보통' || envComplexity === '보통') {
            if (this.addAuditInfo.audit_type === '최초') {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 19.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 21.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 24.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 26.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 27.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 29.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 30.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 32.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 34.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 37.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 40.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 43.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '사후' ||
              this.addAuditInfo.audit_type === '전환사후'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 14.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '갱신' ||
              this.addAuditInfo.audit_type === '전환갱신'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 19.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 21.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 25.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 27.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 29.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            }
          } else if (ohsRisk === '낮음' || envComplexity === '낮음') {
            if (this.addAuditInfo.audit_type === '최초') {
              // ======================================== OHSMS 낮음 최초
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 19.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 19.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 21.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 22.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 24.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 26.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 27.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 30.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 32.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '사후' ||
              this.addAuditInfo.audit_type === '전환사후'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 2.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 7.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 11.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            } else if (
              this.addAuditInfo.audit_type === '갱신' ||
              this.addAuditInfo.audit_type === '전환갱신'
            ) {
              if (this.customer.employee_count <= 5) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 10) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 15) {
                this.addAuditInfo.audit_md = 3.0
              } else if (this.customer.employee_count <= 25) {
                this.addAuditInfo.audit_md = 4.0
              } else if (this.customer.employee_count <= 45) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 65) {
                this.addAuditInfo.audit_md = 5.0
              } else if (this.customer.employee_count <= 85) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 125) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 175) {
                this.addAuditInfo.audit_md = 6.0
              } else if (this.customer.employee_count <= 275) {
                this.addAuditInfo.audit_md = 8.0
              } else if (this.customer.employee_count <= 425) {
                this.addAuditInfo.audit_md = 9.0
              } else if (this.customer.employee_count <= 625) {
                this.addAuditInfo.audit_md = 10.0
              } else if (this.customer.employee_count <= 875) {
                this.addAuditInfo.audit_md = 11.0
              } else if (this.customer.employee_count <= 1175) {
                this.addAuditInfo.audit_md = 12.0
              } else if (this.customer.employee_count <= 1550) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 2025) {
                this.addAuditInfo.audit_md = 13.0
              } else if (this.customer.employee_count <= 2675) {
                this.addAuditInfo.audit_md = 14.0
              } else if (this.customer.employee_count <= 3450) {
                this.addAuditInfo.audit_md = 15.0
              } else if (this.customer.employee_count <= 4350) {
                this.addAuditInfo.audit_md = 16.0
              } else if (this.customer.employee_count <= 5450) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 6800) {
                this.addAuditInfo.audit_md = 18.0
              } else if (this.customer.employee_count <= 8500) {
                this.addAuditInfo.audit_md = 21.0
              } else if (this.customer.employee_count <= 10700) {
                this.addAuditInfo.audit_md = 22.0
              } else {
                this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
              }
            }
          }
        }
      } else if (NoOfStandard === 3) {
        if (ohsRisk === '높음' || envComplexity === '높음') {
          if (this.addAuditInfo.audit_type === '최초') {
            if (NoOfEmployee <= 5) {
              this.addAuditInfo.audit_md = 6.0
            } else if (NoOfEmployee <= 10) {
              this.addAuditInfo.audit_md = 7.0
            } else if (NoOfEmployee <= 15) {
              this.addAuditInfo.audit_md = 9.0
            } else if (NoOfEmployee <= 25) {
              this.addAuditInfo.audit_md = 11.0
            } else if (NoOfEmployee <= 45) {
              this.addAuditInfo.audit_md = 14.0
            } else if (NoOfEmployee <= 65) {
              this.addAuditInfo.audit_md = 17.0
            } else if (NoOfEmployee <= 85) {
              this.addAuditInfo.audit_md = 19.0
            } else if (NoOfEmployee <= 125) {
              this.addAuditInfo.audit_md = 23.0
            } else if (NoOfEmployee <= 175) {
              this.addAuditInfo.audit_md = 26.0
            } else if (NoOfEmployee <= 275) {
              this.addAuditInfo.audit_md = 28.0
            } else if (NoOfEmployee <= 425) {
              this.addAuditInfo.audit_md = 32.0
            } else if (NoOfEmployee <= 625) {
              this.addAuditInfo.audit_md = 34.0
            } else if (NoOfEmployee <= 875) {
              this.addAuditInfo.audit_md = 37.0
            } else if (NoOfEmployee <= 1175) {
              this.addAuditInfo.audit_md = 41.0
            } else if (NoOfEmployee <= 1550) {
              this.addAuditInfo.audit_md = 43.0
            } else if (NoOfEmployee <= 2025) {
              this.addAuditInfo.audit_md = 46.0
            } else if (NoOfEmployee <= 2675) {
              this.addAuditInfo.audit_md = 50.0
            } else if (NoOfEmployee <= 3450) {
              this.addAuditInfo.audit_md = 54.0
            } else if (NoOfEmployee <= 4350) {
              this.addAuditInfo.audit_md = 58.0
            } else if (NoOfEmployee <= 5450) {
              this.addAuditInfo.audit_md = 60.0
            } else if (NoOfEmployee <= 6800) {
              this.addAuditInfo.audit_md = 64.0
            } else if (NoOfEmployee <= 8500) {
              this.addAuditInfo.audit_md = 68.0
            } else if (NoOfEmployee <= 10700) {
              this.addAuditInfo.audit_md = 72.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            // 높음 사후
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 15.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 15.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 21.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 22.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 23.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 24.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 17.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 22.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 24.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 26.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 28.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 29.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 30.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 34.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 36.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 38.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 41.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 43.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 46.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 52.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        } else if (ohsRisk === '보통' || envComplexity === '보통') {
          if (this.addAuditInfo.audit_type === '최초') {
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 21.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 23.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 26.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 28.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 30.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 34.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 37.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 39.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 42.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 44.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 46.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 49.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 53.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 57.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 61.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 15.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 20.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 21.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 23.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 25.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 26.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 28.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 30.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 31.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 33.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 36.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 38.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 41.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        } else if (ohsRisk === '낮음' || envComplexity === '낮음') {
          if (this.addAuditInfo.audit_type === '최초') {
            // ======================================== OHSMS 낮음 최초
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 21.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 23.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 26.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 28.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 30.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 31.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 34.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 36.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 38.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 41.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 43.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 47.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 50.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '사후' ||
            this.addAuditInfo.audit_type === '전환사후'
          ) {
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 2.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 3.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 12.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 15.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 17.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          } else if (
            this.addAuditInfo.audit_type === '갱신' ||
            this.addAuditInfo.audit_type === '전환갱신'
          ) {
            if (this.customer.employee_count <= 5) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 10) {
              this.addAuditInfo.audit_md = 4.0
            } else if (this.customer.employee_count <= 15) {
              this.addAuditInfo.audit_md = 5.0
            } else if (this.customer.employee_count <= 25) {
              this.addAuditInfo.audit_md = 6.0
            } else if (this.customer.employee_count <= 45) {
              this.addAuditInfo.audit_md = 7.0
            } else if (this.customer.employee_count <= 65) {
              this.addAuditInfo.audit_md = 8.0
            } else if (this.customer.employee_count <= 85) {
              this.addAuditInfo.audit_md = 9.0
            } else if (this.customer.employee_count <= 125) {
              this.addAuditInfo.audit_md = 10.0
            } else if (this.customer.employee_count <= 175) {
              this.addAuditInfo.audit_md = 11.0
            } else if (this.customer.employee_count <= 275) {
              this.addAuditInfo.audit_md = 13.0
            } else if (this.customer.employee_count <= 425) {
              this.addAuditInfo.audit_md = 14.0
            } else if (this.customer.employee_count <= 625) {
              this.addAuditInfo.audit_md = 16.0
            } else if (this.customer.employee_count <= 875) {
              this.addAuditInfo.audit_md = 18.0
            } else if (this.customer.employee_count <= 1175) {
              this.addAuditInfo.audit_md = 19.0
            } else if (this.customer.employee_count <= 1550) {
              this.addAuditInfo.audit_md = 20.0
            } else if (this.customer.employee_count <= 2025) {
              this.addAuditInfo.audit_md = 21.0
            } else if (this.customer.employee_count <= 2675) {
              this.addAuditInfo.audit_md = 23.0
            } else if (this.customer.employee_count <= 3450) {
              this.addAuditInfo.audit_md = 24.0
            } else if (this.customer.employee_count <= 4350) {
              this.addAuditInfo.audit_md = 26.0
            } else if (this.customer.employee_count <= 5450) {
              this.addAuditInfo.audit_md = 28.0
            } else if (this.customer.employee_count <= 6800) {
              this.addAuditInfo.audit_md = 29.0
            } else if (this.customer.employee_count <= 8500) {
              this.addAuditInfo.audit_md = 32.0
            } else if (this.customer.employee_count <= 10700) {
              this.addAuditInfo.audit_md = 34.0
            } else {
              this.$swal('인원수가 너무 많습니다. 관리자에게 문의하세요.')
            }
          }
        }
      }
    },
    getClassifyAudit() {
      if (this.addAuditInfo.audit_standard.length > 1) {
        this.addAuditInfo.audit_classify = '통합심사'
      } else {
        this.addAuditInfo.audit_classify = '단일심사'
      }
    },
    giveNumber() {
      console.log(typeof this.addAuditInfo.audit_manual_date)
      if (this.addAuditInfo.audit_no) {
        this.$swal('이미 심사번호가 생성되었습니다.')
        return
      }
      if (this.addAuditInfo.audit_standard.length === 0) {
        this.$swal('인증표준을 선택하세요.')
        return
      }

      if (this.addAuditInfo.audit_type === '') {
        // alert('심사유형을 선택해주세요.')
        this.$swal('심사유형을 선택하세요.')
        return
      }
      if (this.addAuditInfo.audit_type === '최초') {
        // if (this.addAuditInfo.audit_manual_date === null) {
        //   this.$swal('매뉴얼 제/개정일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_manual_date.length > 11) {
        //   this.$swal('매뉴얼 제/개정일을<br/> 제대로 입력하세요.')
        //   return
        // }

        // if (this.addAuditInfo.audit_internal_date === null) {
        //   this.$swal('내부심사일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_internal_date.length > 11) {
        //   this.$swal('내부심사일을<br/> 제대로 입력하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date === null) {
        //   this.$swal('경영검토일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date.length > 11) {
        //   this.$swal('경영검토일을<br/> 제대로 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_md === null) {
          this.$swal('MD계산을 클릭하세요.')
          return
        }
        if (this.addAuditInfo.audit_s1_start === null) {
          this.$swal('1단계 심사시작일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s1_start.length > 11) {
          this.$swal('1단계 심사시작일을<br/> 제대로 입력하세요.')
          return
        }

        if (this.addAuditInfo.audit_s1_end === null) {
          this.$swal('1단계 심사종료일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s1_end.length > 11) {
          this.$swal('1단계 심사종료일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start === null) {
          this.$swal('2단계 심사시작일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start.length > 11) {
          this.$swal('2단계 심사시작일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end === null) {
          this.$swal('2단계 심사종료일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end.length > 11) {
          this.$swal('2단계 심사종료일을<br/> 제대로 입력하세요.')
          return
        }
        // if (this.auditInfo.audit_leader === '') {
        //   this.$swal('심사팀장을 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_auditor === '') {
          this.$swal('심사팀원을 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_fee === '') {
          this.$swal('심사비를 입력하세요.')
          return
        }
      } else if (this.addAuditInfo.audit_type === '사후') {
        if (this.addAuditInfo.audit_degree === '') {
          this.$swal('심사차수를 선택하세요.')
          return
        }
        // if (this.addAuditInfo.audit_internal_date === null) {
        //   this.$swal('내부심사일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_internal_date.length > 11) {
        //   this.$swal('내부심사일을<br/> 제대로 입력하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date === null) {
        //   this.$swal('경영검토일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date.length > 11) {
        //   this.$swal('경영검토일을<br/> 제대로 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_md === null) {
          this.$swal('MD계산을 클릭하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start === null) {
          this.$swal('2단계 심사시작일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start.length > 11) {
          this.$swal('2단계 심사시작일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end === null) {
          this.$swal('2단계 심사종료일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end.length > 11) {
          this.$swal('2단계 심사종료일을<br/> 제대로 입력하세요.')
          return
        }
        // if (this.auditInfo.audit_leader === '') {
        //   this.$swal('심사팀장을 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_auditor === '') {
          this.$swal('심사팀원을 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_fee === '') {
          this.$swal('심사비를 입력하세요.')
          return
        }
      } else if (this.addAuditInfo.audit_type === '전환사후') {
        if (this.addAuditInfo.audit_degree === '') {
          this.$swal('심사차수를 선택하세요.')
          return
        }
        // if (this.addAuditInfo.audit_internal_date === null) {
        //   this.$swal('내부심사일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_internal_date.length > 11) {
        //   this.$swal('내부심사일을<br/> 제대로 입력하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date === null) {
        //   this.$swal('경영검토일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date.length > 11) {
        //   this.$swal('경영검토일을<br/> 제대로 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_md === null) {
          this.$swal('MD계산을 클릭하세요.')
          return
        }
        if (this.addAuditInfo.audit_trans_start === null) {
          this.$swal('전환심사시작일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_trans_start.length > 11) {
          this.$swal('전환심사시작일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_trans_end === null) {
          this.$swal('전환심사종료일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_trans_end.length > 11) {
          this.$swal('전환심사종료일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start === null) {
          this.$swal('2단계 심사시작일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start.length > 11) {
          this.$swal('2단계 심사시작일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end === null) {
          this.$swal('2단계 심사종료일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end.length > 11) {
          this.$swal('2단계 심사종료일을<br/> 제대로 입력하세요.')
          return
        }
        // if (this.auditInfo.audit_leader === '') {
        //   this.$swal('심사팀장을 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_auditor === '') {
          this.$swal('심사팀원을 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_fee === '') {
          this.$swal('심사비를 입력하세요.')
          return
        }
      } else if (this.addAuditInfo.audit_type === '갱신') {
        // if (this.addAuditInfo.audit_internal_date === null) {
        //   this.$swal('내부심사일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_internal_date.length > 11) {
        //   this.$swal('내부심사일을<br/> 제대로 입력하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date === null) {
        //   this.$swal('경영검토일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date.length > 11) {
        //   this.$swal('경영검토일을<br/> 제대로 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_md === null) {
          this.$swal('MD계산을 클릭하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start === null) {
          this.$swal('2단계 심사시작일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start.length > 11) {
          this.$swal('2단계 심사시작일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end === null) {
          this.$swal('2단계 심사종료일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end.length > 11) {
          this.$swal('2단계 심사종료일을<br/> 제대로 입력하세요.')
          return
        }
        // if (this.auditInfo.audit_leader === '') {
        //   this.$swal('심사팀장을 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_auditor === '') {
          this.$swal('심사팀원을 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_fee === '') {
          this.$swal('심사비를 입력하세요.')
          return
        }
      } else if (this.addAuditInfo.audit_type === '전환갱신') {
        // if (this.addAuditInfo.audit_internal_date === null) {
        //   this.$swal('내부심사일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_internal_date.length > 11) {
        //   this.$swal('내부심사일을<br/> 제대로 입력하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date === null) {
        //   this.$swal('경영검토일을 선택하세요.')
        //   return
        // }
        // if (this.addAuditInfo.audit_management_date.length > 11) {
        //   this.$swal('경영검토일을<br/> 제대로 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_md === null) {
          this.$swal('MD계산을 클릭하세요.')
          return
        }
        if (this.addAuditInfo.audit_trans_start === null) {
          this.$swal('전환심사시작일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_trans_start.length > 11) {
          this.$swal('전환심사시작일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_trans_end === null) {
          this.$swal('전환심사종료일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_trans_end.length > 11) {
          this.$swal('전환심사종료일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start === null) {
          this.$swal('2단계 심사시작일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_start.length > 11) {
          this.$swal('2단계 심사시작일을<br/> 제대로 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end === null) {
          this.$swal('2단계 심사종료일을 선택하세요.')
          return
        }
        if (this.addAuditInfo.audit_s2_end.length > 11) {
          this.$swal('2단계 심사종료일을<br/> 제대로 입력하세요.')
          return
        }
        // if (this.auditInfo.audit_leader === '') {
        //   this.$swal('심사팀장을 입력하세요.')
        //   return
        // }
        if (this.addAuditInfo.audit_auditor === '') {
          this.$swal('심사팀원을 입력하세요.')
          return
        }
        if (this.addAuditInfo.audit_fee === '') {
          this.$swal('심사비를 입력하세요.')
          return
        }
      }

      // 사후/갱신 1자리
      let isType = ''
      if (this.addAuditInfo.audit_type === '최초') {
        isType = 'I'
      }
      if (this.addAuditInfo.audit_type === '사후') {
        isType = 'S'
      }
      if (this.addAuditInfo.audit_type === '갱신') {
        isType = 'R'
      }
      if (this.addAuditInfo.audit_type === '전환사후') {
        isType = 'TS'
      }
      if (this.addAuditInfo.audit_type === '전환갱신') {
        isType = 'TR'
      }
      // console.log('isType : ', isType)

      // 차수 1자리
      let isDegree = ''
      if (this.addAuditInfo.audit_degree === '1차') {
        isDegree = '1'
      } else if (this.addAuditInfo.audit_degree === '2차') {
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
      const customerStandard = this.addAuditInfo.audit_standard
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
      this.addAuditInfo.audit_no =
        isType + isDegree + year + month + scheme + serialNo
      console.log('최종번호', this.addAuditInfo.audit_no)
    },
    async getCertListByBizNo() {
      // console.log(this.id)
      const dbAuditDataByBizNo = await this.$get(
        // `/api/customer/cert/list/${this.id}`
        `http://localhost:3000/api/customer/cert/list/cid/${this.id}`
      )
      // const dbAuditDataByCustomer = await this.$post(
      //   `/api/customer/cert/list/${this.id}`
      // )
      // const dbAuditDataByCustomer = await this.$get('/api/customer/cert/list')
      console.log('DB에서 가져온 CertListByBizNo', dbAuditDataByBizNo)
      this.dbAuditInfo = dbAuditDataByBizNo
    },
    async getCustomer() {
      console.log(this.id)
      const dbData = await this.$get(
        `http://localhost:3000/api/customer/list/${this.id}`
      )
      console.log(this.customer)
      console.log('db에서 가져온 data : ', dbData)

      this.customer.name_ko = dbData.name_ko
      this.customer.customer_type = dbData.customer_type
      this.customer.scope_ko = dbData.scope_ko
      this.customer.employee_count = dbData.employee_count
      this.customer.auditor_email = dbData.auditor_email
      this.customer.auditor_name = dbData.auditor_name
      this.customer.business_no = dbData.business_no
      this.customer.customer_id = dbData.customer_id
      this.customer.iaf_code = JSON.parse(dbData.iaf_code)
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
          console.log(this.addAuditInfo.audit_md)
          const r = await this.$post('/api/cert/audit', {
            param: {
              audit_standard: JSON.stringify(this.addAuditInfo.audit_standard),
              audit_no: this.addAuditInfo.audit_no,
              business_no: this.customer.business_no,
              audit_classify: this.addAuditInfo.audit_classify,
              audit_type: this.addAuditInfo.audit_type,
              audit_degree: this.addAuditInfo.audit_degree,
              audit_trans_start: this.addAuditInfo.audit_trans_start,
              audit_trans_end: this.addAuditInfo.audit_trans_end,
              audit_s1_start: this.addAuditInfo.audit_s1_start,
              audit_s1_end: this.addAuditInfo.audit_s1_end,
              audit_s2_start: this.addAuditInfo.audit_s2_start,
              audit_s2_end: this.addAuditInfo.audit_s2_end,
              // audit_manual_date: this.addAuditInfo.audit_manual_date,
              // audit_internal_date: this.addAuditInfo.audit_internal_date,
              // audit_management_date: this.addAuditInfo.audit_management_date,
              audit_leader: this.customer.auditor_name,
              audit_auditor: this.addAuditInfo.audit_auditor,
              audit_fee: this.addAuditInfo.audit_fee,
              customer_id: this.customer.customer_id,
              audit_env_complexity: this.addAuditInfo.audit_env_complexity,
              audit_ohs_risk: this.addAuditInfo.audit_ohs_risk,
              audit_md: this.addAuditInfo.audit_md,
              auditor_email: this.user.userInfo.email
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('심사정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/cert'
              //   query: { customer_id: this.id }
            })
          }
        }
        this.addAuditInfo = {
          audit_id: -1,
          audit_standard: [],
          audit_classify: '',
          audit_no: '',
          business_no: '',
          audit_type: '',
          audit_degree: '',
          audit_s1_start: '',
          audit_s1_end: '',
          audit_s2_start: '',
          audit_s2_end: '',
          audit_manual_date: '',
          audit_internal_date: '',
          audit_management_date: '',
          audit_leader: '',
          audit_auditor: '',
          audit_fee: '',
          customer_id: '',
          created_date: '',
          audit_md: null
        }
        this.getCertListByBizNo()
      })
    },
    goToChange(id) {
      console.log(this.id)
      this.$router.push({
        path: '/customer/cert/change',
        query: { audit_no: id }
      })
    },
    goToList() {
      this.$router.push({ path: '/customer/list/auditor' })
    },
    goToDetail() {
      this.$router.push({
        path: '/customer/detail',
        query: { customer_id: this.id }
      })
    },
    goToDetailAudit(id) {
      console.log(id)
      this.$router.push({
        path: '/customer/cert/detail',
        query: { audit_no: id }
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
