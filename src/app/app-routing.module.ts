import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './views/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import {NewTaskComponent} from './pages/new-task/new-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'pages/new-list', component: NewListComponent }, // route to ADD new list page
  { path: 'lists', component: TaskViewComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
  {path: 'pages/new-task', component: NewTaskComponent}, // route to ADD new Task page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
