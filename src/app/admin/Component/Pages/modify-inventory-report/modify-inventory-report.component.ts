import { Component } from '@angular/core';

@Component({
  selector: 'app-modify-inventory-report',
  templateUrl: './modify-inventory-report.component.html',
  styleUrls: ['./modify-inventory-report.component.scss']
})
export class ModifyInventoryReportComponent {
  ELEMENT_DATA = [
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
    { varid: '#7678', Name : 'IPHONE', Price: '123', Sku:'barcod', Qty:15, Amount:100.00 , Expected_Qty:15, Actual_Qty:5, Variance:10,},
  ];
}
