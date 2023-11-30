import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddproductionRecievedComponent } from '../../shared/addproduction-recieved/addproduction-recieved.component';

@Component({
  selector: 'app-production-recieved',
  templateUrl: './production-recieved.component.html',
  styleUrls: ['./production-recieved.component.scss']
})
export class ProductionRecievedComponent {
  ELEMENT_DATA = [
    { Item: '7678', Quantity : '1',   UNIT:'23', RECEIVED_DATE	:'12-dec-2023',  RECEIVED_FORM:'12-dec-2023',   Note:'discription' },
    { Item: '7678', Quantity : '1',  UNIT:'23',  RECEIVED_DATE	:'12-dec-2023',  RECEIVED_FORM:'12-dec-2023',   Note:'discription' },
    { Item: '7678', Quantity : '1',  UNIT:'23',  RECEIVED_DATE	:'12-dec-2023',  RECEIVED_FORM:'12-dec-2023',   Note:'discription' },
    { Item: '7678', Quantity : '1',  UNIT:'23',  RECEIVED_DATE	:'12-dec-2023' , RECEIVED_FORM:'12-dec-2023',   Note:'discription' },
  ];

  constructor( private _diologess : MatDialog ){}
  addproductionorder(){
    this._diologess.open(AddproductionRecievedComponent,{
    })
   }
}
