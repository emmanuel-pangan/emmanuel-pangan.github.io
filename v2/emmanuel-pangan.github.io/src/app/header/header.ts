import { Component } from '@angular/core';
import { ABOUT, About } from '../db';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected about: About = ABOUT;
}
