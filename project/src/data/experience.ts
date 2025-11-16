export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 'five-star-innovation',
    company: '5 Star Innovation Company',
    role: 'Mobile App Developer',
    period: 'February 2024 - Present',
    description: 'Developed and revamped Flutter applications for fintech and video conferencing.',
    achievements: [
      'Developed 8+ Flutter applications from scratch and revamped legacy projects for fintech and video conferencing.',
      'Built responsive UIs with custom animations (sliders, modals) using MediaQuery & LayoutBuilder.',
      'Modernized a legacy app by updating packages, redesigning UI, and rewriting API integrations.',
      'Integrated REST APIs & WebSockets; managed state with GetX & Provider and implemented local caching.',
      'Collaborated using ClickUp/Git; contributed key technical solutions adopted by the team.',
    ],
  },
  {
    id: 'draw-to-text-app',
    company: 'Freelance Project',
    role: 'Flutter Developer',
    period: 'April 2025 - May 2025',
    description: 'Architected and developed a complex drawing-to-text application from scratch.',
    achievements: [
      'Architected and developed a complex drawing-to-text application from scratch to replace traditional word processors on Android, focusing on a simple and user-friendly experience.',
      'Engineered the custom painting interface and dynamic text rendering from the ground up, solving complex challenges in element positioning and movement.',
      'Implemented core features including dynamic text auto-resizing, rich formatting, PDF export, and a robust undo/redo system with a stack-based history manager.',
      'Optimized application performance to ensure a smooth UI despite the computational load of managing a dynamic canvas with multiple elements.',
    ],
  },
  {
    id: 'osusupay',
    company: 'Osusupay',
    role: 'Freelance Flutter Developer',
    period: 'July 2025 - September 2025',
    description: 'Worked on a fintech mobile app, redesigning screens and implementing RESTful APIs.',
    achievements: [
      'Redesigned several screens and implemented RESTful APIs for a fintech mobile app.',
      'Collaborated with the designer to bring updated UI concepts to life with smooth animations.',
      'Improved overall user experience and performance while maintaining a clean, maintainable codebase.',
      'Followed good architectural practices and ensured code quality throughout the project.',
    ],
  },
];
