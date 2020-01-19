import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlanCapteurService } from '../plan-capteur.service';
import { PlanCapteur } from '../plan-capteur';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { CapteurService } from 'src/app/capteur/capteur.service';
import { ParcelleService } from 'src/app/parcelle/parcelle.service';
import { Capteur } from 'src/app/capteur/capteur';
import { FormControl } from '@angular/forms';
import { Parcelle } from 'src/app/parcelle/parcelle';
import { TypePlannification } from 'src/app/models/type_plannifcation';

@Component({
  selector: 'app-plan-capteur-edit',
  templateUrl: './plan-capteur-edit.component.html'
})
export class PlanCapteurEditComponent implements OnInit {

  id: string;
  planCapteur: PlanCapteur;
  feedback: any = {};
  types=TypePlannification.getAllTypes();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planCapteurService: PlanCapteurService,
    private capteurService:CapteurService,
    private parcelleService:ParcelleService
    
    ) {
      this;
      
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
      this.configureCapteurInput();
      this.configureParcelleInput();
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





filteredCapteurs: Capteur[] = new Array<Capteur>();
capteurInput: FormControl;
selectedCapteur: Capteur;
isLoadingCapteur = false
capteurClick(event: any) {
  this.selectedCapteur = event.option.value;
}

checkCapteur() {
  if (!this.selectedCapteur || this.selectedCapteur !== this.capteurInput.value) {
    this.capteurInput.setValue(null);
    this.selectedCapteur = null;
    return;
  }

  this.planCapteur.capteur=this.selectedCapteur
}

displayCapteur(capteur: Capteur) {
  if (capteur) { return capteur.name + " [" + capteur.type_grandeur + "]"; }
}
configureCapteurInput() {
  this.capteurInput = new FormControl();

  this.capteurInput.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => { this.isLoadingCapteur = true; }),
      switchMap(value => this.capteurService.findFilter({ name: value, type_grandeur: value }, true)
        .pipe(
          finalize(() =>setTimeout(()=>this.isLoadingCapteur = false,300))
        )
      )
    )
    .subscribe((capteurs => { this.filteredCapteurs = capteurs;; console.log(this.filteredCapteurs) }))

}








filteredParcelles:Parcelle[]=new Array<Parcelle>();
parcelleInput:FormControl;
selectedParcelle:Parcelle;
isLoadingParcelle=false;

parcelleClick(event: any) {
  this.selectedParcelle = event.option.value;
}

checkParcelle() {
  if (!this.selectedParcelle || this.selectedParcelle !== this.parcelleInput.value) {
    this.parcelleInput.setValue(null);
    this.selectedParcelle = null;
    return; 
  }
  this.planCapteur.parcelle=this.selectedParcelle;
}

displayParcelle(parcelle:Parcelle) {
  
  if (parcelle) return Parcelle.display(parcelle);
  
}
configureParcelleInput(){
  this.parcelleInput=new FormControl();

  this.parcelleInput.valueChanges
  .pipe(
    debounceTime(500),
    tap(() => {this.isLoadingParcelle = true;}),
    switchMap(value => this.parcelleService.findFilter({espece:value,location:value},true)
    .pipe(
      finalize(() => this.isLoadingParcelle = false),
      ) 
      ) 
    )
  .subscribe((parcelles =>{this.filteredParcelles=parcelles;console.log(this.filteredParcelles)}))
  
}









}