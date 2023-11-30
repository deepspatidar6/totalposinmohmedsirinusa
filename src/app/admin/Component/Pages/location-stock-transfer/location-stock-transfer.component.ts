import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationStockTransferManagementComponent } from '../../shared/location-stock-transfer-management/location-stock-transfer-management.component';

@Component({
  selector: 'app-location-stock-transfer',
  templateUrl: './location-stock-transfer.component.html',
  styleUrls: ['./location-stock-transfer.component.scss']
})
export class LocationStockTransferComponent {
  constructor(
    private _diologess : MatDialog
  ){}
  
  ELEMENT_DATA = [
    { Product_Id: '#7678', Product_Name : 'Sandle',  Price:15,  Amount:'100.00',  Date:'02-08-2022',  Sku:'barcode' ,},
    { Product_Id: '#7678', Product_Name : 'Sandle',  Price:15,  Amount:'100.00',  Date:'02-08-2022',  Sku:'barcode' ,},
    { Product_Id: '#7678', Product_Name : 'Sandle',  Price:15,  Amount:'100.00',  Date:'02-08-2022',  Sku:'barcode' ,},
    { Product_Id: '#7678', Product_Name : 'Sandle',  Price:15,  Amount:'100.00',  Date:'02-08-2022',  Sku:'barcode' ,},
    { Product_Id: '#7678', Product_Name : 'Sandle',  Price:15,  Amount:'100.00',  Date:'02-08-2022',  Sku:'barcode' ,},
  ];
  locationstocktransfer(){
    this._diologess.open(LocationStockTransferManagementComponent )
   }

}
