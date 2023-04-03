import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

 // on récutpère les taches du localStorage
 public getTask() {
  const task = localStorage.getItem("task");

  // si le tableau de tâches existe, le retourner si non on appelle la méthode createTask
  if(task) {
    return JSON.parse(task);
  } else {
    this.createtaskList(); 
    this.getTask(); 
  }
}

  // on créer de nouvelles tâches et on la met dans le localStorage
  private createtaskList() {

    const newTaskList = JSON.stringify([]);
    localStorage.setItem('taskList', newTaskList);
  }

  // Pour sauvegarder le localStorage quand on le modifie
  private saveTask(task: Task) {
    localStorage.setItem('task', JSON.stringify(task));
  }

    // je créer une nouvelle tâche sans valeur
    public createTask() {
      const newTask: Task = {
        id: 1,
        content: "",
        category: "",
        isUrgent: false,
        doneDate: 0,
        isDone: false
      }
      console.log(newTask)
      return newTask
    }
  
    // je compte les éléments du tableau de mon localStorage et j'y ajoute +1 pour que ça me donne le bon numéro de mon id
    private generateId() :number {
      const currentToDoList = this.getTask()
      if(currentToDoList) {
        return currentToDoList.length ++
      } else {
        return 1
      }
    }

  // Pour ajouter au localStorage une nouvelle tâche
  public addTask(newTask: Task){
    const tasks= this.getTask();
    // newTask = this.createTask()
    newTask.id = this.generateId()
    tasks.push(newTask);
    this.saveTask    
  }

}
