import { Component, OnInit } from '@angular/core';
import { CapteurFilter } from '../capteur-filter';
import { CapteurService } from '../capteur.service';
import { Capteur } from '../capteur';

@Component({
  selector: 'app-capteur',
  templateUrl: 'capteur-list.component.html'
})
export class CapteurListComponent implements OnInit {

  filter = new CapteurFilter();
  selectedCapteur: Capteur;
  feedback: any = {};

  get capteurList(): Capteur[] {
    return this.capteurService.capteurList;
  }

  constructor(private capteurService: CapteurService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.capteurService.load(this.filter);
  }

  select(selected: Capteur): void {
    this.selectedCapteur = selected;
  }

  delete(capteur: Capteur): void {
    if (confirm('Etes-vous sûr?')) {
      this.capteurService.delete(capteur).subscribe(() => {
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
}
