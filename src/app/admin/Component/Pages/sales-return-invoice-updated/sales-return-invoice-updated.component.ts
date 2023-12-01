import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsalesReturnInvoiceUpdatedComponent } from '../../shared/addsales-return-invoice-updated/addsales-return-invoice-updated.component';



@Component({
  selector: 'app-sales-return-invoice-updated',
  templateUrl: './sales-return-invoice-updated.component.html',
  styleUrls: ['./sales-return-invoice-updated.component.scss']
})
export class SalesReturnInvoiceUpdatedComponent {



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
  add_sales(){
    this._dig.open(AddsalesReturnInvoiceUpdatedComponent)
  }
}
