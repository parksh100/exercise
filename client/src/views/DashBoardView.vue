<template>
  <div class="container">
    <h1 class="text-center mt-3 mb-3">Dashboard</h1>
    <hr />
    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      KEY INDEX
    </h5>
    <div class="row mb-2">
      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">총 업체 수</h5>
          <h1 class="card-text fw-bold">{{ countCustomers }}</h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">유지 업체 수</h5>
          <h1 class="card-text fw-bold">{{ activeCustomers.length }}</h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">올해 총심사비(만원)</h5>
          <h1 class="card-text fw-bold"></h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">이달의 심사비(만원)</h5>
          <h1 class="card-text fw-bold"></h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">전월대비 증감</h5>
          <h1 class="card-text fw-bold"></h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>

      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">전년대비 증감</h5>
          <h1 class="card-text fw-bold"></h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>

      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">다음달 예상 심사비(만원)</h5>
          <h1 class="card-text fw-bold"></h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>

      <div class="card text-center" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">올해 예상 총 심사비(만원)</h5>
          <h1 class="card-text fw-bold"></h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </div>
    <hr />
    <!-- 기간검색테이블 -->
    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      기간별 조회 <small>(2단계심사시작일 기준)</small>
    </h5>
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-lg-3 d-flex me-4">
        <input
          type="date"
          class="form-control"
          placeholder=""
          v-model="s2StartDate"
        />
        <span class="ms-2 me-2"> ~ </span>
        <input
          type="date"
          class="form-control"
          placeholder=""
          v-model="s2EndDate"
        />
      </div>
      <div class="col">
        <button
          class="btn btn-outline-primary me-1"
          v-if="this.user.userInfo.role === 'auditor'"
          @click="certInfoByEmailS2startS2endDate"
        >
          조회
        </button>
        <button
          class="btn btn-outline-primary me-1"
          v-if="this.user.userInfo.role === 'admin'"
          @click="certInfoByS2startS2endDate"
        >
          조회
        </button>
        <!-- <button class="btn btn-outline-success me-1">심사신청</button> -->
        <!-- <button class="btn btn-outline-dark me-1" @click="doExcel">
          엑셀다운로드
        </button> -->
      </div>
    </div>
    <p v-if="this.intervalSearch.length > 0" class="mt-3">
      조회하신 기간 중 <span class="fw-bold"> {{ this.noOfAudit }}건</span>의
      심사와
      <span class="fw-bold"
        >{{ $convertNumberFormat(this.sumOfFee, '#,###') }}원</span
      >의 심사비 내역이 존재합니다.
    </p>
    <hr />
    <table
      class="table table-bordered"
      style="table-layout: fixed; font-size: 15px"
    >
      <thead>
        <tr class="bg-light table-group-divider text-center">
          <!-- <th width="4%">ID</th> -->
          <th style="width: 15%">심사번호</th>
          <th style="width: 15%">회사명</th>
          <th style="width: 15%">표준</th>
          <th style="width: 10%">심사유형</th>
          <th style="width: 10%">S2시작일</th>
          <th style="width: 10%">S2종료일</th>
          <th style="width: 10%">심사원</th>
          <th style="width: 15%">심사비</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr></tr>
        <tr v-for="item in intervalSearch" :key="item">
          <td style="word-break: break-all">
            <!-- <a
              @click="goToDetailAudit(item.audit_no)"
              class="text-decoration-underline"
              role="button"
            ></a> -->
            {{ item.audit_no }}
          </td>
          <!-- <td>{{ item.customer_id }}</td> -->
          <td>
            <!-- <a
              @click="goToDetail(item.customer_id)"
              style="text-decoration: underline"
              role="button"
              >{{ item.name_ko }}</a
            > -->
            <!-- <a
              @click="goToDetail(item.business_no)"
              class="text-decoration-underline"
              role="button"
            ></a> -->
            {{ item.name_ko }}
          </td>
          <!-- <td>{{ item.certification_type }}</td> -->
          <td style="word-break: break-all">{{ item.audit_standard }}</td>
          <td>{{ item.audit_type + item.audit_degree }}</td>
          <td class="text-end">{{ item.audit_s2_start }}</td>
          <td class="text-end">{{ item.audit_s2_end }}</td>
          <td class="text-end">{{ item.audit_leader }}</td>
          <td class="text-end">
            {{ $convertNumberFormat(item.audit_fee, '#,###') }}
          </td>
        </tr>
      </tbody>
    </table>

    <hr />
    <!-- 기간검색테이블 -->
    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      월별심사추이
    </h5>
    <div
      class="mt-4 d-flex justify-content-center"
      style="height: 50vh; width: 75vw"
    >
      <canvas class="p-0" id="myChart"></canvas>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'
import Formatter from '@/mixins/formatter.js'

