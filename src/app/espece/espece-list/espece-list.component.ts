import { Component, OnInit } from '@angular/core';
import { EspeceFilter } from '../espece-filter';
import { EspeceService } from '../espece.service';
import { Espece } from '../espece';

@Component({
  selector: 'app-espece',
  templateUrl: 'espece-list.component.html'
})
export class EspeceListComponent implements OnInit {

  filter = new EspeceFilter();
  selectedEspece: Espece;
  feedback: any = {};

  get especeList(): Espece[] {
    return this.especeService.especeList;
  }

  constructor(private especeService: EspeceService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.especeService.load(this.filter);
  }

  select(selected: Espece): void {
    this.selectedEspece = selected;
  }

  delete(espece: Espece): void {
    if (confirm('Etes-vous sûr?')) {
      this.especeService.delete(espece).subscribe(() => {
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
