import { Component, OnInit } from '@angular/core';
import { MesureFilter } from '../mesure-filter';
import { MesureService } from '../mesure.service';
import { Mesure } from '../mesure';
import { ParcelleService } from 'src/app/parcelle/parcelle.service';
import { CapteurService } from 'src/app/capteur/capteur.service';

import { map, switchMap, tap, debounceTime, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { Parcelle } from 'src/app/parcelle/parcelle';
import { FormControl } from '@angular/forms';
import { Capteur } from 'src/app/capteur/capteur';


@Component({
  selector: 'app-mesure',
  templateUrl: 'mesure-list.component.html'
})
export class MesureListComponent implements OnInit {

  filter = new MesureFilter();
  selectedMesure: Mesure;
  feedback: any = {};

  get mesureList(): Mesure[] {
    return this.mesureService.mesureList;
  }

  constructor(private mesureService: MesureService,
    private parcelleService:ParcelleService,
    private capteurService:CapteurService
    ) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.mesureService.load(this.filter);
  }

  select(selected: Mesure): void {
    this.selectedMesure = selected;
  }

  delete(mesure: Mesure): void {
    if (confirm('Etes-vous sûr?')) {
      this.mesureService.delete(mesure).subscribe(() => {
          this.feedback = {type: 'success', message: 'Suppression effectuée avec succès!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors de la suppression.'};
        }
      );
    }
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
    //this.mesure.parcelle=this.selectedParcelle;
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

    //this.mesure.capteur=this.selectedCapteur
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
