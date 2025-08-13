
import type { ProfileData } from '@/types';
// Lucide icons are now imported in the components that use them, based on string names.


export const MOCK_PROFILE_DATA: ProfileData = {
  name: 'Azim Saiyed',
  headline: 'Lead Full-Stack Engineer',
  profileImageUrl: '/profile-thumbnail.jpg', 
  summary: "🚀 I’m Azim Saiyed - a Lead Full-Stack Engineer who turns complex ideas into high-performing, user-loved products.\nWith 9+ years in fintech and SaaS, I’ve architected scalable React/Node.js platforms, led cross-functional teams, and built AWS-powered microservices that process billions securely and reliably.\n\n💡 What drives me:\n• Designing systems that scale without breaking\n• Mentoring engineers into confident problem-solvers\n• Shipping features that move the needle for business and users alike\n\nFrom untangling legacy code to delivering greenfield projects under tight deadlines, I thrive where technical depth meets product impact. And while my toolkit spans React, Node.js, TypeScript, AWS, and modern CI/CD, my real specialty is knowing when and why to use them.\n\n🌱 Always learning -  lately exploring how AI/ML, cloud-native patterns, and smarter observability can elevate user experience and developer velocity.",
  socialLinks: [
    { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/azimsaiyed/', icon: "Linkedin" },
    { id: 'github', name: 'GitHub', url: 'https://github.com/azimjs', icon: "Github" },
  ],
  cvUrl: '',
  email: 'contact@azimsaiyed.com',
  phone: '',
  address: 'Dallas, TX',
  services: [
    {
      id: 's1',
      icon: "Code",
      title: 'Full-Stack Development',
      description: 'Building scalable web applications using React, Node.js, TypeScript, and modern cloud technologies with focus on performance and security.',
    },
    {
      id: 's2',
      icon: "Palette",
      title: 'Financial Platform Development',
      description: 'Expert in developing secure, compliant financial applications with understanding of TRID, KYC/AML, and regulatory requirements.',
    },
    {
      id: 's3',
      icon: "User", 
      title: 'Technical Leadership',
      description: 'Leading cross-functional teams, mentoring engineers, and driving architecture decisions for complex microservices systems.',
    },
    {
      id: 's4',
      icon: "Search", 
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications on AWS, Docker, Kubernetes, and implementing CI/CD pipelines for production systems.',
    },
  ],
  workExperience: [
    {
      id: 'we1',
      title: 'Senior Software Engineer',
      company: 'Blend Labs Inc.',
      startDate: 'Jan 2022',
      endDate: 'Present',
      description:
        'Led migration to Zoom Video SDK, abstracting video provider logic to ensure vendor agnosticism. Drove 40% reduction in on-call incidents by building custom debugging tools. Implemented WebSocket infrastructure for real-time financial applications, reducing API calls by 40%. Mentored 6+ engineers and improved onboarding time by 20%.',
      logoUrl: 'https://placehold.co/100x100/111827/FFFFFF?text=BL',
    },
    {
      id: 'we2',
      title: 'Senior Front End Developer',
      company: 'Writer Inc.',
      startDate: 'Aug 2019',
      endDate: 'Dec 2021',
      description:
        'Architected and led development of core React application and frontend libraries. Led migration to Lerna monorepo for better modularization. Created CI/CD workflows via GitHub Actions and mentored junior developers.',
      logoUrl: 'https://placehold.co/100x100/374151/FFFFFF?text=WI',
    },
    {
      id: 'we3',
      title: 'Front End Developer',
      company: 'BBVA Compass',
      startDate: 'Jun 2017',
      endDate: 'Aug 2019',
      description:
        'Built web and hybrid mobile apps using Polymer/Lit, ES6, and SCSS. Developed BBVA Smart Assistant—an AI-driven banking assistant integrated into BBVA Spain\'s iOS/Android apps.',
      logoUrl: 'https://placehold.co/100x100/6B7280/FFFFFF?text=BB',
    },
    {
      id: 'we4',
      title: 'Application Developer',
      company: 'HM Health Solutions',
      startDate: 'Oct 2016',
      endDate: 'May 2017',
      description:
        'Contributed to enterprise Java apps, integrating Oracle/SQL, MQ Series, PL/SQL, and IIB for healthcare systems.',
      logoUrl: 'https://placehold.co/100x100/9CA3AF/FFFFFF?text=HM',
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'University of North Carolina',
      degree: 'M.S. in Computer Science',
      startDate: 'Sep 2015',
      endDate: 'May 2016',
      description: 'GPA: 3.7/4.0. Built SMS portal with decision-tree logic for Carolina Medical Centre using PHP and Twilio.',
    },
    {
      id: 'edu2',
      institution: 'Gujarat Technological University',
      degree: 'B.E. in Computer Engineering',
      startDate: 'Sep 2008',
      endDate: 'Jun 2012',
      description: 'GPA: 7.5/10. Focused on software development and computer systems engineering.',
    },
  ],
  projects: [
    {
      id: 'p1',
      name: 'BBVA Smart Assistant',
      description:
        'AI-driven banking assistant integrated into BBVA Spain\'s iOS/Android apps, improving customer engagement and banking experience.',
      imageUrl: 'https://placehold.co/600x400/1F2937/FFFFFF?text=BBVA+AI',
      dataAiHint: 'mobile banking app',
      projectUrl: '#',
      tags: ['AI/ML', 'Mobile Development', 'Banking', 'React'],
      category: 'Mobile Development',
    },
    {
      id: 'p2',
      name: 'Real-time Financial Platform',
      description:
        'Implemented WebSocket infrastructure for real-time financial applications, enabling instant updates and reducing API calls by 40%.',
      imageUrl: 'https://placehold.co/600x400/4B5563/FFFFFF?text=Real-time',
      dataAiHint: 'financial dashboard',
      projectUrl: '#',
      tags: ['WebSockets', 'Node.js', 'TypeScript', 'Financial Tech'],
      category: 'Web Development',
    },
    {
      id: 'p3',
      name: 'E-Signature Workflows',
      description:
        'Designed and delivered secure e-signature workflows and automated document follow-up processes for financial applications.',
      imageUrl: 'https://placehold.co/600x400/6B7280/FFFFFF?text=E-Sign',
      dataAiHint: 'document signing',
      projectUrl: '#',
      tags: ['Security', 'Workflow Automation', 'Compliance', 'Node.js'],
      category: 'Security & Compliance',
    },
    {
      id: 'p4',
      name: 'Custom Debugging Tools',
      description:
        'Built custom debugging tools including Retool apps, Datadog Monitors, and Splunk dashboards to proactively identify system issues.',
      imageUrl: 'https://placehold.co/600x400/9CA3AF/1F2937?text=Debug+Tools',
      dataAiHint: 'monitoring dashboard',
      projectUrl: '#',
      tags: ['DevOps', 'Monitoring', 'Datadog', 'Splunk'],
      category: 'DevOps',
    },
  ],
};
