import type { ProfileData } from '@/types';

export const MOCK_PROFILE_DATA: ProfileData = {
  name: 'Alex Johnson',
  headline: 'Full Stack Developer | AI Enthusiast | Lifelong Learner',
  summary:
    "Passionate Full Stack Developer with 5+ years of experience in building scalable web applications. Proficient in JavaScript, React, Node.js, and Python. Keen interest in leveraging AI to create innovative solutions. Always eager to learn new technologies and contribute to impactful projects. Currently exploring advanced AI personalization techniques.",
  workExperience: [
    {
      id: 'we1',
      title: 'Senior Software Engineer',
      company: 'Innovatech Solutions',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description:
        'Lead development of key features for a flagship SaaS product. Mentored junior developers and improved code quality through reviews and best practices. Implemented AI-driven recommendation engine.',
      logoUrl: 'https://placehold.co/100x100/000000/FFFFFF?text=IS',
    },
    {
      id: 'we2',
      title: 'Software Developer',
      company: 'TechCore Inc.',
      startDate: 'Jun 2018',
      endDate: 'Dec 2020',
      description:
        'Developed and maintained full-stack web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Contributed to API design and database management.',
      logoUrl: 'https://placehold.co/100x100/444444/FFFFFF?text=TC',
    },
  ],
  projects: [
    {
      id: 'p1',
      name: 'AI Content Generator',
      description:
        'A web application that uses LLMs to generate creative content snippets for marketing purposes. Built with Next.js and Genkit.',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Project+1',
      dataAiHint: 'abstract code',
      projectUrl: '#',
      githubUrl: '#',
      tags: ['Next.js', 'AI', 'Genkit', 'TypeScript'],
    },
    {
      id: 'p2',
      name: 'E-commerce Analytics Dashboard',
      description:
        'A comprehensive dashboard for visualizing sales data and customer behavior for an e-commerce platform. Features real-time updates and custom reporting.',
      imageUrl: 'https://placehold.co/600x400/444444/FFFFFF?text=Project+2',
      dataAiHint: 'data dashboard',
      projectUrl: '#',
      tags: ['React', 'Data Visualization', 'Node.js'],
    },
    {
      id: 'p3',
      name: 'Task Management App',
      description:
        'A collaborative task management tool designed for small teams, featuring drag-and-drop interface and real-time synchronization.',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Project+3',
      dataAiHint: 'task interface',
      githubUrl: '#',
      tags: ['Vue.js', 'Firebase', 'Productivity'],
    },
  ],
  linkedInUrl: 'https://www.linkedin.com/in/alexjohnsondev', // Replace with a real placeholder if possible, or keep generic
  email: 'alex.johnson.dev@example.com',
};
