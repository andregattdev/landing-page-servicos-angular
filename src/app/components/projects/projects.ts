import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      id: 'produto-saas',
      title: 'Projeto destaque (troque pelo seu)',
      summary: 'Uma frase curta do projeto: o que foi entregue e qual o benefício.',
      tags: ['Angular', 'Material', 'UX', 'Performance'],
      imageUrl: '/assets/images/projects/projeto-01.webp',
      demoUrl: '#',
      codeUrl: '#',
      highlighted: true,
      impacts: ['Impacto/resultado #1', 'Impacto/resultado #2', 'Impacto/resultado #3'],
    },
    {
      id: 'landing-ssr',
      title: 'Projeto 2 (troque pelo seu)',
      summary: 'Uma frase curta descrevendo o projeto e o diferencial.',
      tags: ['SSR', 'SEO', 'Core Web Vitals'],
      imageUrl: '/assets/images/projects/projeto-02.webp',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 'ecommerce-ui',
      title: 'Projeto 3 (troque pelo seu)',
      summary: 'Uma frase curta descrevendo o projeto e o diferencial.',
      tags: ['UI', 'A11y', 'Mobile-first'],
      imageUrl: '/assets/images/projects/projeto-03.webp',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 'projeto-4',
      title: 'Projeto 4 (troque pelo seu)',
      summary: 'Uma frase curta descrevendo o projeto e o diferencial.',
      tags: ['API', 'Arquitetura', 'Qualidade'],
      imageUrl: '/assets/images/projects/projeto-04.webp',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 'projeto-5',
      title: 'Projeto 5 (troque pelo seu)',
      summary: 'Uma frase curta descrevendo o projeto e o diferencial.',
      tags: ['Design System', 'Componentes', 'A11y'],
      imageUrl: '/assets/images/projects/projeto-05.webp',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 'projeto-6',
      title: 'Projeto 6 (troque pelo seu)',
      summary: 'Uma frase curta descrevendo o projeto e o diferencial.',
      tags: ['Landing', 'Conversão', 'Performance'],
      imageUrl: '/assets/images/projects/projeto-06.webp',
      demoUrl: '#',
      codeUrl: '#',
    },
  ];

  onImageError(project: Project): void {
    project.imageUrl = undefined;
  }
}

