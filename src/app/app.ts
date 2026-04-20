import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ServiceFeatures } from "./components/service-features/service-features";
import { Faq } from './components/faq/faq';
import { Process } from './components/process/process';
import { Pricing } from './components/pricing/pricing';
import { Projects } from './components/projects/projects';



@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Header,
    Hero,
    Services,
    Projects,
    Cta,
    Faq,
    Process,
    Pricing,
    Footer,
    MatSidenavModule,
    MatListModule,
    ServiceFeatures,
   
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-servicos');
}
