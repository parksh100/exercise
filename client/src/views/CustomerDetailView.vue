<template>
  <div class="container">
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">{{ customer.customer_id }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">심사유형</label>
      <div class="col-sm-10">{{ customer.certification_type }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">회사명(국문)</label>
      <div class="col-sm-10">{{ customer.name_ko }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">회사명(영문)</label>
      <div class="col-sm-10">{{ customer.name_en }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">사업자등록번호</label>
      <div class="col-sm-10">{{ customer.business_no }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">대표자명</label>
      <div class="col-sm-10">{{ customer.ceo_name }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">대표자 연락처</label>
      <div class="col-sm-10">{{ customer.ceo_phone }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">이메일</label>
      <div class="col-sm-10">{{ customer.email }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">대표전화번호</label>
      <div class="col-sm-10">{{ customer.phone }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">주소(국문)</label>
      <div class="col-sm-10">{{ customer.address_ko }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">주소(영문)</label>
      <div class="col-sm-10">{{ customer.address_en }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">담당자명</label>
      <div class="col-sm-10">{{ customer.contact_name }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">담당자이메일</label>
      <div class="col-sm-10">{{ customer.contact_email }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">홈페이지</label>
      <div class="col-sm-10">{{ customer.homepage }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">조직범위</label>
      <div class="col-sm-10">
        {{ customer.organization_scope }}
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">신청표준</label>
      <div class="col-sm-10">{{ customer.certification_standard }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">종업원수</label>
      <div class="col-sm-10">{{ customer.employee_count }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">설계개발유무</label>
      <div class="col-sm-10">{{ customer.design }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">설계개발인원수</label>
      <div class="col-sm-10">{{ customer.development_count }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">인증범위(국문)</label>
      <div class="col-sm-10">{{ customer.scope_ko }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">인증범위(영문)</label>
      <div class="col-sm-10">{{ customer.scope_en }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">인증범위활동</label>
      <div class="col-sm-10">{{ customer.activity }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">공정</label>
      <div class="col-sm-10">{{ customer.process }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">교대근무여부</label>
      <div class="col-sm-10">{{ customer.shift }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">교대근무인원수</label>
      <div class="col-sm-10">{{ customer.shift_work_count }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">적용제외유무</label>
      <div class="col-sm-10">{{ customer.exclusion }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">적용제외근거</label>
      <div class="col-sm-10">{{ customer.exclusion_reason }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">전환심사일</label>
      <div class="col-sm-10">{{ customer.transfer_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">1단계심사시작일</label>
      <div class="col-sm-10">{{ customer.s1_start_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">1단계심사종료일</label>
      <div class="col-sm-10">{{ customer.s1_end_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">2단계심사시작일</label>
      <div class="col-sm-10">{{ customer.s2_start_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">2단계심사종료일</label>
      <div class="col-sm-10">{{ customer.s2_end_date }}</div>
    </div>

    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <button class="btn btn-primary" @click="goToChange">수정</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      customer_id: '',
      searchName: '',
      customer: {}
    }
  },
  setup() {},
  created() {
    this.customer_id = this.$route.query.customer_id
    // this.searchName = this.$route.query.searchName
  },
  mounted() {
    this.getCustomer()
  },
  unmounted() {},
  methods: {
    async getCustomer() {
      this.customer = await this.$get(
        `http://localhost:3000/api/customer/${this.customer_id}`
      )
    },
    goToList() {
      this.$router.push({ path: '/customer/list' })
    },
    goToChange() {
      this.$router.push({ name: 'ChangeView', params: { id: this.id } })
    }
  }
}
</script>
