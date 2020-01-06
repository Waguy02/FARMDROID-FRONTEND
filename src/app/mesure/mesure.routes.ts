import { Routes } from '@angular/router';
import { MesureListComponent } from './mesure-list/mesure-list.component';
import { MesureEditComponent } from './mesure-edit/mesure-edit.component';

export const MESURE_ROUTES: Routes = [
  {
    path: 'mesures',
    component: MesureListComponent
  },
  {
    path: 'mesures/:id',
    component: MesureEditComponent
  }
];
