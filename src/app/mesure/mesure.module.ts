import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MesureListComponent } from './mesure-list/mesure-list.component';
import { MesureEditComponent } from './mesure-edit/mesure-edit.component';
import { MesureService } from './mesure.service';
import { MESURE_ROUTES } from './mesure.routes';
import { MatInput, MatFormFieldModule, MatProgressSpinnerModule, MatAutocompleteModule, MatInputModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatGridListModule,
    FormsModule,
    RouterModule.forChild(MESURE_ROUTES)
  ],
  declarations: [
    MesureListComponent,
    MesureEditComponent
  ],
  providers: [MesureService],
  exports: []
})
export class MesureModule { }
