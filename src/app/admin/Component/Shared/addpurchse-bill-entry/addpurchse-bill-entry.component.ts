import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';



@Component({
  selector: 'app-addpurchse-bill-entry',
  templateUrl: './addpurchse-bill-entry.component.html',
  styleUrls: ['./addpurchse-bill-entry.component.scss']
})
export class AddpurchseBillEntryComponent {

  addpurchasebill !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}


}
