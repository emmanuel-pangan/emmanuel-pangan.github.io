import { Component, Input } from '@angular/core';
import { Project } from '../../db';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({ required: true }) project!: Project;

  constructor(private translationService: TranslationService) {}

  get currentTranslation(): string {
    return this.translationService.activeTranslation;
  }
}
