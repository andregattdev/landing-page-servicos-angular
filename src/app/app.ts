import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Projects } from './components/projects/projects';



@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Header,
    Hero,
    Projects,
    Cta,
    Footer,
    MatSidenavModule,
    MatListModule,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
