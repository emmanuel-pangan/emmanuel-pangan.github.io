import { Component } from '@angular/core';
import { HEADER_ENG, HEADER_JP, Header as HeaderData } from '../db';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  header_eng: HeaderData = HEADER_ENG;
  header_jp: HeaderData = HEADER_JP;
  currentTranslation: string = "";

  constructor(private translationService : TranslationService ) {
    this.currentTranslation = translationService.activeTranslation;
  }

  public switchTranslation() {
    if (this.translationService.activeTranslation === this.translationService.ENGLISH) {
      this.translationService.activeTranslation = this.translationService.JAPANESE;
    }
    
    else if (this.translationService.activeTranslation === this.translationService.JAPANESE) {
      this.translationService.activeTranslation = this.translationService.ENGLISH;
    }

    this.currentTranslation = this.translationService.activeTranslation;
  }
}
