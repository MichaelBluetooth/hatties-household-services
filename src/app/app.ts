import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Jumbotron } from './jumbotron/jumbotron';
import { Services } from './services/services';
import { HowItWorks } from './how-it-works/how-it-works';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Jumbotron, Services, HowItWorks, Footer],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('Hattie-Household-Services-Website');
}
