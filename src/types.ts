export interface ContactInfo {
  name: string;
  nameEn: string;
  role: string;
  roleSub: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  status: string;
}

export interface EducationItem {
  institution: string;
  department: string;
  degree: string;
  degreeKr: string;
  period: string;
  statusText?: string;
  details?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  keyAchievements?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 5
  maxLevel: number;
  category: 'Process' | 'Analysis' | 'Engineering';
  description: string;
  tags: string[];
}

export interface LanguageItem {
  language: string;
  nativeName: string;
  level: number;
  maxLevel: number;
  proficiencyText: string;
  note?: string;
}

export interface ProcessStage {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  keyParameters: {
    name: string;
    value: string;
    unit: string;
    impact: string;
  }[];
  status: 'Optimized' | 'Standardized' | 'Active DOE';
}
