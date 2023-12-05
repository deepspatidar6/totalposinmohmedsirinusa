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
import { VendorComponent } from './component/pages/vendor/vendor.component';
import { OrdershippedComponent } from './component/pages/ordershipped/ordershipped.component';
import { OnlinestoreComponent } from './component/pages/onlinestore/onlinestore.component';
import { FeedbackformComponent } from './component/pages/feedbackform/feedbackform.component';
import { ExpensesComponent } from './component/pages/expenses/expenses.component';
import { ExpensescategoryComponent } from './component/pages/expensescategory/expensescategory.component';
import { CompilationitemordersComponent } from './component/pages/compilationitemorders/compilationitemorders.component';
import { ProductionorderplanComponent } from './component/pages/productionorderplan/productionorderplan.component';
import { RefundComponent } from './component/pages/refund/refund.component';
import { DiscountComponent } from './component/pages/discount/discount.component';
import { RewardsComponent } from './component/pages/rewards/rewards.component';
import { UpgradeapiComponent } from './component/pages/upgradeapi/upgradeapi.component';
import { TransactionComponent } from './component/pages/transaction/transaction.component';
import { TipsComponent } from './component/pages/tips/tips.component';
import { ShiftsComponent } from './component/pages/shifts/shifts.component';
import { ReturnsComponent } from './component/pages/returns/returns.component';
import { PrepareordereComponent } from './component/pages/prepareordere/prepareordere.component';
import { PagesComponent } from './component/pages/pages.component';
import { PrepareorderComponent } from './component/pages/prepareorder/prepareorder.component';
import { CashlogComponent } from './component/pages/cashlog/cashlog.component';
import { CloseoutComponent } from './component/pages/closeout/closeout.component';
import { ProductioncostComponent } from './component/pages/productioncost/productioncost.component';
import { AddboxComponent } from './component/pages/addbox/addbox.component';
import { MdiscountComponent } from './component/pages/mdiscount/mdiscount.component';
import { InventoryVariancesComponent } from './component/pages/inventory-variances/inventory-variances.component';
import { ModifyinventoryComponent } from './component/pages/modifyinventory/modifyinventory.component';
import { SlowMovingInventoryReportComponent } from './component/pages/slow-moving-inventory-report/slow-moving-inventory-report.component';
import { LocationStockTransferReportComponent } from './component/pages/location-stock-transfer-report/location-stock-transfer-report.component';
import { LocationStockTransferComponent } from './component/pages/location-stock-transfer/location-stock-transfer.component';
import { LocationStockTransferManagementComponent } from './component/shared/location-stock-transfer-management/location-stock-transfer-management.component';
import { LowStockReportComponent } from './component/pages/low-stock-report/low-stock-report.component';
import { ExpiredInventoryReportComponent } from './component/pages/expired-inventory-report/expired-inventory-report.component';
import { ProductMcomponentsComponent } from './component/pages/product-mcomponents/product-mcomponents.component';
import { AddprtmanageComponent } from './component/shared/addprtmanage/addprtmanage.component';
import { ProductCasesComponent } from './component/pages/product-cases/product-cases.component';
import { AddProductcasesComponent } from './component/shared/add-productcases/add-productcases.component';
import { CustomerComponent } from './component/pages/customer/customer.component';
import { RoleComponent } from './component/pages/role/role.component';
import { AddRoleComponent } from './component/shared/add-role/add-role.component';
import { OutOfStockComponent } from './component/pages/out-of-stock/out-of-stock.component';
import { StockSummaryReportComponent } from './component/pages/stock-summary-report/stock-summary-report.component';
import { AddStockSummaryReportComponent } from './component/shared/add-stock-summary-report/add-stock-summary-report.component';
import { InventoryVariancesReportComponent } from './component/pages/inventory-variances-report/inventory-variances-report.component';
import { ModifyInventoryReportComponent } from './component/pages/modify-inventory-report/modify-inventory-report.component';
import { SortItemOrderComponent } from './component/pages/sort-item-order/sort-item-order.component';
import { AddsortItemComponent } from './component/shared/addsort-item/addsort-item.component';
import { SortDATEOrderReportComponent } from './component/pages/sort-item-order-report/sort-item-order-report.component';
import { ProductionOrderReportComponent } from './component/pages/production-order-report/production-order-report.component';
import { AddproductionOrderReportComponent } from './component/shared/addproduction-order-report/addproduction-order-report.component';
import { ProductionOrderComponent } from './component/pages/production-order/production-order.component';
import { AddproductorderComponent } from './component/shared/addproductorder/addproductorder.component';
import { ProductionRecievedComponent } from './component/pages/production-recieved/production-recieved.component';
import { AddproductionRecievedComponent } from './component/shared/addproduction-recieved/addproduction-recieved.component';
import { PartnerComponent } from './component/pages/partner/partner.component';
import { AddpartnersComponent } from './component/shared/addpartners/addpartners.component';
import { InvestersComponent } from './component/pages/investers/investers.component';
import { AddinvestersComponent } from './component/shared/addinvesters/addinvesters.component';
import { InventoryScanningManagementComponent } from './component/pages/inventory-scanning-management/inventory-scanning-management.component';
import { JournalReportsComponent } from './component/pages/journal-reports/journal-reports.component';
import { BankbookComponent } from './component/pages/bankbook/bankbook.component';
import { CashBookComponent } from './component/pages/cash-book/cash-book.component';
import { SalesReturnInvoiceComponent } from './component/sales-return-invoice/sales-return-invoice.component';
import { SalesReturnInvoiceUpdatedComponent } from './component/pages/sales-return-invoice-updated/sales-return-invoice-updated.component';
import { AddsalesReturnInvoiceUpdatedComponent } from './component/shared/addsales-return-invoice-updated/addsales-return-invoice-updated.component';
import { PurchseBillEntryComponent } from './component/pages/purchse-bill-entry/purchse-bill-entry.component';
import { AddpurchseBillEntryComponent } from './component/shared/addpurchse-bill-entry/addpurchse-bill-entry.component';
import { PurchaseOrderBookReportComponent } from './component/pages/purchase-order-book-report/purchase-order-book-report.component';
import { SaleOrderBookComponent } from './component/pages/sale-order-book/sale-order-book.component';
import { ReturnPackageBoxComponent } from './component/pages/return-package-box/return-package-box.component';
import { AddreturnPackageBoxComponent } from './component/shared/addreturn-package-box/addreturn-package-box.component';
import { SbillingComponent } from './component/pages/sbilling/sbilling.component';
import { SCurrenciesComponent } from './component/pages/s-currencies/s-currencies.component';
import { MarketComponent } from './component/pages/market/market.component';
import { NotificationComponent } from './component/pages/notification/notification.component';
import { PoliciesComponent } from './component/pages/policies/policies.component';
import { LanguagesComponent } from './component/pages/languages/languages.component';
import { AddsettingExportComponent } from './component/shared/addsetting-export/addsetting-export.component';
import { AddsettingImportComponent } from './component/shared/addsetting-import/addsetting-import.component';
import { AddsettingAddlanguageComponent } from './component/shared/addsetting-addlanguage/addsetting-addlanguage.component';

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
    VendorComponent,
    OrdershippedComponent,
    OnlinestoreComponent,
    FeedbackformComponent,
    ExpensesComponent,
    ExpensescategoryComponent,
    CompilationitemordersComponent,
    ProductionorderplanComponent,
    RefundComponent,
    DiscountComponent,
    RewardsComponent,
    UpgradeapiComponent,
    TransactionComponent,
    TipsComponent,
    ShiftsComponent,
    ReturnsComponent,
    PrepareordereComponent,
    PagesComponent,
    PrepareorderComponent,
    CashlogComponent,
    CloseoutComponent,
    ProductioncostComponent,
    AddboxComponent,
    MdiscountComponent,
    InventoryVariancesComponent,
    ModifyinventoryComponent,
    SlowMovingInventoryReportComponent,
    LocationStockTransferReportComponent,
    LocationStockTransferComponent,
    LocationStockTransferManagementComponent,
    LowStockReportComponent,
    ExpiredInventoryReportComponent,
    ProductMcomponentsComponent,
    AddprtmanageComponent,
    ProductCasesComponent,
    AddProductcasesComponent,
    CustomerComponent,
    RoleComponent,
    AddRoleComponent,
    OutOfStockComponent,
    StockSummaryReportComponent,
    AddStockSummaryReportComponent,
    InventoryVariancesReportComponent,
    ModifyInventoryReportComponent,
    SortItemOrderComponent,
    AddsortItemComponent,
    SortDATEOrderReportComponent,
    ProductionOrderReportComponent,
    AddproductionOrderReportComponent,
    ProductionOrderComponent,
    AddproductorderComponent,
    ProductionRecievedComponent,
    AddproductionRecievedComponent,
    PartnerComponent,
    AddpartnersComponent,
    InvestersComponent,
    AddinvestersComponent,
    InventoryScanningManagementComponent,
    JournalReportsComponent,
    BankbookComponent,
    CashBookComponent,
    SalesReturnInvoiceComponent,
    SalesReturnInvoiceUpdatedComponent,
    AddsalesReturnInvoiceUpdatedComponent,
    PurchseBillEntryComponent,
    AddpurchseBillEntryComponent,
    PurchaseOrderBookReportComponent,
    SaleOrderBookComponent,
    ReturnPackageBoxComponent,
    AddreturnPackageBoxComponent,
    SbillingComponent,
    SCurrenciesComponent,
    MarketComponent,
    NotificationComponent,
    PoliciesComponent,
    LanguagesComponent,
    AddsettingExportComponent,
    AddsettingImportComponent,
    AddsettingAddlanguageComponent,
    
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
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
     MatSelectModule,
     MatSortModule,
     MatStepperModule, 
     MatInputModule , 
     CdkDrag,
     MatButtonToggleModule,
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
