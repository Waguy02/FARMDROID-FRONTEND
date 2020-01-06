import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlanCapteurService } from '../plan-capteur.service';
import { PlanCapteur } from '../plan-capteur';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-plan-capteur-edit',
  templateUrl: './plan-capteur-edit.component.html'
})
export class PlanCapteurEditComponent implements OnInit {

  id: string;
  planCapteur: PlanCapteur;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planCapteurService: PlanCapteurService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new PlanCapteur()); }
          return this.planCapteurService.findById(id);
        })
      )
      .subscribe(planCapteur => {
          this.planCapteur = planCapteur;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );
  }

  save() {
    this.planCapteurService.save(this.planCapteur).subscribe(
      planCapteur => {
        this.planCapteur = planCapteur;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/planCapteurs']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }

  cancel() {
    this.router.navigate(['/planCapteurs']);
  }
}
