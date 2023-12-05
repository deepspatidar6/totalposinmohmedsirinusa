import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-order-book-report',
  templateUrl: './purchase-order-book-report.component.html',
  styleUrls: ['./purchase-order-book-report.component.scss']
})
export class PurchaseOrderBookReportComponent {

  ELEMENT_DATA = [
    { name: 'Debitors Ledger', INVESTOR_NAME	 : 'Purchase Order' ,   EMAIL	:'12',PHONE_NO:'12', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023', DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'Debitors Ledger' ,   INVESTOR_NAME	 : 'Purchase Order', EMAIL	:'12',PHONE_NO:'12', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'Debitors Ledger',    INVESTOR_NAME	 : 'Purchase Order',  EMAIL	:'12', PHONE_NO:'12', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'Debitors Ledger' ,  INVESTOR_NAME	 : 'Purchase Order',    EMAIL	:'12',PHONE_NO:'12',SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',  DATE_OF_JOINING:'12-nov-2023',},
    { name: 'Debitors Ledger' , INVESTOR_NAME	 : 'Purchase Order',   EMAIL	:'12', PHONE_NO:'12', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',  DATE_OF_JOINING:'12-nov-2023',}
  ];
}
