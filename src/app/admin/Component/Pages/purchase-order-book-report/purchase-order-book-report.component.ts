import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-order-book-report',
  templateUrl: './purchase-order-book-report.component.html',
  styleUrls: ['./purchase-order-book-report.component.scss']
})
export class PurchaseOrderBookReportComponent {

  ELEMENT_DATA = [
    { name: '#Golden Company limited', INVESTOR_NAME	 : 'RECEIPT' ,   EMAIL	:'14568',PHONE_NO:'22.00$', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023', DATE_OF_JOINING:'12-nov-2023',	},
    { name: '#Golden Company limited' ,   INVESTOR_NAME	 : 'RECEIPT', EMAIL	:'14568',PHONE_NO:'22.00$', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',DATE_OF_JOINING:'12-nov-2023',	},
    { name: '#Golden Company limited',    INVESTOR_NAME	 : 'RECEIPT',  EMAIL	:'14568', PHONE_NO:'22.00$', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',DATE_OF_JOINING:'12-nov-2023',	},
    { name: '#Golden Company limited' ,  INVESTOR_NAME	 : 'RECEIPT',    EMAIL	:'14568',PHONE_NO:'22.00$',SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',  DATE_OF_JOINING:'12-nov-2023',},
    { name: '#Golden Company limited' , INVESTOR_NAME	 : 'RECEIPT',   EMAIL	:'14568', PHONE_NO:'22.00$', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',  DATE_OF_JOINING:'12-nov-2023',}
  
  ];
}
