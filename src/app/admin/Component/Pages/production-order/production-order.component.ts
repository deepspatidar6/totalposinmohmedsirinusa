import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddproductorderComponent } from '../../shared/addproductorder/addproductorder.component';



@Component({
  selector: 'app-production-order',
  templateUrl: './production-order.component.html',
  styleUrls: ['./production-order.component.scss']
})
export class ProductionOrderComponent {
  ELEMENT_DATA = [
    { Item: '7678', Quantity : 'IPHONE',   Order_Date:'15-12-2023', Supplier:'pooja', Note:'discription' },
    { Item: '7678', Quantity : 'IPHONE',  Order_Date:'15-12-2023', Supplier:'pooja', Note:'discription' },
    { Item: '7678', Quantity : 'IPHONE',  Order_Date:'15-12-2023', Supplier:'pooja', Note:'discription' },
    { Item: '7678', Quantity : 'IPHONE',  Order_Date:'15-12-2023', Supplier:'pooja' , Note:'discription' },
  ];

  constructor( private _diologess : MatDialog ){}
  addproductionorder(){
    this._diologess.open(AddproductorderComponent,{
    })
   }
}
