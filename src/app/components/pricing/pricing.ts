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
      descricao: 'Ideal para iniciar sua presença online com rapidez.',
      recursos: ['Landing Page Simples', 'Design Responsivo', 'Formulário de Contato Básico', 'Hospedagem por 1 ano (opcional)'],
      destaque: false
    },
    {
      titulo: 'Profissional',
      preco: 2999,
      descricao: 'Otimizado para crescimento, SEO e captura de leads qualificados.',
      recursos: ['Todas as Essenciais', 'Seções de Processo e FAQ', 'Otimização SEO Inicial', 'Integração com Google Analytics', 'Suporte Prioritário por 3 meses'],
      destaque: true
    },
    {
      titulo: 'Customizado',
      preco: 'Sob Consulta',
      descricao: 'Desenvolvimento Backend e soluções complexas sob medida para grandes projetos.',
      recursos: ['Todas as Profissionais', 'Desenvolvimento de APIs Dedicadas', 'Sistemas de Gerenciamento (CRM/ERP)', 'Serviços de Consultoria', 'Manutenção Premium Dedicada'],
      destaque: false
    }
  ];

}
