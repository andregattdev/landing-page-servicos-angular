import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({

  selector: 'app-cta',
  imports: [CommonModule, FormsModule],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
// 3. Renomeei para CtaComponent por convenção, mas o nome 'Cta' também funciona
export class Cta {
  contato = {
    nome: '',
    email: '',
    mensagem: '',
  };

  enviarFormulario() {
    // 4. Aqui você faria a lógica de envio (ex: para uma API)
    console.log('Dados do formulário:', this.contato);

    // 5. Substituído o 'alert()' padrão pelo Swal.fire()
    Swal.fire({
      title: 'Mensagem Enviada!',
      text: `Obrigado pelo seu contato, ${this.contato.nome}! Responderemos em breve.`,
      icon: 'success', // Ícone de sucesso
      confirmButtonText: 'Fechar',
      confirmButtonColor: '#3085d6', // Cor do botão de confirmação
      timer: 5000 // Opcional: fecha após 5 segundos
    });

    // 6. Limpar o formulário
    this.contato = { nome: '', email: '', mensagem: '' };
  }
}
