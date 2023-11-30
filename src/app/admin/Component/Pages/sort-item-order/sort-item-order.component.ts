import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsortItemComponent } from '../../shared/addsort-item/addsort-item.component';



@Component({
  selector: 'app-sort-item-order',
  templateUrl: './sort-item-order.component.html',
  styleUrls: ['./sort-item-order.component.scss']
})
export class SortItemOrderComponent {
  ELEMENT_DATA = [
    { Item: '7678', Quantity : 'IPHONE', Unit: '123',  Order_Date:'15-12-2023', Supplier:'pooja', Note:'discription' },
    { Item: '#7678', Quantity : 'IPHONE', Unit: '123',  Order_Date:'15-12-2023', Supplier:'pooja', Note:'discription' },
    { Item: '#7678', Quantity : 'IPHONE', Unit: '123',  Order_Date:'15-12-2023', Supplier:'pooja', Note:'discription' },
    { Item: '#7678', Quantity : 'IPHONE', Unit: '123',  Order_Date:'15-12-2023', Supplier:'pooja' , Note:'discription' },
  ];

  constructor( private _diologess : MatDialog ){}
  addsortitemss(){
    this._diologess.open(AddsortItemComponent,{
    })
   }

}
