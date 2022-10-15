<template>
  <div class="container">
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사유형</label>
      <div class="col-sm-9">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model.trim="customer.certification_type"
        >
          <option selected>선택하세요</option>
          <option value="initial">최초심사</option>
          <option value="transSurveil">전환사후심사</option>
          <option value="transRecert">전환갱신심사</option>
        </select>
        <!-- <input
          type="text"
          class="form-control"
          v-model.trim="customer.supplier_name"
        /> -->
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문상호</label>
      <div class="col-sm-9">
        <!-- <input
          type="text"
          class="form-control"
          v-model.trim="customer.business_no"
        /> -->
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">영문상호</label>
      <div class="col-sm-9">
        <!-- <input
          type="text"
          class="form-control"
          v-model.trim="customer.business_no"
        /> -->
        <input
          type="text"
          class="form-control"
          placeholder="대소문자 구분, Co., Ltd. 또는 Inc.구분 정확하게 기재"
          v-model="customer.customer_name"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">사업자등록번호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.business_no"
          placeholder="숫자만 입력"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표자명</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.ceo_name"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표자휴대폰번호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.ceo_phone"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표이메일</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model.trim="customer.email" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표전화번호</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model.trim="customer.phone" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표팩스번호</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model.trim="customer.phone" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">영문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">담당자명/직위</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="홍길동/대표이사"
          v-model.trim="customer.contact_name"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">담당자 휴대번호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="010-1234-5678"
          v-model.trim="customer.contact_phone"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">담당자 이메일</label>
      <div class="col-sm-9">
        <input
          type="email"
          class="form-control"
          v-model.trim="customer.contact_email"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">홈페이지</label>
      <div class="col-sm-9">
        <input
          type="email"
          class="form-control"
          v-model.trim="customer.contact_email"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">조직의 범위</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.organization_scope"
        />
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
            value="ISO9001"
            v-model="customer.certification_standard"
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
            value="ISO14001"
            v-model="customer.certification_standard"
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
            value="ISO45001"
            v-model="customer.certification_standard"
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
            value="ISO22716"
            v-model="customer.certification_standard"
          />
          <label class="form-check-label" for="certification_standard_4"
            >ISO22716</label
          >
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">종업원 수</label>
      <div class="col-sm-9">
        <input
          type="number"
          class="form-control"
          v-model.trim="customer.employee_count"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">설계/개발 유무</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="design_yes"
            value="yes"
            v-model="customer.design"
          />
          <label class="form-check-label" for="design_yes">있음</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="design_no"
            value="no"
            v-model="customer.design"
          />
          <label class="form-check-label" for="design_no">없음</label>
        </div>
      </div>
    </div>
    <div class="row mb-3" v-show="customer.design == 'yes'">
      <label class="col-sm-3 col-form-label">설계/개발 인원 수</label>
      <div class="col-sm-9">
        <input
          type="number"
          class="form-control"
          placeholder="설계/개발 인원 수"
          v-model.trim="customer.development_count"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문 인증범위</label>
      <div class="col-sm-9">
        <div>
          <textarea
            class="form-control"
            id="scope_ko"
            v-model.trim="customer.certification_scope_kor"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">영문 인증범위</label>
      <div class="col-sm-9">
        <div>
          <textarea
            class="form-control"
            id="scope_en"
            v-model.trim="customer.certification_scope_eng"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">활동</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.activity"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">제품(서비스) 공정</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.process"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">교대근무</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="shift"
            id="shift_yes"
            value="yes"
            v-model="customer.shift"
          />
          <label class="form-check-label" for="shift_yes">있음</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="shift"
            id="shift_no"
            value="no"
            v-model="customer.shift"
          />
          <label class="form-check-label" for="shift_no">없음</label>
        </div>
      </div>
    </div>
    <div class="row mb-3" v-show="customer.shift == 'yes'">
      <label class="col-sm-3 col-form-label">교대근무 횟 수 / 인원 수</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.shift_work_count"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">적용제외조항 유무</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="exclusion"
            id="exclusion_yes"
            value="yes"
            v-model="customer.exclusion"
          />
          <label class="form-check-label" for="exclusion_yes">있음</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="exclusion"
            id="exclusion_no"
            value="no"
            v-model="customer.exclusion"
          />
          <label class="form-check-label" for="exclusion_no">없음</label>
        </div>
      </div>
    </div>
    <div class="row mb-3" v-show="customer.exclusion == 'yes'">
      <label class="col-sm-3 col-form-label">적용제외 조항/근거</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.exclusion_reason"
        />
      </div>
    </div>
    <div class="row mb-3" v-show="customer.certification_type !== 'initial'">
      <label class="col-sm-3 col-form-label">전환(방문)심사일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.transfer_date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">1단계 심사시작일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.s1_start_date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">1단계 심사종료일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.s1_end_date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">2단계 심사시작일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.s2_start_date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">2단계 심사종료일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.s2_end_date"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">2단계 심사팀원</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="2단계 심사를 같이 진행할 팀원을 입력해주세요."
          v-model.trim="customer.s2_team"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">매뉴얼 제/개정일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.manual_date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">내부심사일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.internal_date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">경영검토일</label>
      <div class="col-sm-9">
        <input
          type="date"
          class="form-control"
          v-model.trim="customer.management_date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">사업장외 활동</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="outside_activity"
            id="outside_activity_yes"
            value="yes"
            v-model="customer.outside_activity"
          />
          <label class="form-check-label" for="outside_activity_yes"
            >있음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="outside_activity"
            id="outside_activity_no"
            value="no"
            v-model="customer.outside_activity"
          />
          <label class="form-check-label" for="outside_activity_no">없음</label>
        </div>
      </div>
    </div>
    <div class="row mb-3" v-show="customer.outside_activity == 'yes'">
      <label class="col-sm-3 col-form-label">사업장외 활동 업무/인원수</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="활동내용 / 인원 수"
          v-model.trim="customer.outside_activity_count"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">외주처리 유무</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="outsourcing"
            id="outsourcing_yes"
            value="yes"
            v-model="customer.outsourcing"
          />
          <label class="form-check-label" for="outsourcing_yes">있음</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="outsourcing"
            id="outsourcing_no"
            value="no"
            v-model="customer.outsourcing"
          />
          <label class="form-check-label" for="outsourcing_no">없음</label>
        </div>
      </div>
    </div>

    <div class="row mb-3" v-show="customer.outsourcing == 'yes'">
      <label class="col-sm-3 col-form-label">외주처리 프로세스</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="외주처리 프로세스"
          v-model.trim="customer.outsourcing_process"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">건설면허보유 여부</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="construction_license"
            id="construction_license_yes"
            value="yes"
            v-model="customer.construction_license"
          />
          <label class="form-check-label" for="construction_license_yes"
            >있음</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="construction_license"
            id="construction_license_no"
            value="no"
            v-model="customer.construction_license"
          />
          <label class="form-check-label" for="construction_license_no"
            >없음</label
          >
        </div>
      </div>
    </div>
    <div class="row mb-3" v-show="customer.construction_license == 'yes'">
      <label class="col-sm-3 col-form-label">건설면허 내용</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="건설면허 내용"
          v-model="customer.construction_license_content"
        />
      </div>
    </div>
    <HR></HR>

    <h3>ISO14001신청정보</h3>

    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">인증이력</label>
      <div class="col-sm-9">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model.trim="customer.certification_history"
        >
          <option sel>선택하세요</option>
          <option value="y">있음</option>
          <option value="n">없음</option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">인증이력 경영시스템</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.certification_history_standard"
        />
      </div>
    </div> -->

    <!-- iso14001인증 신청 -->
    <div>
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">사업장 입지조건</label>
        <div class="col-sm-9">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox1"
              value="특별대책지역"
              v-model="customer.location"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >특별대책지역</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox2"
              value="상수원보호구역"
              v-model="customer.location"
            />
            <label class="form-check-label" for="inlineCheckbox2"
              >상수원보호구역</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox3"
              value="공업단지"
              v-model="customer.location"
            />
            <label class="form-check-label" for="inlineCheckbox3"
              >공업단지</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox4"
              value="도시"
              v-model="customer.location"
            />
            <label class="form-check-label" for="inlineCheckbox4">도시</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox5"
              value="농촌"
              v-model="customer.location"
            />
            <label class="form-check-label" for="inlineCheckbox5">농촌</label>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">생산방법</label>
        <div class="col-sm-9">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox6"
              value="단순조립가공"
              v-model="customer.production_method"
            />
            <label class="form-check-label" for="inlineCheckbox6"
              >단순조립/가공</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox7"
              value="화학처리"
              v-model="customer.production_method"
            />
            <label class="form-check-label" for="inlineCheckbox7"
              >화학처리</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox8"
              value="자동화"
              v-model="customer.production_method"
            />
            <label class="form-check-label" for="inlineCheckbox8">자동화</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineCheckbox9"
              value="기타"
              v-model="customer.production_method"
            />
            <label class="form-check-label" for="inlineCheckbox9">기타</label>
          </div>
        </div>
      </div>
      <div class="row mb-3" v-show="customer.production_method == '기타'">
        <label class="col-sm-3 col-form-label">생산방법 기타내역</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            placeholder="생산방법 기타내역"
            v-model.trim="customer.production_method_etc"
          />
        </div>
      </div>

      <!-- 환경허가 신고사항 -->

      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">환경허가 신고사항</label>
        <div class="col-sm-9">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineRadio1"
              value="yes"
              v-model="customer.environmental_permit"
            />
            <label class="form-check-label" for="inlineRadio1">예</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineRadio2"
              value="no"
              v-model="customer.environmental_permit"
            />
            <label class="form-check-label" for="inlineRadio2">아니오</label>
          </div>
        </div>
      </div>
      <div class="row mb-3" v-show="customer.environmental_permit == 'yes'">
        <label class="col-sm-3 col-form-label">환경허가 신고내역</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            placeholder="신고내역"
            v-model.trim="customer.environmental_permit_content"
          />
        </div>
      </div>

      <!-- 최근3년 환경사고 -->

      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">환경사고 유무</label>
        <div class="col-sm-9">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineRadio3"
              value="yes"
              v-model="customer.environmental_accident"
            />
            <label class="form-check-label" for="inlineRadio3">예</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="inlineRadio4"
              value="no"
              v-model="customer.environmental_accident"
            />
            <label class="form-check-label" for="inlineRadio4">아니오</label>
          </div>
        </div>
      </div>
      <div class="row mb-3" v-show="customer.environmental_accident == 'yes'">
        <label class="col-sm-3 col-form-label">환경사고내역</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            placeholder="사고내역"
            v-model.trim="customer.environmental_accident_content"
          />
        </div>
      </div>

      <!--유해화학물질유형  -->

      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">유해/화학물질 유형</label>
        <div class="col-sm-9">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="hazardous_chemical1"
              value="해당없음"
              v-model="customer.hazardous_chemical"
            />
            <label class="form-check-label" for="hazardous_chemical1"
              >해당없음</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="hazardous_chemical2"
              value="용액"
              v-model="customer.hazardous_chemical"
            />
            <label class="form-check-label" for="hazardous_chemical2"
              >용액</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="hazardous_chemical3"
              value="금속"
              v-model="customer.hazardous_chemical"
            />
            <label class="form-check-label" for="hazardous_chemical3"
              >금속</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="hazardous_chemical4"
              value="화학물"
              v-model="customer.hazardous_chemical"
            />
            <label class="form-check-label" for="hazardous_chemical4"
              >화학물</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="hazardous_chemical5"
              value="기타"
              v-model="customer.hazardous_chemical"
            />
            <label class="form-check-label" for="hazardous_chemical5"
              >기타</label
            >
          </div>
        </div>
      </div>
      <div class="row mb-3" v-show="customer.hazardous_chemical == '기타'">
        <label class="col-sm-3 col-form-label">기타유형</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            placeholder="기타유형"
            v-model.trim="customer.hazardous_chemical_content"
          />
        </div>
      </div>

      <!-- 대기 -->
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">(대기)환경측면</label>
        <div class="col-sm-9">
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
            <label class="form-check-label" for="air_pollution2">미립자</label>
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
        </div>
      </div>
      <div class="row mb-3" v-show="customer.air_pollution == '기타'">
        <label class="col-sm-3 col-form-label">기타유형</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            placeholder="대기 기타유형"
            v-model.trim="customer.hazardous_chemical_content"
          />
        </div>
      </div>

      <!-- 토양 -->
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">(토양)환경측면</label>
        <div class="col-sm-9">
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
        </div>
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
      <!-- 수질 -->
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">(수질)환경측면</label>
        <div class="col-sm-9">
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
            <label class="form-check-label" for="water_pollution2">폐수</label>
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
            <label class="form-check-label" for="water_pollution5">빗물</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="water_pollution6"
              value="기타"
              v-model="customer.water_pollution"
            />
            <label class="form-check-label" for="water_pollution6">기타</label>
          </div>
        </div>
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

      <!--천연자원  -->
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">(천연자원)환경측면</label>
        <div class="col-sm-9">
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
        </div>
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

      <!-- 에너지 -->
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">(에너지)환경측면</label>
        <div class="col-sm-9">
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
            <label class="form-check-label" for="energy_pollution4">진동</label>
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
            <label class="form-check-label" for="energy_pollution6">기타</label>
          </div>
        </div>
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

      <!-- 폐기물 -->
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">(폐기물)환경측면</label>
        <div class="col-sm-9">
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
            <label class="form-check-label" for="waste_pollution6">기타</label>
          </div>
        </div>
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
    </div>

    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <button class="btn btn-primary" @click="doSave">저장</button>
  </div>
