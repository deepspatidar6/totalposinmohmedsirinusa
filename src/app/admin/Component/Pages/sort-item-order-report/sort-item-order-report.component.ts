import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-item-order-report',
  templateUrl: './sort-item-order-report.component.html',
  styleUrls: ['./sort-item-order-report.component.scss']
})
export class SortDATEOrderReportComponent {

  ELEMENT_DATA = [
    { DATE: '12-nov-2023', TIME	: '12:pm', ORDER:'24', ACCOUNT:'334',  Quantity	:'2',  SUPPLIER:'Supplier X' ,},
    { DATE: '12-nov-2023', TIME	: '12:pm', ORDER:'34', ACCOUNT:'334',  Quantity	:'2',  SUPPLIER:'Supplier X' ,},
    { DATE: '12-nov-2023', TIME	: '12:pm', ORDER:'33', ACCOUNT:'334',  Quantity	:'2',  SUPPLIER:'Supplier X' ,},
  ];

}
