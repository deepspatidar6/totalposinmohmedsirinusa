import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRoleComponent } from '../../shared/add-role/add-role.component';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {

  constructor(
    private _diologess : MatDialog
  ){}

  ELEMENT_DATA = [
    { EMPLOYEE_ID		 : '1', NAME: 'gautam',  EMAIL:'john@example.com',PHONE_NO	:'1232456',  COUNT:'2',},
    { EMPLOYEE_ID		 : '1', NAME: 'gautam',  EMAIL:'john@example.com',PHONE_NO	:'1232456',  COUNT:'2',},
    { EMPLOYEE_ID		 : '1', NAME: 'gautam',  EMAIL:'john@example.com',PHONE_NO	:'1232456',  COUNT:'2',},
  ];
  addprodunct(){
    this._diologess.open(AddRoleComponent )
   }
}
