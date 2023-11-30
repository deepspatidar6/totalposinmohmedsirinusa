import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddprtmanageComponent } from '../../shared/addprtmanage/addprtmanage.component';


@Component({
  selector: 'app-product-mcomponents',
  templateUrl: './product-mcomponents.component.html',
  styleUrls: ['./product-mcomponents.component.scss']
})
export class ProductMcomponentsComponent {

  constructor(
    private _diologess : MatDialog
  ){}

  ELEMENT_DATA = [
    { PRODUCTION_DATE	 : '#PRODUCT A', COMPONENT_NAME	 : 'COMPONENT X',  QTY:200,  PRODUCT_NAME		:'02/11/2022',  SUPPLIER:'SUPPLIER 1',  LOCATION:'INDIA' ,},
    { PRODUCTION_DATE	 : '#PRODUCT A', COMPONENT_NAME	 : 'COMPONENT X', QTY:200,  PRODUCT_NAME		:'02/11/2022',  SUPPLIER:'SUPPLIER 1',  LOCATION:'INDIA' ,},
    { PRODUCTION_DATE	 : '#PRODUCT A', COMPONENT_NAME	 : 'COMPONENT X',  QTY:200,  PRODUCT_NAME		:'02/11/2022',  SUPPLIER:'SUPPLIER 1',  LOCATION:'INDIA' ,},



  ];
  addprodunct(){
    this._diologess.open(AddprtmanageComponent )
   }

}
