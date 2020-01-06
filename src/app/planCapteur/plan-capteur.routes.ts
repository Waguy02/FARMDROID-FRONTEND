import { Routes } from '@angular/router';
import { PlanCapteurListComponent } from './plan-capteur-list/plan-capteur-list.component';
import { PlanCapteurEditComponent } from './plan-capteur-edit/plan-capteur-edit.component';

export const PLANCAPTEUR_ROUTES: Routes = [
  {
    path: 'planCapteurs',
    component: PlanCapteurListComponent
  },
  {
    path: 'planCapteurs/:id',
    component: PlanCapteurEditComponent
  }
];
