import { Component, Input } from '@angular/core';
import { Project } from '../../db';
import { TranslationService } from '../../translation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [DatePipe],
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
