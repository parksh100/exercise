<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center fw-bold">계약검토입력</h2>
    <hr />
    <!-- <div class="row mb-3">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">{{ customer.customer_id }}</div>
    </div> -->
    <h5 class="fw-bold">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      기본정보
    </h5>
    <table class="table table-bordered table-sm" style="table-layout: fixed">
      <!-- <thead>
        <tr>
          <th class="col">#</th>
          <th class="col">First</th>
          <th class="col">Last</th>
          <th class="col">Handle</th>
        </tr>
      </thead> -->
      <tbody class="text-center">
        <tr>
          <th>심사유형</th>
          <td>
            {{ customer.certification_type }}
          </td>
          <th>사업자등록번호</th>
          <td>{{ customer.business_no }}</td>
        </tr>
        <tr>
          <th>회사명(국문)</th>
          <td>{{ customer.name_ko }}</td>
          <th>회사명(영문)</th>
          <td>{{ customer.name_en }}</td>
        </tr>
        <tr>
          <th>대표자명</th>
          <td>{{ customer.ceo_name }}</td>
          <th>대표자 휴대폰번호</th>
          <td>{{ customer.ceo_phone }}</td>
        </tr>
        <tr>
          <th>대표이메일</th>
          <td>{{ customer.ceo_name }}</td>
          <th>대표팩스번호</th>
          <td>{{ customer.fax }}</td>
        </tr>
        <tr>
          <th>국문 주소</th>
          <td colspan="3">
            {{
              customer.address_ko +
              ' ' +
              customer.address_detail +
              ' ' +
              '(' +
              customer.address_reference +
              ')' +
              ' ' +
              '우편번호:' +
              customer.postcode
            }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>영문 주소</th>
          <td colspan="3">
            {{ customer.address_en_detail + ', ' + customer.address_en }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>담당자명/직위</th>
          <td>{{ customer.contact_name }}</td>
          <th>담당자 휴대폰번호</th>
          <td>{{ customer.contact_phone }}</td>
        </tr>

        <tr>
          <th>담당자 이메일</th>
          <td>{{ customer.contact_email }}</td>
          <th>홈페이지</th>
          <td>{{ customer.homepage }}</td>
        </tr>

        <tr>
          <th>조직의 범위</th>
          <td colspan="3">
            {{ customer.organization_scope }}
          </td>
          <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-3 mb-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      인증신청정보
    </h5>

    <table class="table table-bordered table-sm" style="table-layout: fixed">
      <tbody class="text-center">
        <tr>
          <th>신청 인증표준</th>
          <td>
            {{ customer.certification_standard }}
          </td>
          <th>종업원 수</th>
          <td>{{ customer.employee_count }}</td>
        </tr>
        <tr>
          <th>설계/개발 유무</th>
          <td>{{ customer.design }}</td>
          <th>설계/개발 인원 수</th>
          <td>{{ customer.development_count }}</td>
        </tr>

        <tr>
          <th>국문 인증범위</th>
          <td colspan="3">{{ customer.scope_ko }}</td>
          <!-- <th >담당자 휴대폰번호</th>
          <td>{{ customer.contact_phone }}</td> -->
        </tr>

        <tr>
          <th>영문 인증범위</th>
          <td colspan="3">{{ customer.scope_en }}</td>
          <!-- <th >홈페이지</th>
          <td>{{ customer.homepage }}</td> -->
        </tr>
        <tr>
          <th>인증범위 활동</th>
          <td>{{ customer.activity }}</td>
          <th>제품(서비스) 공정</th>
          <td>{{ customer.process }}</td>
        </tr>

        <tr>
          <th>조직의 범위</th>
          <td colspan="3">
            {{ customer.organization_scope }}
          </td>
          <!-- <th >대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
        </tr>
        <tr>
          <th>교대근무</th>
          <td>{{ customer.shift }}</td>
          <th>교대근무 횟 수 / 인원 수</th>
          <td>{{ customer.shift_work_count }}</td>
        </tr>
        <tr>
          <th>적용제외조항 유무</th>
          <td>{{ customer.exclusion }}</td>
          <th>적용제외 조항/근거</th>
          <td>{{ customer.exclusion_reason }}</td>
        </tr>
        <tr>
          <th>전환(방문)심사일</th>
          <td>{{ customer.transfer_date }}</td>
          <th></th>
          <td></td>
        </tr>

        <tr>
          <th>1단계 심사시작일</th>
          <td>{{ customer.s1_start_date }}</td>
          <th>1단계 심사종료일</th>
          <td>{{ customer.s1_end_date }}</td>
        </tr>
        <tr>
          <th>2단계 심사시작일</th>
          <td>{{ customer.s2_start_date }}</td>
          <th>2단계 심사종료일</th>
          <td>{{ customer.s2_end_date }}</td>
        </tr>

        <tr>
          <th>2단계 심사팀원</th>
          <td>{{ customer.s2_team }}</td>
          <th>매뉴얼 제/개정일</th>
          <td>{{ customer.manual_date }}</td>
        </tr>

        <tr>
          <th>내부심사일</th>
          <td>{{ customer.internal_date }}</td>
          <th>경영검토일</th>
          <td>{{ customer.management_date }}</td>
        </tr>

        <tr>
          <th>외주처리 유무</th>
          <td>{{ customer.outsourcing }}</td>
          <th>외주처리 프로세스</th>
          <td>{{ customer.outsourcing_process }}</td>
        </tr>

        <tr>
          <th>건설면허보유 여부</th>
          <td>{{ customer.construction_license }}</td>
          <th>건설면허 내용</th>
          <td>{{ customer.construction_license_content }}</td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-3 mb-3">
      <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
      심사원정보
    </h5>

    <table class="table table-bordered table-sm" style="table-layout: fixed">
      <tbody class="text-center">
        <tr>
          <th>심사원명</th>
          <td>{{ $store.state.user.userInfo.name }}</td>
          <th>심사원 이메일</th>
          <td>{{ $store.state.user.userInfo.email }}</td>
        </tr>
        <tr>
          <th>첨부파일</th>
          <td colspan="2">
            {{ customer.img_license_originalname }}
          </td>
          <td>
            <button class="btn btn-secondary" @click="fileDownload">
              다운로드
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 계약검토 -->
    <!-- show if role = admin  -->
    <div>
      <h5 class="fw-bold">
        <i class="fa-solid fa-square-caret-right" style="color: blueviolet"></i>
        계약검토
      </h5>
      <table class="table table-bordered table-sm text-primary">
        <!-- <thead>
        <tr>
          <th class="col">#</th>
          <th class="col">First</th>
          <th class="col">Last</th>
          <th class="col">Handle</th>
        </tr>
      </thead> -->
        <tbody class="text-center align-middle">
          <tr>
            <th style="width: 20%">심사번호</th>
            <td style="width: 30%">
              <input
                type="text"
                class="form-control ps-5"
                style="width: 100%; border: 0"
                v-model="cr.audit_no"
              />
            </td>
            <th style="width: 20%">조직규모</th>
            <td style="width: 30%">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name=""
                  id="inlineRadio3"
                  value="소"
                  v-model="cr.company_scale"
                />
                <label class="form-check-label" for="inlineRadio3">소</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name=""
                  id="inlineRadio2"
                  value="중"
                  v-model="cr.company_scale"
                />
                <label class="form-check-label" for="inlineRadio2">중</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name=""
                  id="inlineRadio1"
                  value="대"
                  v-model="cr.company_scale"
                />
                <label class="form-check-label" for="inlineRadio1">대</label>
              </div>
            </td>
          </tr>
          <tr>
            <th>환경복잡성</th>
            <td colspan="3" class="text-start">
              <div class="col-sm-9 ps-5">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="environment_complexity_1"
                    value="높음"
                    v-model="cr.env_complexity"
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
                    v-model="cr.env_complexity"
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
                    v-model="cr.env_complexity"
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
                    v-model="cr.env_complexity"
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
                    v-model="cr.env_complexity"
                  />
                  <label class="form-check-label" for="environment_complexity_5"
                    >특별</label
                  >
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>안전보건 위험성</th>
            <td colspan="3" class="text-start">
              <div class="col-sm-9 ps-5">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="safety_health_risk_1"
                    value="높음"
                    v-model="cr.sh_risk"
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
                    v-model="cr.sh_risk"
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
                    v-model="cr.sh_risk"
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
                    v-model="cr.sh_risk"
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
                    v-model="cr.sh_risk"
                  />
                  <label class="form-check-label" for="safety_health_risk_5"
                    >특별</label
                  >
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>심사코드</th>
            <td colspan="3" class="text-start ps-5">
              <div class="col-sm-9">
                <div>{{ cr.iafcode }}</div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_1"
                    value="03"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_1"
                    >03(음식료 및 담배)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_2"
                    value="04"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_2"
                    >04(섬유 및 섬유제품)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_3"
                    value="05"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_3"
                    >05(가죽 및 가죽제품)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_4"
                    value="06"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_4"
                    >06(목재 및 목재제품)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_5"
                    value="07"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_5"
                    >07(펄프, 종이, 종이제품)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_6"
                    value="08"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_6"
                    >08(출판업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_7"
                    value="09"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_7"
                    >09(인쇄업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_8"
                    value="10"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_8"
                    >10(코크스, 연탄 및 석유정제품 제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_9"
                    value="12"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_9"
                    >12(화학물질, 화학제품 및 화학섬유 제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_10"
                    value="13"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_10"
                    >13(의료용 물질 및 의약품 제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_11"
                    value="14"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_11"
                    >14(고무제품 및 플라스틱제품 제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_12"
                    value="15"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_12"
                    >15(비금속 광물제품 제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_13"
                    value="16"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_13"
                    >16(콘크리트, 시멘트, 석회 및 플라스터 등 제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_14"
                    value="17"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_14"
                    >17(1차 금속 및 금속가공제품 제조업 중 1차 금속
                    제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_15"
                    value="18"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_15"
                    >18(기계 및 장비 제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_16"
                    value="19"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_16"
                    >19(전기기기 및 광학기기 제조업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_17"
                    value="20"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_17"
                    >20(조선업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_18"
                    value="21"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_18"
                    >21(항공기 제조업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_19"
                    value="22"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_19"
                    >22(기타 운송장비 제조업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_20"
                    value="23"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_20"
                    >23(기타 제조업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_21"
                    value="25"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_21"
                    >25(전기공급업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_22"
                    value="26"
                    v-model="cr.iafcode"
                    disabled
                  />
                  <label class="form-check-label" for="code_22"
                    >26(연료용 가스 공급업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_23"
                    value="27"
                    v-model="cr.iafcode"
                    disabled
                  />
                  <label class="form-check-label" for="code_23"
                    >27(수도 및 증기 공급업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_24"
                    value="28"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_24"
                    >28(건설업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_25"
                    value="29"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_25"
                    >29(도소매업, 자동차 및 모터사이클 수리업, 개인 및 가정용품
                    수리업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_26"
                    value="30"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_26"
                    >30(숙박업, 음식점업 및 주점업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_27"
                    value="31"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_27"
                    >31(운송업, 창고업 및 통신업)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_28"
                    value="32"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_28"
                    >32(금융업, 보험업, 부동산업 및 임대업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_29"
                    value="33"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_29"
                    >33(정보기술업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_30"
                    value="35"
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_30"
                    >35(기타 서비스업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_31"
                    value="36"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_31"
                    >36(공공 행정)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_32"
                    value="37"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_32"
                    >37(교육 서비스업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_33"
                    value="38"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_33"
                    >38(보건업 및 사회복지 서비스업)</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="code_34"
                    value="39"
                    disabled
                    v-model="cr.iafcode"
                  />
                  <label class="form-check-label" for="code_34"
                    >39(기타 사회 서비스업)</label
                  >
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>심사구분</th>
            <td>
              <div class="col-sm-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="classify_1"
                    value="단일심사"
                    v-model="cr.class_audit"
                  />
                  <label class="form-check-label" for="classify_1"
                    >단일심사</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="classify_2"
                    value="통합심사"
                    v-model="cr.class_audit"
                  />
                  <label class="form-check-label" for="classify_2"
                    >통합심사</label
                  >
                </div>
              </div>
            </td>
            <th>심사가능여부</th>
            <td>
              <div class="col-sm-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="possible_1"
                    value="가능"
                    v-model="cr.possibility_audit"
                  />
                  <label class="form-check-label" for="possible_1"
                    >가능(지정분야)</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="possible_2"
                    value="불가능"
                    v-model="cr.possibility_audit"
                  />
                  <label class="form-check-label" for="possible_2"
                    >불가능(미지정 분야)</label
                  >
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>사업장</th>
            <td colspan="3">
              <div class="col-sm-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="business_1"
                    value="복수사업장"
                    v-model="cr.type_workspace"
                  />
                  <label class="form-check-label" for="business_1"
                    >복수사업장 운용</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="business_2"
                    value="단일사업장"
                    v-model="cr.type_workspace"
                  />
                  <label class="form-check-label" for="business_2"
                    >단일사업장</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="business_3"
                    value="한시적사업장"
                    v-model="cr.type_workspace"
                  />
                  <label class="form-check-label" for="business_3"
                    >한시적사업장(건설/엔지니어링 등)</label
                  >
                </div>
              </div>
            </td>
            <!-- <th>대표자 휴대폰번호</th>
          <td>{{ customer.email }}</td> -->
          </tr>

          <tr>
            <th>내부심사실시</th>
            <td>
              <div class="col-sm-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="internal_1"
                    value="진행완료"
                    v-model="cr.internal_audit"
                  />
                  <label class="form-check-label" for="internal_1"
                    >진행완료</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="internal_2"
                    value="진행예정"
                    v-model="cr.internal_audit"
                  />
                  <label class="form-check-label" for="internal_2"
                    >진행예정</label
                  >
                </div>
              </div>
            </td>
            <th>경영검토 실시여부</th>
            <td>
              <div class="col-sm-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="management_1"
                    value="진행완료"
                    v-model="cr.management_review"
                  />
                  <label class="form-check-label" for="management_1"
                    >진행완료</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="management_2"
                    value="진행예정"
                    v-model="cr.management_review"
                  />
                  <label class="form-check-label" for="management_2"
                    >진행예정</label
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th>심사팀장</th>
            <td>
              {{ customer.auditor_name }}
            </td>
            <th>심사원</th>
            <td>
              {{ customer.s2_team }}
            </td>
          </tr>

          <tr>
            <th>MD적합성</th>
            <td>
              <div class="col-sm-9 text-start ps-5">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="md_1"
                    value="적합"
                    v-model="cr.md_conformity"
                  />
                  <label class="form-check-label" for="md_1">적합</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="md_2"
                    value="부적합"
                    v-model="cr.md_conformity"
                  />
                  <label class="form-check-label" for="md_2">부적합</label>
                </div>
              </div>
            </td>
            <th>기술전문가</th>
            <td>
              <div class="col-sm-9 text-start ps-5">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="expert_1"
                    value="필요"
                    v-model="cr.need_tech_expert"
                  />
                  <label class="form-check-label" for="expert_1">필요</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=""
                    id="expert_2"
                    value="불필요"
                    v-model="cr.need_tech_expert"
                  />
                  <label class="form-check-label" for="expert_2">불필요</label>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th>1단계 심사 MD</th>
            <td>
              <input
                type="number"
                class="form-control"
                style="border: none"
                placeholder=""
                v-model="cr.s1_md"
              />
            </td>
            <th>2단계 심사 MD</th>
            <td>
              <input
                type="number"
                class="form-control"
                style="border: none"
                placeholder=""
                v-model="cr.s2_md"
              />
            </td>
          </tr>

          <tr>
            <th>계약자 및 검토자 의견</th>
            <td colspan="3">
              <textarea
                class="form-control"
                style="width: 100%; border: none"
                id=""
                v-model="cr.opinion"
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>계약변경</th>
            <td colspan="3">
              <textarea
                class="form-control"
                style="width: 100%; border: none"
                id=""
                v-model="cr.change"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button class="btn btn-secondary me-1" @click="doSave">저장</button>
    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <button class="btn btn-primary" @click="goToChange(cr.customer_id)">
      수정
    </button>
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
      searchName: '',
      customer: {},
      cr: {
        customer_id: -1,
        audit_no: '22QEOC###',
        company_scale: '소',
        env_complexity: '',
        sh_risk: '',
        iafcode: [],
        class_audit: '',
        cr_result: '',
        possibility_audit: '가능',
        type_workspace: '단일사업장',
        s1_md: null,
        s2_md: null,
        md_conformity: '적합',
        need_tech_expert: '불필요',
        opinion: '',
        change: '',
        internal_audit: '진행완료',
        management_review: '진행완료',
        leader_auditor: '',
        auditors: '',
        audit_fee: '',
        auditor_name: '',
        auditor_email: ''
      }
    }
  },
  setup() {},
  created() {
    // console.log(this.customer)
    // console.log(this.$route.query.id)
    this.id = this.$route.query.customer_id
    console.log(this.id)

    // this.searchName = this.$route.query.searchName
  },
  mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/login' })
    }
    console.log(this.id)

    this.getCustomer()
  },
  unmounted() {},
  methods: {
    async getCustomer() {
      // console.log(this.id)
      this.customer = await this.$get(
        `http://localhost:3000/api/customer/${this.id}`
      )
      console.log(this.customer)
    },
    fileDownload() {
      // request file download
      const dbFilename = this.customer.img_license
      console.log(dbFilename)
      try {
        const element = document.createElement('a')
        element.setAttribute(
          'href',
          `http://localhost:3000/api/file/${dbFilename}`
        )
        element.click()
      } catch (e) {
        console.log(e)
      }
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
    printApplication() {
      window.print()
    },
    async doSave() {
      // if (this.customer.certification_type === '') {
      //   return this.$swal('인증유형을 선택해주세요.')
      // }

      this.$swal({
        title: '계약검토를 저장 하시겠습니까?',
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

          const r = await this.$post('/api/cr', {
            param: {
              customer_id: this.id,
              audit_no: this.cr.audit_no,
              company_scale: this.cr.company_scale,
              env_complexity: this.cr.env_complexity,
              sh_risk: this.cr.sh_risk,
              iafcode: JSON.stringify(this.cr.iafcode),
              cr_result: this.cr.cr_result,
              class_audit: this.cr.class_audit,
              possibility_audit: this.cr.possibility_audit,
              type_workspace: this.cr.type_workspace,
              s1_md: this.cr.s1_md,
              s2_md: this.cr.s2_md,
              md_conformity: this.cr.md_conformity,
              need_tech_expert: this.cr.need_tech_expert,
              opinion: this.cr.opinion,
              change: this.cr.change,
              internal_audit: this.cr.internal_audit,
              management_review: this.cr.management_review
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('계약검토 정보가 저장되었습니다.')
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
    },
    // push selected customer id to change page
    goToChange() {
      console.log(this.id)
      this.$router.push({
        path: '/customer/change',
        query: { customer_id: this.id }
      })
    }
    // goToChange() {
    //   console.log(this.id)
    //   this.$router.push({
    //     name: 'CustomerChangeView',
    //     params: { detailId: this.customer.customer_id }
    //   })
    // }
  }
}
</script>
<style scoped></style>
