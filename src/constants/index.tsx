/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Twitter,
  User,
  Youtube,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: '/#',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: '/#',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: '/#',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.png',
    title: 'E-Commerce',
    tags: ['API', 'Development'],
    projectLink: 'https://e-commerce-one-blush-82.vercel.app/',
  },
  {
    imgSrc: '/images/project-ph-2.png',
    title: 'GitHub Issues Tracker',
    tags: ['API', 'Development'],
    projectLink: 'https://issues-tracker-eight.vercel.app/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2025',
    title: 'Self-Taught Frontend Developer',
    institute: 'Personal Learning & Online Resources',
    desc: 'Learning and building web projects using HTML, CSS, JavaScript, React, and Tailwind CSS. Focused on responsive, interactive web interfaces.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2025',
    title: 'Frontend Developer (Learning Stage)',
    institute: 'Self-Learning / Personal Projects',
    desc: 'Building responsive web projects using HTML, CSS, JavaScript, React, and Tailwind CSS for practice and skill development.',
  }
];
const tools: ToolsType[] = [
  { label: 'Figma', imgSrc: '/images/tools/figma.svg' },
  { label: 'HTML', imgSrc: '/images/tools/html5.svg' },
  { label: 'CSS', imgSrc: '/images/tools/css3.svg' },
  { label: 'Tailwind CSS', imgSrc: '/images/tools/tailwindcss.svg' },
  { label: 'JavaScript', imgSrc: '/images/tools/javascript.svg' },
  { label: 'React', imgSrc: '/images/tools/react.svg' },
];

const services: ServiceType[] = [
  {
    title: 'Web Development',
    desc: 'Building responsive and interactive websites using HTML, CSS, JavaScript, React, and Tailwind CSS.',
    projects: '1+ Personal Projects', 
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Frontend UI Design',
    desc: 'Creating clean, minimal, and user-friendly interfaces for web projects to improve usability.',
    projects: '1+ Personal Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '0+',
    label: 'Happy Clients',
  },
  {
    number: '01+',
    label: 'Years Of Experience',
  },
  {
    number: '1+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Testimonials Coming Soon',
    role: 'Future Clients',
    image: '/images/question-mark.jpg',
    text: 'I am currently working on improving my skills and building real-world projects. Client testimonials will be added here as I start working with clients.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
