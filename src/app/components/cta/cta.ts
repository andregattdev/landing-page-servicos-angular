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
export class Cta {
  contato = { nome: '', email: '', mensagem: '' };

  enviarFormulario(): void {
    const { nome, email, mensagem } = this.contato;
    const texto = encodeURIComponent(`Olá André! Meu nome é ${nome.trim()} (${email.trim()}).\n\nMensagem: ${mensagem.trim()}`);
    const linkWhatsApp = `https://wa.me/5543996761568?text=${texto}`;

    Swal.fire({
      title: 'Pronto para enviar',
      text: 'Vamos abrir o WhatsApp com sua mensagem preenchida.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Abrir WhatsApp',
      cancelButtonText: 'Voltar',
      confirmButtonColor: '#25D366',
    }).then((result) => {
      if (result.isConfirmed) window.open(linkWhatsApp, '_blank', 'noopener,noreferrer');
    });
  }
}
