import { Routes } from '@angular/router';
import { ActionneurListComponent } from './actionneur-list/actionneur-list.component';
import { ActionneurEditComponent } from './actionneur-edit/actionneur-edit.component';

export const ACTIONNEUR_ROUTES: Routes = [
  {
    path: 'actionneurs',
    component: ActionneurListComponent
  },
  {
    path: 'actionneurs/:id',
    component: ActionneurEditComponent
  }
];
