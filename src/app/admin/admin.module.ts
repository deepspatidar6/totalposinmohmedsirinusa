import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { SupplierComponent } from './component/pages/supplier/supplier.component';
import { StockMangerComponent } from './component/pages/stock-manger/stock-manger.component';

import { CategoriesComponent } from './component/shared/categories/categories.component';
import { ProductCategoriesComponent } from './component/pages/product-categories/product-categories.component';
import { ManeProductComponent } from './component/pages/mane-product/mane-product.component';



// chart 
import { MiniProductComponent } from './component/Shared/mini-product/mini-product.component';
import { PieChartComponent } from './component/Shared/pie-chart/pie-chart.component';
import { DatasetChartComponent } from './component/Shared/dataset-chart/dataset-chart.component';
import { SimpleChartComponent } from './component/Shared/simple-chart/simple-chart.component';



import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HttpClientModule , HttpBackend} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {MatBadgeModule} from '@angular/material/badge';
import { NgOptimizedImage } from '@angular/common';
import { BrandComponent } from './component/pages/brand/brand.component';
import { SettingsComponent } from './component/pages/settings/settings.component';
import { MainProductComponent } from './component/shared/main-product/main-product.component';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import  {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule} from '@angular/material/core';
import { WarehouseComponent } from './component/pages/warehouse/warehouse.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProductViewComponent } from './component/shared/product-view/product-view.component';
import { MatChipsModule} from '@angular/material/chips';
import { UnitComponent } from './component/pages/unit/unit.component';
import { WarrantiesComponent } from './component/pages/warranties/warranties.component';
import { CalculationsComponent } from './component/shared/calculations/calculations.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { CdkDrag} from '@angular/cdk/drag-drop';
import { DepartmentComponent } from './component/pages/department/department.component';
import { MdbModalModule} from 'mdb-angular-ui-kit/modal';
import { AddDepartmentComponent } from './component/shared/add-department/add-department.component';
import { ImportProductComponent } from './component/pages/import-product/import-product.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { SpinDirective } from './Directives/spin.directive';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { SetvaluComponent } from './component/shared/setvalu/setvalu.component';
import { AddSuppliersComponent } from './component/shared/add-suppliers/add-suppliers.component';
import { PurchaseOrderComponent } from './component/pages/purchase-order/purchase-order.component';
import { PurchasePendingReportComponent } from './component/pages/purchase-pending-report/purchase-pending-report.component';
import { PurchaseInvoiceComponent } from './component/pages/purchase-invoice/purchase-invoice.component';
import { UsersComponent } from './component/pages/users/users.component';
import { GroupwiseOutstandingReportComponent } from './component/pages/groupwise-outstanding-report/groupwise-outstanding-report.component';
import { RefundssComponent } from './component/pages/refundss/refundss.component';
import { ReadyToShippedComponent } from './component/pages/ready-to-shipped/ready-to-shipped.component';
import { ApprovedComponent } from './component/pages/approved/approved.component';
import { PaymentEntryComponent } from './component/pages/payment-entry/payment-entry.component';
import { SalesOrderPendingReportComponent } from './component/pages/sales-order-pending-report/sales-order-pending-report.component';
import { SalesReceiptEntryComponent } from './component/pages/sales-receipt-entry/sales-receipt-entry.component';
import { SalesRegisterComponent } from './component/pages/sales-register/sales-register.component';
import { PurchaseRegisterComponent } from './component/pages/purchase-register/purchase-register.component';
import { CreditorsOutstandingReportComponent } from './component/pages/creditors-outstanding-report/creditors-outstanding-report.component';
import { SplanComponent } from './component/pages/splan/splan.component';
import { AddSelectAPlanComponent } from './component/shared/add-select-a-plan/add-select-a-plan.component';
import { SchangeBillingComponent } from './component/shared/schange-billing/schange-billing.component';
import { SgiftCardComponent } from './component/pages/sgift-card/sgift-card.component';
import { AddPaymentMethodComponent } from './component/shared/add-payment-method/add-payment-method.component';
import { SchangesBillingComponent } from './component/pages/schanges-billing/schanges-billing.component';
import { AddReplaceComponent } from './component/shared/add-replace/add-replace.component';

export function HttpLoaderFactory(_http: HttpBackend) {
  return new MultiTranslateHttpLoader(_http , [
    '../../assets/i18n/admin/shared/header/',
    '../../assets/i18n/admin/pages/dashboard/',
])


}





@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    SupplierComponent,
    StockMangerComponent,
    CategoriesComponent,
    ProductCategoriesComponent,
    ManeProductComponent,
    BrandComponent,
    SettingsComponent,
    MainProductComponent,
    WarehouseComponent,
    ProductViewComponent,
    UnitComponent,
    WarrantiesComponent,
    CalculationsComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    ImportProductComponent,
    FooterComponent,
    SpinDirective,
    ProfileComponent,
    SetvaluComponent,
    AddSuppliersComponent,
    PurchaseOrderComponent,
    PurchasePendingReportComponent,
    PurchaseInvoiceComponent,
    UsersComponent,
    GroupwiseOutstandingReportComponent,
    RefundssComponent,
    ReadyToShippedComponent,
    ApprovedComponent,
    PaymentEntryComponent,
    SalesOrderPendingReportComponent,
    SalesReceiptEntryComponent,
    SalesRegisterComponent,
    PurchaseRegisterComponent,
    CreditorsOutstandingReportComponent,
    SplanComponent,
    AddSelectAPlanComponent,
    SchangeBillingComponent,
    SgiftCardComponent,
    AddPaymentMethodComponent,
    SchangesBillingComponent,
    AddReplaceComponent,
    
  ],
  imports: [
    
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatRippleModule,
    MatMenuModule,
    MatBadgeModule,
    MiniProductComponent,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
     MatSelectModule,
     MatSortModule,
     MatStepperModule, 
     MatInputModule , 
     CdkDrag,
     MatButtonToggleModule,
     DatasetChartComponent,
     MatProgressBarModule,
      ReactiveFormsModule,
      HttpClientModule,
      NgOptimizedImage,
      MatTooltipModule,
      FormsModule,
      MatDividerModule,
      MatDatepickerModule,
      MatNativeDateModule,
      LoadingBarRouterModule,
      MatCheckboxModule,
      MatSlideToggleModule,
      MatDialogModule,
      MatAutocompleteModule,
      MatChipsModule,
      MdbCollapseModule,
      MdbModalModule,
      PieChartComponent,
      SimpleChartComponent,
     TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpBackend]
            }
        }),
        NgMultiSelectDropDownModule.forRoot(),
        

  ],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  
  
})
export class AdminModule { }
