import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-addreturn-package-box',
  templateUrl: './addreturn-package-box.component.html',
  styleUrls: ['./addreturn-package-box.component.scss']
})
export class AddreturnPackageBoxComponent {

  addreturnpackage !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}


}
