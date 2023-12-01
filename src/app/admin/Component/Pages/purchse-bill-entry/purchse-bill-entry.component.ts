import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsalesReturnInvoiceUpdatedComponent } from '../../shared/addsales-return-invoice-updated/addsales-return-invoice-updated.component';
import { AddpurchseBillEntryComponent } from '../../shared/addpurchse-bill-entry/addpurchse-bill-entry.component';

@Component({
  selector: 'app-purchse-bill-entry',
  templateUrl: './purchse-bill-entry.component.html',
  styleUrls: ['./purchse-bill-entry.component.scss']
})
export class PurchseBillEntryComponent {



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
  add_billentry(){
    this._dig.open(AddpurchseBillEntryComponent)
  }
}
