import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActionneurListComponent } from './actionneur-list/actionneur-list.component';
import { ActionneurEditComponent } from './actionneur-edit/actionneur-edit.component';
import { ActionneurService } from './actionneur.service';
import { ACTIONNEUR_ROUTES } from './actionneur.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ACTIONNEUR_ROUTES)
  ],
  declarations: [
    ActionneurListComponent,
    ActionneurEditComponent
  ],
  providers: [ActionneurService],
  exports: []
})
export class ActionneurModule { }
