import { Component } from '@angular/core';
import { Card } from "./card/card";
import { Project, PROJECTS } from '../db';

@Component({
  selector: 'app-body',
  imports: [Card],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  protected projects: Project[] = PROJECTS;
}
