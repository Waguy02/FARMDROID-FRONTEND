import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MesureService } from '../mesure.service';
import { Mesure } from '../mesure';
import { map, switchMap, tap, debounceTime, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { Parcelle } from 'src/app/parcelle/parcelle';
import { FormControl } from '@angular/forms';
import { Capteur } from 'src/app/capteur/capteur';
import { CapteurService } from 'src/app/capteur/capteur.service';
import { ParcelleService } from 'src/app/parcelle/parcelle.service';

@Component({
  selector: 'app-mesure-edit',
  templateUrl: './mesure-edit.component.html'
})
export class MesureEditComponent implements OnInit {

  id: string;
  mesure: Mesure;
  feedback: any = {};
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mesureService: MesureService,
    private capteurService:CapteurService,
    private parcelleService:ParcelleService
    ) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Mesure()); }
          return this.mesureService.findById(id);
        })
      )
      .subscribe(mesure => {
          this.mesure = mesure;
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
    this.mesureService.save(this.mesure).subscribe(
      mesure => {
        this.mesure = mesure;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/mesures']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }

  cancel() {
    this.router.navigate(['/mesures']);
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
    this.mesure.parcelle=this.selectedParcelle;
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








  filteredCapteurs:Capteur[]=new Array<Capteur>();
  capteurInput:FormControl;
  selectedCapteur:Capteur;
  isLoadingCapteur=false
  capteurClick(event: any) {
    this.selectedCapteur = event.option.value;
  }
  
  checkCapteur() {
    if (!this.selectedCapteur || this.selectedCapteur !== this.capteurInput.value) {
      this.capteurInput.setValue(null);
      this.selectedCapteur = null;
      return;
    }

    this.mesure.capteur=this.selectedCapteur
  }
  
  displayCapteur(capteur:Capteur) {
    if (capteur) { return capteur.name+" ["+capteur.type_grandeur+"]"; }
  }
  configureCapteurInput(){
    this.capteurInput=new FormControl();
  
    this.capteurInput.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {this.isLoadingCapteur = true;}),
      switchMap(value => this.capteurService.findFilter({name:value,type_grandeur:value},true)
      .pipe(
        finalize(() => this.isLoadingCapteur = false)
        ) 
        ) 
      )
    .subscribe((capteurs =>{this.filteredCapteurs=capteurs;console.log(this.filteredCapteurs)}))
    
  }









}
