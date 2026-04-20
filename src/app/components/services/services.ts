import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-services',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  servicos: Servico[] = [
    {
      id: 1,
      nome: 'Desenvolvimento Web',
      descricao: 'Sites e aplicações com acabamento premium, responsivos e prontos para vender.',
      idealPara: 'Landing pages, sites institucionais e MVPs',
      destaques: [
        'Componentes reutilizáveis e fáceis de manter',
        'Performance e acessibilidade desde o início',
        'Entrega com checklist de publicação',
      ],
      icone: 'assets/images/imagem-web.webp',
    },
    {
      id: 2,
      nome: 'Consultoria de UI/UX',
      descricao: 'Melhoramos sua interface para aumentar clareza, confiança e conversão.',
      idealPara: 'Quando a interface está “ok”, mas não converte',
      destaques: [
        'Diagnóstico + sugestões objetivas (quick wins)',
        'Padronização visual (UI kit / design system)',
        'Ajustes de fluxo: menos atrito, mais ação',
      ],
      icone: 'assets/images/imagem-ui-ux.jpg',
    },
    {
      id: 3,
      nome: 'SEO e Performance',
      descricao: 'Aprimoramos visibilidade e velocidade para você ganhar tráfego e leads.',
      idealPara: 'Quando o site carrega lento ou não aparece no Google',
      destaques: [
        'Core Web Vitals e otimização de assets',
        'SEO técnico (meta, headings, indexação)',
        'Medição com eventos e relatórios básicos',
      ],
      icone: 'assets/images/icone-para-otimizacao-de-motores.jpg',
    }
  ];

}