export default {
  mixins: [Formatter],

  computed: {
    user() {
      const data = this.$store.state.user
      console.log(data)
      return data
      // return this.$store.state.user.user
      // return this.$store.user.userInfo
    }
  },
  components: {},
  data() {
    return {
      list: [],
      countCustomers: 0,
      activeCustomers: [],
      countCustomersByMonth: [],
      s2StartDate: null,
      s2EndDate: null,
      intervalSearch: [],
      noOfAudit: null,
      sumOfFee: null,
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
    this.getCustomerListByAuditor()
    this.activeCustomerByAuditor()
    this.getCustomerCountByMonth()

    // charter.js
    const ctx = document.getElementById('myChart')

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월'
        ],
        datasets: [
          {
            label: '월별 심사(건)',
            data: [1, 4, 3, 5, 2, 3, 8, 12, 19, 15, 20, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            barPercentage: 0.5
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        maintainAspectRatio: false
      }
    })
    myChart.update()
  },

  unmounted() {},
  methods: {
    async getCustomerListByAuditor() {
      const loader = this.$loading.show({ canCancel: false })
      const email = this.user.userInfo.email
      this.list = await this.$get(`/api/customer/${email}`)
      console.log(this.list)
      this.countCustomers = this.list.length
      console.log(this.countCustomers)

      loader.hide()
    },

    async activeCustomerByAuditor() {
      const loader = this.$loading.show({ canCancel: false })
      // console.log(this.user.userInfo.email)

      const result = await this.$post('/api/customer/active/', {
        param: [this.user.userInfo.email]
      })
      // console.log('activeCustomer', result)
      this.activeCustomers = result.data
      // console.log('allJoinAuditInfo', this.allJoinAuditInfo)
      // console.log('allJoinAuditInfo.length', this.allJoinAuditInfo.length)

      loader.hide()
    },

    async getCustomerCountByMonth() {
      const loader = this.$loading.show({ canCancel: false })
      // console.log(this.user.userInfo.email)

      const result = await this.$post('/api/customer/count/month', {
        param: [this.user.userInfo.email]
      })
      console.log('customerCount', result)
      this.countCustomersByMonth = result.data
      console.log(this.countCustomersByMonth[0].customerCount)
      this.jan = this.countCustomersByMonth[1].customerCount
      console.log(this.jan)

      // console.log('allJoinAuditInfo', this.allJoinAuditInfo)
      // console.log('allJoinAuditInfo.length', this.allJoinAuditInfo.length)

      loader.hide()
    },
    // 심사원별, 기간조회
    async certInfoByEmailS2startS2endDate() {
      if (this.s2StartDate === null || this.s2EndDate === null) {
        this.$swal('날짜를 선택해주세요.')
        return
      }

      if (this.s2StartDate > this.s2EndDate) {
        this.$swal('시작일이 종료일보다 늦을 수 없습니다.')
        return
      }

      const loader = this.$loading.show({ canCancel: false })
      // console.log(this.user.userInfo.email)

      const result = await this.$post('/api/cert/condition/search', {
        param: [this.user.userInfo.email, this.s2StartDate, this.s2EndDate]
      })
      console.log('intervalSearch', result.data)
      // console.log(this.jan)
      this.intervalSearch = result.data
      console.log(this.intervalSearch)
      console.log(this.intervalSearch.length)
      this.noOfAudit = this.intervalSearch.length
      // console.log('allJoinAuditInfo', this.allJoinAuditInfo)
      // console.log('allJoinAuditInfo.length', this.allJoinAuditInfo.length)

      // sum of audit_fee
      if (this.sumOfFee === null) {
        this.intervalSearch.forEach((item) => {
          this.sumOfFee += item.audit_fee
        })
        console.log(this.sumOfAuditFee)
      } else {
        // this.s2StartDate = this.s2StartDate
        // this.s2EndDate = this.s2EndDate
        // this.$swal('날짜를 다시 선택해주세요.')
        // this.s2StartDate = null
        // this.s2EndDate = null
      }

      loader.hide()
    },

    // 관리자, 기간조회
    async certInfoByS2startS2endDate() {
      if (this.s2StartDate === null || this.s2EndDate === null) {
        this.$swal('날짜를 선택해주세요.')
        return
      }

      if (this.s2StartDate > this.s2EndDate) {
        this.$swal('시작일이 종료일보다 늦을 수 없습니다.')
        return
      }

      const loader = this.$loading.show({ canCancel: false })
      // console.log(this.user.userInfo.email)

      const result = await this.$post('/api/cert/admin/search', {
        param: [this.s2StartDate, this.s2EndDate]
      })
      console.log('intervalSearch', result.data)
      // console.log(this.jan)
      this.intervalSearch = result.data
      console.log(this.intervalSearch)
      console.log(this.intervalSearch.length)
      this.noOfAudit = this.intervalSearch.length
      // console.log('allJoinAuditInfo', this.allJoinAuditInfo)
      // console.log('allJoinAuditInfo.length', this.allJoinAuditInfo.length)

      // sum of audit_fee
      if (this.sumOfFee === null) {
        this.intervalSearch.forEach((item) => {
          this.sumOfFee += item.audit_fee
        })
        console.log(this.sumOfAuditFee)
      } else {
        // this.s2StartDate = this.s2StartDate
        // this.s2EndDate = this.s2EndDate
        // this.$swal('날짜를 다시 선택해주세요.')
        // this.s2StartDate = null
        // this.s2EndDate = null
      }

      loader.hide()
    },

    // goToDetail(id) {
    //   this.$router.push({
    //     path: '/customer/detail',
    //     query: { customer_id: id }
    //   })
    // },
    goToTransReport(id) {
      console.log(id)
      this.$router.push({
        path: '/report/trans/detail',
        query: { audit_no: id }
      })
    },
    goToMakeTransReport(id) {
      console.log(id)
      this.$router.push({
        path: '/report/trans',
        query: { audit_no: id }
      })
    },
    goToS1Report(id) {
      console.log(id)
      this.$router.push({
        path: '/report/s1/detail',
        query: { id: id }
      })
    },
    goToS2Report(id) {
      console.log(id)
      this.$router.push({
        path: '/report/s2/detail',
        query: { id: id }
      })
    }
  }
}
</script>
