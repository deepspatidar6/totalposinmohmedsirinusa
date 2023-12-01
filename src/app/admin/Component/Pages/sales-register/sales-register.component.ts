import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-register',
  templateUrl: './sales-register.component.html',
  styleUrls: ['./sales-register.component.scss']
})
export class SalesRegisterComponent {

  
  ELEMENT_DATA = [
    { PARTICULARS: 'Creditor Ledger Name', VOUCHER_TYPE : 'SALE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
    { PARTICULARS: 'Creditor Ledger Name', VOUCHER_TYPE : 'SALE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
    { PARTICULARS: 'Creditor Ledger Name', VOUCHER_TYPE : 'SALE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
    { PARTICULARS: 'Creditor Ledger Name', VOUCHER_TYPE : 'SALE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
    { PARTICULARS: 'Creditor Ledger Name', VOUCHER_TYPE : 'SALE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
  ];

}
