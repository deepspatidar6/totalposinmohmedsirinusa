import { Component } from '@angular/core';

@Component({
  selector: 'app-creditors-outstanding-report',
  templateUrl: './creditors-outstanding-report.component.html',
  styleUrls: ['./creditors-outstanding-report.component.scss']
})
export class CreditorsOutstandingReportComponent {
  creditorsOutstandingReport:any = [
    {PARTICULARS: "Golden Company limited", DEBIT: "40.00",CREDIT:"199.99", DATE: "02-02-2020"
  },
  {PARTICULARS: "Golden Company limited", DEBIT: "40.00",CREDIT:"199.99", DATE: "02-02-2020"
},
{PARTICULARS: "Golden Company limited", DEBIT: "40.00",CREDIT:"199.99", DATE: "02-02-2020"
},
  ]
}
