import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    private _toster :ToastrService
    ){}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    setTimeout(()=>{
      this._toster.warning("add data ");
    },3000)
  }

}
