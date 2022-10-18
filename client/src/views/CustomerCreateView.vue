<template>
  <div class="container mt-5">
    <h3 class="mb-4 fw-bold">[인증심사신청]</h3>
    <!-- <hr style="width: 50%" /> -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사유형</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="initial"
            value="최초"
            v-model="customer.certification_type"
          />
          <label class="form-check-label" for="initial">최초심사</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="transSurveillance"
            value="전환사후"
            v-model="customer.certification_type"
          />
          <label class="form-check-label" for="transSurveillance"
            >전환사후심사</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="transRenewal"
            value="전환갱신"
            v-model="customer.certification_type"
          />
          <label class="form-check-label" for="transRenewal"
            >전환갱신심사</label
          >
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문상호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.name_ko"
        />
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
          v-model="customer.name_en"
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
      <label class="col-sm-3 col-form-label">대표자 휴대폰번호</label>
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
        <input type="text" class="form-control" v-model.trim="customer.fax" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address_ko"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">영문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address_en"
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
          v-model.trim="customer.homepage"
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
            v-model.trim="customer.scope_ko"
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
            v-model.trim="customer.scope_en"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- 활동 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">인증범위 활동</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_activity_1"
            value="설계개발"
            v-model.trim="customer.activity"
          />
          <label class="form-check-label" for="certification_activity_1"
            >설계/개발</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_activity_2"
            value="제조생산"
            v-model="customer.activity"
          />
          <label class="form-check-label" for="certification_activity_2"
            >제조/생산</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_activity_3"
            value="설치시공"
            v-model="customer.activity"
          />
          <label class="form-check-label" for="certification_activity_3"
            >설치/시공</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_activity_4"
            value="판매"
            v-model="customer.activity"
          />
          <label class="form-check-label" for="certification_activity_4"
            >판매</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="certification_activity_5"
            value="서비스"
            v-model="customer.activity"
          />
          <label class="form-check-label" for="certification_activity_5"
            >서비스</label
          >
        </div>
      </div>
    </div>

    <!-- 공정 -->
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

    <!-- 교대근무 -->
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

    <!-- <div class="row mb-3">
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
    </div> -->

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
    <hr />

    <!-- <div
      v-show="
        customer.certification_standard.includes('ISO14001') === true ||
        customer.certification_standard.includes('ISO45001') === true
      "
    > -->
    <div>
      <h3 class="mb-5 fw-bold">[ISO14001/ISO45001 신청정보]</h3>

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
              <label class="form-check-label" for="inlineCheckbox8"
                >자동화</label
              >
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

        <!-- <div
          class="row mb-3"
          v-show="customer.certification_standard.includes('ISO14001') == true"
        > -->
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

        <!-- <div
          class="row mb-3"
          v-show="customer.certification_standard.includes('ISO14001') == true"
        > -->
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
              placeholder="환경사고내역"
              v-model.trim="customer.environmental_accident_content"
            />
          </div>
        </div>

        <!-- 최근3년 안전보건사고 -->

        <!-- <div
          class="row mb-3"
          v-show="customer.certification_standard.includes('ISO45001') == true"
        > -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">안전보건사고 유무</label>
          <div class="col-sm-9">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="safety_accident1"
                value="yes"
                v-model="customer.safety_accident"
              />
              <label class="form-check-label" for="safety_accident1">예</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="safety_accident2"
                value="no"
                v-model="customer.safety_accident"
              />
              <label class="form-check-label" for="safety_accident2"
                >아니오</label
              >
            </div>
          </div>
        </div>
        <div class="row mb-3" v-show="customer.safety_accident == 'yes'">
          <label class="col-sm-3 col-form-label">안전보건 사고내역</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              placeholder="안전보건 사고내역"
              v-model.trim="customer.safety_accident_content"
            />
          </div>
        </div>

        <!-- 사업장외부 근무자 -->

        <!-- <div
          class="row mb-3"
          v-show="customer.certification_standard.includes('ISO45001') == true"
        >  -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">사업장 외부 근무자</label>
          <div class="col-sm-9">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="outside_worker1"
                value="yes"
                v-model="customer.outside_worker"
              />
              <label class="form-check-label" for="outside_worker1">예</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="outside_worker2"
                value="no"
                v-model="customer.outside_worker"
              />
              <label class="form-check-label" for="outside_worker2"
                >아니오</label
              >
            </div>
          </div>
        </div>
        <div class="row mb-3" v-show="customer.outside_worker == 'yes'">
          <label class="col-sm-3 col-form-label">업무내용</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              placeholder="자업장 외부근무자 업무 기술"
              v-model.trim="customer.outside_worker_content"
            />
          </div>
        </div>

        <!--유해위험물질유형  -->

        <!-- <div
          class="row mb-3"
          v-show="
            customer.certification_standard.includes('ISO14001') == true ||
            customer.certification_standard.includes('ISO45001') == true
          "
        > -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">유해/위험물질 유형</label>
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

        <!-- 고객에 의해 파악된 환경측면 및 영향 -->
        <!-- <div
          v-show="customer.certification_standard.includes('ISO14001') === true"
        > -->
        <div>
          <h5 class="mt-3 mb-3">=== 고객에 의해 파악된 환경측면 및 영향 ===</h5>

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
                <label class="form-check-label" for="air_pollution3"
                  >가스</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="air_pollution4"
                  value="소음"
                  v-model="customer.air_pollution"
                />
                <label class="form-check-label" for="air_pollution4"
                  >소음</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="air_pollution5"
                  value="악취"
                  v-model="customer.air_pollution"
                />
                <label class="form-check-label" for="air_pollution5"
                  >악취</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="air_pollution6"
                  value="기타"
                  v-model="customer.air_pollution"
                />
                <label class="form-check-label" for="air_pollution6"
                  >기타</label
                >
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
                <label class="form-check-label" for="soil_pollution2"
                  >매립</label
                >
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
                <label class="form-check-label" for="soil_pollution6"
                  >기타</label
                >
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
                <label
                  class="form-check-label"
                  for="natural_resource_pollution1"
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
                <label
                  class="form-check-label"
                  for="natural_resource_pollution2"
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
                <label
                  class="form-check-label"
                  for="natural_resource_pollution3"
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
                <label
                  class="form-check-label"
                  for="natural_resource_pollution4"
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
                <label
                  class="form-check-label"
                  for="natural_resource_pollution5"
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
                <label
                  class="form-check-label"
                  for="natural_resource_pollution6"
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
                <label class="form-check-label" for="waste_pollution6"
                  >기타</label
                >
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
      </div>

      <!-- <div
        v-show="customer.certification_standard.includes('ISO45001') === true"
      > -->
      <div>
        <h5 class="mt-3 mb-3">=== 고객에 의해 파악된 위험요인 ===</h5>

        <!-- 기계적 위험요인 -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">기계(설비) 요인</label>
          <div class="col-sm-9">
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
          </div>
        </div>

        <!-- 전기적 위험요인 -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">전기적 요인</label>
          <div class="col-sm-9">
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
          </div>
        </div>

        <!-- 화학(물질적) 위험요인 -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">화학(물질)적 요인</label>
          <div class="col-sm-9">
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
          </div>
        </div>

        <!-- 생물학적 위험요인 -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">생물학적 요인</label>
          <div class="col-sm-9">
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
          </div>
        </div>

        <!-- 작업특성 위험요인 -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">작업특성 요인</label>
          <div class="col-sm-9">
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
          </div>
        </div>

        <!-- 작업환경 위험요인 -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">작업환경 요인</label>
          <div class="col-sm-9">
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
          </div>
        </div>
      </div>
    </div>

    <!-- 사업자등록증 첨부 -->
    <div class="row mb-2">
      <label class="col-sm-3 col-form-label">사업자등록증 첨부</label>
      <div class="col-sm-9">
        <input
          type="file"
          class="form-control"
          accept="application/pdf, image/png, image/jpeg, image/jpg"
          @change="uploadImage($event.target.files)"
        />
      </div>
    </div>
    <div class="alert alert-secondary mb-5" role="alert">
      <ul>
        <li>최대 1개 가능</li>
        <li>파일 확장자 : pdf, png, jpg만 가능</li>
      </ul>
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
      console.log(data.userInfo.name, data.userInfo.email)
      return data

      // return this.$store.state.user.user
      // return this.$store.user.userInfo
    }
  },
  components: {},
  data() {
    return {
      // id: '',
      // searchName: '',
      // imgSrc: '',
      customer: {
        id: -1,
        certification_type: '',
        name_ko: '',
        name_en: '',
        business_no: '',
        ceo_name: '',
        ceo_phone: '',
        email: '',
        phone: '',
        fax: '',
        // address_ko: '',
        // address_en: '',
        // contact_name: '',
        // contact_phone: '',
        // contact_email: '',
        // homepage: '',
        // organization_scope: '',
        certification_standard: [],
        // employee_count: '',
        // design: '',
        // development_count: '',
        scope_ko: '',
        // scope_en: '',
        // activity: [],
        // process: '',
        // shift: '',
        // shift_work_count: '',
        // exclusion: '',
        // exclusion_reason: '',
        // transfer_date: '',
        // s1_start_date: '',
        // s1_end_date: '',
        // s2_start_date: '',
        // s2_end_date: '',
        // s2_team: '',
        // manual_date: '',
        // internal_date: '',
        // management_date: '',
        // outsourcing: '',
        // outsourcing_process: '',
        // construction_license: '',
        // construction_license_content: '',
        // hazardous_chemical: '',
        // hazardous_chemical_content: '',
        // location: '',
        // production_method: '',
        // production_method_etc: '',
        // environmental_permit: '',
        // environmental_permit_content: '',
        // environmental_accident: '',
        // environmental_accident_content: '',
        // safety_accident: '',
        // safety_accident_content: '',
        // outside_worker: '',
        // outside_worker_content: '',
        // hazardous_chemical_worker: '',
        // hazardous_chemical_worker_content: '',
        // air_pollution: [],
        // air_pollution_content: '',
        // soil_pollution: [],
        // soil_pollution_content: '',
        // water_pollution: [],
        // water_pollution_content: '',
        // natural_resource_pollution: [],
        // natural_resource_pollution_content: '',
        // energy_pollution: [],
        // energy_pollution_content: '',
        // waste_pollution: [],
        // waste_pollution_content: '',
        // machine_factor: [],
        // electric_factor: [],
        // chemical_factor: [],
        // biological_factor: [],
        // work_factor: [],
        // work_env: [],
        // img_license: '',
        auditor_name: ''
        // auditor_email: ''
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
    async uploadImage(files) {
      const r = this.$upload('/api/upload/file', files[0])
      console.log(r)
      this.customer.img_license = r.filename
      console.log(this.customer.img_license)
    },
    async doSave() {
      // if (this.customer.name_ko === '') {
      //   return this.$swal('국문회사명을 입력하세요.')
      // }

      console.log(this.customer.certification_standard)

      this.$swal({
        title: '인증신청을 생성 하시겠습니까?',
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

          const r = await this.$post('/api/customer', {
            param: {
              certification_type: this.customer.certification_type,
              certification_standard: JSON.stringify(
                this.customer.certification_standard
              ),
              name_ko: this.customer.name_ko,
              name_en: this.customer.name_en,
              business_no: this.customer.business_no,
              ceo_name: this.customer.ceo_name,
              ceo_phone: this.customer.ceo_phone,
              email: this.customer.email,
              phone: this.customer.phone,
              fax: this.customer.fax
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('인증신청 정보가 저장되었습니다.')
            this.$router.push({
              path: '/customer/list'
              //     query: { customer_id: r.data.insertId }
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
