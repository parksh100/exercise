<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <p class="text-black-50 fst-italic">PF960-01(Rev.1)</p>
      <p class="text-black-50 fst-italic">Audit Report S1</p>
    </div>
    <div class="text-center mb-5">
      <h3 class="fw-bold">심 사 보 고 서</h3>
      <span>(1단계)</span>
    </div>

    <!-- table -->

    <!-- <table class="table table-hover text-center">
      <thead>
        <tr>
          <th style="width: 20%">고객명</th>
          <td style="width: 30%">""""</td>
          <th style="width: 20%">심사번호</th>
          <td style="width: 30%">""</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 20%">사업장주소</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">대표자명</th>
          <td style="width: 30%">""""</td>
          <th style="width: 20%">사업자등록번호</th>
          <td style="width: 30%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">담당부서</th>
          <td style="width: 30%">""""</td>
          <th style="width: 20%">담당자명</th>
          <td style="width: 30%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">대표전화</th>
          <td style="width: 30%">""""</td>
          <th style="width: 20%">대표이메일</th>
          <td style="width: 30%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">심사표준</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">인증범위</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">IAF코드</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">심사일자</th>
          <td style="width: 80%" colspan="3">"""" ~ """"</td>
        </tr>
      </tbody>
    </table>

    <p>
      1. 본 심사는 고객의 인증범위와 관련된 활동에 대하여 샘플링으로
      수행되었으며, 발견되지 않은 우려사항이 존재할 수 있습니다.
    </p>
    <p>
      2. 이 심사보고서는 KAI으 인증 등록과 관련된 사항에 활용되며, 관련 법률
      또는 인정기관의 요구 이외에는 고객의 동의없이 제3자에게 제공하지 않습니다.
    </p>

    <p class="text-center fw-bold fs-5">
      심사팀과 고객은 검토된 심사보고서 내용에 동의합니다.
    </p>

    <table class="table table-borderless text-center">
      <tbody>
        <tr>
          <th style="width: 20%">심사팀장</th>
          <td style="width: 30%">(서명)</td>
          <th style="width: 20%">고객대표</th>
          <td style="width: 30%">(서명)</td>
        </tr>
      </tbody>
    </table>

    <div class="text-center">
      <img src="@/assets/KAI.png" alt="" style="width: 5%" />
      <span class="fw-bold fs-4 ms-3">케이에이아이인증원(주)</span>
    </div>
    <div class="text-center mt-3 mb-3">
      <span>서울특별시 마포구 월드컵로 86, 3층(우.03996)</span> <br />
      <span>Tel. 02-2661-8503 / Fax. 02-6305-9543</span>
    </div>
  -->
    <!-- 1. 심사개요 -->
    <!-- <h5>I. 심사개요</h5>
    <h6>1. 인증범위 확인</h6>

    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th style="width: 20%">고객명</th>
          <td style="width: 30%">""""</td>
          <th style="width: 20%">심사번호</th>
          <td style="width: 30%">""</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 20%">사업장주소</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">대표자명</th>
          <td style="width: 30%">""""</td>
          <th style="width: 20%">사업자등록번호</th>
          <td style="width: 30%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">담당부서</th>
          <td style="width: 30%">""""</td>
          <th style="width: 20%">담당자명</th>
          <td style="width: 30%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">대표전화</th>
          <td style="width: 30%">""""</td>
          <th style="width: 20%">대표이메일</th>
          <td style="width: 30%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">심사표준</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">인증범위</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">IAF코드</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">MD적합성</th>
          <td style="width: 80%" colspan="3">
            사업장 현황 및 조직인원 수가 인증신청정보와 동일하며 산정된
            심사일수가 적절함.
          </td>
        </tr>
        <tr>
          <th style="width: 20%">전문가필요성</th>
          <td style="width: 80%" colspan="3">불필요</td>
        </tr>
        <tr>
          <th style="width: 20%">부적합사항</th>
          <td style="width: 80%" colspan="3">해당없음</td>
        </tr>
      </tbody>
    </table> -->

    <h5 class="fw-bold mb-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사팀구성
    </h5>
    <table class="table text-center">
      <thead>
        <tr>
          <td style="width: 20%">구분</td>
          <th style="width: 20%">심사팀장</th>
          <td style="width: 20%">심사팀원</td>
          <td style="width: 20%">심사팀원</td>
          <td style="width: 20%">심사팀원</td>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr>
          <th style="width: 20%">심사팀</th>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              v-model="auditTeam.leader"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              v-model="auditTeam.auditor1"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              v-model="auditTeam.auditor2"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              v-model="auditTeam.auditor3"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table text-center">
      <thead>
        <tr>
          <td style="width: 20%">구분</td>
          <th style="width: 20%">기술전문가</th>
          <td style="width: 20%">훈련심사원</td>
          <td style="width: 20%">훈련심사원</td>
          <td style="width: 20%">훈련심사원</td>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr>
          <!-- <td style="width: 20%">심사팀</td> -->
          <th style="width: 20%">동반인원</th>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              v-model="companions.tech_expert"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              v-model="companions.trainee1"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              v-model="companions.trainee2"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              v-model="companions.trainee3"
            />
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>

    <!-- II. 1단계심사 확인사항 -->
    <div class="mb-4">
      <h5 class="fw-bold mt-5">
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        1단계심사 확인사항
      </h5>
      <span>
        ＊확인사항: 간략하게 기재하되, 인증기업의 사정을 충분히 파악할 수 있어야
        함. 부적합 사항이 발행한 경우 부적합표시 후 III.발견사항에 상세기재 </span
      ><br />
      <span>＊해당사항 없는 경우 "N/A" 또는 "해당없음" 표기</span>
    </div>

    <table class="table table-hover">
      <thead>
        <tr class="text-center">
          <th style="width: 40%">요구사항</th>
          <th style="width: 60%">확인사항</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width: 40%">
            1. 고객의 핵심 비즈니스 영역은 무엇인가?<br />
            (심사에 참고가능한 전반적인 정보 기재)
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.biz_area"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            2. 고객의 활동과 표준문서의 관련성은 적절한가? <br />
            문서의 구조와 종류 및 Ver은 무엇인가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.reliability"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            3. 조직의 상황과 내부,외부 이슈를 정하고 이해하고 있는가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.issue"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            4. 조직의 상황에 대해 어떤 문서와 기록을 확인할 수 있는가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              name=""
              class="form-control"
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.biz_status"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            5. 이해관계자의 니즈와 기대를 정의하고 이해하고 있는가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.needs"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            6. 인증범위는 무엇이며 조직의 활동에 적합한가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.scope"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">7. 고객의 품질리스크는 무엇인가?</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.quality_risk"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">8. 고객의 환경측면은 무엇인가?</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.env_risk"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">9. 고객의 핵심 위험요소는 무엇인가?</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.safety_risk"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            10. 조직이 제품/서비스에 적용가능한 규제 및 법적요구사항은 무엇인가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.regal"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            11. 경영시스템방침이 문서화되어 있으며 목표와 일관성을 가지고
            있는가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.policy"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            12. 인증대상 경영시스템의 핵심목표는 무엇인가? <br /><span
              >(조직의상황과 리스크를 반영한 목표)
            </span>
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.goal"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            13. 내부심사는 계획되고 실행되었는가? 심사일은 언제인가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.internal_audit"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            14. 경영검토의 실시되었는가? 실시일은 언제인가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.management_review"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            15. 고객의 시스템에 대한 이해수준은 어느정도인가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.understanding_level"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            16. 고객의 사업장 정보(사업장 수, 위치)가 신청정보와 동일한가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.workspace"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            17. 적용제외조항과 근거는 무엇인가? 그것을 수용할 것인가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.exclusion"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            18. 조직의 인원은 몇 명이며 신청정보와 동일한가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.worker_count"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 2단계정보 -->
    <div class="mb-4">
      <h5 class="fw-bold mt-5">
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        2단계심사 정보
      </h5>
    </div>
    <table class="table table-hover">
      <thead>
        <tr class="text-center">
          <th style="width: 40%"></th>
          <th style="width: 60%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width: 40%">2단계심사 M/D와 심사일 수?</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.s2md"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            2단계심사의 안내자와 심사대응자는 누구인가?
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.guider"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">심사장소가 확보되고 사업장출입은 가능한가?</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.place"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">심사장소 방문시 주의사항은 무엇인가?</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.precautions"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            현장 사업장명과 주소는 무엇인가? <br /><span>
              (건설, 시공, 설치 현장이 있는 경우 반드시 기록)</span
            >
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.site_address"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">현장방문에 소요되는 시간은 얼마인가?</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.visit_time"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">방문현장 담당자와 연락처는 무엇인가?</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.contact"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 발견사항 -->
    <div
      class="mb-4 mt-4 d-flex flex-row align-items-middle justify-content-between"
    >
      <div>
        <h5 class="fw-bold">
          <i
            class="fa-solid fa-square-caret-right"
            style="color: blueviolet"
          ></i>
          발견사항
        </h5>
      </div>
      <div>
        <button class="btn btn-secondary btn-sm" @click="addRow">행추가</button>
        <button class="btn btn-secondary btn-sm ms-2" @click="removeRow">
          행삭제
        </button>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr class="mt-0 text-center">
          <th style="width: 20%">발견사항</th>
          <!-- <th style="width: 10%">No.</th> -->
          <th style="width: 60%">발견내용</th>
          <th style="width: 20%">표준/조항</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select"
              v-model="row.findings"
              style="border: 0"
            >
              <option value="중부적합">중부적합</option>
              <option value="경부적합">경부적합</option>
              <option value="권고">권고사항</option>
            </select>
            <div>{{ row.findings }}</div>
            <!-- <textarea
              name=""
              id=""
              cols=""
              rows="1"
              placeholder="중부적합, 경부적합, 권고사항을 구분하여 기재"
              style="border: 0"
              v-model="row.findings"
            ></textarea> -->
          </td>
          <!-- <td style="width: 10%">
            <input type="text" style="width: 100%; border: 0" rows="2" />
          </td> -->
          <td style="width: 60%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              placeholder="요구사항조항, 부적합내용, 심사원 등 기재"
              v-model="row.findings_content"
            ></textarea>
            <div>{{ row.findings_content }}</div>
          </td>
          <td style="width: 20%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="row.findings_standard"
            ></textarea>
            <div>{{ row.findings_standard }}</div>
            <!-- <div>
              {{ rows }}
            </div> -->
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-end mt-5">
      <button type="button" class="btn btn-primary" @click="doSave">
        저장
      </button>
      <button type="button" class="btn btn-secondary ms-2" @click="goToList">
        취소
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
      // searchName: '',
      imgSrc: '',
      imgExt: '',
      rows: [{ findings: '', findings_content: '', findings_standard: '' }],
      auditTeam: {
        leader: '',
        auditor1: '',
        auditor2: '',
        auditor3: ''
      },
      companions: {
        tech_expert: '',
        trainee1: '',
        trainee2: '',
        trainee3: ''
      },
      checkpoint: {
        biz_area: '',
        reliability: '',
        issue: '',
        biz_status: '',
        needs: '',
        scope: '',
        quality_risk: '',
        env_risk: '',
        safety_risk: '',
        regal: '',
        policy: '',
        goal: '',
        internal_audit: '',
        management_review: '',
        understanding_level: '',
        workspace: '',
        exclusion: '',
        worker_count: '',
        s2md: '',
        guider: '',
        place: '',
        precautions: '',
        site_address: '',
        visit_time: '',
        contact: ''
        // findings: {},
        // findings_content: {},
        // findings_standard: {}
        // findings_array: []
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
    addRow() {
      this.rows.push({ findings: '', findingContent: '', standard: '' })
    },
    removeRow() {
      this.rows.pop()
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
      this.customer.img_license = r.filename
      this.customer.img_license_originalname = r.originalname
      this.imgExt = r.mimetype
      console.log(this.customer.img_license)
      console.log(this.customer.img_license_originalname)
      console.log(this.imgExt)
    },
    async doSave() {
      if (this.auditTeam.leader === '') {
        return this.$swal('심사팀장명을 입력하세요.')
      }
      if (this.checkpoint.reliability === '') {
        return this.$swal('2번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.issue === '') {
        return this.$swal('3번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.biz_status === '') {
        return this.$swal('4번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.needs === '') {
        return this.$swal('5번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.scope === '') {
        return this.$swal('6번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.quality_risk === '') {
        return this.$swal('7번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.env_risk === '') {
        return this.$swal('8번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.safety_risk === '') {
        return this.$swal('9번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.regal === '') {
        return this.$swal('10번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.policy === '') {
        return this.$swal('11번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.goal === '') {
        return this.$swal('12번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.internal_audit === '') {
        return this.$swal('13번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.management_review === '') {
        return this.$swal('14번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.understanding_level === '') {
        return this.$swal('15번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.workspace === '') {
        return this.$swal('16번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.exclusion === '') {
        return this.$swal('17번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.worker_count === '') {
        return this.$swal('18번 확인사항을 입력하세요.')
      }

      this.$swal({
        title: '보고서를 생성 하시겠습니까?',
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

          const r = await this.$post('/api/report/s1', {
            param: {
              leader: this.auditTeam.leader,
              auditor1: this.auditTeam.auditor1,
              auditor2: this.auditTeam.auditor2,
              auditor3: this.auditTeam.auditor3,
              tech_expert: this.companions.tech_expert,
              trainee1: this.companions.trainee1,
              trainee2: this.companions.trainee2,
              trainee3: this.companions.trainee3,
              biz_area: this.checkpoint.biz_area,
              reliability: this.checkpoint.reliability,
              issue: this.checkpoint.issue,
              biz_status: this.checkpoint.biz_status,
              needs: this.checkpoint.needs,
              scope: this.checkpoint.scope,
              quality_risk: this.checkpoint.quality_risk,
              env_risk: this.checkpoint.env_risk,
              safety_risk: this.checkpoint.safety_risk,
              regal: this.checkpoint.regal,
              policy: this.checkpoint.policy,
              goal: this.checkpoint.goal,
              internal_audit: this.checkpoint.internal_audit,
              management_review: this.checkpoint.management_review,
              understanding_level: this.checkpoint.understanding_level,
              workspace: this.checkpoint.workspace,
              exclusion: this.checkpoint.exclusion,
              worker_count: this.checkpoint.worker_count,
              s2md: this.checkpoint.s2md,
              guider: this.checkpoint.guider,
              place: this.checkpoint.place,
              precautions: this.checkpoint.precautions,
              site_address: this.checkpoint.site_address,
              visit_time: this.checkpoint.visit_time,
              contact: this.checkpoint.contact,
              findings_array: JSON.stringify(this.rows)
              // findings: JSON.stringify(this.row.findings),
              // findings_content: JSON.stringify(this.row.findings_content),
              // findings_standard: JSON.stringify(this.row.findings_standard)
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('1단계 심사보고서가 저장되었습니다.')
            this.$router.push({
              path: '/customer/list',
              query: { customer_id: r.data.insertId }
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
