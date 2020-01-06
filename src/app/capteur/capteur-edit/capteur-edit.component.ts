import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CapteurService } from '../capteur.service';
import { Capteur } from '../capteur';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-capteur-edit',
  templateUrl: './capteur-edit.component.html'
})
export class CapteurEditComponent implements OnInit {

  id: string;
  capteur: Capteur;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private capteurService: CapteurService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Capteur()); }
          return this.capteurService.findById(id);
        })
      )
      .subscribe(capteur => {
          this.capteur = capteur;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );
  }

  save() {
    this.capteurService.save(this.capteur).subscribe(
      capteur => {
        this.capteur = capteur;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/capteurs']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }

  cancel() {
    this.router.navigate(['/capteurs']);
  }
}
