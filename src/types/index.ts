export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  logoUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  tags?: string[];
}

export interface ProfileData {
  name: string;
  headline: string;
  summary: string;
  workExperience: WorkExperience[];
  projects: Project[];
  linkedInUrl: string;
  email: string; // For contact form target, not displayed publicly unless desired
}
