import { Component } from '@angular/core';

@Component({
  selector: 'app-low-stock-report',
  templateUrl: './low-stock-report.component.html',
  styleUrls: ['./low-stock-report.component.scss']
})
export class LowStockReportComponent {
  constructor(){}
  ELEMENT_DATA = [
    { Product_Id: '#7678', Product_Name : 'Sandle',  Price:15,  Qty:'3', Amount:'100.00', Supplier:'supplier name', Last_PurchaseDate :'02-08-2022', Last_Sales_Date :'15-08-2024', Status:'Default', Sku:'barcode' ,},
    { Product_Id: '#7678', Product_Name : 'Sandle',  Price:15,  Qty:'3', Amount:'100.00', Supplier:'supplier name', Last_PurchaseDate :'02-08-2022', Last_Sales_Date :'15-08-2024', Status:'Default', Sku:'barcode' ,},
    { Product_Id: '#7678', Product_Name : 'Sandle',  Price:15,  Qty:'3', Amount:'100.00', Supplier:'supplier name', Last_PurchaseDate :'02-08-2022', Last_Sales_Date :'15-08-2024', Status:'Default', Sku:'barcode' ,},
  ];


}
