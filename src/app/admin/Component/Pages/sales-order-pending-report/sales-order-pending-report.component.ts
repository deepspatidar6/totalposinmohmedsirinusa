import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-order-pending-report',
  templateUrl: './sales-order-pending-report.component.html',
  styleUrls: ['./sales-order-pending-report.component.scss']
})
export class SalesOrderPendingReportComponent {


  
  ELEMENT_DATA = [
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00, BALANCE_QTY:20, DUE_ON:"30/01/2024", ORDER_DATE:"30/11/2023", DEBITORS_ACCOUNT:"365685665"},
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00, BALANCE_QTY:20, DUE_ON:"30/01/2024", ORDER_DATE:"30/11/2023", DEBITORS_ACCOUNT:"365685665"},
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00, BALANCE_QTY:20, DUE_ON:"30/01/2024", ORDER_DATE:"30/11/2023", DEBITORS_ACCOUNT:"365685665"},
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00, BALANCE_QTY:20, DUE_ON:"30/01/2024", ORDER_DATE:"30/11/2023", DEBITORS_ACCOUNT:"365685665"},
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00, BALANCE_QTY:20, DUE_ON:"30/01/2024", ORDER_DATE:"30/11/2023", DEBITORS_ACCOUNT:"365685665"},
  ];

}
