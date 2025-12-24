import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-services',
  imports: [
    CommonModule
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  servicos: Servico[] = [
    {
      id: 1,
      nome: 'Desenvolvimento Web',
      descricao: 'Criação de sites e aplicações web modernas e responsivas.',
      icone: 'assets/images/imagem-web.webp'
    },
    {
      id: 2,
      nome: 'Consultoria de UI/UX',
      descricao: 'Análise e design de interfaces focadas na experiência do usuário.',
      icone: 'assets/images/imagem-ui-ux.jpg'
    },
    {
      id: 3,
      nome: 'SEO e Performance',
      descricao: 'Otimização para motores de busca e melhoria de velocidade.',
      icone: 'assets/images/icone-para-otimizacao-de-motores.jpg'
    }
  ];

}
