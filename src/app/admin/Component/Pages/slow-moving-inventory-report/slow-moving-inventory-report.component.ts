import { Component } from '@angular/core';

@Component({
  selector: 'app-slow-moving-inventory-report',
  templateUrl: './slow-moving-inventory-report.component.html',
  styleUrls: ['./slow-moving-inventory-report.component.scss']
})
export class SlowMovingInventoryReportComponent {

  ELEMENT_DATA = [
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , },
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 ,  },
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 ,  },
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , },
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , },
  ];

  constructor( ){}

}
