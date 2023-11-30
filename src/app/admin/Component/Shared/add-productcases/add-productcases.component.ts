import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-productcases',
  templateUrl: './add-productcases.component.html',
  styleUrls: ['./add-productcases.component.scss']
})
export class AddProductcasesComponent {
  addcasesproduct !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}

}
