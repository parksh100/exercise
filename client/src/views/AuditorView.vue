<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          @keyup.enter="getList"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary me-1" @click="getList">조회</button>
        <button
          class="btn btn-success me-1"
          data-bs-toggle="modal"
          data-bs-target="#auditorModal"
          @click="openModal()"
        >
          생성
        </button>
        <button class="btn btn-info me-1" @click="doExcel">엑셀다운로드</button>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Scheme</th>
          <th>Grade</th>
          <th>Email</th>
          <th>PW</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.auditor_id" v-for="item in list">
          <td>{{ item.auditor_id }}</td>
          <td>{{ item.auditor_name }}</td>
          <td>{{ item.auditor_scheme }}</td>
          <td>{{ item.auditor_grade }}</td>
          <td>{{ item.auditor_email }}</td>
          <td>{{ item.auditor_pw }}</td>
          <td>{{ item.use_yn }}</td>
          <td>
            <button
              class="btn btn-success me-1"
              data-bs-toggle="modal"
              data-bs-target="#auditorModal"
              @click="openModal(item.auditor_id)"
            >
              수정</button
            ><button
              class="btn btn-danger me-1"
              @click="doDelete(item.auditor_id)"
            >
              삭제
            </button>
            <button
              class="btn btn-warning"
              @click="
                changeStatus(item.auditor_id, item.use_yn === 'Y' ? 'N' : 'Y')
              "
            >
              {{ item.use_yn === 'Y' ? '사용중지' : '사용' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="auditorModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">심사원 정보</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Name</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="selectedItem.auditor_name"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Scheme</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="selectedItem.auditor_scheme"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Grade</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="selectedItem.auditor_grade"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="selectedItem.auditor_email"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">PW</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="selectedItem.auditor_pw"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="btnClose"
              @click="clearSelectedItem"
            >
              닫기
            </button>
            <button
              type="button"
              v-if="selectedItem.auditor_id === -1"
              class="btn btn-primary"
              @click="doCreate"
            >
              생성
            </button>
            <button
              type="button"
              v-else
              class="btn btn-primary"
              @click="doSave"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      const data = this.$store.state.user
      return data
      // return this.$store.state.user.user
      // return this.$store.user.userInfo
    }
  },
  components: {},
  data() {
    return {
      headers: [
        { title: 'ID', key: 'auditor_id' },
        { title: 'Name', key: 'auditor_name' },
        { title: 'Scheme', key: 'auditor_scheme' },
        { title: 'Grade', key: 'auditor_grade' },
        { title: 'Email', key: 'auditor_email' },
        { title: 'PW', key: 'auditor_pw' }
      ],
      list: [],
      searchName: '',
      selectedItem: {
        auditor_id: -1,
        auditor_name: '',
        auditor_scheme: '',
        auditor_grade: '',
        auditor_email: '',
        auditor_pw: ''
      }
    }
  },
  setup() {},
  created() {},
  async mounted() {
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/' })
    }

    this.list = await this.$get('/api/auditor')
    // console.log(r)
  },
  unmounted() {},
  methods: {
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = (
        await this.$post('/api/auditor/search', {
          param: `%${this.searchName.toLowerCase()}%`
        })
      ).data
      console.log(this.list)
      loader.hide()
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.list, 'auditors', {})
    },
    doDelete(id) {
      this.$swal({
        title: '심사원정보를 정말 삭제 하시겠습니까?',
        text: '삭제된 데이터는 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '삭제'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$delete(`/api/auditor/${id}`)
          console.log(r)

          loader.hide()

          if (r.status === 200) {
            this.$swal('심사원 정보가 삭제 되었습니다.')
            this.getList()
          } else if (r.status === 501) {
            this.$swal(
              `삭제하려는 심사원의 심사정보가 ${r.count}건 존재합니다.`
            )
          }
        }
      })
    },
    changeStatus(id, useYN) {
      let title = '심사원 정보 사용을 \n중지하시겠습니까?'
      if (useYN === 'Y') {
        title = '심사원 정보를 \n다시 사용하시겠습니까?'
      }
      this.$swal({
        title: title,
        // text: '삭제된 데이터는 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '상태변경'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$put(`/api/auditor/${id}`, {
            param: { use_yn: useYN }
          })
          console.log(r)

          loader.hide()

          if (r.status === 200) {
            this.$swal('카테고리가 상태가 \n변경 되었습니다.')
            this.getList()
          }
        }
      })
    },
    doSave() {
      this.$swal({
        title: '심사원 정보를 수정 하시겠습니까?',
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

          const r = await this.$put(
            `/api/auditor/${this.selectedItem.auditor_id}`,
            {
              param: {
                auditor_name: this.selectedItem.auditor_name,
                auditor_scheme: this.selectedItem.auditor_scheme,
                auditor_grade: this.selectedItem.auditor_grade,
                auditor_email: this.selectedItem.auditor_email,
                auditor_pw: this.selectedItem.auditor_pw
              }
            }
          )

          loader.hide()

          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('심사원 정보가 저장되었습니다.')
            this.getList()
          }
        }
      })
    },
    doCreate() {
      this.$swal({
        title: '심사원정보를 생성 하시겠습니까?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '생성'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$post('/api/auditor', {
            param: {
              auditor_name: this.selectedItem.auditor_name,
              auditor_scheme: this.selectedItem.auditor_scheme,
              auditor_grade: this.selectedItem.auditor_grade,
              auditor_email: this.selectedItem.auditor_email,
              auditor_pw: this.selectedItem.auditor_pw
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('심사원정보가 생성 되었습니다.')
            this.getList()
          }
        }
      })
    },
    openModal(id) {
      if (id === undefined) {
        this.selectedItem = {
          auditor_id: -1,
          auditor_name: '',
          auditor_scheme: '',
          auditor_grade: '',
          auditor_email: '',
          auditor_pw: ''
        }
      } else {
        this.selectedItem = JSON.parse(
          JSON.stringify(this.list.filter((item) => item.auditor_id === id)[0])
        )
      }
    },
    clearSelectedItem() {
      this.selectedItem = {
        auditor_id: -1,
        auditor_name: '',
        auditor_scheme: '',
        auditor_grade: '',
        auditor_email: '',
        auditor_pw: ''
      }
    }
  }
}
</script>
<style scoped>
th {
  text-align: center;
}
</style>
