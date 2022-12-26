<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <p class="text-black-50 fst-italic">PF960-01(Rev.1)</p>
      <p class="text-black-50 fst-italic">Audit Report S1</p>
    </div>
    <div class="row">
      <div class="col">
        <img src="@/assets/20221213_KAI로고.png" style="width: 27%" alt="" />
      </div>
      <div class="col">
        <div class="text-center">
          <h1 class="fw-bold">심사보고서</h1>
          <h3>1단계 심사</h3>
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
      심사팀구성
    </h5>
    <table class="table text-center">
      <thead class="table-group-divider">
        <tr class="bg-light">
          <th style="width: 20%">구분</th>
          <th style="width: 20%">심사팀장</th>
          <th style="width: 20%">심사팀원</th>
          <th style="width: 20%">심사팀원</th>
          <th style="width: 20%">심사팀원</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr class="text-center">
          <th style="width: 20%">심사팀</th>
          <td style="width: 20%" class="text-center align-middle">
            <!-- <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="auditTeam.leader"
            /> -->
            {{ list.audit_leader }}
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="auditTeam.auditor1"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="auditTeam.auditor2"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="auditTeam.auditor3"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table text-center">
      <thead>
        <tr class="bg-light">
          <th style="width: 20%">구분</th>
          <th style="width: 20%">기술전문가</th>
          <th style="width: 20%">훈련심사원</th>
          <th style="width: 20%">훈련심사원</th>
          <th style="width: 20%">훈련심사원</th>
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
              v-model="companions.tech_expert"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="companions.trainee1"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="companions.trainee2"
            />
          </td>
          <td style="width: 20%">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
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
        함. 부적합 사항이 발행한 경우 부적합표시 후 아래 발견사항에 상세기재 </span
      ><br />
      <span>＊해당사항 없는 경우 "N/A" 또는 "해당없음" 표기</span>
    </div>

    <table class="table">
      <thead class="table-group-divider">
        <tr class="text-center bg-light">
          <th style="width: 40%">요구사항</th>
          <th style="width: 60%">확인사항</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 40%">
            1. 고객의 핵심 비즈니스 영역은 무엇인가?<br /><small>
              (심사에 참고가능한 전반적인 정보 기재)</small
            >
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.biz_area"
            ></textarea
            >({{ this.checkpoint.biz_area.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            2. 고객의 활동과 표준문서의 관련성은 적절한가? <br />
            문서의 구조와 종류 및 Ver은 무엇인가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.reliability"
            ></textarea
            >({{ this.checkpoint.reliability.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            3. 조직의 상황과 내부,외부 이슈를 정하고 이해하고 있는가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.issue"
            ></textarea
            >({{ this.checkpoint.issue.length }}/200)
          </td>
        </tr>
        <!-- <tr>
          <th style="width: 40%">
            4. 조직의 상황에 대해 어떤 문서와 기록을 확인할 수 있는가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              name=""
              class="form-control"
              id=""
              rows="2"
              v-model="checkpoint.biz_status"
            ></textarea>
          </td>
        </tr> -->
        <tr>
          <th style="width: 40%">
            4. 이해관계자의 니즈와 기대를 정의하고 이해하고 있는가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.needs"
            ></textarea
            >({{ this.checkpoint.needs.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            5. 인증범위는 무엇이며 조직의 활동에 적합한가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.scope"
            ></textarea
            >({{ this.checkpoint.scope.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">6. 고객의 품질리스크는 무엇인가?</th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.quality_risk"
            ></textarea
            >({{ this.checkpoint.quality_risk.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">7. 고객의 환경측면은 무엇인가?</th>
          <td style="width: 60%" colspan="3"></td>
        </tr>

        <tr>
          <td class="ps-5" style="width: 40%">1) (대기)환경측면</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="air_pollution1"
                value="해당없음"
                v-model="customer.air_pollution"
              />
              <label class="form-check-label" for="air_pollution1"
                >해당없음</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="air_pollution2"
                value="미립자"
                v-model="customer.air_pollution"
              />
              <label class="form-check-label" for="air_pollution2"
                >미립자</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="air_pollution3"
                value="가스"
                v-model="customer.air_pollution"
              />
              <label class="form-check-label" for="air_pollution3">가스</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="air_pollution4"
                value="소음"
                v-model="customer.air_pollution"
              />
              <label class="form-check-label" for="air_pollution4">소음</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="air_pollution5"
                value="악취"
                v-model="customer.air_pollution"
              />
              <label class="form-check-label" for="air_pollution5">악취</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="air_pollution6"
                value="기타"
                v-model="customer.air_pollution"
              />
              <label class="form-check-label" for="air_pollution6">기타</label>
            </div>

            <div class="row mb-3" v-show="customer.air_pollution == '기타'">
              <label class="col-sm-3 col-form-label">기타유형</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="대기 기타유형"
                  v-model.trim="customer.air_pollution_content"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="ps-5" style="width: 40%">2) (토양)환경측면</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="soil_pollution1"
                value="해당없음"
                v-model="customer.soil_pollution"
              />
              <label class="form-check-label" for="soil_pollution1"
                >해당없음</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="soil_pollution2"
                value="매립"
                v-model="customer.soil_pollution"
              />
              <label class="form-check-label" for="soil_pollution2">매립</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="soil_pollution3"
                value="토양침식"
                v-model="customer.soil_pollution"
              />
              <label class="form-check-label" for="soil_pollution3"
                >토양침식</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="soil_pollution4"
                value="고체폐기물"
                v-model="customer.soil_pollution"
              />
              <label class="form-check-label" for="soil_pollution4"
                >고체폐기물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="soil_pollution5"
                value="화학폐기물"
                v-model="customer.soil_pollution"
              />
              <label class="form-check-label" for="soil_pollution5"
                >화학폐기물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="soil_pollution6"
                value="기타"
                v-model="customer.soil_pollution"
              />
              <label class="form-check-label" for="soil_pollution6">기타</label>
            </div>
            <div class="row mb-3" v-show="customer.soil_pollution == '기타'">
              <label class="col-sm-3 col-form-label">기타유형</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="토양 기타유형"
                  v-model.trim="customer.soil_pollution_content"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="ps-5" style="width: 40%">3) (수질)환경측면</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="water_pollution1"
                value="해당없음"
                v-model="customer.water_pollution"
              />
              <label class="form-check-label" for="water_pollution1"
                >해당없음</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="water_pollution2"
                value="폐수"
                v-model="customer.water_pollution"
              />
              <label class="form-check-label" for="water_pollution2"
                >폐수</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="water_pollution3"
                value="지하수"
                v-model="customer.water_pollution"
              />
              <label class="form-check-label" for="water_pollution3"
                >지하수</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="water_pollution4"
                value="지표수"
                v-model="customer.water_pollution"
              />
              <label class="form-check-label" for="water_pollution4"
                >지표수</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="water_pollution5"
                value="빗물"
                v-model="customer.water_pollution"
              />
              <label class="form-check-label" for="water_pollution5"
                >빗물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="water_pollution6"
                value="기타"
                v-model="customer.water_pollution"
              />
              <label class="form-check-label" for="water_pollution6"
                >기타</label
              >
            </div>
            <div class="row mb-3" v-show="customer.water_pollution == '기타'">
              <label class="col-sm-3 col-form-label">기타유형</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="수질 기타유형"
                  v-model.trim="customer.water_pollution_content"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="ps-5" style="width: 40%">4) (천연자원)환경측면</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="natural_resource_pollution1"
                value="해당없음"
                v-model="customer.natural_resource_pollution"
              />
              <label class="form-check-label" for="natural_resource_pollution1"
                >해당없음</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="natural_resource_pollution2"
                value="화석"
                v-model="customer.natural_resource_pollution"
              />
              <label class="form-check-label" for="natural_resource_pollution2"
                >화석</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="natural_resource_pollution3"
                value="물"
                v-model="customer.natural_resource_pollution"
              />
              <label class="form-check-label" for="natural_resource_pollution3"
                >물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="natural_resource_pollution4"
                value="석면"
                v-model="customer.natural_resource_pollution"
              />
              <label class="form-check-label" for="natural_resource_pollution4"
                >석면</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="natural_resource_pollution5"
                value="광물"
                v-model="customer.natural_resource_pollution"
              />
              <label class="form-check-label" for="natural_resource_pollution5"
                >광물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="natural_resource_pollution6"
                value="기타"
                v-model="customer.natural_resource_pollution"
              />
              <label class="form-check-label" for="natural_resource_pollution6"
                >기타</label
              >
            </div>
            <div
              class="row mb-3"
              v-show="customer.natural_resource_pollution == '기타'"
            >
              <label class="col-sm-3 col-form-label">기타유형</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="천연자원 기타유형"
                  v-model.trim="customer.natural_resource_pollution_content"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="ps-5" style="width: 40%">5) (에너지)환경측면</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="energy_pollution1"
                value="해당없음"
                v-model="customer.energy_pollution"
              />
              <label class="form-check-label" for="energy_pollution1"
                >해당없음</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="energy_pollution2"
                value="열발산"
                v-model="customer.energy_pollution"
              />
              <label class="form-check-label" for="energy_pollution2"
                >열발산</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="energy_pollution3"
                value="방사선"
                v-model="customer.energy_pollution"
              />
              <label class="form-check-label" for="energy_pollution3"
                >방사선</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="energy_pollution4"
                value="진동"
                v-model="customer.energy_pollution"
              />
              <label class="form-check-label" for="energy_pollution4"
                >진동</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="energy_pollution5"
                value="전자파"
                v-model="customer.energy_pollution"
              />
              <label class="form-check-label" for="energy_pollution5"
                >전자파</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="energy_pollution6"
                value="기타"
                v-model="customer.energy_pollution"
              />
              <label class="form-check-label" for="energy_pollution6"
                >기타</label
              >
            </div>
            <div class="row mb-3" v-show="customer.energy_pollution == '기타'">
              <label class="col-sm-3 col-form-label">기타유형</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="에너지 기타유형"
                  v-model.trim="customer.energy_pollution_content"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="ps-5" style="width: 40%">7) (폐기물)환경측면</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="waste_pollution1"
                value="해당없음"
                v-model="customer.waste_pollution"
              />
              <label class="form-check-label" for="waste_pollution1"
                >해당없음</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="waste_pollution2"
                value="재활용"
                v-model="customer.waste_pollution"
              />
              <label class="form-check-label" for="waste_pollution2"
                >재활용</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="waste_pollution3"
                value="비부패물"
                v-model="customer.waste_pollution"
              />
              <label class="form-check-label" for="waste_pollution3"
                >비부패물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="waste_pollution4"
                value="부패물"
                v-model="customer.waste_pollution"
              />
              <label class="form-check-label" for="waste_pollution4"
                >부패물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="waste_pollution5"
                value="화학물"
                v-model="customer.waste_pollution"
              />
              <label class="form-check-label" for="waste_pollution5"
                >화학물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="waste_pollution6"
                value="기타"
                v-model="customer.waste_pollution"
              />
              <label class="form-check-label" for="waste_pollution6"
                >기타</label
              >
            </div>
            <div class="row mb-3" v-show="customer.waste_pollution == '기타'">
              <label class="col-sm-3 col-form-label">기타유형</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="폐기물 기타유형"
                  v-model.trim="customer.waste_pollution_content"
                />
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <th style="width: 40%">8. 고객의 핵심 위험요소는 무엇인가?</th>
          <td style="width: 60%" colspan="3"></td>
        </tr>
        <tr>
          <td class="ps-5" style="width: 40%">1) 기계(설비) 요인</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="machine_factor1"
                value="협착"
                v-model="customer.machine_factor"
              />
              <label class="form-check-label" for="machine_factor1"
                >협착위험(감김, 끼임)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="machine_factor2"
                value="위험한표면"
                v-model="customer.machine_factor"
              />
              <label class="form-check-label" for="machine_factor2"
                >위험한 표면(절단, 베임, 긁힘)</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="machine_factor3"
                value="낙하전복붕괴전도"
                v-model="customer.machine_factor"
              />
              <label class="form-check-label" for="machine_factor3"
                >기계의 낙하, 비래, 전복, 붕괴, 전도</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="machine_factor4"
                value="충돌"
                v-model="customer.machine_factor"
              />
              <label class="form-check-label" for="machine_factor4"
                >충돌위험</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="machine_factor5"
                value="넘어짐"
                v-model="customer.machine_factor"
              />
              <label class="form-check-label" for="machine_factor5"
                >넘어짐(미끄러짐, 걸림, 헛디딤)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="machine_factor6"
                value="추락"
                v-model="customer.machine_factor"
              />
              <label class="form-check-label" for="machine_factor6"
                >추락위험</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td class="ps-5" style="width: 40%">2) 전기적 요인</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="electric_factor1"
                value="감전"
                v-model="customer.electric_factor"
              />
              <label class="form-check-label" for="electric_factor1"
                >감전(안전전압초과)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="electric_factor2"
                value="아크"
                v-model="customer.electric_factor"
              />
              <label class="form-check-label" for="electric_factor2"
                >아크</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="electric_factor3"
                value="정전기"
                v-model="customer.electric_factor"
              />
              <label class="form-check-label" for="electric_factor3"
                >정전기</label
              >
            </div>
          </td>
        </tr>

        <tr>
          <td class="ps-5" style="width: 40%">3) 화학(물질적) 위험요인</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor1"
                value="가스"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor1"
                >가스</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor2"
                value="증기"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor2"
                >증기</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor3"
                value="에어로졸흄"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor3"
                >에어로졸.흄</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor4"
                value="액체"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor4"
                >액체(미스트)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor5"
                value="고체분진"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor5"
                >고체(분진)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor6"
                value="반응성물질"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor6"
                >반응성 물질</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor7"
                value="방사선"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor7"
                >방사선</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor8"
                value="화재폭발"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor8"
                >화재/폭발 위험</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="chemical_factor9"
                value="복사열"
                v-model="customer.chemical_factor"
              />
              <label class="form-check-label" for="chemical_factor9"
                >복사열/폭발과압</label
              >
            </div>
          </td>
        </tr>

        <tr>
          <td class="ps-5" style="width: 40%">4) 생물학적 요인</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="biological_factor1"
                value="미생물바이러스감염"
                v-model="customer.biological_factor"
              />
              <label class="form-check-label" for="biological_factor1"
                >병원성미생물, 바이러스에 의한 감염</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="biological_factor2"
                value="유전자변형물질"
                v-model="customer.biological_factor"
              />
              <label class="form-check-label" for="biological_factor2"
                >유전자변형물질</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="biological_factor3"
                value="알러지미생물"
                v-model="customer.biological_factor"
              />
              <label class="form-check-label" for="biological_factor3"
                >알러지 및 미생물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="biological_factor4"
                value="동물"
                v-model="customer.biological_factor"
              />
              <label class="form-check-label" for="biological_factor4"
                >동물</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="biological_factor5"
                value="식물"
                v-model="customer.biological_factor"
              />
              <label class="form-check-label" for="biological_factor5"
                >식물</label
              >
            </div>
          </td>
        </tr>

        <tr>
          <td class="ps-5" style="width: 40%">5) 작업특성 요인</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor1"
                value="소음"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor1">소음</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor2"
                value="초음파초저주파음"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor2"
                >초음파.초저주파음</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor3"
                value="진동"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor3">진동</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor4"
                value="근로자실수"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor4"
                >근로자 실수(휴먼에러)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor5"
                value="저압고압상태"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor5"
                >저압 또는 고압상태</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor6"
                value="질식산소결핍"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor6"
                >질식위험/산소결핍</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor7"
                value="중량물취급작업"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor7"
                >중량물 취급작업</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor8"
                value="반복작업"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor8"
                >반복작업</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor9"
                value="불안정한자세"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor9"
                >불안정한 자세</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_factor10"
                value="작업조작도구"
                v-model="customer.work_factor"
              />
              <label class="form-check-label" for="work_factor10"
                >작업(조작)도구</label
              >
            </div>
          </td>
        </tr>

        <tr>
          <td class="ps-5" style="width: 40%">6) 작업환경 요인</td>
          <td style="width: 60%" colspan="3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_env1"
                value="기후고온한랭"
                v-model="customer.work_env"
              />
              <label class="form-check-label" for="work_env1"
                >기후/고온/한랭</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_env2"
                value="조명"
                v-model="customer.work_env"
              />
              <label class="form-check-label" for="work_env2">조명</label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_env3"
                value="공간이동통로"
                v-model="customer.work_env"
              />
              <label class="form-check-label" for="work_env3"
                >공간 및 이동통로</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_env4"
                value="주변근로자"
                v-model="customer.work_env"
              />
              <label class="form-check-label" for="work_env4"
                >주변 근로자</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_env5"
                value="장시간맞교대작업"
                v-model="customer.work_env"
              />
              <label class="form-check-label" for="work_env5"
                >장시간/맞교대 작업</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="work_env6"
                value="조직안전문화"
                v-model="customer.work_env"
              />
              <label class="form-check-label" for="work_env6"
                >조직 안전문화</label
              >
            </div>
          </td>
        </tr>

        <tr>
          <th style="width: 40%">
            9. 조직이 제품/서비스에 적용가능한 규제 및 법적요구사항은 무엇인가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.regal"
            ></textarea
            >({{ this.checkpoint.regal.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            10. 경영시스템방침이 문서화되어 있으며 목표와 일관성을 가지고
            있는가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.policy"
            ></textarea
            >({{ this.checkpoint.policy.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            11. 인증대상 경영시스템의 핵심목표는 무엇인가? <br /><small
              >(조직의상황과 리스크를 반영한 목표)
            </small>
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.goal"
            ></textarea
            >({{ this.checkpoint.goal.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            12. 내부심사는 계획되고 실행되었는가? 심사일은 언제인가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.internal_audit"
            ></textarea
            >({{ this.checkpoint.internal_audit.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            13. 경영검토의 실시되었는가? 실시일은 언제인가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.management_review"
            ></textarea
            >({{ this.checkpoint.management_review.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            14. 고객의 시스템에 대한 이해수준은 어느정도인가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.understanding_level"
            ></textarea
            >({{ this.checkpoint.understanding_level.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            15. 고객의 사업장 정보(사업장 수, 위치)가 신청정보와 동일한가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.workspace"
            ></textarea
            >({{ this.checkpoint.workspace.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            16. 적용제외조항과 근거는 무엇인가? 그것을 수용할 것인가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.exclusion"
            ></textarea
            >({{ this.checkpoint.exclusion.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            17. 조직의 인원은 몇 명이며 신청정보와 동일한가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.worker_count"
            ></textarea
            >({{ this.checkpoint.worker_count.length }}/200)
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 2단계정보 -->
    <div>
      <h5 class="fw-bold mt-5">
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        2단계심사 정보
      </h5>
    </div>
    <table class="table">
      <thead class="table-group-divider">
        <tr class="text-center">
          <th style="width: 40%"></th>
          <th style="width: 60%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 40%">1. 2단계심사 M/D와 심사일 수?</th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.s2md"
            ></textarea
            >({{ this.checkpoint.s2md.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            2. 2단계심사의 안내자와 심사대응자는 누구인가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.guider"
            ></textarea
            >({{ this.checkpoint.guider.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            3. 심사장소가 확보되고 사업장출입은 가능한가?
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.place"
            ></textarea
            >({{ this.checkpoint.place.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">4. 심사장소 방문시 주의사항은 무엇인가?</th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.precautions"
            ></textarea
            >({{ this.checkpoint.precautions.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">
            5. 현장 사업장명과 주소는 무엇인가? <br /><small>
              (건설, 시공, 설치 현장이 있는 경우 반드시 기록)</small
            >
          </th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.site_address"
            ></textarea
            >({{ this.checkpoint.site_address.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">6. 현장방문에 소요되는 시간은 얼마인가?</th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.visit_time"
            ></textarea
            >({{ this.checkpoint.visit_time.length }}/200)
          </td>
        </tr>
        <tr>
          <th style="width: 40%">7. 방문현장 담당자와 연락처는 무엇인가?</th>
          <td style="width: 60%" colspan="3">
            <textarea
              class="form-control"
              name=""
              id=""
              rows="2"
              v-model="checkpoint.contact"
            ></textarea
            >({{ this.checkpoint.contact.length }}/200)
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 발견사항 -->
    <div
      class="mt-4 d-flex flex-row align-items-middle justify-content-between"
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
      <thead class="table-group-divider">
        <tr class="mt-0 text-center bg-light">
          <th style="width: 10%">발견사항</th>
          <!-- <th style="width: 10%">No.</th> -->
          <th style="width: 70%">발견내용</th>
          <th style="width: 20%">표준/조항</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td>
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
          <td>
            <textarea
              class="form-control"
              name=""
              id=""
              rows="1"
              placeholder="요구사항조항, 부적합내용, 심사원 등 기재"
              v-model="row.findings_content"
            ></textarea>
          </td>
          <td>
            <textarea
              class="form-control"
              placeholder="Q/4.1, E/8.3"
              name=""
              id=""
              rows="1"
              v-model="row.findings_standard"
            ></textarea>
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
  data() {
    return {
      id: '',
      // searchName: '',
      imgSrc: '',
      imgExt: '',
      list: {},
      customer: {
        air_pollution: ['해당없음'],
        air_pollution_content: '',
        soil_pollution: ['해당없음'],
        soil_pollution_content: '',
        water_pollution: ['해당없음'],
        water_pollution_content: '',
        natural_resource_pollution: ['해당없음'],
        natural_resource_pollution_content: '',
        energy_pollution: ['해당없음'],
        energy_pollution_content: '',
        waste_pollution: ['해당없음'],
        waste_pollution_content: '',
        machine_factor: ['추락'],
        electric_factor: ['감전'],
        chemical_factor: ['가스'],
        biological_factor: ['유전자변형물질'],
        work_factor: ['근로자실수'],
        work_env: ['주변근로자']
      },
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
        biz_area:
          '조직은 OOOOO사업이 주요 수익원이며, 매출은 작년 000억, 올해 000억으로 매년 성장을 지속하고있음. 대표이사는 OOO분야의 석사학위를 보유하고 있음.',
        reliability:
          '고객의 활동에 적합한 문서화된 프로세스를 운영하고 있음. 문서의 구조는 매뉴얼, 프로세스, 지침서로 구성되어 있으며 심사일 현재 Ver0.0 버전을 운영하고 있음.',
        issue:
          '조직은 내부, 외부 이슈를 정하고 있으며 문서화 하고 있음. 분기별 모니터링하여 필요한 경우 개정하고 있음.',
        biz_status: '',
        needs:
          '조직은 조직의 성과에 영향을 미치는 이해관계자를 정하고 있으며 문서화 하고 있음. 분기별 모니터링하여 필요한 경우 개정하고 있음.',
        scope:
          '조직의 인증범위는 OOOO의 개발 및 제조임. 조직의 활동에  적합함.',
        quality_risk:
          '조직의 품질리스크는 제품 불량으로 인한 고객신뢰 저하, 매출액 감소 등으로 정하고 있음. 품질리스크를 예방하기 위해 공정검사 및 작업자 교육을 강화하고 출하검사 검사수량을 늘려 불량발생 최소화 노력하고 있음.',
        env_risk: '',
        safety_risk: '',
        regal: 'OOOOQ법, 폐기물관리법, 산업안전보건법, 중대재해처벌법 등',
        policy:
          '품잘경영방침, 환경경영방침, 안전경영방침이 문서화 되어 있으며 조직 내에 의사소통되고 있음.',
        goal: '품질리스크 예방을 위한 공정검사불량율 00%이하, 출하검사불량율 00%이하, EMS: 환경측면 절감목표 00%달성, OHSMS: 사고발생 00건 이하 등',
        internal_audit:
          '내부심사는 00년도 00월 00일 실시하였으며 심사결과 00개의 개선사항이 발생하였음.',
        management_review: '경영검토는 00년도 00월 00일 실시하였음.',
        understanding_level:
          '조직의 인증시스탬 담당자는 내부심사원교육을 수료하였으며, 경영시스템관리 경험을 보유하고 있어 인증에 대한 이해도가 높음.',
        workspace: '고객의 사업장은 단일 사업장이며 신청 정보와 동일함. ',
        exclusion: 'ㄷㄷ',
        worker_count: 'ㄷ',
        s2md: 'ㄷ',
        guider: 'ㄷ',
        place: 'ㄷ',
        precautions: 'ㄷ',
        site_address: 'ㄷ',
        visit_time: 'ㄷ',
        contact: 'ㄷ',
        // findings: {},
        // findings_content: {},
        // findings_standard: {}
        findings_array: [
          { findings: '', findings_content: '', findings_standard: '' }
        ]
      }
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
    // this.getReportAllByAuditNo()
  },
  unmounted() {},
  methods: {
    async getReportAllByAuditNo() {
      const loader = this.$loading.show({ canCancel: false })
      const reportAllByAuditNo = await this.$post('/api/report/list/audit_no', {
        param: this.id
      })
      console.log(reportAllByAuditNo)
      loader.hide()
    },
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get(`/api/customer/cert/list/detail/${this.id}`)
      console.log(this.list)
      console.log(this.list.audit_created_date)
      const dbDate = this.list.audit_created_date
      console.log(dbDate)

      if (this.list.audit_trans_start === null) {
        this.list.audit_trans_start = ''
      } else {
        this.list.audit_trans_start = Intl.DateTimeFormat('fr-CA').format(
          new Date(this.audit_trans_start)
        )
      }

      if (this.list.audit_trans_end === null) {
        this.list.audit_trans_end = ''
      } else {
        this.list.audit_trans_end = Intl.DateTimeFormat('fr-CA').format(
          new Date(this.audit_trans_end)
        )
      }

      if (this.list.audit_s1_start === null) {
        this.list.audit_s1_start = ''
      } else {
        this.list.audit_created_date = Intl.DateTimeFormat('fr-CA').format(
          new Date(dbDate)
        )
      }

      if (this.list.audit_s1_end === null) {
        this.list.audit_s1_end = ''
      } else {
        this.list.audit_s1_end = Intl.DateTimeFormat('fr-CA').format(
          new Date(this.list.audit_s1_end)
        )
      }

      this.list.audit_s2_start = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.list.audit_s2_start)
      )
      this.list.audit_s2_end = Intl.DateTimeFormat('fr-CA').format(
        new Date(this.list.audit_s2_end)
      )

      loader.hide()
    },
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
      // if (this.auditTeam.leader === '') {
      //   return this.$swal('심사팀장명을 입력하세요.')
      // }
      if (this.checkpoint.reliability === '') {
        return this.$swal('2번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.issue === '') {
        return this.$swal('3번 확인사항을 입력하세요.')
      }
      // if (this.checkpoint.biz_status === '') {
      //   return this.$swal('4번 확인사항을 입력하세요.')
      // }
      if (this.checkpoint.needs === '') {
        return this.$swal('5번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.scope === '') {
        return this.$swal('6번 확인사항을 입력하세요.')
      }
      if (this.checkpoint.quality_risk === '') {
        return this.$swal('7번 확인사항을 입력하세요.')
      }
      // if (this.checkpoint.env_risk === '') {
      //   return this.$swal('8번 확인사항을 입력하세요.')
      // }
      // if (this.checkpoint.safety_risk === '') {
      //   return this.$swal('9번 확인사항을 입력하세요.')
      // }
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
              audit_no: this.id,
              leader: this.$store.state.user.userInfo.name,
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
              findings_array: JSON.stringify(this.rows),
              report_s1_no: 's14' + this.id,
              // findings: JSON.stringify(this.row.findings),
              // findings_content: JSON.stringify(this.row.findings_content),
              // findings_standard: JSON.stringify(this.row.findings_standard)
              air_pollution: JSON.stringify(this.customer.air_pollution),
              air_pollution_content: this.customer.air_pollution_content,
              soil_pollution: JSON.stringify(this.customer.soil_pollution),
              soil_pollution_content: this.customer.soil_pollution_content,
              water_pollution: JSON.stringify(this.customer.water_pollution),
              water_pollution_content: this.customer.water_pollution_content,
              natural_resource_pollution: JSON.stringify(
                this.customer.natural_resource_pollution
              ),
              natural_resource_pollution_content:
                this.customer.natural_resource_pollution_content,
              energy_pollution: JSON.stringify(this.customer.energy_pollution),
              energy_pollution_content: this.customer.energy_pollution_content,
              waste_pollution: JSON.stringify(this.customer.waste_pollution),
              waste_pollution_content: this.customer.waste_pollution_content,
              machine_factor: JSON.stringify(this.customer.machine_factor),
              electric_factor: JSON.stringify(this.customer.electric_factor),
              chemical_factor: JSON.stringify(this.customer.chemical_factor),
              biological_factor: JSON.stringify(
                this.customer.biological_factor
              ),
              work_factor: JSON.stringify(this.customer.work_factor),
              work_env: JSON.stringify(this.customer.work_env),
              auditor_email: this.$store.state.user.userInfo.email
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('1단계 심사보고서가 저장되었습니다.')
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
        path: '/customer/cert/detail',
        query: { audit_no: this.id }
      })
    }
  }
}
</script>
