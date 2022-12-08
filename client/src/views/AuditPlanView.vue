<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <p class="text-black-50 fst-italic">PF960-02(Rev.1)</p>
      <p class="text-black-50 fst-italic">Audit Plan</p>
    </div>
    <div class="mb-5 text-center">
      <h2 class="fw-bold">심 사 계 획 서</h2>
      <span></span>
      <hr />
    </div>

    <h5 class="fw-bold mb-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      I. 인증고객정보
    </h5>
    <!-- table -->
    <div>심사일자:</div>
    <table class="table text-center table-bordered">
      <thead>
        <tr>
          <th style="width: 40%" colspan="4">시간</th>
          <th style="width: 25%" colspan="3">심사원별심사대상</th>
        </tr>
        <tr>
          <th style="width: 20%" colspan="2">시작시간</th>
          <th style="width: 20%" colspan="2">종료시간</th>
          <th style="width: 25%">팀장</th>
          <th style="width: 25%">팀원</th>
          <th style="width: 10%">기능</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td style="width: 10%">
            <select
              class="form-select"
              style="width: 100%; border: 0"
              name=""
              id=""
              v-model="row.start_h"
            >
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
            </select>
          </td>
          <td style="width: 10%">
            <select
              class="form-select"
              style="width: 100%; border: 0"
              name=""
              id=""
              v-model="row.start_m"
            >
              <option value="00">00</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </td>
          <td style="width: 10%">
            <select
              class="form-select"
              style="width: 100%; border: 0"
              name=""
              id=""
              v-model="row.end_h"
            >
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
            </select>
          </td>
          <td style="width: 10%">
            <select
              class="form-select"
              style="width: 100%; border: 0"
              name=""
              id=""
              v-model="row.end_m"
            >
              <option value="00">00</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </td>
          <td style="width: 25%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%"
              v-model="row.leader"
            />
          </td>
          <td style="width: 25%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              style="width: 100%"
              v-model="row.auditor"
            />
          </td>
          <td class="d-flex" style="width: 100%">
            <button class="btn btn-primary" @click="addRow">
              <i class="fa-regular fa-plus"></i></button
            ><button class="btn btn-primary ms-1" @click="removeRow">
              <i class="fa-solid fa-x"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 심사보고서 -->

    <!-- <div class="text-center mb-5">
      <h3 class="fw-bold">심 사 보 고 서</h3>
      <span>(2단계)</span>
    </div> -->
    <h5 class="fw-bold mt-5 mb-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      II. 심사기준
    </h5>

    <!-- <table class="table table-hover text-center">
      <thead>
        <tr>
          <th style="width: 20%">고객명</th>
          <td style="width: 25%">""""</td>
          <th style="width: 20%">심사번호</th>
          <td style="width: 25%">""</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 20%">사업장주소</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">대표자명</th>
          <td style="width: 25%">""""</td>
          <th style="width: 20%">사업자등록번호</th>
          <td style="width: 25%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">부서</th>
          <td style="width: 25%">""""</td>
          <th style="width: 20%">자명</th>
          <td style="width: 25%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">대표전화</th>
          <td style="width: 25%">""""</td>
          <th style="width: 20%">대표이메일</th>
          <td style="width: 25%">""</td>
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
          <td style="width: 25%">(서명)</td>
          <th style="width: 20%">고객대표</th>
          <td style="width: 25%">(서명)</td>
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
    </div> -->
    <!---->
    <!-- 1. 심사개요 -->
    <!--
    <h5>I. 심사개요</h5>
    <h6>1. 인증범위 확인</h6>

    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th style="width: 20%">고객명</th>
          <td style="width: 25%">""""</td>
          <th style="width: 20%">심사번호</th>
          <td style="width: 25%">""</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 20%">사업장주소</th>
          <td style="width: 80%" colspan="3">""""</td>
        </tr>
        <tr>
          <th style="width: 20%">대표자명</th>
          <td style="width: 25%">""""</td>
          <th style="width: 20%">사업자등록번호</th>
          <td style="width: 25%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">부서</th>
          <td style="width: 25%">""""</td>
          <th style="width: 20%">자명</th>
          <td style="width: 25%">""</td>
        </tr>
        <tr>
          <th style="width: 20%">대표전화</th>
          <td style="width: 25%">""""</td>
          <th style="width: 20%">대표이메일</th>
          <td style="width: 25%">""</td>
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
    </table>

    <h5 class="fw-bold mb-3">심사팀구성</h5>
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
          <td style="width: 20%">심사팀</td>
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
    -->
    <!-- II. 1단계심사 확인사항 -->
    <!-- <div class="mb-4">
      <h5 class="fw-bold mt-5">1단계심사 확인사항</h5>
      <span>
        ＊확인사항: 간략하게 기재하되, 인증기업의 사정을 충분히 파악할 수 있어야
        함. 부적합 사항이 발행한 경우 부적합표시 후 III.발견사항에 상세기재 </span
      ><br />
      <span>＊해당사항 없는 경우 "N/A" 또는 "해당없음" 표기</span>
    </div> -->
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      III. 심사정보
    </h5>
    <table class="table">
      <thead>
        <tr class="text-center">
          <th style="width: 40%">확인사항</th>
          <th style="width: 60%">확인내용</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <td style="width: 40%">
            시스템문서 관련정보 (문서구조, 문서번호, Rev 등)
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
          <td style="width: 40%">심사계획서와의 차이 (해당 시 기재)</td>
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
            복수사업장 여부 확인 (해당 시 주소 등 기재)
          </td>
          <td style="width: 60%" colspan="3">
            <textarea
              name=""
              class="form-control"
              id=""
              style="width: 100%; border: 0"
              rows="2"
              v-model="checkpoint.issue"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">
            시공 또는 설치 현장 확인 (해당 시 주소 및 자, 시스템운영현황 등을
            세부적으로 기재)
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
            외주처리 프로세스 확인 (해당 시 외주처리프로스 상세 기재)
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
          <td style="width: 40%">적용제외 조항 확인</td>
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
          <td style="width: 40%">
            이전 심사의 부적합 조치 여부 확인 (해당 시 조치결과 확인사항 기재)
          </td>
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
          <td style="width: 40%">조직에 적용되는 법규 및 준수사항</td>
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
          <td style="width: 40%">인증서 및 로고 사용상태 (최초심사 시 제외)</td>
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
          <td style="width: 40%">기타 확인사항</td>
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
            경영시스템방침이 문서화되어 있으며 목표와 일관성을 가지고 있는가?
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
            인증대상 경영시스템의 핵심목표는 무엇인가? <br /><span
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
            내부심사는 계획되고 실행되었는가? 심사일은 언제인가?
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
            경영검토의 실시되었는가? 실시일은 언제인가?
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
            고객의 시스템에 대한 이해수준은 어느정도인가?
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
            고객의 사업장 정보(사업장 수, 위치)가 신청정보와 동일한가?
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
            적용제외조항과 근거는 무엇인가? 그것을 수용할 것인가?
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
            조직의 인원은 몇 명이며 신청정보와 동일한가?
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

    <h5>
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      V. 의사소통정보
    </h5>
    <table class="table">
      <thead>
        <tr class="text-center">
          <th style="width: 40%">확인사항</th>
          <th style="width: 60%">확인내용</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <td style="width: 40%">회사명</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="checkpoint.biz_area"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">사업장주소</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="checkpoint.reliability"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">대표자 및 조직</td>
          <td style="width: 60%" colspan="3">
            <textarea
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              class="form-control"
              v-model="checkpoint.issue"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">인원</td>
          <td style="width: 60%" colspan="3">
            <textarea
              name=""
              class="form-control"
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="checkpoint.biz_status"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">인증범위</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="checkpoint.needs"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">관련법령</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="checkpoint.scope"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">경영시스템(매뉴얼 및 프로세스)</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="checkpoint.quality_risk"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">주요공정</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="checkpoint.env_risk"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td style="width: 40%">기타</td>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
              v-model="checkpoint.safety_risk"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 요구사항확인 -->
    <h5 class="mt-5">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      요구사항 확인
    </h5>
    <small
      >* 결과: "A(적합)", "N(부적합)", "R(권고)", "N/A(해당없음) 기재</small
    >
    <table class="table table-bordered" style="font-size: 14px">
      <thead>
        <tr class="text-center">
          <th style="width: 5%">조항</th>
          <th style="width: 25%">요구사항</th>
          <th style="width: 50%">확인사항</th>
          <th style="width: 20%">결과</th>
        </tr>
        25
      </thead>
      <tbody>
        <tr>
          <th style="width: 5%">4.1</th>
          <th style="width: 25%">조직과 조직상황의 이해</th>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <th style="width: 5%">4.2</th>
          <th style="width: 25%">이해관계자의 니즈와 기대 이해</th>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <th style="width: 5%">4.2</th>
          <td style="width: 25%">
            근로자 및 기타 이해관계자의 니즈와 기대 이해(O)
          </td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">4.3</td>
          <td style="width: 25%">
            경영시스템 적용범위 결정 (문서화된 범위가 조직의 상황에 적절하고
            관련성이 있는가?)
          </td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">4.4</td>
          <td style="width: 25%">품질경영시스템과 그 프로세스</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">4.4</td>
          <td style="width: 25%">환경/안전보건경영시스템(E,O)</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">5.1</td>
          <td style="width: 25%">
            리더십과 의지표명 (모니터링, 이해관계자, 위험과기회)
          </td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">5.2</td>
          <td style="width: 25%">방침</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">5.3</td>
          <td style="width: 25%">조직의 역할, 책임 및 권한</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">5.4</td>
          <td style="width: 25%">근로자의 협의 및 참여(O)</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">6.1</td>
          <td style="width: 25%">
            리스크와 기회를 다루는 조치 (품질,환경,안전보건리스크 및 기회,
            현장의 품질환경안전보건 운영규칙 등)
          </td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">6.2</td>
          <td style="width: 25%">목표와 목표 달성 기획</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">6.3</td>
          <td style="width: 25%">변경의 기획(Q)</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">7.1</td>
          <td style="width: 25%">자원</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">7.2</td>
          <td style="width: 25%">역량/적격성</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">7.3</td>
          <td style="width: 25%">인식</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">7.4</td>
          <td style="width: 25%">의사소통</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">7.5</td>
          <td style="width: 25%">문서화된 정보</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">8.1</td>
          <td style="width: 25%">운용기획 및 관리</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">8.2</td>
          <td style="width: 25%">비상사태 대비 및 대응(E,O)</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">8.3</td>
          <td style="width: 25%">제품 및 서비스의 설계와 개발</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">8.4</td>
          <td style="width: 25%">
            외부에서 제공되는 프로세스, 제품 및 서비스의 관리
          </td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">8.5</td>
          <td style="width: 25%">생산 및 서비스 제공</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">8.6</td>
          <td style="width: 25%">제품 및 서비스의 불출/출시</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">8.7</td>
          <td style="width: 25%">부적합 출력/산출물의 관리</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">9.1</td>
          <td style="width: 25%">모니터링, 측정, 분석 및 평가</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">9.2</td>
          <td style="width: 25%">
            내부심사(심사주기, 심사일, 심사팀, 부적합, 시정조치, 유효성, 문서화
            등)
          </td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">9.3</td>
          <td style="width: 25%">
            경영검토(실시일, 참석자, 입출력사항 적절성, 문서화 등)
          </td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">10.1</td>
          <td style="width: 25%">일반사항</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">10.2</td>
          <td style="width: 25%">사건(O), 부적합 및 시정조치</td>
          <td style="width: 50%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 20%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="width: 5%">10.3</td>
          <td style="width: 25%">지속적 개선</td>
          <td style="width: 55%">
            <textarea
              class="form-control"
              name=""
              id=""
              style="width: 100%; border: 0"
              rows="1"
            ></textarea>
          </td>
          <td style="width: 10%">
            <select
              name=""
              id=""
              class="form-select text-center"
              style="border: 0; font-size: 14px"
            >
              <option value="A" selected>A</option>
              <option value="R">R</option>
              <option value="N">N</option>
              <option value="N/A">N/A</option>
            </select>
            <!-- <input
              type="text"
              class="form-control"
              style="width: 100%; border: 0"
            /> -->
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        심사프로그램 사이클
      </h5>
      <span style="font-size: 14px">
        - 최초/갱신 심사 시 차기 갱신심사 시까지, 인증주기 전체에 대해 계획하고
        인증주기 내에 심사프로그램은 모든 경영시스템 요구사항을 다루도록
        작성.<br />
        - O표는 모든 심사시 필수 확인사항이며, 해당 주기 심사 시 심사한
        경영시스템 요구사항에 V, 적용제외 조항은 '-'로 표시.</span
      >
    </div>
    <!-- 심사프로그램 사이클 테이블 -->
    <table class="table mt-5" style="font-size: 14px">
      <thead>
        <tr class="text-center">
          <th style="width: 25%">심사단계</th>
          <th style="width: 8.75%">1단계</th>
          <th style="width: 8.75%">2단계</th>
          <th style="width: 8.75%">1차</th>
          <th style="width: 8.75%">2차</th>
          <th style="width: 8.75%">갱신</th>
          <th style="width: 8.75%">4차</th>
          <th style="width: 8.75%">5차</th>
          <th style="width: 8.75%">갱신</th>
        </tr>
      </thead>
      <tbody class="">
        <tr>
          <th>심사월</th>
          <td class="text-center">22/09</td>
          <td class="text-center">23/09</td>
          <td class="text-center">24/09</td>
          <td class="text-center">25/09</td>
          <td class="text-center">26/09</td>
          <td class="text-center">27/09</td>
          <td class="text-center">28/09</td>
          <td class="text-center">29/09</td>
        </tr>
        <tr>
          <th>4.1 조직과 조직상황의 이해</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>4.2 이해관계자의 니즈와 기대 이해</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>4.2 근로자 및 기타 이해관계자의 니즈와 기대 이해(O)</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>4.3 경영시스템 적용범위 결정</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>

        <tr>
          <th>4.4 품질경영시스템과 그 프로세스</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>4.4 환경/안전보건경영시스템(E,O)</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>5.1 리더십과 의지표명</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>5.2 방침</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>5.4 근로자의 협의 및 참여(O)</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>6.1 리스크와 기회를 다루는 조치</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>6.2 목표와 목표 달성 기획</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>6.3 변경의 기획(Q)</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>7.1 자원</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>7.2 역량/적격성</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>7.4 의사소통</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>7.5 문서화된 정보</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>8.1 운용기획 및 관리</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>8.2 비상사태 대비 및 대응(E,O)</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>8.3 제품 및 서비스의 설계와 개발</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>8.4 외부에서 제공되는 프로세스, 제품 및 서비스의 관리</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>8.5 생산 및 서비스 제공</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>8.6 제품 및 서비스의 불출/출시</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>8.7 부적합 출력/산출물의 관리</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>9.1 모니터링, 측정, 분석 및 평가</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>9.2 내부심사</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>9.3 경영검토</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>10.1 일반사항</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>10.2 사건(O), 부적합 및 시정조치</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
        </tr>
        <tr>
          <th>10.3 지속적 개선</th>
          <td class="text-center">v</td>
          <td class="text-center">v</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
          <td class="text-center">O</td>
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
    <textarea
      name=""
      id=""
      cols="30"
      rows="6"
      class="form-control"
      style="font-size: 14px"
    ></textarea>

    <!-- 심사목적 달성여부 -->
    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        심사목적의 달성 여부
      </h5>
    </div>
    <div>
      <div class="form-check mb-2" style="padding-left: 50px">
        <input
          class="form-check-input"
          type="radio"
          value=""
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          심사 결과, 경영시스템이 요구사항에 적합하며 심사목적을 달성하였으므로,
          인증 등록(또는 유지) 추천
        </label>
      </div>
      <div class="form-check mb-2" style="padding-left: 50px">
        <input
          class="form-check-input"
          type="radio"
          value=""
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          심사 결과, 경영시스템에 경부적합이 발견되어 시정조치 이후
          인증등록(또는 유지) 추천
        </label>
      </div>
      <div class="form-check mb-2" style="padding-left: 50px">
        <input
          class="form-check-input"
          type="radio"
          value=""
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3">
          심사 결과, 경영시스템에 1건의 중부적합이 발견되어 시정조치 이후
          확인심사 진행
        </label>
      </div>
      <div class="form-check mb-2" style="padding-left: 50px">
        <input
          class="form-check-input"
          type="radio"
          value=""
          id="flexRadioDefault4"
        />
        <label class="form-check-label" for="flexRadioDefault4">
          심사 결과, 경영시스템에 다수의 중부적합이 발견되어 시정조치 이후
          재심사 진행
        </label>
      </div>
    </div>

    <!-- 참석자 서명 -->
    <div class="mt-5">
      <h5>
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        참석자 서명
      </h5>
    </div>
    <p>심사일:</p>
    <table class="table table-bordered text-center">
      <thead>
        <th style="width: 10%">No</th>
        <th style="width: 20%">성명</th>
        <th style="width: 20%">부서</th>
        <th style="width: 25%">시작회의</th>
        <th style="width: 25%">종료회의</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <div class="text-end mt-5">
      <button type="button" class="btn btn-primary" @click="doSave">
        저장
      </button>
      <button type="button" class="btn btn-secondary ms-2">취소</button>
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
      rows: [
        {
          start_h: '',
          start_m: '',
          end_h: '',
          end_m: '',
          leader: '',
          auditor: ''
        }
      ],
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
      this.$router.push({ path: '/customer/list' })
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
</style>
