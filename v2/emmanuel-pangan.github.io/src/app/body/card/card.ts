import { Component, Input } from '@angular/core';
import { Project } from '../../db';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({required: true}) project!: Project;
}
