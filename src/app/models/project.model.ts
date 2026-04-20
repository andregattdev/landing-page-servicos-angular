export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
  highlighted?: boolean;
  impacts?: string[];
}

