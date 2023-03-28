import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent {

  localStorageData: any;

  constructor() {
    // On récupère les données du localStorage
    this.localStorageData = localStorage.getItem('task');
  }

  // Fonction pour afficher la bonne section de mon fichier HTML selon si le localStorage est vide ou non
  afficherSection() {
    if (this.localStorageData) {
      // Si le localStorage contient des données, on affiche la deuxième section
      return 'ToDoList';
    } else {
      // Sinon, on affiche la première section
      return 'empty-';
    }
  }
}
