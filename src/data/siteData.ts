export type ExperienceCategory =
  | "Semiconductor"
  | "Hardware & Embedded"
  | "Coursework & Labs"
  | "Community";

export type ExperienceSectionId =
  | "semiconductor"
  | "featured-projects"
  | "project-archive"
  | "engineering-foundations"
  | "beyond-engineering";

export type ExperienceKind = "Project" | "Lab" | "Education" | "Coursework" | "Activity";

export type ExperienceStatus = "Completed" | "In Progress" | "Scope Adjusted";

export type AbstractGraphicType =
  | "wafer-litho"
  | "yield-chart"
  | "afm-probe"
  | "mosfet-device"
  | "mcu-control"
  | "wearable-signal"
  | "fire-matrix"
  | "edge-audio"
  | "pcb-power"
  | "imu-posture"
  | "riscv-pipeline"
  | "oscilloscope"
  | "logic-gates"
  | "escape-groove";

export interface ExperienceItem {
  id: string;
  cardNumber: number;
  title: string;
  subtitle: string;
  period: string;
  section: ExperienceSectionId;
  category: ExperienceCategory;
  kind: ExperienceKind;
  kindLabel: string;
  status: ExperienceStatus;
  statusLabel: string;
  isRepresentative: boolean;
  keywords: string[];
  summary: string;
  role: string;
  highlights: string[];
  scopeNote: string;
  graphic: AbstractGraphicType;
}

export interface MusicTasteItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  iconType: "vinyl" | "band" | "dj";
}

export interface LinkHubItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  isExternal: boolean;
  badge: string;
  category: "External (Verified)" | "Internal Navigation";
}

export const SITE_INFO = {
  siteName: "YOUNGMIN",
  concept: "Signals & Grooves",
  slogan: "From Circuits to Curiosity.",
  nameKo: "김영민",
  nameEn: "Youngmin Kim",
  affiliation: "한양대학교 융합전자공학부 3학년",
  affiliationEn: "Hanyang University · Division of Electronic Engineering (Junior)",
  githubUrl: "https://github.com/RhythmlsLife",
  githubHandle: "@RhythmlsLife",
  primaryInterest: "반도체 공정기술 (Semiconductor Process Engineering)",
  secondaryInterests: [
    "반도체 소자·공정설계",
    "디지털 설계",
    "임베디드 시스템",
  ],
  personalTastes: [
    "LP 수집",
    "턴테이블",
    "밴드 음악 (보컬·드럼)",
    "전자음악·DJing",
    "방탈출",
  ],
  heroDescription:
    "반도체 공정기술을 가장 중요한 진로 목표로 삼고 소자·공정 실습과 수율·결함 데이터 분석을 쌓아가고 있습니다. 동시에 임베디드 시스템, 하드웨어 회로, 디지털 설계까지 직접 부딪히며 전자공학의 신호(Signals)와 음악·취향의 리듬(Grooves)을 함께 기록합니다.",
};

