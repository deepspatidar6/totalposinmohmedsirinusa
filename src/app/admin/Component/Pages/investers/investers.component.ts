import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddinvestersComponent } from '../../shared/addinvesters/addinvesters.component';

@Component({
  selector: 'app-investers',
  templateUrl: './investers.component.html',
  styleUrls: ['./investers.component.scss']
})
export class InvestersComponent {



  ELEMENT_DATA = [
    { name: 'Deepak Patidar', INVESTOR_NAME	 : 'AppleApple' ,   EMAIL	:'dirego7841@rdluxe.com',PHONE_NO:'123456712', SHARES:'6.05 %', Investers_AMOUNT:'45657', DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'Gautam Bairagi' ,   INVESTOR_NAME	 : '3455676324', EMAIL	:'dirego7841@rdluxe.com',PHONE_NO:'123456712', SHARES:'6.05 %', Investers_AMOUNT:'45657',DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'pooja Agrawal ',    INVESTOR_NAME	 : '802345093',  EMAIL	:'dirego7841@rdluxe.com', PHONE_NO:'123456712', SHARES:'6.05 %', Investers_AMOUNT:'45657',DATE_OF_JOINING:'12-nov-2023',	},
    { name: 'Adams, Ansel' ,  INVESTOR_NAME	 : '4349813749',    EMAIL	:'dirego7841@rdluxe.com',PHONE_NO:'123456712',SHARES:'6.05 %', Investers_AMOUNT:'45657',  DATE_OF_JOINING:'12-nov-2023',},
    { name: 'Whitman, Walt' , INVESTOR_NAME	 : '298498455',   EMAIL	:'dirego7841@rdluxe.com', PHONE_NO:'123456712', SHARES:'6.05 %', Investers_AMOUNT:'45657',  DATE_OF_JOINING:'12-nov-2023',}
  
  ];
constructor(
  private _dig :MatDialog
){

}
add_investers(){
    this._dig.open(AddinvestersComponent, {
      data : {
        name : "investers"
      }
    })
  }
}
