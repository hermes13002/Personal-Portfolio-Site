export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'python' | 'ai-ml' | 'flutter' | 'web';
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'frameworks' | 'tools' | 'databases';
  level: number; // 1-5
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  path: string;
  isExternal?: boolean;
}