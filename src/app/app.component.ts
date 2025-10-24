import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HeroPageComponent } from "./componentes/hero-page/hero-page.component";
import { ServicosComponent } from "./componentes/servicos/servicos.component";
import { PlanosComponent } from "./componentes/planos/planos.component";
import { ContatoComponent } from "./componentes/contato/contato.component";
import { FooterComponent } from "./componentes/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CabecalhoComponent, HeroPageComponent, ServicosComponent, PlanosComponent, ContatoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'site_Polliana';
}
