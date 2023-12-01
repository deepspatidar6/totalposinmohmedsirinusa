import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-journal-reports',
  templateUrl: './journal-reports.component.html',
  styleUrls: ['./journal-reports.component.scss']
})
export class JournalReportsComponent {

  ELEMENT_DATA = [
    { name: '#7675467', INVESTOR_NAME	 : '87877' ,   EMAIL	:'sugar',PHONE_NO:'22.00$', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023', DATE_OF_JOINING:'12-nov-2023',	},
    { name: '#7675467' ,   INVESTOR_NAME	 : '34556763', EMAIL	:'sugar',PHONE_NO:'22.00$', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',DATE_OF_JOINING:'12-nov-2023',	},
    { name: '#7675467',    INVESTOR_NAME	 : '8023450',  EMAIL	:'sugar', PHONE_NO:'22.00$', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',DATE_OF_JOINING:'12-nov-2023',	},
    { name: '#7675467' ,  INVESTOR_NAME	 : '43498137',    EMAIL	:'sugar',PHONE_NO:'22.00$',SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',  DATE_OF_JOINING:'12-nov-2023',},
    { name: '#7675467' , INVESTOR_NAME	 : '2984984',   EMAIL	:'sugar', PHONE_NO:'22.00$', SHARES:'22.00 $', Investers_AMOUNT:'06-10-2023',  DATE_OF_JOINING:'12-nov-2023',}
  
  ];
constructor(
  private _dig :MatDialog
){

}


}
