import { ContactInfo, EducationItem, ExperienceItem, SkillItem, LanguageItem, ProcessStage } from '../types';

export const contactData: ContactInfo = {
  name: '이가영',
  nameEn: 'Gayoung Lee',
  role: 'Process Development Engineer',
  roleSub: '건식 공정 개발 & 전극 제조 기술 엔지니어',
  phone: '010-1234-1234',
  email: 'gayoung.lee@example.com',
  website: 'www.gayoung-lee.example.com',
  location: 'Seoul, South Korea',
  status: 'Ready for Next Challenge',
};

export const summaryText = `건식 공정 개발과 전극 제조 기술에 관심을 가진 공정 개발 엔지니어로, 소재 특성 분석과 공정 조건 최적화를 통해 제조 효율과 제품 성능을 개선하는 데 강점이 있습니다. 데이터 기반의 문제 해결을 바탕으로 공정 변수를 체계적으로 분석하고 재현성 높은 제조 조건을 구축하는 것을 목표로 합니다. 실험 결과를 단순히 기록하는 데 그치지 않고 원인을 구조적으로 분석하여 개선안으로 연결하는 업무 철학을 가지고 있습니다. 다양한 직무의 구성원과 적극적으로 협업하며 안정적인 양산 공정과 차세대 건식 전극 기술 발전에 기여하고자 합니다.`;

export const educationList: EducationItem[] = [
  {
    institution: '서울대학교',
    department: '화학공학과',
    degree: 'Master of Science, Chemical Engineering',
    degreeKr: '석사',
    period: '2026/03/01 – 2028/02/29',
    statusText: '석사 과정 예정',
    details: [
      '차세대 전극 소재 및 계면 화학 반응 거동 연구',
      '전극 미세 구조 최적화 및 전기화학적 특성 모델링'
    ]
  },
  {
    institution: '한양대학교',
    department: '신소재공학과',
    degree: 'Bachelor of Science, Materials Engineering',
    degreeKr: '학사',
    period: '2016/03/01 – 2020/02/29',
    statusText: '학사 졸업',
    details: [
      '재료 열역학, 결정구조학, 분체 공학 및 전기화학 기본 원리 이수',
      '고체상 계면 제어 및 기계적 물성 특성 평가 프로젝트 수행'
    ]
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'solide-energy',
    company: '솔리드에너지솔루션',
    role: 'Junior Process Engineer',
    period: '2024/03/01 – 2026/06/30',
    summary: '전극 제조 공정의 생산 데이터를 분석하고 품질 이상 발생 시 원인 분석과 개선 활동을 지원했습니다. 공정별 측정 데이터를 표준화하고 실험 결과를 체계적으로 관리하여 개발팀과 생산팀 간의 협업 효율을 높였습니다.',
    tags: ['생산 데이터 분석', '품질 이상 원인 분석', '측정 데이터 표준화', '협업 체계화'],
    metrics: [
      { label: '데이터 표준화율', value: '99.4%' },
      { label: '이상 분석 리드타임', value: '-38%' }
    ],
    keyAchievements: [
      '공정 모니터링 데이터 파이프라인 정립 및 실시간 측정 지표 통일',
      '품질 이상 시료에 대한 원인 규명 프로세스 수립 및 표준 작업지침서(SOP) 개정'
    ]
  },
  {
    id: 'ecocell-tech',
    company: '에코셀테크',
    role: 'Process Development Engineer',
    period: '2022/03/01 – 2024/02/29',
    summary: '건식 전극 제조 공정의 주요 변수인 혼합, 압밀, 캘린더링 조건을 분석하고 소재별 적정 공정 조건을 도출했습니다. 실험계획법(DOE)을 활용해 공정 조건과 전극 물성 간의 상관관계를 분석했으며, 공정 편차의 주요 원인을 규명하여 수율 개선에 기여했습니다.',
    tags: ['건식 전극 제조', '혼합·압밀·캘린더링', '실험계획법 (DOE)', '수율 개선'],
    metrics: [
      { label: '전극 수율 개선', value: '+14.2%' },
      { label: '공정 편차 표준편차', value: '0.85μm' }
    ],
    keyAchievements: [
      '건식 바인더 섬유화(Fibrillation) 및 고속 전단 혼합 조건 최적화',
      '롤 캘린더 갭 압력-온도 다변량 DOE 설계를 통한 전극 밀도 및 두께 균일도 극대화'
    ]
  },
  {
    id: 'next-battery-lab',
    company: '넥스트배터리랩',
    role: 'R&D Engineer',
    period: '2020/03/01 – 2022/02/28',
    summary: '배터리 전극 소재의 물성 평가와 공정 실험을 수행하고 실험 데이터를 기반으로 공정 개선 방향을 제안했습니다. 신규 소재 적용 과정에서 발생하는 균일도와 접착력 문제를 분석하고 실험 조건을 단계적으로 변경하여 안정적인 전극 제조 조건을 확보했습니다.',
    tags: ['소재 물성 평가', '접착력/박리강도 분석', '신규 소재 파일럿 검증', '공정 안정화'],
    metrics: [
      { label: '전극 박리강도', value: '+28%' },
      { label: '균일도 지수', value: '98.7%' }
    ],
    keyAchievements: [
      '신규 양극/음극 활물질 및 고체 전해질 계면 젖음성/접착 메커니즘 분석',
      '파일럿 라인 단계별 공정 파라미터 튜닝을 통한 안정적 전극 시트 제조 조건 확보'
    ]
  }
];

