import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-addproductorder',
  templateUrl: './addproductorder.component.html',
  styleUrls: ['./addproductorder.component.scss']
})
export class AddproductorderComponent {
  addproductorder !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
