import { Component } from '@angular/core';

@Component({
  selector: 'app-sale-order-book',
  templateUrl: './sale-order-book.component.html',
  styleUrls: ['./sale-order-book.component.scss']
})
export class SaleOrderBookComponent {


  ELEMENT_DATA = [
    { name: 'Creditors Ledger', INVESTOR_NAME	 : 'Sale Order' ,   EMAIL	:'12',PHONE_NO:'12', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023', DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'Creditors Ledger' ,   INVESTOR_NAME	 : 'Sale Order', EMAIL	:'12',PHONE_NO:'12', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'Creditors Ledger',    INVESTOR_NAME	 : 'Sale Order',  EMAIL	:'12', PHONE_NO:'12', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'Creditors Ledger' ,  INVESTOR_NAME	 : 'Sale Order',    EMAIL	:'12',PHONE_NO:'12',SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',  DATE_OF_JOINING:'12-nov-2023',},
    { name: 'Creditors Ledger' , INVESTOR_NAME	 : 'Sale Order',   EMAIL	:'12', PHONE_NO:'12', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',  DATE_OF_JOINING:'12-nov-2023',}
  ];

}
