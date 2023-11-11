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
  domain: string;
  logo: string | string[];
  tech: string | string[];
}

export interface ProjectProps {
  title: string;
  description: string;
  preview: string;
  githubLink: string;
  liveLink: string;
  techLogo: string | string[];
  techStack: string | string[];
}

export interface AchievementProps {
  logo: string;
  title: string;
  description: string;
}
