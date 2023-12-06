import { Component } from '@angular/core';

@Component({
  selector: 'app-debitors-outstanding-report',
  templateUrl: './debitors-outstanding-report.component.html',
  styleUrls: ['./debitors-outstanding-report.component.scss']
})
export class DebitorsOutstandingReportComponent {
  debitorsOutstandingReport:any = [
    {PARTICULARS: "Golden Company limited", DEBIT: "40.00",CREDIT:"199.99", DATE: "02-02-2020"
  },
  {PARTICULARS: "Golden Company limited", DEBIT: "40.00",CREDIT:"199.99", DATE: "02-02-2020"
},
{PARTICULARS: "Golden Company limited", DEBIT: "40.00",CREDIT:"199.99", DATE: "02-02-2020"
},
  
 
  
  ]
}
