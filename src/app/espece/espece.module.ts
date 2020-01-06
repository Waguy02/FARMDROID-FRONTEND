import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EspeceListComponent } from './espece-list/espece-list.component';
import { EspeceEditComponent } from './espece-edit/espece-edit.component';
import { EspeceService } from './espece.service';
import { ESPECE_ROUTES } from './espece.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ESPECE_ROUTES)
  ],
  declarations: [
    EspeceListComponent,
    EspeceEditComponent
  ],
  providers: [EspeceService],
  exports: []
})
export class EspeceModule { }
