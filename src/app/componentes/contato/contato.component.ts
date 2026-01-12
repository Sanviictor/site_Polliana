import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  loading = false;
  success = false;
  error = false;

  form = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    this.loading = true;
    this.success = false;
    this.error = false;

    this.http.post(
      'https://formspree.io/f/xpqqzqke',
      this.form
    ).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        this.form = {
          nome: '',
          email: '',
          telefone: '',
          mensagem: ''
        };
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
