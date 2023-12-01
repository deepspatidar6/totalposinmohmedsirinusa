import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-addsales-return-invoice-updated',
  templateUrl: './addsales-return-invoice-updated.component.html',
  styleUrls: ['./addsales-return-invoice-updated.component.scss']
})
export class AddsalesReturnInvoiceUpdatedComponent {
  addrole !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}

}
