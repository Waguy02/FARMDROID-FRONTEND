import { Component, OnInit } from '@angular/core';
import { ParcelleFilter } from '../parcelle-filter';
import { ParcelleService } from '../parcelle.service';
import { Parcelle } from '../parcelle';

@Component({
  selector: 'app-parcelle',
  templateUrl: 'parcelle-list.component.html'
})
export class ParcelleListComponent implements OnInit {

  filter = new ParcelleFilter();
  selectedParcelle: Parcelle;
  feedback: any = {};

  get parcelleList(): Parcelle[] {
    return this.parcelleService.parcelleList;
  }

  constructor(private parcelleService: ParcelleService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.parcelleService.load(this.filter);
  }

  select(selected: Parcelle): void {
    this.selectedParcelle = selected;
  }

  delete(parcelle: Parcelle): void {
    if (confirm('Etes-vous sûr?')) {
      this.parcelleService.delete(parcelle).subscribe(() => {
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
