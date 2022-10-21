<template>
  <div class="container">
    <h2 class="mb-5">[ISO인증심사 신청서_수정화면]</h2>
    <!-- <div class="row mb-3">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">{{ customer.customer_id }}</div>
    </div> -->
    <h5 class="fw-bold">I. 기본정보</h5>
    <table class="table table-bordered" style="table-layout: fixed">
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
            <input
              type="text"
              class="form-control"
              v-model="customer.certification_type"
            />
          </td>
          <th>사업자등록번호</th>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.business_no"
            />
          </td>
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

    <h5 class="fw-bold mt-3 mb-3">II. 인증신청정보</h5>

    <table class="table table-bordered" style="table-layout: fixed">
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

    <h5 class="fw-bold mt-3 mb-3">III. ISO14001/45001신청정보</h5>

    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="text-center">
        <tr>
          <td>사업장 입지조건</td>
          <td>
            {{ customer.location }}
          </td>
          <td>생산방법</td>
          <td>{{ customer.production_method }}</td>
        </tr>
        <tr>
          <th>환경허가 신고사항</th>
          <td>{{ customer.environmental_permit }}</td>
          <th>환경허가 신고내역</th>
          <td>{{ customer.environmental_permit_content }}</td>
        </tr>

        <tr>
          <th>환경사고 유무</th>
          <td>{{ customer.environmental_accident }}</td>
          <th>환경사고내용</th>
          <td>{{ customer.environmental_accident_content }}</td>
        </tr>

        <tr>
          <th>안전보건사고 유무</th>
          <td>
            {{ customer.safety_accident }}
          </td>
          <th>안전보건 사고내역</th>
          <td>{{ customer.safety_accident_content }}</td>
        </tr>
        <tr>
          <th>사업장 외부 근무자</th>
          <td>{{ customer.outside_worker }}</td>
          <th>업무내용</th>
          <td>{{ customer.outside_worker_content }}</td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-3 mb-3">III-1. 고객에 의해 파악된 환경측면</h5>

    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="text-center">
        <tr>
          <th>유해/위험물질 유형</th>
          <td>{{ customer.hazardous_chemical }}</td>
          <th>기타유형</th>
          <td>{{ customer.hazardous_chemical_content }}</td>
        </tr>
        <tr>
          <th>(대기)환경측면</th>
          <td>{{ customer.air_pollution }}</td>
          <th>기타유형</th>
          <td>{{ customer.air_pollution_content }}</td>
        </tr>

        <tr>
          <th>(토양)환경측면</th>
          <td>{{ customer.soil_pollution }}</td>
          <th>기타유형</th>
          <td>{{ customer.soil_pollution_content }}</td>
        </tr>
        <tr>
          <th>(수질)환경측면</th>
          <td>{{ customer.water_pollution }}</td>
          <th>기타유형</th>
          <td>{{ customer.water_pollution_content }}</td>
        </tr>

        <tr>
          <th>(천연자원)환경측면</th>
          <td>{{ customer.natural_resource_pollution }}</td>
          <th>기타유형</th>
          <td>{{ customer.natural_resource_pollution_content }}</td>
        </tr>

        <tr>
          <th>(에너지)환경측면</th>
          <td>{{ customer.energy_pollution }}</td>
          <th>기타유형</th>
          <td>{{ customer.energy_pollution_content }}</td>
        </tr>

        <tr>
          <th>(폐기물)환경측면</th>
          <td>{{ customer.waste_pollution }}</td>
          <th>기타유형</th>
          <td>{{ customer.waste_pollution_content }}</td>
        </tr>
      </tbody>
    </table>

    <h5 class="fw-bold mt-3 mb-3">III-2. 고객에 의해 파악된 위험요인</h5>

    <table class="table table-bordered" style="table-layout: fixed">
      <tbody class="text-center">
        <tr>
          <th>기계(설비) 요인</th>
          <td>{{ customer.machine_factor }}</td>
          <th>전기적 요인</th>
          <td>{{ customer.electric_factor }}</td>
        </tr>
        <tr>
          <th>화학(물질)적 요인</th>
          <td>{{ customer.chemical_factor }}</td>
          <th>생물학적 요인</th>
          <td>{{ customer.biological_factor }}</td>
        </tr>

        <tr>
          <th>작업특성 요인</th>
          <td>{{ customer.work_factor }}</td>
          <th>작업환경 요인</th>
          <td>{{ customer.work_env }}</td>
        </tr>
      </tbody>
    </table>

    <!-- <div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">심사유형</label>
      <div class="col-sm-10">{{ customer.certification_type }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">회사명(국문)</label>
      <div class="col-sm-10">{{ customer.name_ko }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">회사명(영문)</label>
      <div class="col-sm-10">{{ customer.name_en }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">사업자등록번호</label>
      <div class="col-sm-10">{{ customer.business_no }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">대표자명</label>
      <div class="col-sm-10">{{ customer.ceo_name }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">대표자 연락처</label>
      <div class="col-sm-10">{{ customer.ceo_phone }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">이메일</label>
      <div class="col-sm-10">{{ customer.email }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">대표전화번호</label>
      <div class="col-sm-10">{{ customer.phone }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">주소(국문)</label>
      <div class="col-sm-10">{{ customer.address_ko }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">주소(영문)</label>
      <div class="col-sm-10">
        {{ customer.address_en_detail + ', ' + customer.address_en }}
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">담당자명</label>
      <div class="col-sm-10">{{ customer.contact_name }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">담당자이메일</label>
      <div class="col-sm-10">{{ customer.contact_email }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">홈페이지</label>
      <div class="col-sm-10">{{ customer.homepage }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">조직범위</label>
      <div class="col-sm-10">
        {{ customer.organization_scope }}
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">신청표준</label>
      <div class="col-sm-10">{{ customer.certification_standard }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">종업원수</label>
      <div class="col-sm-10">{{ customer.employee_count }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">설계개발유무</label>
      <div class="col-sm-10">{{ customer.design }}</div>
    </div>
    <div class="row mb-3" v-show="customer.design === 'yes'">
      <label class="col-sm-2 col-form-label">설계개발인원수</label>
      <div class="col-sm-10">{{ customer.development_count }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">인증범위(국문)</label>
      <div class="col-sm-10">{{ customer.scope_ko }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">인증범위(영문)</label>
      <div class="col-sm-10">{{ customer.scope_en }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">인증범위활동</label>
      <div class="col-sm-10">{{ customer.activity }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">제품(서비스)공정</label>
      <div class="col-sm-10">{{ customer.process }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">교대근무여부</label>
      <div class="col-sm-10">{{ customer.shift }}</div>
    </div>
    <div class="row mb-3" v-show="customer.shift === 'yes'">
      <label class="col-sm-2 col-form-label">교대근무인원수</label>
      <div class="col-sm-10">{{ customer.shift_work_count }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">적용제외유무</label>
      <div class="col-sm-10">{{ customer.exclusion }}</div>
    </div>
    <div class="row mb-3" v-show="customer.exclusion === 'yes'">
      <label class="col-sm-2 col-form-label">적용제외근거</label>
      <div class="col-sm-10">{{ customer.exclusion_reason }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">전환심사일</label>
      <div class="col-sm-10">{{ customer.transfer_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">1단계심사시작일</label>
      <div class="col-sm-10">{{ customer.s1_start_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">1단계심사종료일</label>
      <div class="col-sm-10">{{ customer.s1_end_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">2단계심사시작일</label>
      <div class="col-sm-10">{{ customer.s2_start_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">2단계심사종료일</label>
      <div class="col-sm-10">{{ customer.s2_end_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">2단계 심사팀원</label>
      <div class="col-sm-10">{{ customer.s2_team }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">매뉴얼제/개정일</label>
      <div class="col-sm-10">{{ customer.manual_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">내부심사일</label>
      <div class="col-sm-10">{{ customer.internal_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">경영검토일</label>
      <div class="col-sm-10">{{ customer.management_date }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">아웃소싱유무</label>
      <div class="col-sm-10">{{ customer.outsourcing }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">아웃소싱 유무</label>
      <div class="col-sm-10">{{ customer.outsourcing }}</div>
    </div>
    <div class="row mb-3" v-show="customer.outsourcing === 'yes'">
      <label class="col-sm-2 col-form-label">외주처리 프로세스</label>
      <div class="col-sm-10">{{ customer.outsourcing_process }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">건설면허보유여부</label>
      <div class="col-sm-10">{{ customer.construction_license }}</div>
    </div>
    <div class="row mb-3" v-show="customer.construction_license == 'yes'">
      <label class="col-sm-2 col-form-label">건설면허 내용</label>
      <div class="col-sm-10">{{ customer.construction_license_content }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">유해/위험물질 유형</label>
      <div class="col-sm-10">{{ customer.hazardous_chemical }}</div>
    </div>
    <div class="row mb-3" v-show="customer.hazardous_chemical === '기타'">
      <label class="col-sm-2 col-form-label">유해/위험물질 기타</label>
      <div class="col-sm-10">{{ customer.hazardous_chemical_content }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">사업장입지조건</label>
      <div class="col-sm-10">{{ customer.location }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">생산방법</label>
      <div class="col-sm-10">{{ customer.production_method }}</div>
    </div>
    <div class="row mb-3" v-show="customer.production_method == '기타'">
      <label class="col-sm-2 col-form-label">생산방법 기타</label>
      <div class="col-sm-10">{{ customer.production_method_etc }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">환경허가 신고여부</label>
      <div class="col-sm-10">{{ customer.environmental_permit }}</div>
    </div>
    <div class="row mb-3" v-show="customer.environmental_permit == 'yes'">
      <label class="col-sm-2 col-form-label">환경허가 신고내용</label>
      <div class="col-sm-10">{{ customer.environmental_permit_content }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">환경사고 유무</label>
      <div class="col-sm-10">{{ customer.environmental_accident }}</div>
    </div>
    <div class="row mb-3" v-show="customer.environmental_accident == 'yes'">
      <label class="col-sm-2 col-form-label">환경사고 내용</label>
      <div class="col-sm-10">{{ customer.environmental_accident_content }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">안전보건사고 유무</label>
      <div class="col-sm-10">{{ customer.safety_accident }}</div>
    </div>
    <div class="row mb-3" v-show="customer.safety_accident == 'yes'">
      <label class="col-sm-2 col-form-label">안전보건사고 내용</label>
      <div class="col-sm-10">{{ customer.safety_accident_content }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">사업장 외부 근무자</label>
      <div class="col-sm-10">{{ customer.outside_worker }}</div>
    </div>
    <div class="row mb-3" v-show="customer.outside_worker == 'yes'">
      <label class="col-sm-2 col-form-label">업무내용</label>
      <div class="col-sm-10">{{ customer.outside_worker_content }}</div>
    </div>

    <h5 class="mt-3 mb-3">=== 고객에 의해 파악된 환경측면 및 영향 ===</h5>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">(대기)환경측면</label>
      <div class="col-sm-10">{{ customer.air_pollution }}</div>
    </div>
    <div class="row mb-3" v-show="customer.air_pollution == '기타'">
      <label class="col-sm-2 col-form-label">기타유형</label>
      <div class="col-sm-10">{{ customer.air_pollution_content }}</div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">(토양)환경측면</label>
      <div class="col-sm-10">{{ customer.soil_pollution }}</div>
    </div>
    <div class="row mb-3" v-show="customer.soil_pollution == '기타'">
      <label class="col-sm-2 col-form-label">기타유형</label>
      <div class="col-sm-10">{{ customer.soil_pollution_content }}</div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">(수질)환경측면</label>
      <div class="col-sm-10">{{ customer.water_pollution }}</div>
    </div>
    <div class="row mb-3" v-show="customer.water_pollution == '기타'">
      <label class="col-sm-2 col-form-label">기타유형</label>
      <div class="col-sm-10">{{ customer.water_pollution_content }}</div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">(천연자원)환경측면</label>
      <div class="col-sm-10">{{ customer.natural_resource_pollution }}</div>
    </div>
    <div class="row mb-3" v-show="customer.water_pollution == '기타'">
      <label class="col-sm-2 col-form-label">기타유형</label>
      <div class="col-sm-10">
        {{ customer.natural_resource_pollution_content }}
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">(에너지)환경측면</label>
      <div class="col-sm-10">{{ customer.energy_pollution }}</div>
    </div>
    <div class="row mb-3" v-show="customer.water_pollution == '기타'">
      <label class="col-sm-2 col-form-label">기타유형</label>
      <div class="col-sm-10">
        {{ customer.energy_pollution_content }}
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">(폐기물)환경측면</label>
      <div class="col-sm-10">{{ customer.waste_pollution }}</div>
    </div>
    <div class="row mb-3" v-show="customer.water_pollution == '기타'">
      <label class="col-sm-2 col-form-label">기타유형</label>
      <div class="col-sm-10">
        {{ customer.waste_pollution_content }}
      </div>
    </div>
    <h5 class="mt-3 mb-3">=== 고객에 의해 파악된 위험요인 ===</h5>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">기계(설비) 요인</label>
      <div class="col-sm-10">{{ customer.machine_factor }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">전기적 요인</label>
      <div class="col-sm-10">{{ customer.electric_factor }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">화학(물질)적 요인</label>
      <div class="col-sm-10">{{ customer.chemical_factor }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">생물학적 요인</label>
      <div class="col-sm-10">{{ customer.biological_factor }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">작업특성 요인</label>
      <div class="col-sm-10">{{ customer.work_factor }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">작업환경 요인</label>
      <div class="col-sm-10">{{ customer.work_env }}</div>
    </div>
  </div> -->
    <div>
      <p>
        당사는 KAI의 인증시스템 심사절차에 따라 제반정보를 제공하고 상기와 같은
        인증신청항목에 대한 인증심사를 수검하고자 관련 서류를 함께
        제출합니다.<button
          class="btn btn-secondary ms-2"
          @click="printApplication"
        >
          인쇄하기
        </button>
      </p>
      <span></span>
    </div>

    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <!-- <button class="btn btn-primary" @click="goToChange()">수정</button> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      id: '',
      searchName: '',
      customer: {}
    }
  },
  setup() {},
  created() {
    // CustomerDetail에서 보낸 id를 받아온다.
    this.id = this.$route.query.customer_id

    // console.log(this.$route.query.customer_id)
    // this.id = this.$route.query.customer_id
    console.log(this.id)

    // this.searchName = this.$route.query.searchName
  },
  mounted() {
    this.getCustomer()
  },
  unmounted() {},
  methods: {
    printApplication() {
      window.print()
    },
    async getCustomer() {
      // console.log(this.id)

      this.customer = await this.$get(
        `http://localhost:3000/api/customer/${this.id}`
      )
    },
    goToList() {
      this.$router.push({ path: '/customer/list' })
    },
    goToChange() {
      this.$router.push({
        name: 'customerChange',
        params: { id: this.id }
      })
    }
  }
}
</script>