export const ABOUT_PILLARS = [
  {
    id: "primary-focus",
    badge: "PRIMARY FOCUS · 최우선 진로 관심사",
    title: "반도체 공정기술 (Semiconductor Process)",
    description:
      "포토리소그래피 단위 공정(스핀코팅·노광·현상), AFM 표면 계측 실습, 집적회로소자 이론 학습, 그리고 공정·수율·결함 데이터 분석(FEM, Cp/Cpk, Spotfire)을 통해 소자 물리부터 공정 결과까지의 연결고리를 집중적으로 탐구합니다.",
    items: [
      "포토리소그래피 및 마스크리스 노광 공정 실습",
      "Park Systems AFM 비접촉 모드 표면 계측",
      "교육용 공정·계측 데이터 기반 수율(Cp/Cpk, FEM) 및 결함 분석",
      "MOSFET·Short Channel Effect·메모리(DRAM/NAND/SRAM) 소자-공정 연계 이해",
    ],
  },
  {
    id: "engineering-spectrum",
    badge: "ADDITIONAL INTERESTS · 공학 확장 관심사",
    title: "소자·공정설계 · 디지털 설계 · 임베디드 시스템",
    description:
      "반도체 공정에 대한 관심을 중심으로 두되, 실제 학부 프로젝트에서는 STM32·ESP32-S3·Raspberry Pi 4 기반 임베디드 하드웨어 제작과 센서 데이터 분석, 계측 장비 디버깅, RISC-V 파이프라인 검증까지 폭넓게 수행했습니다.",
    items: [
      "STM32 / ESP32-S3 / Raspberry Pi 4 기반 하드웨어·펌웨어 시스템 통합",
      "센서 계측(초음파, 연기·온도, MPU6050, INA219), 회로 배선 및 EasyEDA PCB 설계",
      "오실로스코프·AFG·DMM·NI ELVIS를 활용한 실측 및 신호 디버깅",
      "5-Stage RV32I 프로세서 해저드 제어 구조 학습 및 시뮬레이션·합성 검증",
    ],
  },
  {
    id: "signals-and-grooves",
    badge: "CONCEPT · SIGNALS & GROOVES",
    title: "전자공학의 신호와 아날로그 음악의 그루브",
    description:
      "웨이퍼 위의 미세 패턴과 LP 레코드의 동심원 트랙은 모두 정밀한 물리적 구조 위에 정보를 담아낸다는 점에서 닮아 있습니다. 실험실 밖에서는 턴테이블로 LP를 듣고, 밴드와 DJing 동아리에서 음악을 만들고, 방탈출 동아리를 운영하며 호기심을 넓혀갑니다.",
    items: [
      "LP 레코드 수집 및 턴테이블 아날로그 음악 감상",
      "밴드 보컬·드럼 활동 및 무대 공연 경험",
      "전자음악·DJing 동아리 HOOKS 참여",
      "방탈출 연합동아리 NewRun 부원 및 임원진 운영 참여",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  // ==========================================================================
  // Section 3: Semiconductor & Process (Cards 7, 9, 12, 13, 14, 15)
  // ==========================================================================
  {
    id: "card-7",
    cardNumber: 7,
    title: "집적회로소자 심화 학습",
    subtitle: "Semiconductor Device Physics & Process Linkage",
    period: "2026",
    section: "semiconductor",
    category: "Semiconductor",
    kind: "Coursework",
    kindLabel: "전공 심화 학습",
    status: "Completed",
    statusLabel: "2026 수강 · 이론 학습",
    isRepresentative: true,
    keywords: [
      "반도체 제조 공정",
      "MOSFET",
      "Short Channel Effect",
      "DRAM · NAND · SRAM",
      "소자-공정 연계",
    ],
    summary:
      "반도체 제조 공정 전반과 MOSFET 동작 원리, 단채널 효과(Short Channel Effect), 메모리 소자(DRAM·NAND·SRAM) 구조를 수업 자료와 개인 필기로 체계화하며 소자 특성과 공정 조건의 연결을 깊이 있게 학습했습니다.",
    role: "수업 자료 및 개인 필기 정리를 통한 소자 물리·제조 공정·메모리 구조의 연계 원리 학습",
    highlights: [
      "반도체 주요 단위 공정 흐름과 MOSFET 구조·전기적 특성 간의 관계 정리",
      "스케일링에 따른 Short Channel Effect 발생 메커니즘과 공정·구조적 대응 개념 학습",
      "DRAM, NAND Flash, SRAM 각 메모리 소자의 셀 구조와 동작 특성 비교 정리",
    ],
    scopeNote:
      "전공 강의 수강 및 개인 필기 기반의 이론 심화 학습 경험이며, 실제 웨이퍼 제조·TCAD 시뮬레이션·소자 전기적 측정 프로젝트가 아닙니다.",
    graphic: "mosfet-device",
  },
  {
    id: "card-9",
    cardNumber: 9,
    title: "코멘토 반도체 수율 분석 과정",
    subtitle: "Semiconductor Yield & Process Margin Data Analysis",
    period: "2026.07 – 2026.08",
    section: "semiconductor",
    category: "Semiconductor",
    kind: "Education",
    kindLabel: "직무 교육 · 데이터 분석",
    status: "Completed",
    statusLabel: "Completed · 수료 완료",
    isRepresentative: true,
    keywords: [
      "Yield Analysis",
      "FEM",
      "Process Margin",
      "Cp / Cpk",
      "불량·장비 상관관계",
      "데이터 검산",
    ],
    summary:
      "교육용 반도체 공정·계측 데이터를 활용해 수율 분석 과제 2건을 수행하며 FEM, 공정 마진, Cp/Cpk, 불량·장비 상관관계를 분석하고 계산 과정의 데이터 범위 오류를 찾아 재검산한 수료 과정입니다.",
    role: "교육용 공정·계측 데이터 기반 수율 분석 과제 2건 수행, 데이터 범위 오류 발견 및 재검산",
    highlights: [
      "FEM(Focus-Exposure Matrix) 데이터를 바탕으로 노광 공정 마진(Process Margin) 도출",
      "공정 능력 지수(Cp, Cpk) 산출 및 스펙 이탈 구간·장비 간 불량 상관관계 분석",
      "분석 중 계산 과정의 데이터 참조 범위 오류를 스스로 발견하고 전체 수치를 재검산하여 분석 정확도 확보",
    ],
    scopeNote:
      "실제 반도체 FAB 현장 근무가 아니라, 교육용으로 제공된 반도체 공정·계측 데이터를 활용하여 수행한 직무 부트캠프 데이터 분석 경험입니다.",
    graphic: "yield-chart",
  },
  {
    id: "card-12",
    cardNumber: 12,
    title: "AFM 계측 실습",
    subtitle: "Atomic Force Microscopy Surface Metrology Lab",
    period: "2026.09",
    section: "semiconductor",
    category: "Semiconductor",
    kind: "Lab",
    kindLabel: "반도체 계측 실습",
    status: "Completed",
    statusLabel: "Completed · 실습 완료",
    isRepresentative: true,
    keywords: [
      "Park Systems AFM",
      "SmartScan",
      "XEI",
      "Non-contact Mode",
      "공진주파수",
      "검출기 정렬",
    ],
    summary:
      "Park Systems AFM 장비와 SmartScan·XEI 소프트웨어를 사용하여 비접촉 모드(Non-contact Mode) 표면 계측 시 공진주파수 설정, 검출기 정렬, 스캔 조건을 확인하고 측정 과정에 참여한 실습입니다.",
    role: "조교 지도하 AFM 비접촉 모드 계측 조건(공진주파수·검출기 정렬·스캔 조건) 확인 및 장비 구동·측정 과정 관찰·참여",
    highlights: [
      "Park Systems AFM 하드웨어 및 제어 소프트웨어(SmartScan), 이미지 분석 툴(XEI) 사용 흐름 숙지",
      "비접촉 모드 계측을 위한 캔틸레버 공진주파수(Resonance Frequency) 탐색 및 레이저 검출기 정렬 상태 확인",
      "스캔 파라미터 조건 확인 및 조교 지도하 장비 구동·표면 프로파일 측정 과정 참여",
    ],
    scopeNote:
      "조교의 지도하에 장비 구동과 측정 과정을 관찰·참여한 계측 실습이며, 독자적인 박막 시료 제작이나 전체 측정 실험 설계를 단독 수행한 경험이 아닙니다.",
    graphic: "afm-probe",
  },
  {
    id: "card-13",
    cardNumber: 13,
    title: "마스크리스 포토리소그래피 실습",
    subtitle: "Maskless Photolithography & Pattern Inspection",
    period: "2026.10",
    section: "semiconductor",
    category: "Semiconductor",
    kind: "Lab",
    kindLabel: "반도체 공정 실습",
    status: "Completed",
    statusLabel: "Completed · 실습 참여",
    isRepresentative: false,
    keywords: [
      "Maskless Lithography",
      "노광 장비",
      "광학 현미경",
      "패턴 형성",
      "공정 절차 학습",
    ],
    summary:
      "마스크리스(Maskless) 노광 장비와 광학 현미경을 활용하여 포토리소그래피 공정 절차와 기판 위 미세 패턴 형성 결과를 학습한 실습입니다.",
    role: "마스크리스 노광 공정 절차 학습 및 현미경을 통한 패턴 형성 결과 관찰",
    highlights: [
      "포토마스크 없이 디지털 패턴을 투사하는 마스크리스 노광 장비의 동작 원리와 공정 순서 학습",
      "노광 후 형성된 미세 패턴을 광학 현미경으로 관찰하며 설계 패턴과 실제 전사 결과 비교",
    ],
    scopeNote:
      "공정 절차 및 패턴 형성 결과를 학습·관찰한 실습이며, 장비의 세부 조작 범위는 추후 확인이 필요하므로 단독 정밀 조작으로 단정하지 않습니다.",
    graphic: "wafer-litho",
  },
  {
    id: "card-14",
    cardNumber: 14,
    title: "반도체 공정과 장비 실습",
    subtitle: "Unit Process Lab: Spin Coating to Development",
    period: "2026.10 – 진행 중",
    section: "semiconductor",
    category: "Semiconductor",
    kind: "Lab",
    kindLabel: "전공 공정 실습",
    status: "In Progress",
    statusLabel: "In Progress · 1회차 참여 (후속 예정)",
    isRepresentative: true,
    keywords: [
      "스핀코팅",
      "소프트베이크",
      "마스크리스 노광",
      "현상 (Development)",
      "현미경 관찰",
      "노광 조건 비교",
    ],
    summary:
      "포토리소그래피 1회차 실습에 참여하여 스핀코팅, 소프트베이크, 마스크리스 노광, 현상, 현미경 관찰까지 단위 공정을 경험하고 노광 조건에 따른 패턴 형성 차이를 관찰했습니다.",
    role: "포토리소그래피 1회차 실습 참여 및 노광 조건 변화에 따른 현미경 패턴 형성 결과 비교 관찰",
    highlights: [
      "감광액(PR) 스핀코팅 → 소프트베이크 → 마스크리스 노광 → 현상(Development)으로 이어지는 연속 공정 참여",
      "광학 현미경을 통해 노광 조건 차이에 따라 발생하는 패턴 선폭 및 현상 상태 차이 관찰",
      "후속 반도체 공정 및 장비 실습 세션을 순차적으로 이수 중",
    ],
    scopeNote:
      "2026년 10월 기준 포토리소그래피 1회차 실습에 참여한 상태이며, 후속 실습 일정은 진행 예정이므로 전체 실습 과정을 모두 완료한 것으로 표현하지 않습니다.",
    graphic: "wafer-litho",
  },
  {
    id: "card-15",
    cardNumber: 15,
    title: "Spotfire 반도체 공정·결함 분석",
    subtitle: "Process & Defect Analytics with Spotfire",
    period: "2026.10 – 2026.11",
    section: "semiconductor",
    category: "Semiconductor",
    kind: "Education",
    kindLabel: "데이터 분석 교육",
    status: "In Progress",
    statusLabel: "In Progress · 수강 중",
    isRepresentative: false,
    keywords: [
      "Spotfire",
      "반도체 공정 데이터",
      "결함(Defect) 분석",
      "데이터 시각화",
    ],
    summary:
      "Spotfire 분석 도구를 활용하여 반도체 공정 데이터와 웨이퍼 결함(Defect) 데이터를 시각화하고 분석하는 교육 과정을 수강하고 있습니다.",
    role: "Spotfire 기반 반도체 공정·결함 데이터 시각화 및 탐색적 분석 교육 수강 중",
    highlights: [
      "다변량 반도체 공정 파라미터 및 계측 데이터의 시각화 대시보드 구성 기법 학습",
      "공정 이상 징후 및 결함 분포 패턴을 파악하기 위한 데이터 필터링·드릴다운 분석 연습",
    ],
    scopeNote:
      "현재 수강 중인 교육 과정이므로 최종 수료 여부나 최종 프로젝트 성과를 미리 확정하여 기재하지 않습니다.",
    graphic: "yield-chart",
  },

  // ==========================================================================
  // Section 4: Featured Projects (Cards 3, 8, 10, 16)
  // ==========================================================================
  {
    id: "card-3",
    cardNumber: 3,
    title: "SMART AEB",
    subtitle: "STM32-Based Autonomous Emergency Braking System",
    period: "2025",
    section: "featured-projects",
    category: "Hardware & Embedded",
    kind: "Project",
    kindLabel: "3인 팀 프로젝트",
    status: "Completed",
    statusLabel: "Completed · 구현 완료",
    isRepresentative: true,
    keywords: [
      "STM32 NUCLEO-F401RE",
      "초음파 센서",
      "ADC",
      "PWM 모터 제어",
      "OLED",
      "부저 (Buzzer)",
    ],
    summary:
      "STM32 NUCLEO-F401RE 보드를 기반으로 초음파 센서 거리 계측, ADC 입력, PWM 모터 제어, OLED 디스플레이, 부저 경고 기능을 통합한 자동 긴급 제동(AEB) 시스템입니다.",
    role: "핵심 임베디드 소프트웨어 기능 구현 주도 (센서 거리 판별, ADC·PWM 모터 감속/제동 로직, OLED·부저 인터페이스 구현)",
    highlights: [
      "초음파 센서와 ADC 신호를 실시간 처리해 장애물과의 상대 거리 및 위험 단계 판별 로직 구현",
      "위험 단계에 따라 PWM 듀티비를 제어하여 모터 감속 및 긴급 제동을 수행하는 제어 루프 작성",
      "OLED 화면을 통한 실시간 상태 표시와 부저 알림 기능을 통합하여 핵심 소프트웨어 동작 완성",
    ],
    scopeNote:
      "2025년 3인 팀 프로젝트로 수행되었으며, 시스템 내 핵심 임베디드 소프트웨어 기능 구현을 주도적으로 담당했습니다.",
    graphic: "mcu-control",
  },
  {
    id: "card-8",
    cardNumber: 8,
    title: "Sensory Overload Monitoring Wearable",
    subtitle: "ESP32-S3 Multi-Node Wearable & Flutter Integration",
    period: "2026 – 진행 중",
    section: "featured-projects",
    category: "Hardware & Embedded",
    kind: "Project",
    kindLabel: "5인 팀 프로젝트",
    status: "In Progress",
    statusLabel: "In Progress · 개발 진행 중",
    isRepresentative: true,
    keywords: [
      "ESP32-S3",
      "웨어러블 센서",
      "마스터 보드 통신",
      "Flutter 앱 연동",
      "하드웨어 배선",
      "실기 디버깅",
    ],
    summary:
      "ESP32-S3 기반 웨어러블 센서에서 수집한 데이터를 마스터 보드를 거쳐 Flutter 앱으로 전달하는 구조의 5인 팀 프로젝트로, 하드웨어 배선·통신·실기 검증을 맡아 진행 중입니다.",
    role: "센서 통합, 하드웨어 배선, 보드 간 통신, AI 작성 코드의 실제 하드웨어 업로드·검증 및 실기 테스트·디버깅 담당",
    highlights: [
      "ESP32-S3 웨어러블 센서 노드 → 마스터 보드 → 모바일 Flutter 앱으로 이어지는 다중 보드 하드웨어 구성 및 배선",
      "AI가 작성한 펌웨어·통신 코드를 실제 ESP32-S3 보드에 업로드하여 하드웨어 단에서의 정상 동작 여부 검증",
      "센서 인터페이싱 및 보드 간 데이터 송수신 과정에서 발생하는 실기 오류를 계측·디버깅하며 개선 진행 중",
    ],
    scopeNote:
      "현재 진행 중인 5인 팀 프로젝트이므로 완성된 결과물로 표시하지 않으며, 하드웨어 통합·실기 업로드 검증·디버깅 역할을 중심으로 기록합니다.",
    graphic: "wearable-signal",
  },
  {
    id: "card-10",
    cardNumber: 10,
    title: "MCU 기반 화재 회피 경로 안내 시스템",
    subtitle: "Dynamic Fire-Avoidance Evacuation Guidance Prototype",
    period: "2026",
    section: "featured-projects",
    category: "Hardware & Embedded",
    kind: "Project",
    kindLabel: "4인 팀 프로젝트",
    status: "Completed",
    statusLabel: "Completed · 시제품 검증 완료",
    isRepresentative: true,
    keywords: [
      "STM32",
      "연기·온도 센서",
      "WS2812 LED",
      "OLED",
      "부저",
      "경로 재계산 안내",
    ],
    summary:
      "연기·온도 센서로 화재 구역을 감지하면 STM32에서 화재 구역을 우회하는 대피 경로를 재계산하고 바닥 WS2812 LED와 OLED·부저로 안내하는 프로토타입입니다.",
    role: "하드웨어 배선 및 연기·온도 센서 계측 담당, 시제품 제작 및 8가지 화재 구역 조합 동작 확인",
    highlights: [
      "다중 구역 연기·온도 센서 신호 계측을 위한 하드웨어 배선 및 전원·신호 라인 구성",
      "화재 발생 위치에 따라 안전 경로를 시각적으로 표시하는 WS2812 어드레서블 LED 스트립·OLED·부저 연동 시제품 제작",
      "총 8가지 화재 발생 구역 조합 시나리오에 대해 경로 재계산 및 LED 유도 동작 정상 작동 확인",
    ],
    scopeNote:
      "4인 팀 프로젝트 시제품 제작 및 8가지 화재 구역 조합 동작 검증 경험이며, 대외 수상 경력으로 표현하지 않습니다.",
    graphic: "fire-matrix",
  },
  {
    id: "card-16",
    cardNumber: 16,
    title: "Real-time Speech Enhancement Assistant",
    subtitle: "Raspberry Pi 4 & FastEnhancer-T Edge Audio System",
    period: "2026 – 진행 중",
    section: "featured-projects",
    category: "Hardware & Embedded",
    kind: "Project",
    kindLabel: "2인 팀 프로젝트",
    status: "In Progress",
    statusLabel: "In Progress · 개발 진행 중",
    isRepresentative: true,
    keywords: [
      "Raspberry Pi 4",
      "FastEnhancer-T",
      "GPU 모델 재학습",
      "실시간 소음 제거",
      "평가 불일치 디버깅",
    ],
    summary:
      "Raspberry Pi 4와 FastEnhancer-T 모델을 활용한 실시간 소음 제거 대화 보조기 프로젝트로, 데스크톱 GPU 재학습과 라즈베리파이 하드웨어 연동 및 평가 버그 분석을 수행 중입니다.",
    role: "데스크톱 GPU 환경 모델 재학습, Raspberry Pi 4 하드웨어 담당, 팀원과 평가 결과 불일치 원인 분석 및 버그 확인",
    highlights: [
      "팀원이 작성한 FastEnhancer-T 기반 모델 코드를 데스크톱 GPU 환경에서 재학습하고 실험 로그 관리",
      "Raspberry Pi 4에서 실시간 오디오 입출력 및 추론이 가능하도록 하드웨어 환경 구성 담당",
      "모델 평가 점수가 예상과 다르게 산출되던 불일치 현상을 팀원과 함께 추적하여 평가 파이프라인 내 버그 원인 규명",
    ],
    scopeNote:
      "모델 원본 코드는 팀원이 작성했으며 본인은 GPU 재학습·라즈베리파이 하드웨어·평가 불일치 원인 분석에 참여했습니다. 현재 진행 중이므로 최종 성능은 아직 확정되지 않았습니다.",
    graphic: "edge-audio",
  },

  // ==========================================================================
  // Section 5: Project Archive (Cards 1, 2, 4)
  // ==========================================================================
  {
    id: "card-1",
    cardNumber: 1,
    title: "AI 전력 최적화 스마트 멀티탭",
    subtitle: "Power Sensing Circuit Block & PCB Design",
    period: "2025",
    section: "project-archive",
    category: "Hardware & Embedded",
    kind: "Project",
    kindLabel: "6인 팀 프로젝트",
    status: "Scope Adjusted",
    statusLabel: "Scope Adjusted · 축소 범위 수행",
    isRepresentative: false,
    keywords: [
      "회로 블록 설계",
      "EasyEDA",
      "PCB 설계",
      "납땜 (Soldering)",
      "INA219",
    ],
    summary:
      "INA219 등 전력 측정·제어 부품을 활용한 스마트 멀티탭 프로젝트에서 회로 블록 설계, EasyEDA 기반 PCB 설계 및 직접 납땜을 담당한 하드웨어 제작 경험입니다.",
    role: "전력 측정·제어 회로 블록 설계, EasyEDA PCB 레이아웃 설계 및 부품 납땜 담당",
    highlights: [
      "INA219 전류·전압 측정 센서를 포함한 전력 계측 및 제어 회로 블록 구성",
      "EasyEDA 툴을 사용해 회로도 작성 및 PCB 아트워크 설계 진행",
      "제작된 보드에 부품을 실장하고 직접 납땜하며 하드웨어 제작 공정 경험",
    ],
    scopeNote:
      "팀 프로젝트 진행 중 전체 개발 범위가 축소된 과제로, 최종 완제품 개발 성공처럼 과장하지 않고 실제 수행한 회로·PCB 설계 및 납땜 경험을 기록합니다.",
    graphic: "pcb-power",
  },
  {
    id: "card-2",
    cardNumber: 2,
    title: "Re:Back Wearable Posture Correction",
    subtitle: "MPU6050 Sensor Data Analysis & Thresholding",
    period: "2025",
    section: "project-archive",
    category: "Hardware & Embedded",
    kind: "Project",
    kindLabel: "학술타운 팀 프로젝트",
    status: "Completed",
    statusLabel: "Completed · 완료",
    isRepresentative: false,
    keywords: [
      "MPU6050",
      "자세 데이터 수집",
      "센서 데이터 분석",
      "축별 임계값 산출",
    ],
    summary:
      "MPU6050 가속도·자이로 센서를 이용해 착용자의 자세 데이터를 수집·분석하고 정상 자세와 거북목/구부정한 자세를 판별하는 축별 임계값을 도출한 학술타운 팀 프로젝트입니다.",
    role: "자세별 MPU6050 센서 데이터 수집·분석 및 판별용 축별 임계값(Threshold) 산출 담당",
    highlights: [
      "착용자의 다양한 자세 변화에 따른 MPU6050 각 축의 센서 출력 데이터를 수집 및 정리",
      "자세별 신호 분포를 비교 분석하여 자세 교정 알림 기준이 되는 축별 임계값 도출",
    ],
    scopeNote:
      "센서 데이터 분석과 축별 임계값 산출 파트를 전담했으며, 임베디드 펌웨어 코딩을 직접 담당한 것처럼 표현하지 않습니다.",
    graphic: "imu-posture",
  },
  {
    id: "card-4",
    cardNumber: 4,
    title: "Full Hazard 5-stage RV32I Processor",
    subtitle: "RISC-V Pipeline Architecture Verification",
    period: "2026",
    section: "project-archive",
    category: "Coursework & Labs",
    kind: "Coursework",
    kindLabel: "컴퓨터구조 프로젝트",
    status: "Completed",
    statusLabel: "Completed · 검증 완료",
    isRepresentative: false,
    keywords: [
      "RV32I",
      "5-Stage Pipeline",
      "Forwarding",
      "Stall & Flush",
      "SystemVerilog",
      "시뮬레이션·합성 검증",
    ],
    summary:
      "5단 파이프라인 구조와 Forwarding, Stall, Flush 해저드 처리 원리를 학습하고 SystemVerilog 제출본을 시뮬레이션과 합성으로 검증한 컴퓨터구조 프로젝트입니다.",
    role: "5단 파이프라인·해저드 처리(Forwarding, Stall, Flush) 구조 학습 및 시뮬레이션·합성 검증 수행",
    highlights: [
      "IF-ID-EX-MEM-WB 5단 파이프라인에서 발생하는 데이터 해저드 및 제어 해저드 처리 메커니즘 학습",
      "SystemVerilog 기반 프로세서 제출본에 대해 파형 시뮬레이션과 합성(Synthesis)을 수행하며 명령어 실행 및 해저드 해소 동작 검증",
    ],
    scopeNote:
      "SystemVerilog RTL 코드는 AI가 대부분 작성했으므로 개인이 독자적으로 RTL을 처음부터 설계했다고 표현하지 않으며, 파이프라인 구조 이해와 시뮬레이션·합성 검증 경험으로 기록합니다.",
    graphic: "riscv-pipeline",
  },

  // ==========================================================================
  // Section 6: Engineering Foundations (Cards 5, 6)
  // ==========================================================================
  {
    id: "card-5",
    cardNumber: 5,
    title: "Electronic Circuits Measurement & Debugging",
    subtitle: "Analog Circuit Lab Metrology & Troubleshooting",
    period: "2025 – 2026",
    section: "engineering-foundations",
    category: "Coursework & Labs",
    kind: "Lab",
    kindLabel: "전자회로 실험·측정",
    status: "Completed",
    statusLabel: "Completed · 실습 완료",
    isRepresentative: false,
    keywords: [
      "오실로스코프 (Oscilloscope)",
      "AFG",
      "DMM",
      "LTspice",
      "정류기·필터·증폭기",
      "측정 설정 디버깅",
    ],
    summary:
      "오실로스코프, 함수발생기(AFG), 디지털 멀티미터(DMM), LTspice를 활용해 정류기·필터·증폭기 회로를 실험하고 전원·잡음·측정 설정 문제를 분석·해결한 실습 경험입니다.",
    role: "회로 구성, 계측 장비(오실로스코프·AFG·DMM) 실측, LTspice 시뮬레이션 비교 및 측정 오류 디버깅",
    highlights: [
      "정류기, 수동/능동 필터, 트랜지스터·OP-Amp 증폭기 회로를 직접 구성하고 주파수·시간 영역 응답 측정",
      "실측 파형이 시뮬레이션(LTspice)과 다를 때 전원 인가 상태, 접지·잡음 유입, 프로브 및 트리거 설정 문제를 단계적으로 추적·해결",
    ],
    scopeNote:
      "이론 강의인 회로이론 수강만으로 실측 능력을 얻은 것이 아니라, 실제 전자회로 실험 과목에서 계측 장비를 다루며 체득한 측정·디버깅 경험입니다.",
    graphic: "oscilloscope",
  },
  {
    id: "card-6",
    cardNumber: 6,
    title: "Digital Logic Hardware Labs",
    subtitle: "TTL IC Breadboarding & Truth Table Verification",
    period: "2025",
    section: "engineering-foundations",
    category: "Coursework & Labs",
    kind: "Lab",
    kindLabel: "디지털 논리회로 실습",
    status: "Completed",
    statusLabel: "Completed · 실습 완료",
    isRepresentative: false,
    keywords: [
      "Multisim",
      "TTL IC",
      "NI ELVIS",
      "Full Adder",
      "MUX",
      "Latch",
      "진리표 검증",
    ],
    summary:
      "Multisim 시뮬레이션과 NI ELVIS·TTL IC 실배선을 통해 Full Adder, MUX, Latch 등 기초 디지털 논리회로를 구현하고 진리표를 실험적으로 검증한 실습입니다.",
    role: "Multisim 사전 시뮬레이션, TTL IC 및 NI ELVIS 실배선, 입출력 신호 인가 및 진리표 검증",
    highlights: [
      "Full Adder(전가산기), Multiplexer(MUX), Latch 등 핵심 조합·순차 논리회로를 TTL IC 핀맵에 맞춰 브레드보드에 직접 배선",
      "NI ELVIS 장비로 디지털 입력 패턴을 인가하고 출력 상태를 측정하여 이론 진리표와 일치하는지 검증",
    ],
    scopeNote:
      "기초 디지털 논리회로 실험에서 수행한 하드웨어 실배선 및 진리표 검증 실습입니다.",
    graphic: "logic-gates",
  },

  // ==========================================================================
  // Section 7: Beyond Engineering (Card 11)
  // ==========================================================================
  {
    id: "card-11",
    cardNumber: 11,
    title: "NewRun 방탈출 연합동아리",
    subtitle: "Intercollegiate Escape Room Club Operations",
    period: "재학 중 활동",
    section: "beyond-engineering",
    category: "Community",
    kind: "Activity",
    kindLabel: "연합동아리 · 임원진 운영",
    status: "Completed",
    statusLabel: "Active / Role Performed · 임원진 참여",
    isRepresentative: true,
    keywords: [
      "일반 부원 → 임원진",
      "구글폼 관리",
      "모임 조 편성",
      "일정 조율",
      "조직 운영·협업",
    ],
    summary:
      "방탈출 연합동아리 NewRun에서 일반 부원으로 활동한 뒤 임원진으로 참여하여 구글폼 관리, 정기 모임 조 편성 및 운영 업무를 맡아 협업과 일정 조율을 수행했습니다.",
    role: "구글폼 수요 조사 관리, 모임 조 편성, 일정 조율 및 동아리 운영 실무 담당",
    highlights: [
      "일반 부원으로 꾸준히 활동한 후 임원진에 합류하여 동아리 정기 모임 운영 지원",
      "참여 신청 구글폼 제작·관리 및 인원·선호도를 고려한 모임 조 편성 실무 수행",
      "다양한 전공·학교의 부원들과 소통하며 모임 일정을 조율하고 원활한 동아리 운영에 기여",
    ],
    scopeNote:
      "실제 수행한 구글폼 관리, 조 편성, 일정 조율 및 운영 협업 경험만 기재하며, 확인되지 않은 성과 수치나 담당하지 않은 역할을 만들지 않습니다.",
    graphic: "escape-groove",
  },
];

export const MUSIC_TASTE_ITEMS: MusicTasteItem[] = [
  {
    id: "vinyl-turntable",
    title: "LP 수집 & 턴테이블 음악 감상",
    subtitle: "Analog Vinyl Records & Turntable Listening",
    description:
      "좋아하는 음반을 LP 바이닐로 수집하고 턴테이블 위에 바늘을 올려 음악을 듣습니다. 동심원 그루브를 따라 바늘이 진동하며 소리를 읽어내는 아날로그 메커니즘 자체에 큰 매력을 느낍니다.",
    tags: ["Vinyl Collection", "Turntable", "Analog Audio", "Album Listening"],
    iconType: "vinyl",
  },
  {
    id: "band-performance",
    title: "밴드 보컬·드럼 활동 및 공연 경험",
    subtitle: "Live Band Vocal & Drum Performance",
    description:
      "밴드에서 보컬과 드럼으로 활동하며 합주와 무대 공연을 경험했습니다. 박자와 호흡을 맞추며 하나의 사운드를 완성해 가는 과정에서 팀워크와 현장 에너지를 배웠습니다.",
    tags: ["Band Music", "Vocal", "Drums", "Live Performance"],
    iconType: "band",
  },
  {
    id: "hooks-djing",
    title: "HOOKS 전자음악·DJing 동아리 참여",
    subtitle: "Electronic Music & DJing Club 'HOOKS'",
    description:
      "전자음악·DJing 동아리 HOOKS에 참여하여 다양한 장르의 전자음악을 접하고 트랙 간 BPM·이퀄라이징을 연결하는 디제잉 문화를 경험했습니다.",
    tags: ["HOOKS", "Electronic Music", "DJing", "Beatmatching"],
    iconType: "dj",
  },
];

export const MY_LINKS: LinkHubItem[] = [
  {
    id: "github-main",
    title: "GitHub — @RhythmlsLife",
    subtitle: "김영민(Youngmin Kim) 공식 GitHub 프로필 및 프로젝트 저장소 (새 탭 이동)",
    url: "https://github.com/RhythmlsLife",
    isExternal: true,
    badge: "Verified External",
    category: "External (Verified)",
  },
  {
    id: "nav-semiconductor",
    title: "03. Semiconductor & Process",
    subtitle: "반도체 공정·계측 실습, 집적회로소자 학습, 수율·결함 데이터 분석 (6 Cards)",
    url: "#semiconductor",
    isExternal: false,
    badge: "Primary Focus",
    category: "Internal Navigation",
  },
  {
    id: "nav-featured-projects",
    title: "04. Featured Projects",
    subtitle: "SMART AEB, 웨어러블 모니터링, 화재 회피 안내, 실시간 음성 향상 보조기 (4 Cards)",
    url: "#featured-projects",
    isExternal: false,
    badge: "Core Projects",
    category: "Internal Navigation",
  },
  {
    id: "nav-archive",
    title: "05. Project Archive",
    subtitle: "스마트 멀티탭 PCB 설계, Re:Back 자세 센서 분석, RV32I 파이프라인 검증 (3 Cards)",
    url: "#project-archive",
    isExternal: false,
    badge: "Archive",
    category: "Internal Navigation",
  },
  {
    id: "nav-foundations",
    title: "06. Engineering Foundations",
    subtitle: "전자회로 계측·디버깅 및 디지털 논리회로 하드웨어 실습 (2 Cards)",
    url: "#engineering-foundations",
    isExternal: false,
    badge: "Labs",
    category: "Internal Navigation",
  },
  {
    id: "nav-beyond",
    title: "07. Beyond Engineering",
    subtitle: "LP·턴테이블, 밴드 보컬·드럼, HOOKS DJing, NewRun 방탈출 동아리 운영",
    url: "#beyond-engineering",
    isExternal: false,
    badge: "Grooves & Club",
    category: "Internal Navigation",
  },
  {
    id: "nav-about",
    title: "02. About Youngmin",
    subtitle: "한양대학교 융합전자공학부 3학년 · 반도체 공정기술 및 공학 스펙트럼 소개",
    url: "#about",
    isExternal: false,
    badge: "Profile",
    category: "Internal Navigation",
  },
];
