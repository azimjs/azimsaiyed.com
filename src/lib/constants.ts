
import type { ProfileData } from '@/types';
// Lucide icons are now imported in the components that use them, based on string names.

export const MOCK_PROFILE_DATA: ProfileData = {
  name: 'Azim Saiyed',
  headline: 'Software Engineer',
  profileImageUrl: '/profile-thumbnail.jpg', 
  summary:
    "Hello! I'm Azim Saiyed, a passionate Full Stack Developer based in San Francisco. I have a strong background in creating dynamic and responsive web applications, with a keen eye for detail and user experience. My expertise lies in JavaScript, React, Node.js, and Python, and I'm always eager to explore new technologies to build innovative solutions.\n\nI thrive in collaborative environments and enjoy tackling complex challenges. My goal is to leverage my skills to contribute to impactful projects that make a difference. When I'm not coding, you can find me exploring the latest tech trends or hiking in the nearby trails.",
  socialLinks: [
    { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/azimsaiyed/', icon: "Linkedin" },
    { id: 'github', name: 'GitHub', url: 'https://github.com/azimjs', icon: "Github" },
  ],
  cvUrl: '/azimsaiyed-cv.pdf', // Placeholder URL
  email: 'contact@azimsaiyed.com',
  phone: '',
  address: 'Dallas, TX',
  services: [
    {
      id: 's1',
      icon: "Code",
      title: 'Web Development',
      description: 'Crafting responsive and high-performance websites using modern technologies like Next.js, React, and Node.js.',
    },
    {
      id: 's2',
      icon: "Palette",
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces with a focus on user experience and accessibility.',
    },
    {
      id: 's3',
      icon: "User", 
      title: 'AI Integration',
      description: 'Leveraging Genkit and AI models to build intelligent features and personalized user experiences.',
    },
    {
      id: 's4',
      icon: "Search", 
      title: 'App Optimization',
      description: 'Optimizing applications for speed, scalability, and search engine visibility.',
    },
  ],
  workExperience: [
    {
      id: 'we1',
      title: 'Senior Software Engineer',
      company: 'Innovatech Solutions',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description:
        'Led development of key features for a flagship SaaS product. Mentored junior developers and improved code quality. Implemented AI-driven recommendation engine using Genkit.',
      logoUrl: 'https://placehold.co/100x100/111827/FFFFFF?text=IS',
    },
    {
      id: 'we2',
      title: 'Software Developer',
      company: 'TechCore Inc.',
      startDate: 'Jun 2018',
      endDate: 'Dec 2020',
      description:
        'Developed and maintained full-stack web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      logoUrl: 'https://placehold.co/100x100/374151/FFFFFF?text=TC',
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'Stanford University',
      degree: 'M.S. in Computer Science',
      startDate: 'Sep 2016',
      endDate: 'May 2018',
      description: 'Specialized in Artificial Intelligence and Human-Computer Interaction.',
    },
    {
      id: 'edu2',
      institution: 'University of California, Berkeley',
      degree: 'B.S. in Electrical Engineering & Computer Sciences',
      startDate: 'Sep 2012',
      endDate: 'May 2016',
      description: 'Graduated with honors, focusing on software development and systems.',
    },
  ],
  projects: [
    {
      id: 'p1',
      name: 'AI Content Generator',
      description:
        'A web application that uses LLMs to generate creative content snippets for marketing purposes. Built with Next.js and Genkit.',
      imageUrl: 'https://placehold.co/600x400/1F2937/FFFFFF?text=AI+Gen',
      dataAiHint: 'abstract code',
      projectUrl: '#',
      githubUrl: '#',
      tags: ['Next.js', 'AI', 'Genkit', 'TypeScript'],
      category: 'Web Development',
    },
    {
      id: 'p2',
      name: 'E-commerce Analytics Dashboard',
      description:
        'A comprehensive dashboard for visualizing sales data and customer behavior for an e-commerce platform. Features real-time updates and custom reporting.',
      imageUrl: 'https://placehold.co/600x400/4B5563/FFFFFF?text=Dashboard',
      dataAiHint: 'data dashboard',
      projectUrl: '#',
      tags: ['React', 'Data Visualization', 'Node.js'],
      category: 'Web Development',
    },
    {
      id: 'p3',
      name: 'Task Management App',
      description:
        'A collaborative task management tool designed for small teams, featuring drag-and-drop interface and real-time synchronization.',
      imageUrl: 'https://placehold.co/600x400/6B7280/FFFFFF?text=Task+App',
      dataAiHint: 'task interface',
      githubUrl: '#',
      tags: ['Vue.js', 'Firebase', 'Productivity'],
      category: 'Web Design',
    },
     {
      id: 'p4',
      name: 'Portfolio Redesign',
      description:
        'Complete redesign and development of a personal portfolio website to showcase skills and projects effectively.',
      imageUrl: 'https://placehold.co/600x400/9CA3AF/1F2937?text=Portfolio',
      dataAiHint: 'modern design',
      projectUrl: '#',
      tags: ['Next.js', 'TailwindCSS', 'UI/UX'],
      category: 'Logo', // Example category
    },
  ],
};
