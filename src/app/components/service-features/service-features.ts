import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-service-features',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './service-features.html',
  styleUrl: './service-features.scss',
})
export class ServiceFeatures {
  readonly features = [
    {
      id: 1,
      titulo: 'Código Limpo & Arquitetura Angular Escalável',
      descricao:
        'Aplicações construídas com Angular moderno, TypeScript e arquitetura modular independente. Seu projeto pronto para crescer com facilidade de manutenção.',
      imagemUrl: 'assets/images/imagem-web.webp',
      pontosChave: [
        'Componentes Standalone e Signals Reativos',
        'Tipagem estrita e padrões limpos de engenharia',
        'Pronto para integrações com APIs REST e serviços em nuvem',
      ],
    },
    {
      id: 2,
      titulo: 'Design Focado em Conversão e Usabilidade (UX/UI)',
      descricao:
        'Interfaces elegantes que valorizam sua marca, simplificam a navegação do usuário e guiam o visitante de forma natural até a conversão.',
      imagemUrl: 'assets/images/imagem-ui-ux.jpg',
      pontosChave: [
        'Layout 100% responsivo construído Mobile-First',
        'Micro-interações e transições fluidas',
        'Suporte nativo a Tema Claro e Tema Escuro',
      ],
    },
    {
      id: 3,
      titulo: 'Máxima Performance e Otimização para Buscas (SEO & SSR)',
      descricao:
        'Velocidade de carregamento extrema através de SSR e hidratação inteligente. Estrutura desenhada para agradar aos algoritmos do Google e aos usuários.',
      imagemUrl: 'assets/images/icone-para-otimizacao-de-motores.jpg',
      pontosChave: [
        'Otimização rígida de Core Web Vitals (FCP, LCP, CLS)',
        'Server-Side Rendering para indexação completa e rápida',
        'Metadados semânticos e Open Graph para redes sociais',
      ],
    },
  ];
}
