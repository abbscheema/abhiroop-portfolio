
export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  isContract?: boolean;
  points: string[];
}

export interface IndustryExpertise {
  sector: string;
  icon: string;
  title: string;
  description: string;
  keyDuties: string[];
}

export interface StrategicService {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
