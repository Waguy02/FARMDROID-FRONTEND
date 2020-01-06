import { Routes } from '@angular/router';
import { EspeceListComponent } from './espece-list/espece-list.component';
import { EspeceEditComponent } from './espece-edit/espece-edit.component';

export const ESPECE_ROUTES: Routes = [
  {
    path: 'especes',
    component: EspeceListComponent
  },
  {
    path: 'especes/:id',
    component: EspeceEditComponent
  }
];
