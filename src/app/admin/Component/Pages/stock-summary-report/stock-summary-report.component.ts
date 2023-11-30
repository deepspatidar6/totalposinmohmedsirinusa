import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStockSummaryReportComponent } from '../../shared/add-stock-summary-report/add-stock-summary-report.component';

@Component({
  selector: 'app-stock-summary-report',
  templateUrl: './stock-summary-report.component.html',
  styleUrls: ['./stock-summary-report.component.scss']
})
export class StockSummaryReportComponent {

  constructor(
    private _diologess : MatDialog
  ){}

  ELEMENT_DATA = [
    { Bill_Date	: '02-08-2022', Expy_Date	: '15-08-2024',  Product_Name:'Sandle' ,  Price:'50.00', Expy_Qty	:'2', Amount:'100.00',  Sku:'barcode' ,},
    { Bill_Date	: '02-08-2022', Expy_Date	: '15-08-2024',  Product_Name:'Sandle' ,  Price:'50.00', Expy_Qty	:'2', Amount:'100.00',  Sku:'barcode' ,},
    { Bill_Date	: '02-08-2022', Expy_Date	: '15-08-2024',  Product_Name:'Sandle' ,  Price:'50.00', Expy_Qty	:'2', Amount:'100.00',  Sku:'barcode' ,},
    { Bill_Date	: '02-08-2022', Expy_Date	: '15-08-2024',  Product_Name:'Sandle' ,  Price:'50.00', Expy_Qty	:'2', Amount:'100.00',  Sku:'barcode' ,},
  ];

  addstocksummaryreport(){
    this._diologess.open(AddStockSummaryReportComponent)
   }

}