</template>
<script>
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
      id: '',
      searchName: '',
      customer: {
        customer_name: '',
        email: '',
        phone: '',
        address: '',
        contact_name: '',
        contact_phone: '',
        contact_email: '',
        business_no: '',
        representative_name: '',
        certification_type: '',
        certification_standard: [],
        hazardous_chemical: '',
        hazardous_chemical_content: '',
        air_pollution: [],
        soil_pollution: [],
        water_pollution: [],
        air_pollution_content: '',
        soil_pollution_content: '',
        water_pollution_content: '',
        natural_resource_pollution: [],
        natural_resource_pollution_content: '',
        energy_pollution: [],
        energy_pollution_content: '',
        waste_pollution: [],
        waste_pollution_content: ''
      }
    }
  },
  created() {},
  mounted() {
    // console.log(this.user.userInfo.email)
    if (this.user.userInfo.email === undefined) {
      alert('로그인이 필요합니다.')
      this.$router.push({ path: '/' })
    }
  },
  unmounted() {},
  methods: {
    async doSave() {
      if (this.supplier.supplier_name === '') {
        return this.$swal('Supplier Name을 입력하세요.')
      }

      this.$swal({
        title: '공급자를 생성 하시겠습니까?',
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

          const r = await this.$post('http://localhost:3000/api/supplier', {
            param: this.supplier
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('공급자 정보가 저장되었습니다.')
            this.$router.push({
              path: '/supplier/detail',
              query: { supplier_id: r.data.insertId }
            })
          }
        }
      })
    },
    goToList() {
      this.$router.push({ path: '/supplier/list' })
    }
  }
}
</script>
