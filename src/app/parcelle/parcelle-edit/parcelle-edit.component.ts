import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ParcelleService } from '../parcelle.service';
import { Parcelle } from '../parcelle';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { EspeceService } from 'src/app/espece/espece.service';
import { Espece } from 'src/app/espece/espece';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-parcelle-edit',
  templateUrl: './parcelle-edit.component.html'
})
export class ParcelleEditComponent implements OnInit {

  id: string;
  parcelle: Parcelle;
  feedback: any = {};



  filteredEspeces:Espece[]=new Array<Espece>();
  especeInput:FormControl;
  selectedEspece:Espece;

  especeClick(event: any) {
    this.selectedEspece = event.option.value;
  }
  
  checkEspece() {
    if (!this.selectedEspece || this.selectedEspece !== this.especeInput.value) {
      this.especeInput.setValue(null);
      this.selectedEspece = null;
    
    }else{this.parcelle.espece=this.selectedEspece}
    
  }
  isLoading=false;
  displayEspece(espece:Espece) {
    if (espece) { return espece.name;; }
  }
  configureEspeceInput(){
    this.especeInput=new FormControl();
    
  
    this.especeInput.valueChanges
    .pipe(
      debounceTime(500),
        switchMap(value => this.especeService.findFilter({name:value,description:value},true)
        ) 
      )
    .subscribe((especes =>{this.filteredEspeces=especes;console.log(this.filteredEspeces)}))
    
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private parcelleService: ParcelleService,
    private especeService:EspeceService
    
    ) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Parcelle()); }
          return this.parcelleService.findById(id);
        })
      )
      .subscribe(parcelle => {
          this.parcelle = parcelle;
          console.log(this.parcelle);
          if(this.parcelle._id) { this.especeInput.setValue(this.parcelle.espece)
          
          
          }
        
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

      this.configureEspeceInput();
      
  }

  save() {
    this.parcelleService.save(this.parcelle).subscribe(
      parcelle => {
        this.parcelle = parcelle;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/parcelles']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }

  cancel() {
    this.router.navigate(['/parcelles']);
  }
  
  
}