export const skillsList: SkillItem[] = [
  {
    name: 'Dry Electrode Process Development',
    level: 4,
    maxLevel: 5,
    category: 'Process',
    description: '용매 없이 활물질과 바인더를 건식 혼합하고 섬유화(Fibrillation)하여 롤 압밀 및 캘린더링하는 전주기 건식 전극 공정 구축 및 최적화',
    tags: ['Dry Mixing', 'PTFE Fibrillation', 'Roll Calendering', 'Sheet Compaction']
  },
  {
    name: 'Process Optimization & DOE',
    level: 4,
    maxLevel: 5,
    category: 'Engineering',
    description: '반응표면분석법(RSM), 직교배열표 등 통계적 실험계획법을 기반으로 다인자 공정 변수 간 상호작용 분석 및 최적 윈도우 도출',
    tags: ['Full Factorial DOE', 'RSM (Response Surface)', 'Yield Optimization', 'Statistical Process Control']
  },
  {
    name: 'Materials Characterization',
    level: 4,
    maxLevel: 5,
    category: 'Analysis',
    description: '전극 밀도, 두께 균일도, 박리강도(Peel Strength), SEM 단면 분석, 임피던스(EIS) 등 전극 물리·전기화학 물성 종합 평가',
    tags: ['Peel Strength Test', 'SEM/EDS Analysis', 'Electrode Density & Porosity', 'Electrochemical Evaluation']
  }
];

export const languagesList: LanguageItem[] = [
  {
    language: 'Korean',
    nativeName: '한국어',
    level: 5,
    maxLevel: 5,
    proficiencyText: '모국어 (Native)',
    note: '기술 문서 작성, 연구 보고서, 현장 커뮤니케이션'
  },
  {
    language: 'English',
    nativeName: '영어',
    level: 4,
    maxLevel: 5,
    proficiencyText: '업무 유창 (Professional Working)',
    note: '해외 논문 리서치, 글로벌 기술 미팅 및 데이터 리포트 작성'
  },
  {
    language: 'Japanese',
    nativeName: '일본어',
    level: 2,
    maxLevel: 5,
    proficiencyText: '기초 (Elementary)',
    note: '기초 기술 용어 독해 및 일상 소통'
  }
];

export const processStages: ProcessStage[] = [
  {
    id: 'stage-1',
    title: '1. 건식 고전단 혼합',
    titleEn: 'Dry High-Shear Mixing & Fibrillation',
    description: '무용매 환경에서 활물질, 도전재, PTFE 바인더를 고속 전단력으로 균일 분산하고 바인더의 미세 섬유화(Fibrillation)를 유도',
    keyParameters: [
      { name: '혼합기 RPM', value: '3,200', unit: 'RPM', impact: '섬유화 네트워크 형성률' },
      { name: '혼합 챔버 온도', value: '65', unit: '°C', impact: '바인더 전단 변형률' },
      { name: '처리 시간', value: '18', unit: 'min', impact: '분산 균일도 및 뭉침 방지' }
    ],
    status: 'Optimized'
  },
  {
    id: 'stage-2',
    title: '2. 프리-압밀 성형',
    titleEn: 'Pre-Compaction & Web Forming',
    description: '섬유화된 분말 혼합체를 일정한 두께의 자립형(Free-standing) 그린 필름 형태로 1차 롤 압밀 성형',
    keyParameters: [
      { name: '1차 롤 갭', value: '280', unit: 'μm', impact: '초기 그린필름 밀도' },
      { name: '롤 표면 온도', value: '90', unit: '°C', impact: '시트 균열 억제' },
      { name: '선압 (Line Load)', value: '14.5', unit: 'kN/m', impact: '시트 자립도' }
    ],
    status: 'Standardized'
  },
  {
    id: 'stage-3',
    title: '3. 정밀 캘린더링 & 라미네이션',
    titleEn: 'Precision Calendering & Lamination',
    description: '집전체(Current Collector)와 건식 시트를 고온/고압 롤투롤(R2R) 캘린더링하여 목표 두께, 합제 밀도 및 박리강도 달성',
    keyParameters: [
      { name: '최종 롤 갭', value: '110', unit: 'μm', impact: '목표 전극 두께 (±1μm)' },
      { name: '핫롤 온도', value: '135', unit: '°C', impact: '집전체 계면 박리강도' },
      { name: '라인 스피드', value: '8.0', unit: 'm/min', impact: '생산 수율 및 텐션 안정성' }
    ],
    status: 'Active DOE'
  },
  {
    id: 'stage-4',
    title: '4. 물성 특성 평가 & 피드백',
    titleEn: 'Characterization & Quality Closed-Loop',
    description: '두께 편차, 공극률, 180° 박리 시험 및 저항 측정을 통한 DOE 통계 피드백 모델 운영',
    keyParameters: [
      { name: '박리강도 측정', value: '> 18.5', unit: 'N/m', impact: '전극 탈리 방지' },
      { name: '합제 밀도', value: '3.42', unit: 'g/cc', impact: '체적당 에너지 밀도' },
      { name: '두께 편차 (Std)', value: '± 0.8', unit: 'μm', impact: '셀 적층 정밀도' }
    ],
    status: 'Optimized'
  }
];
