export interface EducationFieldProps {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
  percentage: number;
}
export interface AboutProps {
  Icon: React.ElementType;
  title: string;
  duration: string;
  link: string;
}

export interface PORProps {
  event: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ContactProps {
  Icon: React.ElementType;
  title: string;
  detail: string | number;
  link: string;
}

export interface SocialProps {
  Icon: React.ElementType;
  link: string;
}

export interface SkillProps {
  tech: string;
  logo: string;
  key: null | number;
}
