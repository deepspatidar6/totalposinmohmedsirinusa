import { Component } from '@angular/core';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory-variances',
  templateUrl: './inventory-variances.component.html',
  styleUrls: ['./inventory-variances.component.scss']
})
export class InventoryVariancesComponent {

  ELEMENT_DATA = [
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
  ];

  constructor( private _diologess : MatDialog){
    
  }
  inventoryVariances(){
    this._diologess.open(AddDepartmentComponent,{
      data : {
         name : "inventoryVariances"
      }
    })
   }

}
