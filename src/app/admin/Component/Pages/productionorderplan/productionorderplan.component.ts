import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-productionorderplan',
  templateUrl: './productionorderplan.component.html',
  styleUrls: ['./productionorderplan.component.scss']
})
export class ProductionorderplanComponent {
  
  constructor(
    private _diologess : MatDialog
  ){}
}
