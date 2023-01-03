<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <p class="text-black-50 fst-italic">PF960-02(Rev.1)</p>
      <p class="text-black-50 fst-italic">Audit Report S2</p>
    </div>
    <div class="row">
      <div class="col">
        <img src="@/assets/20221213_KAI로고.png" style="width: 27%" alt="" />
      </div>
      <div class="col">
        <div class="text-center">
          <h1 class="fw-bold">심사계획서</h1>
          <h3>2단계 심사</h3>
          <p>www.kaicert.co.kr</p>
        </div>
      </div>
      <div class="col">
        <img
          src="@/assets/IAS로고.png"
          style="width: 27%; float: right"
          alt=""
        />
      </div>
    </div>

    <h5 class="fw-bold mt-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      기본사항
    </h5>
    <table class="table text-center">
      <thead class="table-group-divider">
        <tr class="bg-light">
          <th style="width: 20%">업체명</th>
          <th style="width: 15%">심사번호</th>
          <th style="width: 20%">심사표준</th>
          <th style="width: 15%">심사유형</th>
          <th style="width: 20%">인증범위</th>
          <th style="width: 10%">종업원수</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr>
          <td>{{ list.name_ko }}</td>
          <td>{{ list.audit_no }}</td>
          <td>{{ list.audit_standard }}</td>
          <td>{{ list.audit_type + ' ' + list.audit_degree }}</td>
          <td>{{ list.scope_ko }}</td>
          <td>{{ list.employee_count }}명</td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사의 목적
    </h5>
    <table class="table">
      <tbody class="align-middle table-group-divider">
        <tr>
          ㅁ최초심사 - 경영시스템의 실행 및 효과성 평가
          <br />ㅁ사후심사 - 경영시스템의 지속적 실행 검증, 변경사항 검토를 통한
          지속적 적합성 여부 확인
          <br />
          ㅁ갱신심사 - 경영시스템 전반의 지속적 적합성, 효과성 확인 및
          인증범위에 대한 경영시스템의 관련성 및 적용성 확인
        </tr>
      </tbody>
    </table>

    <!-- 심사정보 -->

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사정보
    </h5>
    <table class="table text-center">
      <thead class="table-group-divider">
        <tr class="bg-light">
          <th style="width: 20%">심사유형</th>
          <th style="width: 60%">심사일자</th>
          <th style="width: 20%">심사MD</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr>
          <td>{{ list.audit_type + list.audit_degree }}</td>
          <td>
            {{ $convertDateFormat(list.audit_s2_start, 'YYYY-MM-DD') }} ~
            {{ $convertDateFormat(list.audit_s2_end, 'YYYY-MM-DD') }}
          </td>
          <td>{{ list.audit_md }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 심사팀구성 -->

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사팀구성
    </h5>
    <table class="table text-center">
      <thead class="table-group-divider">
        <tr class="bg-light">
          <th style="width: 20%">심사팀장</th>
          <th style="width: 60%">심사팀원</th>
          <th style="width: 20%">동반인원</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr>
          <td>{{ list.audit_leader }}</td>
          <td>
            {{ list.auditor }}
          </td>

          <td>{{ list.companion }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 심사비 -->

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사비
    </h5>
    <table class="table text-center">
      <thead class="table-group-divider">
        <tr class="bg-light">
          <th style="width: 25%">신청비</th>
          <th style="width: 25%">출장비</th>
          <th style="width: 25%">심사비</th>
          <th style="width: 25%">합계(V.A.T별도)</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr>
          <td></td>
          <td></td>

          <td>{{ $convertNumberFormat(list.audit_fee, '#,###') }}원</td>
          <th>{{ $convertNumberFormat(list.audit_fee, '#,###') }}원</th>
        </tr>
      </tbody>
    </table>

    <div style="page-break-before: always">
      <h5 class="fw-bold mt-5">
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        심사세부일정표
      </h5>
      <!-- table -->
      <div class="fw-bold italic">
        심사일자:
        {{ $convertDateFormat(this.list.audit_s2_start, 'YYYY-MM-DD') }} ~
        {{ $convertDateFormat(this.list.audit_s2_end, 'YYYY-MM-DD') }} ({{
          this.s2AuditDayDiff
        }}일간)
      </div>
      <table class="table text-center">
        <thead class="table-group-divider">
          <colgroup>
            <col style="width: 5%" />
            <!-- <col style="width: 5%" /> -->
            <col style="width: 47.5%" />
            <col style="width: 47.5%" />
            <!-- <col style="width: 10%" /> -->
          </colgroup>
          <tr>
            <th colspan="2" class="bg-light">일시</th>
            <th colspan="3" class="bg-light">심사원별심사대상</th>
          </tr>
          <tr class="bg-light">
            <th style="width: 20%">심사일자</th>
            <!-- <th>심사시간</th> -->
            <th style="width: 40%">심사팀장</th>
            <th style="width: 40%">심사팀원</th>
            <!-- <th>추가</th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="9">
              {{ s2ReportInfo.s2AuditDate1 }}
            </td>
            <td>
              {{ s2ReportInfo.leader11 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor11 }}
            </td>
          </tr>
          <tr>
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader12 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor12 }}
            </td>
          </tr>
          <tr>
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader13 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor13 }}
            </td>
          </tr>
          <tr>
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader14 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor14 }}
            </td>
          </tr>
          <tr>
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader15 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor15 }}
            </td>
          </tr>
          <tr>
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader16 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor16 }}
            </td>
          </tr>
          <tr>
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader17 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor17 }}
            </td>
          </tr>
          <tr>
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader18 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor18 }}
            </td>
          </tr>
          <tr>
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader19 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor19 }}
            </td>
          </tr>

          <!-- 2일째 심사 -->
          <!-- <tr v-if="this.s2AuditDayDiff === 2"> -->
          <tr v-if="this.s2AuditDayDiff === 2">
            <td rowspan="9">
              {{ s2ReportInfo.s2AuditDate2 }}
            </td>
            <td>
              {{ s2ReportInfo.leader21 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor21 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 2">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader22 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor22 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 2">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader23 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor23 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 2">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader24 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor24 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 2">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader25 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor25 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 2">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader26 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor26 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 2">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader27 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor27 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 2">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader28 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor28 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 2">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan1.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader29 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor29 }}
            </td>
          </tr>
          <!-- 3일째 심사 -->
          <!-- <tr v-if="this.s2AuditDayDiff === 3"> -->
          <tr v-if="this.s2AuditDayDiff === 3">
            <td rowspan="9">
              {{ s2ReportInfo.s2AuditDate3 }}
            </td>
            <td>
              {{ s2ReportInfo.leader31 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor31 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 3">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan3.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader32 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor32 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 3">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan3.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader33 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor33 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 3">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan3.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader34 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor34 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 3">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan3.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader35 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor35 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 3">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan3.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader36 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor36 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 3">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan3.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader37 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor37 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 3">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan3.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader38 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor38 }}
            </td>
          </tr>
          <tr v-if="this.s2AuditDayDiff === 3">
            <!-- <td>
            <input
              type="date"
              class="form-control"
              v-model="s2DetailPlan3.s2AuditDate1"
            />
          </td> -->
            <td>
              {{ s2ReportInfo.leader39 }}
            </td>
            <td>
              {{ s2ReportInfo.auditor39 }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      이해관계확인 및 기밀준수 서약
    </h5>
    <table class="table">
      <tbody>
        <tr>
          <p>
            본인은 상기 업무를 수행함에 있어 KAI의 공정성 및 신뢰성에 위배되지
            않도록 다음 사항을 준수하며, 만약, 해당 사항을 위반한 경우 KAI에서
            결정하는 어떠한 처벌도 감수할 것을 서약합니다.
          </p>
          <ol style="line-height: 250%">
            <li>
              상기 고객에 대하여 최근2년 이내 어떠한 자문도 제공하지 않았음을
              확인합니다.
            </li>
            <li>
              심사를 수행함에 있어 피심사 조직 및 조직 구성원과의 과거, 현재 및
              미래에 형성될 수 있는 다음과 같은 특정관계가 없으며 향후
              특정관계가 발생했을 경우, 즉시 KAI에 보고하겠습니다.
            </li>
            <ul>
              <li>최근 2년 내 재직 또는 2년 내 내부심사 수행</li>
              <li>주식 3%이상 소유</li>
              <li>생산 제품의 공급 또는 구매 관계</li>
              <li>경영진과의 이해관계</li>
            </ul>
            <li>
              심사를 수행하는 중 피심사 조직 및 조직 구성원으로부터 향응 권유,
              금품, 선물이나 기타 이익을 획득하지 않을 것이며, 동료의 그러한
              행동을 알고도 방관하지 않겠습니다.
            </li>
            <li>
              KAI의 기밀유지 절차와 심사원 윤리규정 서약서의 내용을 숙지하고
              준수하겠습니다.
            </li>
            <li>
              본인은 피심사조직에서 심사 중 습득한 고객의 기밀사항을 외부로
              유출하지 않을 것임을 서약합니다.
            </li>
          </ol>
        </tr>
      </tbody>
    </table>
    <div style="page-break-before: always"></div>
    <div class="row mt-5">
      <div class="col">
        <img src="@/assets/20221213_KAI로고.png" style="width: 27%" alt="" />
      </div>
      <div class="col">
        <div class="text-center">
          <h1 class="fw-bold">심사보고서</h1>
          <h3>2단계 심사</h3>
          <p>www.kaicert.co.kr</p>
        </div>
      </div>
      <div class="col">
        <img
          src="@/assets/IAS로고.png"
          style="width: 27%; float: right"
          alt=""
        />
      </div>
    </div>

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사정보
    </h5>
    <table class="table text-center">
      <thead class="table-group-divider">
        <tr class="bg-light">
          <th style="width: 20%">고객명</th>
          <th style="width: 20%">심사번호</th>
          <th style="width: 20%">심사표준</th>
          <th style="width: 15%">심사유형</th>
          <th style="width: 25%">심사일자</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr>
          <td>{{ list.name_ko }}</td>
          <td>{{ list.audit_no }}</td>

          <td>{{ list.audit_standard }}</td>
          <td>{{ list.audit_type + list.audit_degree }}</td>
          <td>{{ list.audit_s2_start }} ~ {{ list.audit_s2_end }}</td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      공통사항 확인
    </h5>
    <table class="table">
      <thead class="table-group-divider">
        <!-- <colgroup class="table-group-divider">
          <col style="width: 10%" />
          <col style="width: 90%" />
        </colgroup> -->
        <tr class="text-center bg-light">
          <th style="width: 25%">확인사항</th>
          <th style="width: 75%">확인내용</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="fw-bold">
            1. 시스템문서 관련정보 <br /><small
              >(문서구조, 문서번호, Rev 등)</small
            >
          </td>
          <td>
            {{ s2ReportInfo.documentStructure }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">
            2. 심사계획서와의 차이 <br /><small>(해당 시 기재)</small>
          </td>
          <td>
            {{ s2ReportInfo.difference }}
          </td>
        </tr>

        <tr>
          <td class="fw-bold">
            3. 복수사업장 여부 확인 <br /><small>(해당 시 주소 등 기재)</small>
          </td>
          <td>
            {{ s2ReportInfo.doubleWorkplace }}
          </td>
        </tr>

        <tr>
          <td class="fw-bold">
            4. 시공 또는 설치 현장 확인 <br /><small
              >(해당 시 주소 및 담당자,<br />
              시스템운영현황 등을 세부적으로 기재)</small
            >
          </td>
          <td>
            {{ s2ReportInfo.constructSite }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">
            5. 외주처리 프로세스 확인 <br /><small
              >(해당 시 외주처리프로스 상세 기재)</small
            >
          </td>
          <td>{{ s2ReportInfo.outSourcing }}</td>
        </tr>
        <tr>
          <td class="fw-bold">
            6. 적용제외 조항 확인 <br /><small
              >(해당 시 정당성 확인근거 기재)</small
            >
          </td>
          <td>
            {{ s2ReportInfo.exclusiveClause }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">
            7. 이전 심사의 부적합 조치 여부 확인 <br /><small
              >(해당 시 조치결과 확인사항 기재)</small
            >
          </td>
          <td>
            {{ s2ReportInfo.previousAudit }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">
            8. 조직에 적용되는 법규 및 준수사항 <br /><small></small>
          </td>
          <td>
            {{ s2ReportInfo.appliedLaw }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">
            9. 인증서 및 로고 사용상태 <br /><small></small>
          </td>
          <td>
            {{ s2ReportInfo.logoUsage }}
          </td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      변경사항 확인
    </h5>
    <table class="table">
      <thead class="table-group-divider">
        <!-- <colgroup class="table-group-divider">
          <col style="width: 25%" />
          <col style="width: 75%" />
        </colgroup> -->
        <tr class="text-center bg-light">
          <th style="width: 25%">확인사항</th>
          <th style="width: 75%">확인내용</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="fw-bold">1. 회사명 <br /><small></small></td>
          <td>
            {{ s2ReportInfo.companyName }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">
            2. 사업장주소<br /><small>(해당 시 변경 전, 후 구분기재)</small>
          </td>
          <td>
            {{ s2ReportInfo.companyAddress }}
          </td>
        </tr>

        <tr>
          <td class="fw-bold">3. 대표자 및 조직 <br /><small></small></td>
          <td>
            {{ s2ReportInfo.companyCeo }}
          </td>
        </tr>

        <tr>
          <td class="fw-bold">4. 인원 <br /><small></small></td>
          <td>
            {{ s2ReportInfo.companyEmployee }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">5. 인증범위 <br /><small></small></td>
          <td>
            {{ s2ReportInfo.scope }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">6. 관련법령 <br /><small></small></td>
          <td>
            {{ s2ReportInfo.concernedLaw }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">
            7. 경영시스템 <br /><small>(매뉴얼 및 프로세스)</small>
          </td>
          <td>
            {{ s2ReportInfo.mgtSystem }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">8. 주요공정 <br /><small></small></td>
          <td>
            {{ s2ReportInfo.majorProcess }}
          </td>
        </tr>
        <tr>
          <td class="fw-bold">9. 기타 <br /><small></small></td>
          <td>
            {{ s2ReportInfo.etc }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 요구사항확인 -->
    <h5 class="fw-bold mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      요구사항 확인
    </h5>
    <small
      >* 결과: "A(적합)", "N(부적합)", "R(권고)", "N/A(해당없음) 기재</small
    >
    <table class="table">
      <thead class="table-group-divider">
        <tr class="text-center bg-light">
          <th style="width: 5%">조항</th>
          <th style="width: 20%">요구사항</th>
          <th style="width: 65%">확인사항</th>
          <th style="width: 10%">결과</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>4.1</th>
          <th>조직과 조직상황의 이해</th>
          <td>
            {{ s2ReportInfo.orgStatus }}
          </td>

          <td>
            {{ s2ReportInfo.orgStatusSelect }}
          </td>
        </tr>
        <tr>
          <th>4.2</th>
          <th>이해관계자의 니즈와 기대 이해(Q)</th>
          <td>
            {{ s2ReportInfo.needs }}
          </td>
          <td>
            {{ s2ReportInfo.needsSelect }}
          </td>
        </tr>
        <tr>
          <th>4.2</th>
          <th>근로자 및 기타 이해관계자의 니즈와 기대 이해(O)</th>
          <td>
            {{ s2ReportInfo.employeeNeeds }}
          </td>
          <td>
            {{ s2ReportInfo.employeeNeedsSelect }}
          </td>
        </tr>
        <tr>
          <th>4.3</th>
          <th>
            경영시스템 적용범위 결정<br />
            <small>
              (문서화된 범위가 조직의 상황에 적절하고 관련성이 있는가?)</small
            >
          </th>
          <td>
            {{ s2ReportInfo.appliedScope }}
          </td>
          <td>
            {{ s2ReportInfo.appliedScopeSelect }}
          </td>
        </tr>
        <tr>
          <th>4.4</th>
          <th>품질경영시스템과 그 프로세스(Q)</th>
          <td>
            {{ s2ReportInfo.qmsProcess }}
          </td>
          <td>
            {{ s2ReportInfo.qmsProcessSelect }}
          </td>
        </tr>
        <tr>
          <th>4.4</th>
          <th>환경/안전보건경영시스템(E,O)</th>
          <td>
            {{ s2ReportInfo.eomSystem }}
          </td>
          <td>
            {{ s2ReportInfo.eomSystemSelect }}
          </td>
        </tr>
        <tr>
          <th>5.1</th>
          <th>
            리더십과 의지표명<br />
            <small> (모니터링, 이해관계자, 위험과기회)</small>
          </th>
          <td>
            {{ s2ReportInfo.leadership }}
          </td>
          <td>
            {{ s2ReportInfo.leadershipSelect }}
          </td>
        </tr>
        <tr>
          <th>5.2</th>
          <th>방침</th>
          <td>
            {{ s2ReportInfo.policy }}
          </td>
          <td>
            {{ s2ReportInfo.policySelect }}
          </td>
        </tr>
        <tr>
          <th>5.3</th>
          <th>조직의 역할, 책임 및 권한</th>
          <td>
            {{ s2ReportInfo.role }}
          </td>
          <td>
            {{ s2ReportInfo.roleSelect }}
          </td>
        </tr>
        <tr>
          <th>5.4</th>
          <th>근로자의 협의 및 참여(O)</th>
          <td>
            {{ s2ReportInfo.employeeParticipation }}
          </td>
          <td>
            {{ s2ReportInfo.employeeParticipationSelect }}
          </td>
        </tr>
        <tr>
          <th>6.1</th>
          <th>
            리스크와 기회를 다루는 조치<br /><small>
              (품질,환경,안전보건리스크 및 기회, 현장의 품질환경안전보건
              운영규칙 등)</small
            >
          </th>
          <td>
            {{ s2ReportInfo.riskHandling }}
          </td>
          <td>
            {{ s2ReportInfo.riskHandlingSelect }}
          </td>
        </tr>
        <tr>
          <th>6.2</th>
          <th>목표와 목표 달성 기획</th>
          <td>
            {{ s2ReportInfo.objectPlan }}
          </td>
          <td>
            {{ s2ReportInfo.objectPlanSelect }}
          </td>
        </tr>
        <tr>
          <th>6.3</th>
          <th>변경의 기획(Q)</th>
          <td>
            {{ s2ReportInfo.changePlan }}
          </td>
          <td>
            {{ s2ReportInfo.changePlanSelect }}
          </td>
        </tr>
        <tr>
          <th>7.1</th>
          <th>자원</th>
          <td>
            {{ s2ReportInfo.reSource }}
          </td>
          <td>
            {{ s2ReportInfo.reSourceSelect }}
          </td>
        </tr>
        <tr>
          <th>7.2</th>
          <th>역량/적격성</th>
          <td>
            {{ s2ReportInfo.capability }}
          </td>
          <td>
            {{ s2ReportInfo.capabilitySelect }}
          </td>
        </tr>
        <tr>
          <th>7.3</th>
          <th>인식</th>
          <td>
            {{ s2ReportInfo.recognition }}
          </td>
          <td>
            {{ s2ReportInfo.recognitionSelect }}
          </td>
        </tr>
        <tr>
          <th>7.4</th>
          <th>의사소통</th>
          <td>
            {{ s2ReportInfo.communication }}
          </td>
          <td>
            {{ s2ReportInfo.communicationSelect }}
          </td>
        </tr>
        <tr>
          <th>7.5</th>
          <th>문서화된 정보</th>
          <td>
            {{ s2ReportInfo.document }}
          </td>
          <td>
            {{ s2ReportInfo.documentSelect }}
          </td>
        </tr>
        <tr>
          <th>8.1</th>
          <th>운용기획 및 관리</th>
          <td>
            {{ s2ReportInfo.operationPlan }}
          </td>
          <td>
            {{ s2ReportInfo.operationPlanSelect }}
          </td>
        </tr>
        <tr>
          <th>8.2</th>
          <th>제품 및 서비스 요구사항(Q)</th>
          <td>
            {{ s2ReportInfo.productServiceRequirement }}
          </td>
          <td>
            {{ s2ReportInfo.productServiceRequirementSelect }}
          </td>
        </tr>
        <tr>
          <th>8.2</th>
          <th>비상사태 대비 및 대응(E,O)</th>
          <td>
            {{ s2ReportInfo.emergency }}
          </td>
          <td>
            {{ s2ReportInfo.emergencySelect }}
          </td>
        </tr>
        <tr>
          <th>8.3</th>
          <th>제품 및 서비스의 설계와 개발(Q)</th>
          <td>
            {{ s2ReportInfo.design }}
          </td>
          <td>
            {{ s2ReportInfo.designSelect }}
          </td>
        </tr>
        <tr>
          <th>8.4</th>
          <th>외부에서 제공되는 프로세스, 제품 및 서비스의 관리(Q)</th>
          <td>
            {{ s2ReportInfo.purchase }}
          </td>
          <td>
            {{ s2ReportInfo.purchaseSelect }}
          </td>
        </tr>
        <tr>
          <th>8.5</th>
          <th>생산 및 서비스 제공(Q)</th>
          <td>
            {{ s2ReportInfo.productService }}
          </td>
          <td>
            {{ s2ReportInfo.productServiceSelect }}
          </td>
        </tr>
        <tr>
          <th>8.6</th>
          <th>제품 및 서비스의 불출/출시</th>
          <td>
            {{ s2ReportInfo.productRelease }}
          </td>
          <td>
            {{ s2ReportInfo.productReleaseSelect }}
          </td>
        </tr>
        <tr>
          <th>8.7</th>
          <th>부적합 출력/산출물의 관리</th>
          <td>
            {{ s2ReportInfo.output }}
          </td>
          <td>
            {{ s2ReportInfo.outputSelect }}
          </td>
        </tr>
        <tr>
          <th>9.1</th>
          <th>모니터링, 측정, 분석 및 평가</th>
          <td>
            {{ s2ReportInfo.monitoring }}
          </td>
          <td>
            {{ s2ReportInfo.monitoringSelect }}
          </td>
        </tr>
        <tr>
          <th>9.2</th>
          <th>
            내부심사 <br />
            <small
              >(심사주기, 심사일, 심사팀, 부적합, 시정조치, 유효성, 문서화
              등)</small
            >
          </th>
          <td>
            {{ s2ReportInfo.internal_audit }}
          </td>
          <td>
            {{ s2ReportInfo.internal_auditSelect }}
          </td>
        </tr>
        <tr>
          <th>9.3</th>
          <th>
            경영검토 <br /><small
              >(실시일, 참석자, 입출력사항 적절성, 문서화 등)</small
            >
          </th>
          <td>
            {{ s2ReportInfo.management_review }}
          </td>
          <td>
            {{ s2ReportInfo.management_reviewSelect }}
          </td>
        </tr>
        <tr>
          <th>10.1</th>
          <th>일반사항</th>
          <td>
            {{ s2ReportInfo.general }}
          </td>
          <td>
            {{ s2ReportInfo.generalSelect }}
          </td>
        </tr>
        <tr>
          <th>10.2</th>
          <th>사건(O), 부적합 및 시정조치</th>
          <td>
            {{ s2ReportInfo.nonconformity }}
          </td>
          <td>{{ s2ReportInfo.nonconformitySelect }}</td>
        </tr>
        <tr>
          <th>10.3</th>
          <th>지속적 개선</th>
          <td>
            {{ s2ReportInfo.continuousImprove }}
          </td>
          <td>
            {{ s2ReportInfo.continuousImproveSelect }}
          </td>
        </tr>
      </tbody>
    </table>

    <div style="page-break-before: always"></div>

    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        심사프로그램 사이클
      </h5>
      <span style="font-size: 14px">
        - 최초/갱신 심사 시 차기 갱신심사 시까지, 인증주기 전체에 대해 계획하고
        인증주기 내에 심사프로그램은 모든 경영시스템 요구사항을 다루도록
        작성.<br />
        - O표는 모든 심사시 필수 확인사항이며, △표시는 적용여부에 따른
        확인사항임.</span
      >
    </div>
    <!-- 심사프로그램 사이클 테이블 -->
    <table class="table table-sm" style="font-size: 14px">
      <thead class="table-group-divider">
        <tr class="text-center bg-light">
          <th style="width: 40%">구분</th>
          <th style="width: 20%">사후1차</th>
          <th style="width: 20%">사후2차</th>
          <th style="width: 20%">갱신</th>
          <!-- <th style="width: 8.75%">2차</th>
          <th style="width: 8.75%">갱신</th>
          <th style="width: 8.75%">4차</th>
          <th style="width: 8.75%">5차</th>
          <th style="width: 8.75%">갱신</th> -->
        </tr>
      </thead>
      <tbody class="">
        <!-- <tr>
          <th>심사월</th>
          <td class="text-center">22/09</td>
          <td class="text-center">23/09</td>
          <td class="text-center">24/09</td>
          <td class="text-center">25/09</td>
          <td class="text-center">26/09</td>
          <td class="text-center">27/09</td>
          <td class="text-center">28/09</td>
          <td class="text-center">29/09</td>
        </tr> -->
        <tr>
          <th>4.1 조직과 조직상황의 이해</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>4.2 이해관계자의 니즈와 기대 이해</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>4.2 근로자 및 기타 이해관계자의 니즈와 기대 이해(O)</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>4.3 경영시스템 적용범위 결정</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>

        <tr>
          <th>4.4 품질경영시스템과 그 프로세스</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>4.4 환경/안전보건경영시스템(E,O)</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>5.1 리더십과 의지표명</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>5.2 방침</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>5.3 조직의 역할, 책임 및 권한</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>5.4 근로자의 협의 및 참여(O)</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>6.1 리스크와 기회를 다루는 조치</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>6.2 목표와 목표 달성 기획</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>6.3 변경의 기획(Q)</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>7.1 자원</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>7.2 역량/적격성</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>7.4 의사소통</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>7.5 문서화된 정보</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>8.1 운용기획 및 관리</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>

        <tr>
          <th>8.2 비상사태 대비 및 대응(E,O)</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>8.3 제품 및 서비스의 설계와 개발(Q)</th>
          <td class="text-center">△</td>
          <td class="text-center">△</td>
          <td class="text-center">△</td>
        </tr>
        <tr>
          <th>8.4 외부에서 제공되는 프로세스, 제품 및 서비스의 관리(Q)</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>8.5 생산 및 서비스 제공(Q)</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>8.6 제품 및 서비스의 불출/출시</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>8.7 부적합 출력/산출물의 관리</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>9.1 모니터링, 측정, 분석 및 평가</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>9.2 내부심사</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>9.3 경영검토</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>10.1 일반사항</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>10.2 사건(O), 부적합 및 시정조치</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
        <tr>
          <th>10.3 지속적 개선</th>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
          <td class="text-center">○</td>
        </tr>
      </tbody>
    </table>

    <!-- 심사결과요약 -->
    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        최종 심사결과 요약
      </h5>
    </div>
    <table class="table">
      <tbody class="table-group-divider">
        <tr>
          <td>
            {{ s2ReportInfo.finalAuditSummary }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 심사목적 달성여부 -->
    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        심사목적의 달성 여부
      </h5>
    </div>

    <table class="table">
      <tbody class="table-group-divider">
        <tr>
          <td class="fw-bold">
            {{
              s2ReportInfo.auditPurpose === '인증등록유지추천'
                ? '심사 결과, 경영시스템이 요구사항에 적합하며 심사목적을 달성하였으므로, 인증 등록(또는 유지) 추천'
                : ''
            }}
          </td>
        </tr>
      </tbody>
    </table>

    <div style="page-break-before: always"></div>

    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        고객서명
      </h5>
    </div>

    <p class="w-100">
      1. 본 심사는고객의 인증범위와 관련된 활동에 대하여 샘플링으로
      수행되었으며, 발견되지 않은 우려사항이 존재할 수 있습니다.
    </p>
    <p>
      2. 이 심사보고서는 KAI의 인증 등록과 관련된 사항에 활용되며, 관련 법률
      또는 인정기관의 요구 이외에는 고객의 동의 없이 제3자게 제공하지 않습니다.
    </p>
    <p class="fw-bold">
      상기 심사팀에 의해 검토된 심사보고서 내용에 동의합니다.
    </p>
    <ul class="d-flex justify-content-evenly mt-5">
      <p>심사팀장: {{ list.audit_leader }}</p>
      (서명)
      <p>고객대표: {{ list.ceo_name }}</p>
      (서명)
    </ul>
    <!-- 심사원 서명 -->
    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        심사원 서명
      </h5>
    </div>
    <p>심사일 : {{ list.audit_s2_start }} ~ {{ list.audit_s2_end }}</p>
    <table class="table text-center">
      <thead class="table-group-divider bg-light">
        <th style="width: 10%">No</th>
        <th style="width: 20%">성명</th>
        <th style="width: 20%">역할</th>
        <th style="width: 25%">시작회의</th>
        <th style="width: 25%">종료회의</th>
      </thead>
      <tbody class="text-center">
        <tr>
          <td>{{ 1 }}</td>
          <td>
            {{ list.audit_auditor }}
          </td>
          <td>심사원</td>
          <td class="text-secondary">(서명)</td>
          <td class="text-secondary">(서명)</td>
        </tr>
      </tbody>
    </table>
    <!-- 참석자 서명 -->
    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        고객사 참석자 서명
      </h5>
    </div>
    <p>심사일 : {{ list.audit_s2_start }} ~ {{ list.audit_s2_end }}</p>
    <table class="table text-center">
      <thead class="table-group-divider bg-light">
        <th style="width: 10%">No</th>
        <th style="width: 20%">성명</th>
        <th style="width: 20%">부서</th>
        <th style="width: 25%">시작회의</th>
        <th style="width: 25%">종료회의</th>
      </thead>
      <tbody class="text-center">
        <tr v-for="item in s2ReportInfo.participants" :key="item">
          <td>{{ 1 }}</td>
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.position }}
          </td>
          <td class="text-secondary">(서명)</td>
          <td class="text-secondary">(서명)</td>
        </tr>
      </tbody>
    </table>

    <div class="text-end d-print-none mt-5">
      <button class="btn btn-info me-1" @click="printApplication">인쇄</button>
      <button class="btn btn-secondary me-1" @click="goToList">목록</button>
      <button class="btn btn-danger me-1" @click="goToChange">수정</button>
      <!-- <button class="btn btn-primary" @click="doSave">저장</button> -->
    </div>
  </div>
</template>

<script>
import Formatter from '@/mixins/formatter'

export default {
  mixins: [Formatter],

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
      list: {},
      dBcrInfo: {},
      s2AuditDayDiff: 0,
      s2ReportInfo: {},
      s2DetailPlan1: {
        s2AuditDate1: null,
        leader1: '',
        newLeader1: [],

        auditor1:
          '~09:30 시작회의, \n~10:00 경영자 면담, \n~11:00 현장순회, \n~12:00 OOO팀 심사(4항~10항), \n~14:00 OOO팀 심사(4항~10항), \n~15:00 OOO팀 심사(4항~10항), \n~16:30 OOO팀 심사(4항~10항), \n~17:30 심사팀 회의 및 보고서 작성, \n~18:00 종료회의'
      },
      s2DetailPlan2: {
        s2AuditDate2: null,
        leader2:
          '~10:00 OOO팀 심사(4항~10항), \n~11:00 OOO팀 심사(4항~10항), \n~12:00 OOO팀 심사(4항~10항), \n~14:00 OOO팀 심사(4항~10항), \n~15:00 OOO팀 심사(4항~10항), \n~16:30 OOO팀 심사(4항~10항), \n~17:30 심사팀 회의 및 보고서 작성, \n~18:00 종료회의',
        auditor2:
          '~10:00 OOO팀 심사(4항~10항), \n~11:00 OOO팀 심사(4항~10항), \n~12:00 OOO팀 심사(4항~10항), \n~14:00 OOO팀 심사(4항~10항), \n~15:00 OOO팀 심사(4항~10항), \n~16:30 OOO팀 심사(4항~10항), \n~17:30 심사팀 회의 및 보고서 작성, \n~18:00 종료회의'
      },
      s2DetailPlan3: {
        s2AuditDate3: null,
        leader3:
          '~10:00 OOO팀 심사(4항~10항), \n~11:00 OOO팀 심사(4항~10항), \n~12:00 OOO팀 심사(4항~10항), \n~14:00 OOO팀 심사(4항~10항), \n~15:00 OOO팀 심사(4항~10항), \n~16:30 OOO팀 심사(4항~10항), \n~17:30 심사팀 회의 및 보고서 작성, \n~18:00 종료회의',
        auditor3:
          '~10:00 OOO팀 심사(4항~10항), \n~11:00 OOO팀 심사(4항~10항), \n~12:00 OOO팀 심사(4항~10항), \n~14:00 OOO팀 심사(4항~10항), \n~15:00 OOO팀 심사(4항~10항), \n~16:30 OOO팀 심사(4항~10항), \n~17:30 심사팀 회의 및 보고서 작성, \n~18:00 종료회의'
      },
      companion: '',
      s2CheckPoint: {
        // systemDocument:
        //   '조직의 시스템 문서는 매뉴얼, 절차서, 프로세스, 지침서, 기준서 구조이며, 문서번호 및 버전정보는 매뉴얼 AAA-M-000(Ver0.0), 절차서 AAA-P-000(Ver0.0), 프로세스 AAA-P-000(Ver0.0), 기준서 AAA-I-000(Ver0.0), 기준서 AAA-S-000(Ver0.0)으로 운영되고 있음',
        documentStructure:
          '조직의 시스템 문서는 매뉴얼, 절차서, 프로세스, 지침서, 기준서 구조이며, 문서번호 및 버전정보는 매뉴얼 AAA-M-000(Ver0.0), 절차서 AAA-P-000(Ver0.0), 프로세스 AAA-P-000(Ver0.0), 기준서 AAA-I-000(Ver0.0), 기준서 AAA-S-000(Ver0.0)으로 운영되고 있음',
        difference: '심사계획서와의 차이 없음',
        doubleWorkplace:
          '복수사업장 해당없음. 또는 조직은 경기도 00시 00로 000 소재의 복수사업장을 운영하고 있으며 해당 사업장은 OOO, OOO, OOO 등 업무를 수행하고 있으며 00명의 종업원이 근무하고 있음. 사업장까지의 이동시간은 대략 00분 정도 소용예상. 본 심사 범위에 포함되므로 2단계 심사 실시함.',
        constructSite:
          '시공 및 설치현장 해당없음. 또는 경기도 OO시 OO로 000, 설치, 시공현장 운영중. 현장 담당자명은 OOO 과장. 현장의 품질, 환경, 안전보건경영시스템 운영은 표준의 요구사항 및 조직이 정한 요구사항에 적절하게 운영되고 있음. ',
        outSourcing:
          '외주처리 프로세스 없음. 또는 OOO공정 경기도 OOO시 소재 주)OOOOO로 외주처리하고 있음. ',
        exclusiveClause:
          '적용제외조항 없음. 또는 8.3항 설계 및 개발 적용제외. 조직은 제조 또는 판매 전문 기업으로 적용제외 타당하다고 판단됨.',
        previousAudit:
          '해당없음. 또는 이전 심사 부적합 사항 없음. 또는 이전 심사의 부적합 사항은 00건 권고사항, 00건 부적합 사항이 있었으며 이에 대한 시정조치는 심사일 현재 00건 완료되었음.',
        appliedLaw:
          '해당없음. 또는 폐기물관리법, 산업안전보건법, 중대재해처벌법, 대기환경보전법, 수질 및 수생태계보전에 관한법률, 하수도법, 수도법, 먹는물 관리법, 토양환경보전법, 소음.진동관리법, 유해화학물질관리법 등',
        logoUsage:
          '인증마크 및 인증기관 로고 사용 해당없음. 또는 조직은 조직의 홈페이지 및 명함, 외부포장재 등에 인증마크와 함께 인증을 취득하였음을 표시하는 문구를 사용하고 있음. 인증마크사용 가이드에 적합함.'
      },

      s2Change: {
        companyName:
          '변경사항 없음. 또는 주)OOOO으로 상호변경. 사업자등록증 확인완료',
        companyAddress:
          '변경사항 없음. 또는 서울특별시 OO구 OO로 000 -> 경기도 OO시 OO구 000로 000 주소변경됨. 사업자등록증 확인완료',
        companyCeo:
          '변경사항 없음. 또는 대표이사 OOO로 변경됨. 사업자등록증 확인완료',
        companyEmployee: '00명  --> 00명으로 변경.',
        scope:
          '변경사항 없음. 또는 변경 인증범위에 대해 현장 확인한 결과 인증범위 변경 가능함. 인증범위 변경에 따른 인증서 재발행 필요함.',
        concernedLaw: '관련법령 변경사항 없음. 또는 OOOO법 추가 적용 받게 됨',
        mgtSystem:
          '매뉴얼 및 프로세스 등 경영시스템 문서 개정 사항없음. 또는 OOOO의 변경/개정에 따라 경영시스템문서 일부 개정(AAA-P-000) 되었음.',
        majorProcess: '주요공정 변경사항 없음.',
        etc: '해당없음.'
      },

      s2AuditCheckpoint: {
        orgStatus:
          '조직은 OOOOOOO를 활용하여 조직의 능력에 영향을 주는 외부 및 내부 이슈를 정하고 있으며 OOOO 에 문서화된 정보로 보유하고 있음. 또한 00의 주기로 모니터링하고 있음. (AAA-PF-000-00 양식명) ',
        orgStatusSelect: 'A',
        needs:
          '조직의 능력에 영향을 주는 품질경영시스템에 관련한 이해관계자를 정의하고 그들의 요구사항을 OOOOO에 문서화 하고 있음(AAA-PF-000-00양식). 또한, 00의 주기로 모니터링하고 있음.(AAA-PF-000-00 양식명) ',
        needsSelect: 'A',
        employeeNeeds:
          '조직은 안전보건경영시스템과 관련있는 근로자 및 이해관계자와 그들의 요구사항을 정하고 있음.(AAA-PF-000-00 양식명)',
        employeeNeedsSelect: 'A',
        appliedScope:
          '조직의 내외부이슈 및 이해관게자의 요구사항, 제품 및 서비스를 고려하여 전체 요구사항이 적용가능함을 문서화된 정보로 유지하고 있음 (AAA-PF-000). 또는 8.3항의 적용제외에 대한 사항 및 그 정당성에 대해 문서화된 정보로 유지하고 있음.(AAA-PF-00-00) ',
        appliedScopeSelect: 'A',
        qmsProcess:
          '조직은 품질경영시스템의 요구사항에 따른 프로세스를 수립, 실행, 유지하고 있으며 프로세스간 상호 작용을 포함하고 있음.(AAA-PF-000-00)',
        qmsProcessSelect: 'A',
        eomSystem:
          '조직은 환경성과/안전보건성과를 달성하기 위해 환경, 안전보건경영시스템 표준의 요구사항에 따라 프로세스를 수립, 실행, 유지하고 있으며 프로세스간 상호 작용을 포함하고 있음.(AAA-PF-000-00)',
        eomSystemSelect: 'A',
        leadership:
          '조직의 최고경영자는 품질, 환경, 안전보건경영시스템의 효과적인 수행을 위해 필요한 자원, 의사소통, 적극적 참여 등을 적극 지원하고 모니터링하고 있음(Q). 또한 고객중시 의지를 포함한 고객만족 증진의지 등을 경영방침 등에 반영하여 이해관계자와 의사소통하고 있음.(Q) 또는 안전하고 건강한 작업장 조성을 위한 인원 및 예산을 적극적으로 반영하여 지원하고 있음(OHS).',
        leadershipSelect: 'A',
        policy:
          '최고경영자는 조직의 전략적 방항을 설정함으로써 품질,환경,안전보건 목표수립의 치짐을 제공하고 있으며, 적극적인 실행의지를 표명하고 있음.',
        policySelect: 'A',
        role: '최고경영자는 조직도 또는 업무분장표를 통해 책임과 권한을 조직내에 부여하고 있으며, 전사에 공지하여 의사소통하고 있음.',
        roleSelect: 'A',
        employeeParticipation:
          '조직은 안전보건경영시스템의 효과적인 실행을 위한 근로자와의 협의와 참여를 위해 산업안전보건위원회, 노사협의회 제도를 실시하고 있으며, 시행지침서(AAA-I-000)에 따라 실시주기, 시간, 방법 등을 정하고 있음. 표준의 요구사항에 정의된 협의와 참여(5.4항)에 기준하여 프로세스(절차서)가 수립되어 있으며 실행되고 있음.',
        employeeParticipationSelect: 'A',
        riskHandling:
          'QMS: 조직의 품질리스크는 OOOOO로 인한 OOOOO, 등이며 이를 다루기 위한 조치는 OOOOO에 대해 OOOO함으로써 리스크를 제거 또는 발생가능성을 현저히 낮출 수 있도록 조치하는 것임. EMS: 조직은 환경측면 규명을 위한 환경영향평가를 수행하고 있으며 이를 통해 중대한 환경측면을 규명하고 절감개선대책을 수립, 실행, 관리하고 있음. 환경영향평가는 환경영향평가절차서(AAA-P-000)에 따르며 실행에 대한 상세한 절차를 문서화 화고 있음. 환경영향평가보고서(AAA-PF-000-00)확인. OHSMS: 조직은 위험요인파악 및 평가를 위해 위험성평가절차서(AAA-P-000)에 따라 위험성평가를 실시하고 있으며 파악된 위험요인에 대한 평가 후 주요한 위험요인의 제거 또는 감소 조치를 시행하고 있음. 위험성평가보고서(AAA=PF-000-00)확인. 시공, 설치현장의 품질, 환경, 안전보건 리스크 관리가 체계적으로 시행되고 있음.',
        riskHandlingSelect: 'A',
        objectPlan:
          '조직의 품질, 환경, 안전보건목표는 OOOOOOOO, OOOOOO, OOOOOOO등 총 00개로 정의하고 있음.(AAA-PF-000-00 중점추진계획서). 목표는 측정가능하며, 달성대상, 필요자원, 책임자, 완료시기, 평가방법 등을 반영하고 있으며, 매월 모니터링되고 있음.(AAA-PF-000-00 중점추진계획실적보고서)',
        objectPlanSelect: 'A',
        changePlan:
          '경영시스템의 변경이 필요한 경우 OOOOO프로세스(AAA-P-000)에 따라 실시되고 있으며 필요한 경우 책임과 권한의 재부여가 이루어지고 있음.',
        changePlanSelect: 'A',
        reSource:
          '조직의 품질, 환경, 안전보건 경영시스템의 효과적인 운영을 위해 적절한 인원, 기반구조, 및 근무환경이 제공되어 지고 있음.(와이파이, 컴퓨터, 근무환경 등 확인). 제품의 검사가 필요한 경우 측정 및 모니터링 자원은 주기적 검교정을 통해 측정의 적합성을 보장하고 있음. 검교정 결과는 식별가능하며 별도의 보관공간에 보관하고 있음. ',
        reSourceSelect: 'A',
        capability:
          '조직은 경영시스템 성과에 중요한 영향을 미치는 인원을 정하고 있으며( 검사원, 운전자, 안전보건담당자, 내부심사자 등), 인원의 적격성 기준을 정하고 적격성에 필요한 역량이 있음을 OOOOOOOO(AAA-PF-000-00)를 통해 보장하고 있으며 문서화된 정보로 유지하고 있음.   ',
        capabilitySelect: 'A',
        recognition:
          '조직의 인원들은 품질, 환경, 안전보건 방침, 품질, 환경, 안전보건 목표 및 시스템 성과 등에 대해 인식하고 있음. 근로자 인터뷰를 통해 확인함.',
        recognitionSelect: 'A',
        communication:
          '조직은 OOOOO프로세스(절차서)(AAA-P-00)를 통해 의사소통의 대상과 방법 및 담당부서를 정하고 있음.',
        communicationSelect: 'A',
        document:
          '조직의 경영시스템은 표준의 요구사항 및 조직의 매뉴얼 및 프로세스에서 요구하는 문서화된 정보를 보유하고 있음. 문서의 작성 및 갱신 시 식별가능하도록 관리하고 있으며 검토 및 승인되고 있음. 문서는 사무실 문서보관함에 보관되어 있으며, OOOO프로세스에 따른 보존연한이 경과한 문서는 주기적으로 폐기하고 있음.',
        documentSelect: 'A',
        operationPlan:
          '조직은 조직이 제공하는 제품 및 서비스의 원활한 제공을 위한 요구사항을 결정하고 그에 따른 프로세스를 수립하고 있으며, 제품 및 서비스이 합격판정 기준을 문서화 하고 있음. 또한 프로세스의 적절한 실행을 보장하기 위해 프로세스별 산출물을 정의하고 문서화된 실행증거를 보유하고 있음. EMS) 조직의 제품 서비스가 설계단계에서부터 환경요구사항을 반영하도록 문서화 하고 있으며, 제품 및 서비스의 운송 및 사용, 폐기 시 잠재적 환경측면에 대한 정보를 제품설명서에 기재하고 있음. OHSMS) 조직이 식별하고 관리하는 위협요인의 제거 및 리스크 감소를 위해 OOOO프로세스(AAA-P-000)를 수립, 실행하고 있으며 위험요인의 제거, 대체, 기술적 관리, 행정적 관리, 개인보호구 착용등의 관리단계에 대해 문서화 하고 있음.',
        operationPlanSelect: 'A',
        productServiceRequirement:
          '조직은 조직이 제공하는 제품 또는 서비스에 대한 정보를 제품설명서 및 사양서 또는 홈페이지에 에 상세히 기록하여 고객에게 제공하고 있음. 조직이 제공하는 제품 또는 서비스는 해당 요구사항을 충족함을 보장하는 조치는 검토 및 승인된 문서화된 정보(AAA-PF-000 출하승인서)로 보유하고 있음. 고객의 불만 또는 피드백을 입수하기 위해 정기적인 고객만족도 조사를 시행하거나 홈페이지를 통해 언제든지 고객불만 또는 피드백을 표시할 수 있도록 하고 있음. 또한 관련 법령이나 규제등의 변경 시 조직이 제공하는 제품 또는 서비스가 그 변경사항을 만족하고 있음을 게시판 또는 공고 또는 고객에게 개별적으로 통지하고 있음.',
        productServiceRequirementSelect: 'A',
        emergency:
          '조직은 환경사고(안전보건사고) 발생 시 대응을 위한 계획을 수립(OOOO프로세스 AAA-P-000)하고 있으며, 환경(안전보건)사고 발생 시 조직의 대응방안을 문서화 하고 있음. 비상사태 발생의 잠재적 시나리오를 구성하고 주기적으로 대응훈련을 실시하고 있으며 실시결과를 분석하여 보완사항을 지속적으로 문서화된 정보에 반영하고 있음. 대응훈련 프로세스 및 결과는 문서화된 정보로 유지 및 보유하고 있음.(AAA-PF-00 OOOOO결과보고서)',
        emergencySelect: 'A',
        design:
          '조직은 제품 및 서비스의 설계와 개발 이후의 공급을 보장하기 위해 OOOO프로세스(AAA-P-000)를 수립, 실행하고 있으며, 설계 및 개발의 결과를 문서화하여 보유하고 있음. 표준이 요구하는 설계와 개발 기획, 입력, 관리, 출력, 변경에 관한 문서화된 실적정보를 보유하고 있음.(00000프로젝트카드(AAA-PF-000-00))',
        designSelect: 'A',
        purchase:
          '조직은 외부에서 제공되는 프로세스, 제품, 서비스가 요구사항에 적합함을 보장하기 위해 OOOO프로세스(AAA-P-000)를 수립, 실행하고 있음. 조직은 외부공급자의 능력을 보장하기 위해 외부공급자의 선정, 평가, 모니터링 하고 있으며 그 결과를 문서화하고 있음(AAA-PF-000-00 OOOOO평가보고서). 평가항목은 제품 또는 서비스 품질, 인원역량, 협력도, 장비 등을 포함하고 있음.',
        purchaseSelect: 'A',
        productService:
          '조직은 제품 및 서비스의 관리를 위해 적정한 설비 및 모니터링, 측정자원(장비)을 보유하고 있으며, 이를 관리하고 있음. 인적오류 예방을 위해 OOO표준서(AAA-PF-000-00)를 비치하고 있으며 부적합 출력은 별도의 식별가능한 공간 또는 라벨링을 통해 식별성을 보장하고 있음. 시리얼넘버 또는 LOT번호를 활용하여 추적가능성을 보장하고 있음. 조직이 사용하고 있는 고객재산은 0000관리프로세스(AAA-P-000)을 통해 관리하고 있으며 모든 관리과정은 문서화된 정보로 보유하고 있음.(AAA-PF-00-00 OOO상태기록관리표). 제품의 제공 전 보존 및 제공(인도, 불출)이후 발생하는 사항은 OOOO프로세스(AAA-P-00)에 따라 실행되고 있음. 제품 또는서비스 제공에서 변경이 발생할 경우 OOOO프로세스(AAA-P-00)에 따라 조치하고 있으며 조치사항은 문서화되어 보유하고 있음.(AAA-PF-00-00 OOOOOO표).',
        productServiceSelect: 'A',
        productRelease:
          '조직은 제품 및 서비스가 표준 및 조직의 요구사항을 만족함을 보장하기 위해 제품 및 서비스 불출의 단계에 대한 증빙을 보유하고 있음. OOOO성적서(AAA-PF-000-00), OOOO출고(제공)승인서(AAA-PF-000-00) 등 확인',
        productReleaseSelect: 'A',
        output:
          '조직은 의도하지 않은 부적합 인도가 발생한 경우 OOOO프로세스(AAA-P-00) 및 OOOO프로세스(AAA-P-000)에 따라 조치하고 있음. 시정조치요구서(AAA-PF-00-00), 시정조치결과서(AAA-PF-00-00), 부적합대책서(AAA-PF-00-00) 등 확인',
        outputSelect: 'A',
        monitoring:
          '조직은 품질, 환경, 안전보건경영시스템의 성과를 평가하고 분석하기위해 OOOO프로세스(AAA-P-000)를 수립 및 운영하고 있음. 평가는 00월 주기로 실시하고 있으며, 평가 항목에는 고객만족(AAA-P-000 고객만족프로세스) 정도가 포함되어 있음. OOOO추진실적보고서(AAA-PF-000-00), 고객만족도설문결과보고서(AAA-PF-000-00) 확인',
        monitoringSelect: 'A',
        internal_audit:
          '조직은 OOOO프로세스(AAA-P-00)를 수립 및 실행하고 있음. 내부심사는 1년에 1회(00월) 실시하고 있으며, 조직이 정한 주기, 방법, 절차에 따라 계획되고 실행되었음.(0000년00월00일). 심사팀은 00명으로 구성되어 있으며 적격성을 보장하는 증빙의 확인이 가능함. 심사 발견사항들은 시정조치 완료되었음. OOOO계획서(AAA-PF-000-00), OOOO보고서(AAA-PF-000-00) 확인',
        internal_auditSelect: 'A',
        management_review:
          '조직은 OOOO프로세스(AAA-P-00)를 수립 및 실행하고 있음. 경영검토는 1년에 1회(00월) 실시하고 있으며,  조직이 정한 주기, 방법, 절차에 따라 계획되고 실행되었음.(0000년00월00일). 경영검토는 최고경영진 및 OO급 이상의 관리자들이 참석하고 있으며, 검토항목은 요구사항(9.3.2, 9.3.3항)에서 정한 입력 및 출력사항을 반영하고 있음. OOOOO보고서(AAA-PF-000-00) 확인',
        management_reviewSelect: 'A',
        general:
          '조직은 고객요구사항을 충족시키고 고객만족을 증진시키기 위해 지속적인 제품 및 서비스의 개선활동을 수행하고 있으며 부적합 및 시정조치대상에 대한 적극적인 시정조치를 실시하고 있음. ',
        generalSelect: 'A',
        nonconformity:
          '조직은 불만족에서 야기된 모든 부적합의 처리를 위해 OOOO프로세스(AAA-P-000)를 수립 및 실행하고 있음. 부적합에 대한 시정조치는 0000년 심사일 현재까지 총 00건이 있었으며, 시정조치완료율은 00%임. 부적합에 대한 시정조치는 근본원인의 파악 및 원인제거를 포함하고 있으며, 시정조치의 효과성 검토가 이루어짐. 모든 조치는 문서화된 증빙으로 확인이 가능함. OOOO보고서(AAA-PF-000-00) 확인',
        nonconformitySelect: 'A',
        continuousImprove:
          '품질, 환경, 안전보건경영시스템 성과의 개선을 위해 조직은 이행실적의 분석을 통한 개선기회 발견 및 경영검토 출력사항을 검토하여 개선활동을 수립하고 있음. 조직은 개선활동의 효과성을 검토하고 있음. ',
        continuousImproveSelect: 'A'
      },
      s2AuditCycle: {
        orgStatusS1: 'O',
        orgStatusS2: 'O',
        orgStatusRe: 'O',
        needsS1: 'O',
        needsS2: 'O',
        needsRe: 'O',
        employeeNeedsS1: 'O',
        employeeNeedsS2: 'O',
        employeeNeedsRe: 'O',
        appliedScopeS1: 'O',
        appliedScopeS2: 'O',
        appliedScopeRe: 'O',
        qmsProcessS1: 'O',
        qmsProcessS2: 'O',
        qmsProcessRe: 'O',
        eomSystemS1: 'O',
        eomSystemS2: 'O',
        eomSystemRe: 'O',
        leadershipS1: 'O',
        leadershipS2: 'O',
        leadershipRe: 'O',
        policyS1: 'O',
        policyS2: 'O',
        policyRe: 'O',
        roleS1: 'O',
        roleS2: 'O',
        roleRe: 'O',
        employeeParticipationS1: 'O',
        employeeParticipationS2: 'O',
        employeeParticipationRe: 'O',
        riskHandlingS1: 'O',
        riskHandlingS2: 'O',
        riskHandlingRe: 'O',
        objectPlanS1: 'O',
        objectPlanS2: 'O',
        objectPlanRe: 'O',
        changePlanS1: 'O',
        changePlanS2: 'O',
        changePlanRe: 'O',
        reSourceS1: 'O',
        reSourceS2: 'O',
        reSourceRe: 'O',
        capabilityS1: 'O',
        capabilityS2: 'O',
        capabilityRe: 'O',
        recognitionS1: 'O',
        recognitionS2: 'O',
        recognitionRe: 'O',
        communicationS1: 'O',
        communicationS2: 'O',
        communicationRe: 'O',
        documentS1: 'O',
        documentS2: 'O',
        documentRe: 'O',
        operationPlanS1: 'O',
        operationPlanS2: 'O',
        operationPlanRe: 'O',
        emergencyS1: 'O',
        emergencyS2: 'O',
        emergencyRe: 'O',
        designS1: 'O',
        designS2: 'O',
        designRe: 'O',
        purchaseS1: 'O',
        purchaseS2: 'O',
        purchaseRe: 'O',
        productServiceS1: 'O',
        productServiceS2: 'O',
        productServiceRe: 'O',
        productReleaseS1: 'O',
        productReleaseS2: 'O',
        productReleaseRe: 'O',
        outputS1: 'O',
        outputS2: 'O',
        outputRe: 'O',
        monitoringS1: 'O',
        monitoringS2: 'O',
        monitoringRe: 'O',
        internal_auditS1: 'O',
        internal_auditS2: 'O',
        internal_auditRe: 'O',
        management_reviewS1: 'O',
        management_reviewS2: 'O',
        management_reviewRe: 'O',
        generalS1: 'O',
        generalS2: 'O',
        generalRe: 'O',
        nonconformityS1: 'O',
        nonconformityS2: 'O',
        nonconformityRe: 'O',
        continuousImproveS1: 'O',
        continuousImproveS2: 'O',
        continuousImproveRe: 'O'
      },
      finalAuditSummary:
        'ISO9001요구사항, 조직에 적용되는 법규 및 준수사항 및 조직자체의 적용가능한 요구사항을 기준으로 심사가 진행되었으며 조직의 경영시스템 운영역량은 요구사항에 적합함. 다만, 전반적으로 조직의 경영시스템 수립은 체계적으로 수립되어 있으나 보다 적극적인 실행이 요구됨.  심사팀은 불확실성을 고려하여 업체와 심사결론을 합의하였으며 샘플링 심사가 고객의 경영시스템의 완전성을 보증하지 않음에 대해 안내하였습니다. 심사결과 부적합 00건, 권고사항 00건 발견되었음. 부적합에 대해서는 30일 내로 시정조치를 완료하여 결과서를 심사원에게 회신해주시기 바랍니다.',
      auditPurpose: '인증등록유지추천',
      participants: [
        {
          name: '',
          position: ''
        }
      ]
    }
  },
  created() {
    // this.id = this.$route.query.customer_id
    // console.log('넘어온 id : ', this.id)
    this.id = this.$route.query.id
    console.log('넘어온 audit_no :', this.id)
  },
  mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }

    this.getList()
    // this.crInfo()
    this.getAuditDayDiff()
    this.getS2ReportInfo()
  },
  unmounted() {},

  methods: {
    printApplication() {
      window.print()
    },
    async getS2ReportInfo() {
      const loader = this.$loading.show({ canCancel: false })
      const result = await this.$get(`/api/report/s2/${this.id}`)

      this.s2ReportInfo = result
      console.log(this.s2ReportInfo)
      this.s2ReportInfo.participants = JSON.parse(
        this.s2ReportInfo.participants
      )

      loader.hide()
    },

    async getAuditDayDiff() {
      const auditDayDiff = await this.$get(
        `/api/report/s2/audit_day/${this.id}`
      )
      console.log(auditDayDiff.diff_Day + 1)
      this.s2AuditDayDiff = auditDayDiff.diff_Day + 1
    },
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get(`/api/customer/cert/list/detail/${this.id}`)
      console.log(this.list)

      loader.hide()
    },
    async getCustomer() {
      // console.log(this.id)
      this.customer = await this.$get(
        `http://localhost:3000/api/customer/${this.id}`
      )
      console.log(this.customer)
    },
    async crInfo() {
      // console.log(this.id)
      const cr = await this.$get(
        `http://localhost:3000/api/customer/cr/detail/${this.id}`
      )
      this.dBcrInfo = cr
      // console.log(this.dBcrInfo)
      // this.dBcrInfo.cr_created_date = Intl.DateTimeFormat('fr-CA').format(
      //   new Date(this.dBcrInfo.cr_created_date)
      // )
      // this.dBcrInfo.audit_trans_start = Intl.DateTimeFormat('fr-CA').format(
      //   new Date(this.dBcrInfo.audit_trans_start)
      // )
      // this.dBcrInfo.audit_trans_end = Intl.DateTimeFormat('fr-CA').format(
      //   new Date(this.dBcrInfo.audit_trans_end)
      // )
    },
    showRequirement() {
      window.open()
    },
    addRow() {
      this.rows.push({
        start_h: '',
        start_m: '',
        end_h: '',
        end_m: '',
        leader: '',
        auditor: ''
      })
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
      //   return this.$swal('자명/직위를 입력하세요.')
      // }
      // if (this.customer.contact_phone === '') {
      //   return this.$swal('자 연락처를 입력하세요.')
      // }
      // if (this.customer.contact_email === '') {
      //   return this.$swal('자 이메일을 입력하세요.')
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
        title: '2단계 보고서를 생성 하시겠습니까?',
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

          const r = await this.$post('/api/report/s2', {
            param: {
              audit_no: this.id,
              customer_id: this.list.customer_id,
              rows: JSON.stringify(this.rows),
              documentStructure: this.s2AuditCheckpoint.documentStructure,
              difference: this.s2AuditCheckpoint.difference,
              doubleWorkplace: this.s2AuditCheckpoint.doubleWorkplace,
              constructSite: this.s2AuditCheckpoint.constructSite,
              outSourcing: this.s2AuditCheckpoint.outSourcing,
              exclusiveClause: this.s2AuditCheckpoint.exclusiveClause,
              previousAudit: this.s2AuditCheckpoint.previousAudit,
              appliedLaw: this.s2AuditCheckpoint.appliedLaw,
              logoUsage: this.s2AuditCheckpoint.logoUsage,
              companyName: this.s2Change.companyName,
              companyAddress: this.s2Change.companyAddress,
              companyCeo: this.s2Change.companyCeo,
              companyEmployee: this.s2Change.companyEmployee,
              scope: this.s2Change.scope,
              concernedLaw: this.s2Change.concernedLaw,
              mgtSystem: this.s2Change.mgtSystem,
              majorProcess: this.s2Change.majorProcess,
              etc: this.s2Change.etc,
              orgStatus: this.s2AuditCheckpoint.orgStatus,
              orgStatusSelect: this.s2AuditCheckpoint.orgStatusSelect,
              needs: this.s2AuditCheckpoint.needs,
              needsSelect: this.s2AuditCheckpoint.needsSelect,
              employeeNeeds: this.s2AuditCheckpoint.employeeNeeds,
              employeeNeedsSelect: this.s2AuditCheckpoint.employeeNeedsSelect,
              appliedScope: this.s2AuditCheckpoint.appliedScope,
              appliedScopeSelect: this.s2AuditCheckpoint.appliedScopeSelect,
              qmsProcess: this.s2AuditCheckpoint.qmsProcess,
              qmsProcessSelect: this.s2AuditCheckpoint.qmsProcessSelect,
              eomSystem: this.s2AuditCheckpoint.eomSystem,
              eomSystemSelect: this.s2AuditCheckpoint.eomSystemSelect,
              leadership: this.s2AuditCheckpoint.leadership,
              leadershipSelect: this.s2AuditCheckpoint.leadershipSelect,
              policy: this.s2AuditCheckpoint.policy,
              policySelect: this.s2AuditCheckpoint.policySelect,
              role: this.s2AuditCheckpoint.role,
              roleSelect: this.s2AuditCheckpoint.roleSelect,
              employeeParticipation:
                this.s2AuditCheckpoint.employeeParticipation,
              employeeParticipationSelect:
                this.s2AuditCheckpoint.employeeParticipationSelect,
              riskHandling: this.s2AuditCheckpoint.riskHandling,
              riskHandlingSelect: this.s2AuditCheckpoint.riskHandlingSelect,
              objectPlan: this.s2AuditCheckpoint.objectPlan,
              objectPlanSelect: this.s2AuditCheckpoint.objectPlanSelect,
              changePlan: this.s2AuditCheckpoint.changePlan,
              changePlanSelect: this.s2AuditCheckpoint.changePlanSelect,
              reSource: this.s2AuditCheckpoint.reSource,
              reSourceSelect: this.s2AuditCheckpoint.reSourceSelect,
              capability: this.s2AuditCheckpoint.capability,
              capabilitySelect: this.s2AuditCheckpoint.capabilitySelect,
              recognition: this.s2AuditCheckpoint.recognition,
              recognitionSelect: this.s2AuditCheckpoint.recognitionSelect,
              communication: this.s2AuditCheckpoint.communication,
              communicationSelect: this.s2AuditCheckpoint.communicationSelect,
              document: this.s2AuditCheckpoint.document,
              documentSelect: this.s2AuditCheckpoint.documentSelect,
              operationPlan: this.s2AuditCheckpoint.operationPlan,
              operationPlanSelect: this.s2AuditCheckpoint.operationPlanSelect,
              productServiceRequirement:
                this.s2AuditCheckpoint.productServiceRequirement,
              productServiceRequirementSelect:
                this.s2AuditCheckpoint.productServiceRequirementSelect,
              emergency: this.s2AuditCheckpoint.emergency,
              emergencySelect: this.s2AuditCheckpoint.emergencySelect,
              design: this.s2AuditCheckpoint.design,
              designSelect: this.s2AuditCheckpoint.designSelect,
              purchase: this.s2AuditCheckpoint.purchase,
              purchaseSelect: this.s2AuditCheckpoint.purchaseSelect,
              productService: this.s2AuditCheckpoint.productService,
              productServiceSelect: this.s2AuditCheckpoint.productServiceSelect,
              productRelease: this.s2AuditCheckpoint.productRelease,
              productReleaseSelect: this.s2AuditCheckpoint.productReleaseSelect,
              output: this.s2AuditCheckpoint.output,
              outputSelect: this.s2AuditCheckpoint.outputSelect,
              monitoring: this.s2AuditCheckpoint.monitoring,
              monitoringSelect: this.s2AuditCheckpoint.monitoringSelect,
              internal_audit: this.s2AuditCheckpoint.internal_audit,
              internal_auditSelect: this.s2AuditCheckpoint.internal_auditSelect,
              management_review: this.s2AuditCheckpoint.management_review,
              management_reviewSelect:
                this.s2AuditCheckpoint.management_reviewSelect,
              general: this.s2AuditCheckpoint.general,
              generalSelect: this.s2AuditCheckpoint.generalSelect,
              nonconformity: this.s2AuditCheckpoint.nonconformity,
              nonconformitySelect: this.s2AuditCheckpoint.nonconformitySelect,
              continuousImprove: this.s2AuditCheckpoint.continuousImprove,
              continuousImproveSelect:
                this.s2AuditCheckpoint.continuousImproveSelect,
              orgStatusS1: this.s2AuditCycle.orgStatusS1,
              orgStatusS2: this.s2AuditCycle.orgStatusS2,
              orgStatusRe: this.s2AuditCycle.orgStatusRe,
              needsS1: this.s2AuditCycle.needsS1,
              needsS2: this.s2AuditCycle.needsS2,
              needsRe: this.s2AuditCycle.needsRe,
              employeeNeedsS1: this.s2AuditCycle.employeeNeedsS1,
              employeeNeedsS2: this.s2AuditCycle.employeeNeedsS2,
              employeeNeedsRe: this.s2AuditCycle.employeeNeedsRe,
              appliedScopeS1: this.s2AuditCycle.appliedScopeS1,
              appliedScopeS2: this.s2AuditCycle.appliedScopeS2,
              appliedScopeRe: this.s2AuditCycle.appliedScopeRe,
              qmsProcessS1: this.s2AuditCycle.qmsProcessS1,
              qmsProcessS2: this.s2AuditCycle.qmsProcessS2,
              qmsProcessRe: this.s2AuditCycle.qmsProcessRe,
              eomSystemS1: this.s2AuditCycle.eomSystemS1,
              eomSystemS2: this.s2AuditCycle.eomSystemS2,
              eomSystemRe: this.s2AuditCycle.eomSystemRe,
              leadershipS1: this.s2AuditCycle.leadershipS1,
              leadershipS2: this.s2AuditCycle.leadershipS2,
              leadershipRe: this.s2AuditCycle.leadershipRe,
              policyS1: this.s2AuditCycle.policyS1,
              policyS2: this.s2AuditCycle.policyS2,
              policyRe: this.s2AuditCycle.policyRe,
              roleS1: this.s2AuditCycle.roleS1,
              roleS2: this.s2AuditCycle.roleS2,
              roleRe: this.s2AuditCycle.roleRe,
              employeeParticipationS1:
                this.s2AuditCycle.employeeParticipationS1,
              employeeParticipationS2:
                this.s2AuditCycle.employeeParticipationS2,
              employeeParticipationRe:
                this.s2AuditCycle.employeeParticipationRe,
              riskHandlingS1: this.s2AuditCycle.riskHandlingS1,
              riskHandlingS2: this.s2AuditCycle.riskHandlingS2,
              riskHandlingRe: this.s2AuditCycle.riskHandlingRe,
              objectPlanS1: this.s2AuditCycle.objectPlanS1,
              objectPlanS2: this.s2AuditCycle.objectPlanS2,
              objectPlanRe: this.s2AuditCycle.objectPlanRe,
              changePlanS1: this.s2AuditCycle.changePlanS1,
              changePlanS2: this.s2AuditCycle.changePlanS2,
              changePlanRe: this.s2AuditCycle.changePlanRe,
              reSourceS1: this.s2AuditCycle.reSourceS1,
              reSourceS2: this.s2AuditCycle.reSourceS2,
              reSourceRe: this.s2AuditCycle.reSourceRe,
              capabilityS1: this.s2AuditCycle.capabilityS1,
              capabilityS2: this.s2AuditCycle.capabilityS2,
              capabilityRe: this.s2AuditCycle.capabilityRe,
              recognitionS1: this.s2AuditCycle.recognitionS1,
              recognitionS2: this.s2AuditCycle.recognitionS2,
              recognitionRe: this.s2AuditCycle.recognitionRe,
              communicationS1: this.s2AuditCycle.communicationS1,
              communicationS2: this.s2AuditCycle.communicationS2,
              communicationRe: this.s2AuditCycle.communicationRe,
              documentS1: this.s2AuditCycle.documentS1,
              documentS2: this.s2AuditCycle.documentS2,
              documentRe: this.s2AuditCycle.documentRe,
              operationPlanS1: this.s2AuditCycle.operationPlanS1,
              operationPlanS2: this.s2AuditCycle.operationPlanS2,
              operationPlanRe: this.s2AuditCycle.operationPlanRe,
              emergencyS1: this.s2AuditCycle.emergencyS1,
              emergencyS2: this.s2AuditCycle.emergencyS2,
              emergencyRe: this.s2AuditCycle.emergencyRe,
              designS1: this.s2AuditCycle.designS1,
              designS2: this.s2AuditCycle.designS2,
              designRe: this.s2AuditCycle.designRe,
              purchaseS1: this.s2AuditCycle.purchaseS1,
              purchaseS2: this.s2AuditCycle.purchaseS2,
              purchaseRe: this.s2AuditCycle.purchaseRe,
              productServiceS1: this.s2AuditCycle.productServiceS1,
              productServiceS2: this.s2AuditCycle.productServiceS2,
              productServiceRe: this.s2AuditCycle.productServiceRe,
              productReleaseS1: this.s2AuditCycle.productReleaseS1,
              productReleaseS2: this.s2AuditCycle.productReleaseS2,
              productReleaseRe: this.s2AuditCycle.productReleaseRe,
              outputS1: this.s2AuditCycle.outputS1,
              outputS2: this.s2AuditCycle.outputS2,
              outputRe: this.s2AuditCycle.outputRe,
              monitoringS1: this.s2AuditCycle.monitoringS1,
              monitoringS2: this.s2AuditCycle.monitoringS2,
              monitoringRe: this.s2AuditCycle.monitoringRe,
              internal_auditS1: this.s2AuditCycle.internal_auditS1,
              internal_auditS2: this.s2AuditCycle.internal_auditS2,
              internal_auditRe: this.s2AuditCycle.internal_auditRe,
              management_reviewS1: this.s2AuditCycle.management_reviewS1,
              management_reviewS2: this.s2AuditCycle.management_reviewS2,
              management_reviewRe: this.s2AuditCycle.management_reviewRe,
              generalS1: this.s2AuditCycle.generalS1,
              generalS2: this.s2AuditCycle.generalS2,
              generalRe: this.s2AuditCycle.generalRe,
              nonconformityS1: this.s2AuditCycle.nonconformityS1,
              nonconformityS2: this.s2AuditCycle.nonconformityS2,
              nonconformityRe: this.s2AuditCycle.nonconformityRe,
              continuousImproveS1: this.s2AuditCycle.continuousImproveS1,
              continuousImproveS2: this.s2AuditCycle.continuousImproveS2,
              continuousImproveRe: this.s2AuditCycle.continuousImproveRe,
              finalAuditSummary: this.finalAuditSummary,
              auditPurpose: this.auditPurpose,
              participants: JSON.stringify(this.participants),
              report_s2_no: 's24' + this.id,
              auditor_email: this.$store.state.user.userInfo.email,
              companion: this.companion
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('2단계 심사보고서가 저장되었습니다.')
            this.$router.push({
              path: '/customer/cert/detail',
              query: { audit_no: this.id }
            })
          }
        }
      })
    },
    goToList() {
      this.$router.push({
        path: '/report/list'
        // query: { audit_no: this.id }
      })
    },
    // goToHomepage() {
    //   window.location.href = 'www.naver.com'
    // }
    goToChange() {
      console.log(this.id)
      this.$router.push({
        path: '/report/s2/change',
        query: { id: this.id }
      })
    }
  }
}
</script>
<style scoped>
/* textarea {
  font-size: 14px;
}
table {
  font-size: 14px;
} */
/* .container {
  background-image: url('@/assets/watermark_KAI.png');

} */
</style>
