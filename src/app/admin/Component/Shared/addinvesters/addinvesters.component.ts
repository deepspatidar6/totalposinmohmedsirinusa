import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addinvesters',
  templateUrl: './addinvesters.component.html',
  styleUrls: ['./addinvesters.component.scss']
})
export class AddinvestersComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private _fb : FormBuilder){}
ngOnInit(): void {
 throw new Error('Method not implemented.');
}


ifirstFormGroup = this._fb.group({});

isecondFormGroup = this._fb.group({});

ithirdFormGroup = this._fb.group({});

ifourthFormGroup = this._fb.group({});

ififthFormGroup = this._fb.group({});

isLinear = true;

to_next1nd(){}

to_next2nd(){}
to_next3nd(){}
to_next4nd(){}
to_next5nd(){}


}
