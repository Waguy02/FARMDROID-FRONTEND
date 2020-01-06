import { Routes } from '@angular/router';
import { ParcelleListComponent } from './parcelle-list/parcelle-list.component';
import { ParcelleEditComponent } from './parcelle-edit/parcelle-edit.component';

export const PARCELLE_ROUTES: Routes = [
  {
    path: 'parcelles',
    component: ParcelleListComponent
  },
  {
    path: 'parcelles/:id',
    component: ParcelleEditComponent
  }
];
