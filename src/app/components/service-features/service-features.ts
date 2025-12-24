import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // Necessário para imagens externas

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




  features = [
  {
    id: 1,
    titulo: 'Desenvolvimento Web Sob Medida',
    descricao:
      'Criamos aplicações web que se adaptam perfeitamente às suas necessidades, desde portais institucionais até sistemas complexos de gerenciamento.',

    imagemUrl:
      'assets/images/imagem-web.webp',
    pontosChave: [
      'Sistemas 100% personalizados',
      'Foco em performance e escalabilidade',
      'Integração com APIs e serviços externos',
    ],
  },
  {
    id: 2,
    titulo: 'Design Focado no Usuário (UX/UI)',
    descricao:
      'Mais do que um visual bonito, desenhamos jornadas de usuário que são intuitivas, acessíveis e que convertem visitantes em clientes.',
    // URL externa (UX/UI)
    imagemUrl:
      'assets/images/imagem-ui-ux.jpg',
    pontosChave: [
      'Prototipação e testes de usabilidade',
      'Design responsivo (Mobile-first)',
      'Interfaces claras e modernas',
    ],
  },
  {
    id: 3,
    titulo: 'Otimização para Motores de Busca (SEO)',
    descricao:
      'Garantimos que seu site seja encontrado por seus clientes potenciais no Google, aumentando o tráfego orgânico e a autoridade do seu domínio.',
    // URL externa (SEO)
    imagemUrl:
      'assets/images/icone-para-otimizacao-de-motores.jpg',
    pontosChave: [
      'Análise de palavras-chave',
      'Otimização On-Page e Off-Page',
      'Relatórios de desempenho e ranking',
    ],
  },
];
}
