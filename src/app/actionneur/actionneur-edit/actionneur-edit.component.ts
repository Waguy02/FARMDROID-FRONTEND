import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ActionneurService } from '../actionneur.service';
import { Actionneur } from '../actionneur';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-actionneur-edit',
  templateUrl: './actionneur-edit.component.html'
})
export class ActionneurEditComponent implements OnInit {

  id: string;
  actionneur: Actionneur;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actionneurService: ActionneurService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Actionneur()); }
          return this.actionneurService.findById(id);
        })
      )
      .subscribe(actionneur => {
          this.actionneur = actionneur;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );
  }

  save() {
    this.actionneurService.save(this.actionneur).subscribe(
      actionneur => {
        this.actionneur = actionneur;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/actionneurs']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }

  cancel() {
    this.router.navigate(['/actionneurs']);
  }
}
