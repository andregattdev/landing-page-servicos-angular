import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      id: 'gestao-financeira',
      title: 'Gestão financeira pessoal',
      summary: 'Aplicação web para organizar finanças pessoais, acompanhar o balanço mensal e entender os hábitos de consumo em um painel visual.',
      tags: ['Angular 20', 'Material 3', 'TypeScript', 'Signals', 'Responsivo'],
      imageUrl: '/assets/images/FrontFinancas 1.png',
      demoUrl: 'https://github.com/andregattdev',
      codeUrl: 'https://github.com/andregattdev',
      highlighted: true,
      impacts: ['Painel com métricas consolidadas', 'Temas claro e escuro', 'Arquitetura modular'],
    },
    {
      id: 'landing-angular-ssr',
      title: 'Landing page com Angular SSR',
      summary: 'Site institucional construído para apresentar serviços com carregamento rápido, conteúdo acessível e fundamentos de SEO técnico.',
      tags: ['Angular SSR', 'SEO técnico', 'Core Web Vitals', 'Acessibilidade'],
      imageUrl: '/assets/images/financas responsivo.png',
      demoUrl: 'https://andregatt.dev',
      codeUrl: 'https://github.com/andregattdev',
      highlighted: false,
    },
    {
      id: 'dashboard-administrativo',
      title: 'Lançamentos e relatórios',
      summary: 'Visão detalhada de movimentações com filtros, paginação e leitura clara dos dados para facilitar o acompanhamento financeiro.',
      tags: ['Angular CDK', 'Tabelas', 'Filtros', 'TypeScript'],
      imageUrl: '/assets/images/FrontFinancas 2.png',
      demoUrl: 'https://github.com/andregattdev',
      codeUrl: 'https://github.com/andregattdev',
      highlighted: false,
    },
    {
      id: 'design-system-uikit',
      title: 'Sistema visual & componentes',
      summary: 'Conjunto de componentes reutilizáveis com tokens de estilo, contraste consistente e suporte aos temas claro e escuro.',
      tags: ['UI/UX', 'Design system', 'SCSS', 'Material 3'],
      imageUrl: '/assets/images/FrontFinancas 3.png',
      demoUrl: 'https://github.com/andregattdev',
      codeUrl: 'https://github.com/andregattdev',
      highlighted: false,
    },
  ];

  onImageError(project: Project): void {
    project.imageUrl = undefined;
  }
}
