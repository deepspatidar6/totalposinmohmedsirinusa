import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentMethodComponent } from '../../shared/add-payment-method/add-payment-method.component';
import { AddReplaceComponent } from '../../shared/add-replace/add-replace.component';

@Component({
  selector: 'app-schanges-billing',
  templateUrl: './schanges-billing.component.html',
  styleUrls: ['./schanges-billing.component.scss']
})
export class SchangesBillingComponent {
 
  constructor ( private _diolog :MatDialog) {}


  add_billing(){
    this._diolog.open(AddPaymentMethodComponent)
  }

  add_replace(){
    this._diolog.open(AddReplaceComponent)
  }

}
