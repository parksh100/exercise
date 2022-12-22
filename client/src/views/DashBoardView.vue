<template>
  <div class="container">
    <h3 class="text-center mt-3 mb-3">[Dashboard]</h3>

    <div class="row mb-2">
      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">총 업체 수</h5>
          <h1 class="card-text fw-bold">{{ list.length }}</h1>
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
          <h5 class="card-title mb-3">전월대비 증감</h5>
          <h1 class="card-text fw-bold">+2</h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>

      <div class="card text-center" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">전년대비 증감</h5>
          <h1 class="card-text fw-bold">+10</h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">올해 총심사비(만원)</h5>
          <h1 class="card-text fw-bold">3,400</h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">이달의 심사비(만원)</h5>
          <h1 class="card-text fw-bold">800</h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>

      <div class="card text-center me-2" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">다음달 예상 심사비(만원)</h5>
          <h1 class="card-text fw-bold">320</h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>

      <div class="card text-center" style="width: 18rem">
        <!-- <img src="" class="card-img-top" alt="" /> -->
        <div class="card-body">
          <h5 class="card-title mb-3">올해 예상 총 심사비(만원)</h5>
          <h1 class="card-text fw-bold">7,000</h1>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </div>
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

export default {
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
      activeCustomers: []
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
    // this.getList()

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
            data: [12, 19, 3, 5, 2, 3, 8, 12, 19, 15, 20, 2],
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
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get('/api/customer')
      console.log(this.list)
      this.activeCustomers = this.list.filter((item) => item.status_yn === 'Y')

      loader.hide()
    }
    // async activeCustomer() {
    //   const loader = this.$loading.show({ canCancel: false })
    //   this.activeCustomers = await this.$get('/api/customer/active')
    //   console.log(this.activeCustomers)
    //   loader.hide()
    // }

    // goToDetail(id) {
    //   this.$router.push({
    //     path: '/customer/detail',
    //     query: { customer_id: id }
    //   })
    // },
  }
}
</script>
