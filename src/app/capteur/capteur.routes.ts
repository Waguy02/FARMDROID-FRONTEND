import { Routes } from '@angular/router';
import { CapteurListComponent } from './capteur-list/capteur-list.component';
import { CapteurEditComponent } from './capteur-edit/capteur-edit.component';

export const CAPTEUR_ROUTES: Routes = [
  {
    path: 'capteurs',
    component: CapteurListComponent
  },
  {
    path: 'capteurs/:id',
    component: CapteurEditComponent
  }
];
