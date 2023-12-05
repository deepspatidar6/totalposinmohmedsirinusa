import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddreturnPackageBoxComponent } from '../../shared/addreturn-package-box/addreturn-package-box.component';



@Component({
  selector: 'app-return-package-box',
  templateUrl: './return-package-box.component.html',
  styleUrls: ['./return-package-box.component.scss']
})
export class ReturnPackageBoxComponent {



  ELEMENT_DATA = [
    { invoice_no: '231212432323226',  product : 'sugar', price: '100:00',amount:'1200.00', DATE:'12-n0v-2023',},
    { invoice_no: '231212432323226' , product : 'sugar', price: '100:00', amount:'1200.00',DATE:'12-n0v-2023',},
    { invoice_no: '231212432323226',  product : 'sugar', price: '100:00',amount:'1200.00', DATE:'12-n0v-2023',},
    { invoice_no: '231212432323226' , product : 'sugar', price: '100:00', amount:'1200.00',DATE:'12-n0v-2023',},
    { invoice_no: '231212432323226' , product : 'sugar', price: '100:00', amount:'1200.00',DATE:'12-n0v-2023',}
  
  ];
constructor(
  private _dig :MatDialog
){

}
add_returnpackage(){
    this._dig.open(AddreturnPackageBoxComponent)
  }

}
