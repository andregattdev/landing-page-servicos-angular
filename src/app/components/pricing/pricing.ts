import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  imports: [ CommonModule, MatCardModule, MatButtonModule, MatIconModule ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {

  pricingTiers = [
    {
      titulo: 'Essencial',
      preco: 999,
      descricao: 'Entrega rápida para validar sua oferta e começar a captar contatos.',
      idealPara: 'Landing ou site institucional simples',
      recursos: [
        'Layout moderno e responsivo',
        'Seções essenciais (hero, serviços, CTA)',
        'Formulário de contato funcional',
        'Publicação e checklist de lançamento',
      ],
      destaque: false,
    },
    {
      titulo: 'Profissional',
      preco: 2999,
      descricao: 'Mais completo, pensado para conversão, SEO e credibilidade.',
      idealPara: 'Quem quer vender e escalar aquisição',
      recursos: [
        'Tudo do Essencial',
        'Projeto “feito para conversão” (estrutura e copy)',
        'SEO técnico inicial + metas básicas',
        'Analytics e eventos (cliques/CTA/form)',
        'Ajustes pós-publicação por 30 dias',
      ],
      destaque: true,
    },
    {
      titulo: 'Customizado',
      preco: 'Sob Consulta',
      descricao: 'Sob medida: produto, integrações e fluxos mais complexos.',
      idealPara: 'Apps, integrações, áreas logadas e roadmap',
      recursos: [
        'Tudo do Profissional (com escopo fechado)',
        'Integrações (pagamentos, CRM, WhatsApp, etc.)',
        'Áreas logadas / painéis / CRUD',
        'Arquitetura e qualidade (testes/observabilidade)',
        'Suporte e evolução contínua (opcional)',
      ],
      destaque: false,
    }
  ];

}
