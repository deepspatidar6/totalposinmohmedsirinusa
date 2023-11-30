import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-location-stock-transfer-management',
  templateUrl: './location-stock-transfer-management.component.html',
  styleUrls: ['./location-stock-transfer-management.component.scss']
})
export class LocationStockTransferManagementComponent implements OnInit {
  locationstocktransfer !:FormGroup;
  
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
