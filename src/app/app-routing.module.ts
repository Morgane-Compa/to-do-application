import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationTasksComponent } from './pages/creation-tasks/creation-tasks.component';
import { HistoryTasksComponent } from './pages/history-tasks/history-tasks.component';
import { ToDoTaskComponent } from './pages/to-do-task/to-do-task.component';

const routes: Routes = [
  {
    path: "",
    component: ToDoTaskComponent,
  },
  {
    path: "création",
    component: CreationTasksComponent
  },
  {
    path: "hisotry",
    component: HistoryTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
