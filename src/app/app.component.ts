import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'site_Polliana';
}
