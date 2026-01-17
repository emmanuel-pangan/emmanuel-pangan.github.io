import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  ENGLISH = "English";
  JAPANESE = "Japanese";
  public activeTranslation: string = "";

  constructor() {
    this.activeTranslation = this.ENGLISH;
  }

  switchToJapaneseTranslation() {
    this.activeTranslation = this.JAPANESE;
  }

  switchToEnglishTranslation() {
    this.activeTranslation = this.ENGLISH;
  }
}
