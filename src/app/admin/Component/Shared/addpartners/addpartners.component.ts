import { Component,  Inject, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addpartners',
  templateUrl: './addpartners.component.html',
  styleUrls: ['./addpartners.component.scss']
})
export class AddpartnersComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
     private _fb : FormBuilder){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  pfirstFormGroup = this._fb.group({});

  psecondFormGroup = this._fb.group({});

  pthirdFormGroup = this._fb.group({});

  pfourthFormGroup = this._fb.group({});
  
  pfifthFormGroup = this._fb.group({});

  isLinear = true;

  to_next1nd(){}

  to_next2nd(){}
  to_next3nd(){}
  to_next4nd(){}
  to_next5nd(){}

}
