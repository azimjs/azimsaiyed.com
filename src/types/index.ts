
export interface SocialLink {
  id: string;
  name: string; // e.g., 'LinkedIn', 'GitHub', 'Twitter'
  url: string;
  icon?: string; // Name of the Lucide icon
}

export interface ServiceItem {
  id: string;
  icon?: string; // Name of the Lucide icon
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

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
  dataAiHint?: string;
  projectUrl?: string;
  githubUrl?: string;
  tags?: string[];
  category?: string; // For potential filtering
}

export interface ProfileData {
  name: string;
  headline: string;
  profileImageUrl?: string; // Optional: if not provided, use initials
  summary: string;
  socialLinks: SocialLink[];
  cvUrl: string;
  email: string;
  phone: string;
  address?: string; // Optional
  services: ServiceItem[];
  workExperience: WorkExperience[];
  education: EducationItem[];
  projects: Project[];
}
