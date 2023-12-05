import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSelectAPlanComponent } from '../../shared/add-select-a-plan/add-select-a-plan.component';

@Component({
  selector: 'app-splan',
  templateUrl: './splan.component.html',
  styleUrls: ['./splan.component.scss']
})
export class SplanComponent {

  constructor ( private _diolog :MatDialog) {}


  add_selectplan(){
    this._diolog.open(AddSelectAPlanComponent)
  }
}
