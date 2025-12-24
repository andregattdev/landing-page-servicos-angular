import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {

  // 3. Nossa lista de Perguntas e Respostas
  faqs = [
    {
      pergunta: 'Quanto tempo demora para meu site ficar pronto?',
      resposta: 'O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Uma landing page como esta pode levar de 1 a 2 semanas, enquanto um sistema completo pode levar alguns meses. Entraremos em contato para avaliar seu caso.'
    },
    {
      pergunta: 'Vocês oferecem manutenção após a entrega?',
      resposta: 'Sim! Oferecemos planos de manutenção mensais que garantem que seu site esteja sempre atualizado, seguro e com o melhor desempenho. Também podemos trabalhar por hora para ajustes pontuais.'
    },
    {
      pergunta: 'O site será responsivo para celulares?',
      resposta: 'Com certeza. Todos os nossos projetos são desenvolvidos com a abordagem "Mobile-First", garantindo uma experiência perfeita em todos os dispositivos, do celular ao desktop.'
    },
    {
      pergunta: 'Como funciona o processo de pagamento?',
      resposta: 'Geralmente trabalhamos com um sinal de 50% na aprovação do projeto e os 50% restantes na entrega final. Aceitamos PIX e transferência bancária.'
    }
  ];

}
