import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatTableModule, 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatCheckboxModule,
} from '@angular/material';


import { CapteurListComponent } from './capteur-list/capteur-list.component';
import { CapteurEditComponent } from './capteur-edit/capteur-edit.component';
import { CapteurService } from './capteur.service';
import { CAPTEUR_ROUTES } from './capteur.routes';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    MatCheckboxModule,
    RouterModule.forChild(CAPTEUR_ROUTES)
  ],
  declarations: [
    CapteurListComponent,
    CapteurEditComponent
  ],
  providers: [CapteurService],
  exports: []
})
export class CapteurModule { }
