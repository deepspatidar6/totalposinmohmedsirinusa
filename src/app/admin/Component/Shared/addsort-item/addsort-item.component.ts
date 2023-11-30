import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-addsort-item',
  templateUrl: './addsort-item.component.html',
  styleUrls: ['./addsort-item.component.scss']
})
export class AddsortItemComponent implements OnInit {
  addsortitem  !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
