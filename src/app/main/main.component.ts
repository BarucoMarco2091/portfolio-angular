import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  menuItems = [
    { image: '/thumbnail-project-1-large.webp', name: 'DESIGN PORTFOLIO', tech: 'HTML, CSS'},
    { image: '/thumbnail-project-2-large.webp', name: 'E-LEARNING LANDING PAGE', tech: 'HTML, CSS'},
    { image: '/thumbnail-project-3-large.webp', name: 'TODO WEB APP', tech: 'HTML, CSS, JavaScript'},
    { image: '/thumbnail-project-4-large.webp', name: 'ENTERTAINMENT WEB APP', tech: 'HTML, CSS, JavaScript'},
    { image: '/thumbnail-project-5-large.webp', name: 'MEMORY GAME', tech: 'HTML, CSS, JavaScript'},
    { image: '/thumbnail-project-6-large.webp', name: 'ART GALLERY SHOWCASE', tech: 'HTML, CSS, JavaScriptgi'},
  ]
}
