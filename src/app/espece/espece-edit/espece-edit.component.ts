import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EspeceService } from '../espece.service';
import { Espece } from '../espece';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-espece-edit',
  templateUrl: './espece-edit.component.html'
})
export class EspeceEditComponent implements OnInit {

  id: string;
  espece: Espece;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private especeService: EspeceService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Espece()); }
          return this.especeService.findById(id);
        })
      )
      .subscribe(espece => {
          this.espece = espece;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );
  }

  save() {
    this.especeService.save(this.espece).subscribe(
      espece => {
        this.espece = espece;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/especes']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }

  cancel() {
    this.router.navigate(['/especes']);
  }
}
