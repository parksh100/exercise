<template>
  <div class="container mt-5">
    <h3 class="mb-4 fw-bold text-center">인증심사신청</h3>
    <hr />
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">고객구분</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="new"
            value="신규"
            v-model="customer.customer_type"
          />
          <label class="form-check-label" for="new">신규</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="transfer"
            value="전환"
            v-model="customer.customer_type"
          />
          <label class="form-check-label" for="transfer">전환</label>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문상호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          ref="name_ko"
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
          v-model.trim="business_no"
          maxlength="12"
          placeholder="번호만 입력"
          @keyup="getBusinessNoMask(business_no)"
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
          v-model.trim="ceo_phone"
          placeholder="번호만 입력"
          @keyup="getCeoMobileMask(ceo_phone)"
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
        <input
          type="text"
          class="form-control"
          v-model.trim="phone"
          @keyup="getPhoneMask(phone)"
          placeholder="번호만 입력"
          maxlength="13"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">대표팩스번호</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="fax"
          @keyup="getFaxMask(fax)"
          placeholder="번호만 입력"
          maxlength="13"
        />
      </div>
    </div>

    <!-- 국문주소 -->
    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address_ko"
        />
      </div>
    </div> -->
    <!-- end 국문주소 -->

    <!--start daum api  -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">우편번호</label>
      <div class="col-sm-5">
        <input
          type="text"
          class="form-control"
          id="postcode"
          v-model="customer.postcode"
          disabled
        />
      </div>
      <div class="col-sm-4">
        <button class="btn btn-secondary" @click="execDaumPostcode">
          주소검색
        </button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">국문 주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="address"
          v-model="customer.address_ko"
          disabled
        />
      </div>
    </div>
    <!-- <label class="col-sm-3 col-form-label">지번주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="jibunAddress"
          v-model.trim="customer.address_jibun"
        />
      </div> -->

    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">상세주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="detailAddress"
          v-model="customer.address_detail"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">참고항목</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          id="extraAddress"
          v-model="customer.address_reference"
          disabled
        />
      </div>
    </div>

    <!--end daum api  -->

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
      <label class="col-sm-3 col-form-label">영문 상세주소</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address_en_detail"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">담당자명/직위</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="홍길동/과장"
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
          placeholder="번호만 입력"
          v-model.trim="contact_phone"
          @keyup="getContactPhoneMask(contact_phone)"
          maxlength="13"
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
            value="No"
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
      <label class="col-sm-3 col-form-label"
        ><a href="https://translate.google.co.kr/?hl=ko" target="_blank">
          영문 인증범위</a
        ></label
      >

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
            name="certification_activity"
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
            name="certification_activity"
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
            name="certification_activity"
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
            name="certification_activity"
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
            name="certification_activity"
          />
          <label class="form-check-label" for="certification_activity_5"
            >서비스</label
          >
        </div>
      </div>
    </div>
    <!-- 심사코드 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">IAF 코드</label>
      <div class="col-sm-9">
        <div>
          <div class="bg-danger">
            <label class="form-check-label text-white"
              >심사원의 심사가능코드</label
            >
            <p class="text-white">
              12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28
            </p>
          </div>
          <div>
            {{ customer.iaf_code }}
            <small class="text-primary"
              >* 인증원의 계약검토를 통해 확정됩니다.</small
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_35"
              value="01"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_35"
              >01-Q(농,수산업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_36"
              value="02"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_36"
              >02-Q(광업 및 채석업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_1"
              value="03"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_1"
              >03-QE(음식료 및 담배)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_2"
              value="04"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_2"
              >04-Q(섬유 및 섬유제품)</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_3"
              value="05"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_3"
              >05Q(가죽 및 가죽제품)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_4"
              value="06"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_4"
              >06-QE(목재 및 목재제품)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_5"
              value="07"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_5"
              >07-Q(펄프, 종이, 종이제품)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_6"
              value="08"
              v-model="customer.iaf_code"
              disabled
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_6">08(출판업)</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_7"
              value="09"
              v-model="customer.iaf_code"
              disabled
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_7">09(인쇄업)</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_8"
              value="10"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_8"
              >10-Q(코크스, 연탄 및 석유정제품 제조업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_9"
              value="12"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_9"
              >12-QE(화학물질, 화학제품 및 화학섬유 제조업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_10"
              value="13"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
              disabled
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
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_11"
              >14-QE(고무제품 및 플라스틱제품 제조업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_12"
              value="15"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_12"
              >15-QE(비금속 광물제품 제조업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_13"
              value="16"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_13"
              >16-QE(콘크리트, 시멘트, 석회 및 플라스터 등 제조업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_14"
              value="17"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_14"
              >17-QEO(1차 금속 및 금속가공제품 제조업 중 1차 금속 제조업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_15"
              value="18"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_15"
              >18-QEO(기계 및 장비 제조업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_16"
              value="19"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_16"
              >19-QEO(전기기기 및 광학기기 제조업)</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_17"
              value="20"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
              disabled
            />
            <label class="form-check-label" for="code_17">20(조선업)</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_18"
              value="21"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
              disabled
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
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_19"
              >22-EO(기타 운송장비 제조업)</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_20"
              value="23"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_20"
              >23-QE(기타 제조업)</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_40"
              value="24"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
              disabled
            />
            <label class="form-check-label" for="code_40">24(재생업)</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_21"
              value="25"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
              disabled
            />
            <label class="form-check-label" for="code_21">25(전기공급업)</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_22"
              value="26"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
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
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
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
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_24">28-QEO(건설업)</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_25"
              value="29"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_25"
              >29-QEO(도소매업, 자동차 및 모터사이클 수리업, 개인 및 가정용품
              수리업)</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_26"
              value="30"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_26"
              >30-QE(숙박업, 음식점업 및 주점업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_27"
              value="31"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_27"
              >31-QE(운송업, 창고업 및 통신업)</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_28"
              value="32"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_28"
              >32-QEO(금융업, 보험업, 부동산업 및 임대업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_29"
              value="33"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_29"
              >33-QEO(정보기술업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_41"
              value="34"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_41"
              >34-QEO(전문, 과학 및 기술서비스업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_30"
              value="35"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_30"
              >35-QEO(기타 서비스업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_31"
              value="36"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_31"
              >36-QEO(공공 행정)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_32"
              value="37"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_32"
              >37-QEO(교육 서비스업)</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="code_33"
              value="38"
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
              disabled
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
              v-model="customer.iaf_code"
              @change="classifyComplexity(), classifyRisk()"
            />
            <label class="form-check-label" for="code_34"
              >39-Q(기타 사회 서비스업)</label
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 환경복잡성 -->
    <div
      class="row mb-3"
      v-show="customer.certification_standard.includes('EMS') == true"
    >
      <label class="col-sm-3 col-form-label">환경복잡성</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="environment_complexity_1"
            value="높음"
            v-model="customer.environment_complexity"
            disabled
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
            v-model="customer.environment_complexity"
            disabled
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
            v-model="customer.environment_complexity"
            disabled
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
            v-model="customer.environment_complexity"
            disabled
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
            v-model="customer.environment_complexity"
            disabled
          />
          <label class="form-check-label" for="environment_complexity_5"
            >특별</label
          >
        </div>
      </div>
    </div>

    <!-- 안전보건위험성 -->
    <div
      class="row mb-3"
      v-show="customer.certification_standard.includes('OHSMS') == true"
    >
      <label class="col-sm-3 col-form-label">안전보건위험성</label>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name=""
            id="safety_health_risk_1"
            value="높음"
            v-model="customer.safety_health_risk"
            disabled
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
            v-model="customer.safety_health_risk"
            disabled
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
            v-model="customer.safety_health_risk"
            disabled
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
            v-model="customer.safety_health_risk"
            disabled
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
            v-model="customer.safety_health_risk"
            disabled
          />
          <label class="form-check-label" for="safety_health_risk_5"
            >특별</label
          >
        </div>
      </div>
    </div>

    <!-- 공정 -->
    <div class="row mb-3">
      <label class="col-sm-3 col-form-label">제품(서비스)명 및 공정</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.process"
        />
      </div>
    </div>

    <!-- 교대근무 -->
    <!-- <div class="row mb-3">
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
            value="No"
            v-model="customer.shift"
          />
          <label class="form-check-label" for="shift_no">없음</label>
        </div>
      </div>
    </div> -->
    <!-- <div class="row mb-3" v-show="customer.shift == 'yes'">
      <label class="col-sm-3 col-form-label">교대근무 횟 수 / 인원 수</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.shift_work_count"
        />
      </div>
    </div> -->
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
            value="No"
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
    <!-- <div class="row mb-3" v-show="customer.certification_type !== 'initial'">
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
    </div> -->

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
            value="No"
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
            value="No"
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
    <!-- <div class="row mb-3">
      <label class="col-sm-3 col-form-label">심사비(원)(VAT별도)</label>
      <div class="col-sm-9">
        <input
          type="number"
          class="form-control"
          placeholder=""
          v-model="customer.audit_fee"
        />
      </div>
    </div> -->
    <hr />

    <!-- <div
      v-show="
        customer.certification_standard.includes('EMS') === true ||
        customer.certification_standard.includes('OHSMS') === true
      "
    > -->
    <!-- <h3 class="mb-5 fw-bold">ISO14001/ISO45001 신청정보</h3> -->

    <!-- iso14001인증 신청 -->
    <!-- <div v-show="customer.certification_standard.includes('EMS') === true"> -->
    <!-- <div class="row mb-3">
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
        </div> -->

    <!-- <div class="row mb-3">
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
        </div> -->
    <!-- <div class="row mb-3" v-show="customer.production_method == '기타'">
          <label class="col-sm-3 col-form-label">생산방법 기타내역</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              placeholder="생산방법 기타내역"
              v-model.trim="customer.production_method_etc"
            />
          </div>
        </div> -->

    <!-- 환경허가 신고사항 -->

    <div
      class="row mb-3"
      v-show="customer.certification_standard.includes('EMS') == true"
    >
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">환경측면 파악여부</label>
        <div class="col-sm-9">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="environmentalAspect1"
              value="yes"
              v-model="customer.environmental_aspect"
            />
            <label class="form-check-label" for="environmentalAspect1"
              >예</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="environmentalAspect2"
              value="No"
              v-model="customer.environmental_aspect"
            />
            <label class="form-check-label" for="environmentalAspect2"
              >아니오</label
            >
          </div>
          <span>* 주요한 환경측면을 파악하고 있는가?</span>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">환경허가 신고사항 유무</label>
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
              value="No"
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
              value="No"
              v-model="customer.environmental_accident"
            />
            <label class="form-check-label" for="inlineRadio4">아니오</label>
          </div>
        </div>
      </div>
      <div class="row mb-3" v-show="customer.environmental_accident == 'yes'">
        <label class="col-sm-3 col-form-label">환경사고내용</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            placeholder="환경사고내용"
            v-model.trim="customer.environmental_accident_content"
          />
        </div>
      </div>
    </div>

    <!-- 사업장외부 근무자 -->

    <div
      class="row mb-3"
      v-show="customer.certification_standard.includes('OHSMS') == true"
    >
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label">위험요소 파악여부</label>
        <div class="col-sm-9">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="riskFactor1"
              value="yes"
              v-model="customer.risk_factor"
            />
            <label class="form-check-label" for="riskFactor1">예</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="riskFactor2"
              value="no"
              v-model="customer.risk_factor"
            />
            <label class="form-check-label" for="environmentalAspect2"
              >아니오</label
            >
          </div>
          <span>* 주요한 위험요소를 파악하고 있는가?</span>
        </div>
      </div>
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
              value="No"
              v-model="customer.outside_worker"
            />
            <label class="form-check-label" for="outside_worker2">아니오</label>
          </div>
        </div>
      </div>
      <div class="row mb-3" v-show="customer.outside_worker == 'yes'">
        <label class="col-sm-3 col-form-label">업무내용</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            placeholder="사업장 외부근무자 업무 기술"
            v-model.trim="customer.outside_worker_content"
          />
        </div>
      </div>
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
              value="No"
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
    </div>
    <!-- 최근3년 안전보건사고 -->

    <!-- <div
      class="row mb-3"
      v-show="customer.certification_standard.includes('OHSMS') == true"
    > -->

    <!-- <div
        v-show="customer.certification_standard.includes('ISO45001') === true"
      > -->
    <!-- <div>
        <h5 class="mt-3 mb-3">
          <i
            class="fa-solid fa-square-caret-right"
            style="color: blueviolet"
          ></i>
          고객에 의해 파악된 위험요인
        </h5> -->

    <!-- 기계적 위험요인 -->
    <!-- <div class="row mb-3">
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
        </div> -->

    <!-- 전기적 위험요인 -->
    <!-- <div class="row mb-3">
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
        </div> -->

    <!-- 화학(물질적) 위험요인 -->
    <!-- <div class="row mb-3">
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
        </div> -->

    <!-- 생물학적 위험요인 -->
    <!-- <div class="row mb-3">
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
        </div> -->

    <!-- 작업특성 위험요인 -->
    <!-- <div class="row mb-3">
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
        </div> -->

    <!-- 작업환경 위험요인 -->
    <!-- <div class="row mb-3">
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
        </div> -->
    <!-- </div> -->
    <!-- </div> -->

    <!-- 사업자등록증 첨부 -->
    <div class="row mb-2">
      <label class="col-sm-3 col-form-label">사업자등록증 첨부</label>
      <div class="col-sm-9">
        <input
          type="file"
          class="form-control"
          accept="application/pdf, image/*"
          accept-charset="utf-8"
          @change="uploadFile($event.target.files)"
        />
        <input
          type="text"
          class="form-control mt-2"
          v-model="customer.img_license_originalname"
          v-if="customer.img_license_originalname"
        />
      </div>
      <!-- <img
        :src="imgSrc"
        alt=""
        style="width: 100px; height: auto"
      /> -->
    </div>

    <div class="alert alert-secondary mb-5" role="alert">
      <ul>
        <li>최대 1개 가능</li>
        <li>파일 확장자 : pdf, 이미지 파일만 가능</li>
      </ul>
    </div>
    <!-- 이전인증서 첨부 -->
    <div v-show="customer.customer_type === '전환'">
      <div class="row mb-2">
        <label class="col-sm-3 col-form-label">이전인증서 첨부</label>
        <div class="col-sm-9">
          <input
            type="file"
            class="form-control"
            accept="application/pdf, image/*"
            accept-charset="utf-8"
            @change="uploadFile($event.target.files)"
          />
          <input
            type="text"
            class="form-control mt-2"
            v-model="customer.file_transCertification_originalname"
            v-if="customer.file_transCertification_originalname"
          />
        </div>
        <!-- <img
        :src="imgSrc"
        alt=""
        style="width: 100px; height: auto"
      /> -->
      </div>

      <div class="alert alert-secondary mb-5" role="alert">
        <ul>
          <li>최대 1개 가능</li>
          <li>파일 확장자 : pdf, 이미지 파일만 가능</li>
        </ul>
      </div>
    </div>
    <div class="text-end">
      <button class="btn btn-secondary me-1" @click="goToList">목록</button>
      <button class="btn btn-primary" @click="doSave">저장</button>
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
      fileCert: '',
      imgExt: '',
      ceo_phone: '',
      business_no: '',
      phone: '',
      fax: '',
      contact_phone: '',
      customer: {
        // id: -1,
        customer_type: '',
        name_ko: '',
        name_en: '',
        business_no: '',
        ceo_name: '',
        ceo_phone: '',
        email: '',
        phone: null,
        fax: '',
        postcode: '',
        // address_jibun: '',
        address_ko: '',
        address_detail: '',
        address_reference: '',
        address_en: '',
        address_en_detail: '',
        contact_name: '',
        contact_phone: '',
        contact_email: '',
        homepage: '',
        organization_scope: '',
        certification_standard: [],
        employee_count: '',
        design: '',
        development_count: '',
        scope_ko: '',
        scope_en: '',
        activity: [],
        process: '',
        shift: '',
        shift_work_count: '',
        exclusion: '',
        exclusion_reason: '',
        // transfer_date: '',
        // s1_start_date: '',
        // s1_end_date: '',
        // s2_start_date: '',
        // s2_end_date: '',
        // s2_team: '',

        outsourcing: '',
        outsourcing_process: '',
        construction_license: '',
        construction_license_content: '',
        iaf_code: [],
        // audit_fee: 0,
        // hazardous_chemical: '',
        // hazardous_chemical_content: '',
        // location: '',
        // production_method: '',
        // production_method_etc: '',
        environmental_permit: '',
        environmental_permit_content: '',
        environmental_accident: '',
        environmental_accident_content: '',
        safety_accident: '',
        safety_accident_content: '',
        outside_worker: '',
        outside_worker_content: '',
        // hazardous_chemical_worker: '',
        environmental_aspect: '',
        risk_factor: '',
        environment_complexity: '',
        safety_health_risk: '',
        classify_audit: '',
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
        img_license: '',
        img_license_originalname: '',
        imgExt: '',
        file_transCertification: '',
        file_transCertification_originalname: '',
        file_transCertification_ext: '',
        auditor_name: '',
        auditor_email: ''
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
    getClassifyAudit() {
      if (this.customer.certification_standard.length > 1) {
        this.customer.classify_audit = '통합심사'
      } else {
        this.customer.classify_audit = '단일심사'
      }
    },
    classifyComplexity() {
      console.log(this.customer.iaf_code)
      if (
        this.customer.iaf_code.includes('05') ||
        this.customer.iaf_code.includes('12') ||
        this.customer.iaf_code.includes('28')
      ) {
        this.customer.environment_complexity = '높음'
      } else if (
        this.customer.iaf_code.includes('03') ||
        this.customer.iaf_code.includes('04') ||
        this.customer.iaf_code.includes('07') ||
        this.customer.iaf_code.includes('15') ||
        this.customer.iaf_code.includes('16') ||
        this.customer.iaf_code.includes('20') ||
        this.customer.iaf_code.includes('22') ||
        this.customer.iaf_code.includes('24') ||
        this.customer.iaf_code.includes('31') ||
        this.customer.iaf_code.includes('39') ||
        this.customer.iaf_code.includes('17')
      ) {
        this.customer.environment_complexity = '보통'
      } else {
        this.customer.environment_complexity = '낮음'
      }
    },
    classifyRisk() {
      console.log(this.customer.iaf_code)
      if (
        this.customer.iaf_code.includes('05') ||
        this.customer.iaf_code.includes('12') ||
        this.customer.iaf_code.includes('17') ||
        this.customer.iaf_code.includes('28')
      ) {
        this.customer.safety_health_risk = '높음'
      } else if (
        this.customer.iaf_code.includes('03') ||
        this.customer.iaf_code.includes('04') ||
        this.customer.iaf_code.includes('06') ||
        this.customer.iaf_code.includes('07') ||
        this.customer.iaf_code.includes('08') ||
        this.customer.iaf_code.includes('15') ||
        this.customer.iaf_code.includes('16') ||
        this.customer.iaf_code.includes('20') ||
        this.customer.iaf_code.includes('22') ||
        this.customer.iaf_code.includes('24') ||
        this.customer.iaf_code.includes('31') ||
        this.customer.iaf_code.includes('39')
      ) {
        this.customer.safety_health_risk = '보통'
      } else {
        this.customer.safety_health_risk = '낮음'
      }
    },
    getBusinessNoMask(val) {
      const res = this.BizMask(val)
      // console.log(res)
      this.business_no = res
      // 서버 전송 값에는 '-' 제거
      this.customer.business_no = this.business_no.replace(/[^0-9]/g, '')
      // this.model.business_no = this.customer.business_no.replace(/-/g, '')
    },
    BizMask(bizNo) {
      if (!bizNo) return bizNo
      bizNo = bizNo.replace(/[^0-9]/g, '')
      // bizNo = bizNo.replace(/-/g, '')
      let res = ''
      if (bizNo.length <= 3) {
        res = bizNo
      } else {
        if (bizNo.length <= 5) {
          // res = bizNo
          res = bizNo.substr(0, 3) + '-' + bizNo.substr(3)
        } else if (bizNo.length <= 10) {
          res =
            bizNo.substr(0, 3) +
            '-' +
            bizNo.substr(3, 2) +
            '-' +
            bizNo.substr(5, 5)
        } else if (bizNo.length >= 11) {
          this.$swal('사업자 번호를 확인해주세요.')
        }
      }
      return res
    },
    // phoneFomatter(value) {
    //   if (!value) {
    //     return ''
    //   }
    //   value = value.replace(/[^0-9]/g, '')

    //   const result = []
    //   let restNumber = ''

    //   // 지역번호와 나머지 번호로 나누기
    //   if (value.startsWith('02')) {
    //     result.push(value.substring(0, 2))
    //     restNumber = value.substring(2)
    //   } else if (value.startsWith('1')) {
    //     // 지역번호가 없는 경우
    //     // 1xxx-yyyy
    //     restNumber = value
    //   } else {
    //     // 나머지 3자리 지역번호
    //     // 0xxx-yyyy-zzzz
    //     result.push(value.substring(0, 3))
    //     restNumber = value.substring(3)
    //   }

    //   if (restNumber.length === 7) {
    //     // 7자리만 남았을 때는 xxxx-yyyy
    //     result.push(restNumber.substring(0, 3))
    //     result.push(restNumber.substring(3))
    //   } else {
    //     result.push(restNumber.substring(0, 4))
    //     result.push(restNumber.substring(4))
    //   }

    //   return result.filter((val) => val).join('-')
    // },

    getContactPhoneMask(val) {
      const res = this.MobileMask(val)
      this.contact_phone = res
      // 서버 전송 값에는 '-' 제거
      this.customer.contact_phone = this.contact_phone
    },
    getCeoMobileMask(val) {
      const res = this.MobileMask(val)
      this.ceo_phone = res
      // 서버 전송 값에는 '-' 제거
      this.customer.ceo_phone = this.ceo_phone
    },
    MobileMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
      let res = ''
      if (phoneNumber.length < 4) {
        res = phoneNumber
      } else {
        // if (phoneNumber.substr(0, 2) === '02') {
        //   if (phoneNumber.length <= 5) {
        //     // 02-123-5678
        //     res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3)
        //   } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
        //     // 02-123-5678
        //     res =
        //       phoneNumber.substr(0, 2) +
        //       '-' +
        //       phoneNumber.substr(2, 3) +
        //       '-' +
        //       phoneNumber.substr(5)
        //   } else if (phoneNumber.length > 9) {
        //     // 02-1234-5678
        //     res =
        //       phoneNumber.substr(0, 2) +
        //       '-' +
        //       phoneNumber.substr(2, 4) +
        //       '-' +
        //       phoneNumber.substr(6)
        //   }
        // } else {
        if (phoneNumber.length < 8) {
          // res = phoneNumber
          res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 4)
        } else if (phoneNumber.length < 12) {
          //   res = phoneNumber.substr(0, 4) + '-' + phoneNumber.substr(4)
          // } else if (phoneNumber.length === 9) {
          res =
            phoneNumber.substr(0, 3) +
            '-' +
            phoneNumber.substr(3, 4) +
            '-' +
            phoneNumber.substr(7)
          // } else if (phoneNumber.length === 10) {
          //   res =
          //     phoneNumber.substr(0, 3) +
          //     '-' +
          //     phoneNumber.substr(3, 3) +
          //     '-' +
          //     phoneNumber.substr(6)
          // } else if (phoneNumber.length === 11) {
          //   // 010-1234-5678
          //   res =
          //     phoneNumber.substr(0, 3) +
          //     '-' +
          //     phoneNumber.substr(3, 4) +
          //     '-' +
          //     phoneNumber.substr(7)
        } else {
          this.$swal('휴대폰 번호를 확인해주세요.')
        }
      }
      // }
      return res
    },

    getPhoneMask(val) {
      const res = this.getMask(val)
      this.phone = res
      // 서버 전송 값에는 '-' 제거
      this.customer.phone = this.phone
    },
    getFaxMask(val) {
      const res = this.getMask(val)
      this.fax = res
      // 서버 전송 값에는 '-' 제거
      this.customer.fax = this.fax
    },
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
      let res = ''
      if (phoneNumber.length < 3) {
        res = phoneNumber
      } else {
        if (phoneNumber.substr(0, 2) === '02') {
          if (phoneNumber.length <= 5) {
            // 02-123-5678
            res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3)
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            // 02-123-5678
            res =
              phoneNumber.substr(0, 2) +
              '-' +
              phoneNumber.substr(2, 3) +
              '-' +
              phoneNumber.substr(5)
          } else if (phoneNumber.length > 9) {
            // 02-1234-5678
            res =
              phoneNumber.substr(0, 2) +
              '-' +
              phoneNumber.substr(2, 4) +
              '-' +
              phoneNumber.substr(6)
          }
        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber
          } else if (phoneNumber.length === 8) {
            res = phoneNumber.substr(0, 4) + '-' + phoneNumber.substr(4)
          } else if (phoneNumber.length === 9) {
            res =
              phoneNumber.substr(0, 3) +
              '-' +
              phoneNumber.substr(3, 3) +
              '-' +
              phoneNumber.substr(6)
          } else if (phoneNumber.length === 10) {
            res =
              phoneNumber.substr(0, 3) +
              '-' +
              phoneNumber.substr(3, 3) +
              '-' +
              phoneNumber.substr(6)
          } else if (phoneNumber.length > 10) {
            // 010-1234-5678
            res =
              phoneNumber.substr(0, 3) +
              '-' +
              phoneNumber.substr(3, 4) +
              '-' +
              phoneNumber.substr(7)
          }
        }
      }
      return res
    }, // getMask

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
    async uploadCert(files) {
      const r = await this.$upload('/api/upload/file', files[0])
      console.log(r)
      this.fileCert = `http://localhost:3000/static/uploads/${r.filename}`
      this.customer.file_transCertification = r.filename
      this.customer.file_transCertification_originalname = r.originalname
      this.file_transCertification_ext = r.mimetype
      console.log(this.customer.file_transCertification)
      console.log(this.customer.file_transCertification_originalname)
      console.log(this.file_transCertification_ext)
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
      // if (this.customer.customer_type === '') {
      //   return this.$swal('고객구분을 선택해주세요.')
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
      //   return this.$swal('담당자명/직위를 입력하세요.')
      // }
      // if (this.customer.contact_phone === '') {
      //   return this.$swal('담당자 연락처를 입력하세요.')
      // }
      // if (this.customer.contact_email === '') {
      //   return this.$swal('담당자 이메일을 입력하세요.')
      // }
      // if (this.customer.organization_scope === '') {
      //   return this.$swal('조직의 범위를 입력하세요.')
      // }
      // if (this.customer.certification_standard === '') {
      //   return this.$swal('신청 인증표준을 입력하세요.')
      // }
      // if (this.customer.employee_count === '') {
      //   return this.$swal('종업원 수를 입력하세요.')
      // }
      // if (this.customer.design === '') {
      //   return this.$swal('설계/개발 유무를 입력하세요.')
      // }
      // if (this.customer.scope_ko === '') {
      //   return this.$swal('국문 인증범위를 입력하세요.')
      // }
      // if (this.customer.scope_en === '') {
      //   return this.$swal('영문 인증범위를 입력하세요.')
      // }
      // if (this.customer.iaf_code === '') {
      //   return this.$swal('IAF Code를 입력하세요.')
      // }
      // if (this.customer.activity === '') {
      //   return this.$swal('인증범위 활동을 입력하세요.')
      // }
      // if (this.customer.process === '') {
      //   return this.$swal('제품(서비스)명 및 공정을 입력하세요.')
      // }
      // if (this.customer.exclusion === '') {
      //   return this.$swal('적용제외조항 유무를 입력하세요.')
      // }
      // if (this.customer.manual_date === '') {
      //   return this.$swal('매뉴얼 제개정일을 입력하세요.')
      // }
      // if (this.customer.internal_date === '') {
      //   return this.$swal('내부심사일을 입력하세요.')
      // }
      // if (this.customer.management_date === '') {
      //   return this.$swal('경영검토일을 입력하세요.')
      // }
      // if (this.customer.manual_date === '') {
      //   return this.$swal('매뉴얼 제개정일을 입력하세요.')
      // }
      // if (this.customer.outsourcing === '') {
      //   return this.$swal('외주처리유무를 입력하세요.')
      // }
      // if (this.customer.construction_license === '') {
      //   return this.$swal('건설면허보유여부를 입력하세요.')
      // }
      // if (this.customer.certification_standard.includes('EMS') === true) {
      //   if (this.customer.environmental_aspect === '') {
      //     return this.$swal('환경측면 파악여부를 입력하세요.')
      //   }
      //   if (this.customer.environmental_permit === '') {
      //     return this.$swal('환경허가 신고사항 유무를 입력하세요.')
      //   }
      //   if (this.customer.environmental_accident === '') {
      //     return this.$swal('환경사고 유무를 입력하세요.')
      //   }
      // }
      // if (this.customer.certification_standard.includes('OHSMS') === true) {
      //   if (this.customer.risk_factor === '') {
      //     return this.$swal('위험요소 파악여부를 입력하세요.')
      //   }
      //   if (this.customer.outside_worker === '') {
      //     return this.$swal('사업장 외부 근무자 유무를 입력하세요.')
      //   }
      //   if (this.customer.safety_accident === '') {
      //     return this.$swal('안전사고 유무를 입력하세요.')
      //   }
      // }
      // if (this.customer.img_license === '') {
      //   return this.$swal('사업자등록증을 첨부하세요.')
      // }
      // if (this.customer.file_transCertification === '') {
      //   return this.$swal('이전인증서를 첨부하세요.')
      // }

      this.$swal({
        title: '고객정보를 저장 하시겠습니까?',
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
              customer_type: this.customer.customer_type,
              // certification_standard: JSON.stringify(
              //   this.customer.certification_standard
              // ),
              name_ko: this.customer.name_ko,
              name_en: this.customer.name_en,
              business_no: this.customer.business_no,
              ceo_name: this.customer.ceo_name,
              ceo_phone: this.customer.ceo_phone,
              email: this.customer.email,
              phone: this.customer.phone,
              fax: this.customer.fax,
              postcode: this.customer.postcode,
              address_ko: this.customer.address_ko,
              address_detail: this.customer.address_detail,
              address_reference: this.customer.address_reference,
              address_en: this.customer.address_en,
              address_en_detail: this.customer.address_en_detail,
              contact_name: this.customer.contact_name,
              contact_phone: this.customer.contact_phone,
              contact_email: this.customer.contact_email,
              homepage: this.customer.homepage,
              organization_scope: this.customer.organization_scope,
              employee_count: this.customer.employee_count,
              design: this.customer.design,
              scope_ko: this.customer.scope_ko,
              scope_en: this.customer.scope_en,
              activity: JSON.stringify(this.customer.activity),
              process: this.customer.process,
              // shift: this.customer.shift,
              // shift_work_count: this.customer.shift_work_count,
              exclusion: this.customer.exclusion,
              exclusion_reason: this.customer.exclusion_reason,
              // production_method: this.customer.production_method,
              // transfer_date: JSON.stringify(this.customer.transfer_date),
              // s1_start_date: JSON.stringify(this.customer.s1_start_date),
              // s1_end_date: JSON.stringify(this.customer.s1_end_date),
              // s2_start_date: JSON.stringify(this.customer.s2_start_date),
              // s2_end_date: JSON.stringify(this.customer.s2_end_date),
              // s2_team: this.customer.s2_team,
              manual_date: JSON.stringify(this.customer.manual_date),
              internal_date: JSON.stringify(this.customer.internal_date),
              management_date: JSON.stringify(this.customer.management_date),
              outsourcing: this.customer.outsourcing,
              outsourcing_process: this.customer.outsourcing_process,
              construction_license: this.customer.construction_license,
              // audit_fee: this.customer.audit_fee,
              construction_license_content:
                this.customer.construction_license_content,
              // hazardous_chemical: this.customer.hazardous_chemical,
              // hazardous_chemical_content:
              // this.customer.hazardous_chemical_content,
              // location: this.customer.location,

              // environmental_permit: this.customer.environmental_permit,
              // environmental_permit_content:
              //   this.customer.environmental_permit_content,
              // environmental_accident: this.customer.environmental_accident,
              // environmental_accident_content:
              //   this.customer.environmental_accident_content,
              // safety_accident: this.customer.safety_accident,
              // safety_accident_content: this.customer.safety_accident_content,
              // outside_worker: this.customer.outside_worker,
              // outside_worker_content: this.customer.outside_worker_content,
              // hazardous_chemical_worker:
              //   this.customer.hazardous_chemical_worker,
              // air_pollution: JSON.stringify(this.customer.air_pollution),
              // air_pollution_content: this.customer.air_pollution_content,
              // soil_pollution: JSON.stringify(this.customer.soil_pollution),
              // soil_pollution_content: this.customer.soil_pollution_content,
              // water_pollution: JSON.stringify(this.customer.water_pollution),
              // water_pollution_content: JSON.stringify(
              //   this.customer.water_pollution_content
              // ),
              // natural_resource_pollution: JSON.stringify(
              //   this.customer.natural_resource_pollution
              // ),
              // natural_resource_pollution_content:
              //   this.customer.natural_resource_pollution_content,
              // energy_pollution: JSON.stringify(this.customer.energy_pollution),
              // energy_pollution_content: this.customer.energy_pollution_content,
              // waste_pollution: JSON.stringify(this.customer.waste_pollution),
              // waste_pollution_content: this.customer.waste_pollution_content,
              // machine_factor: JSON.stringify(this.customer.machine_factor),
              // electric_factor: JSON.stringify(this.customer.electric_factor),
              // chemical_factor: JSON.stringify(this.customer.chemical_factor),
              // biological_factor: JSON.stringify(
              //   this.customer.biological_factor
              // ),
              // work_factor: JSON.stringify(this.customer.work_factor),
              // work_env: JSON.stringify(this.customer.work_env),
              // environmental_aspect: this.environmental_aspect,
              // risk_factor: this.risk_factor,
              classify_audit: this.classify_audit,
              iaf_code: JSON.stringify(this.customer.iaf_code),
              auditor_name: this.$store.state.user.userInfo.name,
              auditor_email: this.$store.state.user.userInfo.email,
              img_license: this.customer.img_license,
              img_license_originalname: this.customer.img_license_originalname,
              imgExt: this.customer.imgExt
              // file_transCertification: this.customer.file_transCertification,
              // file_transCertification_originalname:
              //   this.customer.file_transCertification_originalname,
              // file_transCertification_ext:
              //   this.customer.file_transCertification_ext
            }
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal(
              '고객정보가 저장되었습니다.<br/> 고객사 현황 페이지에서 심사신청을 진행해주세요'
            )
            this.$router.push({
              path: '/customer/list/auditor',
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
