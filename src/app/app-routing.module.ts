import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './views/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'pages/new-list', component: NewListComponent },
  { path: 'lists', component: TaskViewComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
