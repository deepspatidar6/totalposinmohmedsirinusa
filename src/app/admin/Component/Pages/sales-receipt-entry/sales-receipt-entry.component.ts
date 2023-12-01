import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-receipt-entry',
  templateUrl: './sales-receipt-entry.component.html',
  styleUrls: ['./sales-receipt-entry.component.scss']
})
export class SalesReceiptEntryComponent {


  ELEMENT_DATA = [
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00 , ORDER_DATE:"30/11/2023", DELIVERY_DATE:"30/01/24"},
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00 , ORDER_DATE:"30/11/2023", DELIVERY_DATE:"30/01/24"},
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00 , ORDER_DATE:"30/11/2023", DELIVERY_DATE:"30/01/24"},
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00 , ORDER_DATE:"30/11/2023", DELIVERY_DATE:"30/01/24"},
    { ORDER_NO: '#7678', PRODUCT : 'IPHONE', PRICE: '123', Sku:'barcod', QTY:15, AMOUNT:100.00 , ORDER_DATE:"30/11/2023", DELIVERY_DATE:"30/01/24"},
  ];

}



