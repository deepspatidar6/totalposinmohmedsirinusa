import { Component } from '@angular/core';

@Component({
  selector: 'app-ledger-outstanding-report',
  templateUrl: './ledger-outstanding-report.component.html',
  styleUrls: ['./ledger-outstanding-report.component.scss']
})
export class LedgerOutstandingReportComponent {
  ledgerOutstandingReport:any = [
    {PARTICULARS: "Golden Company limited", INVOICE_NO: "1234",OPENING_AMOUNT:"199.99", PENDING_AMOUNT: "200.00",
    DUE_ON:"1-1-2020", OVER_DUE_BY_DAYS:"2-2-2021" },
    {PARTICULARS: "Golden Company limited", INVOICE_NO: "1234",OPENING_AMOUNT:"199.99", PENDING_AMOUNT: "200.00",
    DUE_ON:"1-1-2020", OVER_DUE_BY_DAYS:"2-2-2021" },
    {PARTICULARS: "Golden Company limited", INVOICE_NO: "1234",OPENING_AMOUNT:"199.99", PENDING_AMOUNT: "200.00",
    DUE_ON:"1-1-2020", OVER_DUE_BY_DAYS:"2-2-2021" },
 
 
  ]
}
