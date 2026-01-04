
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillSet {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  summary: string;
  experience: Experience[];
  skills: {
    tools: string[];
    technical: string[];
    soft: string[];
  };
  education: Education[];
  certifications: string[];
  awards: string[];
}
