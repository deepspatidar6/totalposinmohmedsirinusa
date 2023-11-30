import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stock-summary-report',
  templateUrl: './add-stock-summary-report.component.html',
  styleUrls: ['./add-stock-summary-report.component.scss']
})
export class AddStockSummaryReportComponent {
  addstocksummaryreports !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}

}
