import { Component } from '@angular/core';

@Component({
  selector: 'app-expired-inventory-report',
  templateUrl: './expired-inventory-report.component.html',
  styleUrls: ['./expired-inventory-report.component.scss']
})
export class ExpiredInventoryReportComponent {
  constructor(){}
  ELEMENT_DATA = [
    { Bill_Date	: '02-08-2022', Expy_Date	: '15-08-2024',  Product_Name:'Sandle' ,  Price:'50.00', Expy_Qty	:'2', Amount:'100.00',  Sku:'barcode' ,},
    { Bill_Date	: '02-08-2022', Expy_Date	: '15-08-2024',  Product_Name:'Sandle' ,  Price:'50.00', Expy_Qty	:'2', Amount:'100.00',  Sku:'barcode' ,},
    { Bill_Date	: '02-08-2022', Expy_Date	: '15-08-2024',  Product_Name:'Sandle' ,  Price:'50.00', Expy_Qty	:'2', Amount:'100.00',  Sku:'barcode' ,},
    { Bill_Date	: '02-08-2022', Expy_Date	: '15-08-2024',  Product_Name:'Sandle' ,  Price:'50.00', Expy_Qty	:'2', Amount:'100.00',  Sku:'barcode' ,},
  ];
}
