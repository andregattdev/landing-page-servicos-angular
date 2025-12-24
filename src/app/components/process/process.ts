import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-process',
  imports: [ CommonModule, MatCardModule, MatIconModule],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {

  processSteps = [
    {
      step: 1,
      titulo: 'Descoberta e Briefing',
      descricao: 'Entender suas metas, público-alvo e definir as necessidades e requisitos técnicos do projeto.',
      icone: 'search'
    },
    {
      step: 2,
      titulo: 'Design e Prototipação',
      descricao: 'Criação de wireframes, design UI/UX (visual e experiência do usuário) e protótipo interativo para aprovação.',
      icone: 'design_services'
    },
    {
      step: 3,
      titulo: 'Desenvolvimento e Código',
      descricao: 'Transformação do design em código limpo, responsivo e performático usando as melhores práticas de Angular.',
      icone: 'code'
    },
    {
      step: 4,
      titulo: 'Revisão e Lançamento',
      descricao: 'Testes finais de qualidade (QA), ajustes e deploy seguro da sua aplicação para o ambiente de produção.',
      icone: 'launch'
    },
  ];

}
