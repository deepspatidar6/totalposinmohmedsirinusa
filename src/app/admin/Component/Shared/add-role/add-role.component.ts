import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent {

  addrole !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}

}
