import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlanCapteurListComponent } from './plan-capteur-list/plan-capteur-list.component';
import { PlanCapteurEditComponent } from './plan-capteur-edit/plan-capteur-edit.component';
import { PlanCapteurService } from './plan-capteur.service';
import { PLANCAPTEUR_ROUTES } from './plan-capteur.routes';
import { MatInput, MatFormFieldModule, MatProgressSpinnerModule, MatAutocompleteModule, MatInputModule, MatGridListModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule, MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(PLANCAPTEUR_ROUTES)
  ],
  declarations: [
    PlanCapteurListComponent,
    PlanCapteurEditComponent
  ],
  providers: [PlanCapteurService],
  exports: []
})
export class PlanCapteurModule { }
