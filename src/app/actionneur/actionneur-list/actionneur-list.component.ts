import { Component, OnInit } from '@angular/core';
import { ActionneurFilter } from '../actionneur-filter';
import { ActionneurService } from '../actionneur.service';
import { Actionneur } from '../actionneur';

@Component({
  selector: 'app-actionneur',
  templateUrl: 'actionneur-list.component.html'
})
export class ActionneurListComponent implements OnInit {

  filter = new ActionneurFilter();
  selectedActionneur: Actionneur;
  feedback: any = {};

  get actionneurList(): Actionneur[] {
    return this.actionneurService.actionneurList;
  }

  constructor(private actionneurService: ActionneurService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.actionneurService.load(this.filter);
  }

  select(selected: Actionneur): void {
    this.selectedActionneur = selected;
  }

  delete(actionneur: Actionneur): void {
    if (confirm('Etes-vous sûr?')) {
      this.actionneurService.delete(actionneur).subscribe(() => {
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
