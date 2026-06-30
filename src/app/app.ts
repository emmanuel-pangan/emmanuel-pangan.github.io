import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from "./footer/footer";
import { Body } from "./body/body";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('emmanuel-pangan.github.io');
}
