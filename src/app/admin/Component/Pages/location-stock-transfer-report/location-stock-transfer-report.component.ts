import { Component } from '@angular/core';

@Component({
  selector: 'app-location-stock-transfer-report',
  templateUrl: './location-stock-transfer-report.component.html',
  styleUrls: ['./location-stock-transfer-report.component.scss']
})
export class LocationStockTransferReportComponent {

  ELEMENT_DATA = [
    { varid: '#7678', Name : 'Sandle', Category: 'Footwear', Brand:'Columbo', Price:15, Sku:'barcode' , Qty:3,Amount:100.00, },
    { varid: '#7678', Name : 'Sandle', Category: 'Footwear', Brand:'Columbo', Price:15, Sku:'barcode' , Qty:3,Amount:100.00, },
    { varid: '#7678', Name : 'Sandle', Category: 'Footwear', Brand:'Columbo', Price:15, Sku:'barcode' , Qty:3,Amount:100.00, },
    { varid: '#7678', Name : 'Sandle', Category: 'Footwear', Brand:'Columbo', Price:15, Sku:'barcode' , Qty:3,Amount:100.00,},
    { varid: '#7678', Name : 'Sandle', Category: 'Footwear', Brand:'Columbo', Price:15, Sku:'barcode' , Qty:3,Amount:100.00,},
  ];

}
