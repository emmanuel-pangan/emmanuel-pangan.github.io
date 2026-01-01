import { Component, OnInit } from '@angular/core';
import { Card } from './card/card';
import { Project, PROJECTS } from '../db';

@Component({
  selector: 'app-body',
  imports: [Card],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body implements OnInit {
  protected projects: Project[] = PROJECTS;
  protected filteredProjects: Project[] = PROJECTS;

  ngOnInit(): void {
    this.sortProjectsBy('');
  }

  protected sortProjectsBy(sortMethod: string) {
    switch (sortMethod) {
      case 'Alphabetical (Ascending)':
        this.filteredProjects = [...this.projects.sort((a, b) => a.title.localeCompare(b.title))];
        break;
        
      case 'Alphabetical (Descending)':
        this.filteredProjects = [...this.projects.sort((a, b) => b.title.localeCompare(a.title))];
        break;

      case 'Published Date (Ascending)':
        this.filteredProjects = [
          ...this.projects.sort(
            (a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime()
          ),
        ];
        break;
        
      case 'Published Date (Descending)':
        this.filteredProjects = [
          ...this.projects.sort(
            (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
          ),
        ];
        break;

      default:
        this.filteredProjects = [...this.projects.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10))];
    }
  }
}
