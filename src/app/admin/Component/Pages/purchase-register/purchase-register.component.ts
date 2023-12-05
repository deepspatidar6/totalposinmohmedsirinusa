import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-register',
  templateUrl: './purchase-register.component.html',
  styleUrls: ['./purchase-register.component.scss']
})
export class PurchaseRegisterComponent {

  ELEMENT_DATA = [
    { PARTICULARS: 'Debitors Ledger Name', VOUCHER_TYPE : 'PURCHASE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
    { PARTICULARS: 'Debitors Ledger Name', VOUCHER_TYPE : 'PURCHASE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
    { PARTICULARS: 'Debitors Ledger Name', VOUCHER_TYPE : 'PURCHASE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
    { PARTICULARS: 'Debitors Ledger Name', VOUCHER_TYPE : 'PURCHASE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
    { PARTICULARS: 'Debitors Ledger Name', VOUCHER_TYPE : 'PURCHASE', VOUCHER_NO : '1', DEBIT_AMOUNT:100.00, AMOUNT:100.00 , ORDER_DATE:"30/11/2023"},
  ];

}
