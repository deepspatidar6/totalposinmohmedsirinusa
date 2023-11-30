import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-addproduction-recieved',
  templateUrl: './addproduction-recieved.component.html',
  styleUrls: ['./addproduction-recieved.component.scss']
})
export class AddproductionRecievedComponent {
  addproductionRecieved !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
