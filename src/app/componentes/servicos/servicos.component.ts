import { Component } from '@angular/core';
   type ServicoKey =
  | 'clareamento'
  | 'protese'
  | 'limpeza'
  | 'restauracao'
  | 'urgencia'
  | 'pediatria';
@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
 
  icons: Record<ServicoKey, string> = {
    clareamento: 'assets/sorriso.png',
    protese: 'assets/protese.png',
    limpeza: 'assets/limpeza.png',
    restauracao: 'assets/restauracao.png',
    urgencia: 'assets/urgencia.png',
    pediatria: 'assets/pediatria.png',
  };

    iconsHover: Record<ServicoKey, string> = {
      clareamento: 'assets/sorriso_bordo.png',
      protese: 'assets/protese_bordo.png',
      limpeza: 'assets/limpeza_bordo.png',
      restauracao: 'assets/restauracao_bordo.png',
      urgencia: 'assets/urgencia_bordo.png',
      pediatria: 'assets/pediatria_bordo.png',
    };

    onCardEnter(tipo: ServicoKey) {
      this.icons[tipo] = this.iconsHover[tipo];
    }

    onCardLeave(tipo: ServicoKey) {
      this.icons[tipo] = this.icons[tipo].replace('_bordo', '');
    }


}
