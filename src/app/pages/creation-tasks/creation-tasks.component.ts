import { Component } from '@angular/core';
import { TasksService } from 'src/app/service/tasks.service';
import { Task } from 'src/app/mocks/to-do-type.mock'

@Component({
  selector: 'app-creation-tasks',
  templateUrl: './creation-tasks.component.html',
  styleUrls: ['./creation-tasks.component.css']
})
export class CreationTasksComponent {

  newTask?: Task;
  categorys = [
  "🛍️",
  "💊️",
  "💼",
  "💸",
  "🧼",
  "🤷"
  ];

  constructor(public taskService: TasksService ) {}

  selectedCategory: string = "";
  
  selectCategory(category: string) {
  this.selectedCategory = category;
  console.log("Selected Category: ", this.selectedCategory);
  }
  
  ngOnInit() {
  }
  }


