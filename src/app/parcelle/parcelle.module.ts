import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ParcelleListComponent } from './parcelle-list/parcelle-list.component';
import { ParcelleEditComponent } from './parcelle-edit/parcelle-edit.component';
import { ParcelleService } from './parcelle.service';
import { PARCELLE_ROUTES } from './parcelle.routes';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule ,
    BrowserModule,
    BrowserAnimationsModule,
    
    RouterModule.forChild(PARCELLE_ROUTES)
  ],
  declarations: [
    ParcelleListComponent,
    
    ParcelleEditComponent
  ],
  providers: [ParcelleService],
  exports: []
})
export class ParcelleModule { }
