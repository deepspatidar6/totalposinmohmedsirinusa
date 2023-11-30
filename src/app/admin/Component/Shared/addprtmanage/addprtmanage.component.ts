import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-addprtmanage',
  templateUrl: './addprtmanage.component.html',
  styleUrls: ['./addprtmanage.component.scss']
})
export class AddprtmanageComponent implements OnInit {
  addproductmanagement !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
