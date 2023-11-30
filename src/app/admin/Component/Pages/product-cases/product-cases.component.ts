import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductcasesComponent } from '../../shared/add-productcases/add-productcases.component';


@Component({
  selector: 'app-product-cases',
  templateUrl: './product-cases.component.html',
  styleUrls: ['./product-cases.component.scss']
})
export class ProductCasesComponent {

  constructor(
    private _diologess : MatDialog
  ){}

  ELEMENT_DATA = [
    { PRODUCT_NAME : '#PRODUCT A', CASE_TYPE : 'COMPONENT X',  QTY:200,  PRODUCTION_DATE	:'02/11/2022',  SUPPLIER:'SUPPLIER 1',  LOCATION:'INDIA' ,},
    { PRODUCT_NAME : '#PRODUCT A', CASE_TYPE : 'COMPONENT X',  QTY:200,  PRODUCTION_DATE	:'02/11/2022',  SUPPLIER:'SUPPLIER 1',  LOCATION:'INDIA' ,},
    { PRODUCT_NAME : '#PRODUCT A', CASE_TYPE : 'COMPONENT X',  QTY:200,  PRODUCTION_DATE	:'02/11/2022',  SUPPLIER:'SUPPLIER 1',  LOCATION:'INDIA' ,},
  
  ];
  addcasesproduct(){
    this._diologess.open(AddProductcasesComponent )
   }

}
