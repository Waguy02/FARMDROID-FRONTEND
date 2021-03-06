import { Component, OnInit } from '@angular/core';
import { PlanCapteurFilter } from '../plan-capteur-filter';
import { PlanCapteurService } from '../plan-capteur.service';
import { PlanCapteur } from '../plan-capteur';
import { Capteur } from 'src/app/capteur/capteur';
import { FormControl } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { CapteurService } from 'src/app/capteur/capteur.service';
import { ParcelleService } from 'src/app/parcelle/parcelle.service';

@Component({
  selector: 'app-plan-capteur',
  templateUrl: 'plan-capteur-list.component.html'
})
export class PlanCapteurListComponent implements OnInit {

  filter = new PlanCapteurFilter();
  selectedPlanCapteur: PlanCapteur;
  feedback: any = {};

  get planCapteurList(): PlanCapteur[] {
    return this.planCapteurService.planCapteurList;
  }

  constructor(private planCapteurService: PlanCapteurService, private capteurService: CapteurService, private parcelleService: ParcelleService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.planCapteurService.load(this.filter);
  }

  select(selected: PlanCapteur): void {
    this.selectedPlanCapteur = selected;
  }

  delete(planCapteur: PlanCapteur): void {
    if (confirm('Etes-vous sûr?')) {
      this.planCapteurService.delete(planCapteur).subscribe(() => {
        this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
        setTimeout(() => {
          this.search();
        }, 1000);
      },
        err => {
          this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
        }
      );
    }
  }





}
