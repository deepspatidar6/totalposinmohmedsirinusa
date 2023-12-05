import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';

import { SupplierComponent } from './component/pages/supplier/supplier.component';
import { StockMangerComponent } from './component/pages/stock-manger/stock-manger.component';
import { ProductCategoriesComponent } from './component/pages/product-categories/product-categories.component';
import { ManeProductComponent } from './component/pages/mane-product/mane-product.component';
import { CategoriesComponent } from './component/shared/categories/categories.component';
import { BrandComponent } from './component/pages/brand/brand.component';

import { MainProductComponent } from './component/shared/main-product/main-product.component';
import { WarehouseComponent } from './component/pages/warehouse/warehouse.component';
import { ProductViewComponent } from './component/shared/product-view/product-view.component';
import { UnitComponent } from './component/pages/unit/unit.component';
import { WarrantiesComponent } from './component/pages/warranties/warranties.component';
import { DepartmentComponent } from './component/pages/department/department.component';
import { ImportProductComponent } from './component/pages/import-product/import-product.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
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
import { SgiftCardComponent } from './component/pages/sgift-card/sgift-card.component';
import { SchangesBillingComponent } from './component/pages/schanges-billing/schanges-billing.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : DashboardComponent
      },
      {
        path : 'profile',
        component : ProfileComponent
      },
      {
        path : "unit",
        component : UnitComponent
      },
      {
        path : "product/warranties",
        component : WarrantiesComponent
      },
      {
        path : "product",
        component : ManeProductComponent
      },
      {
        path : 'department',
        component : DepartmentComponent
      },
      {
        path : "product/main",
        component : MainProductComponent
      },
      {
        path : "product/categories",
        component : ProductCategoriesComponent
      },
      {
        path : "product/brand",
        component : BrandComponent
      },
      
      {
        path : "supplier",
        component : SupplierComponent
      },
      {
        path : "stockmanger",
        component : StockMangerComponent
      },
      {
        path : "product/categories/add",
        component : CategoriesComponent
      },
      {
        path : "product/categories/add/:catid",
        component : CategoriesComponent
      },

      {
        path : "product/brand/add/:id",
        component : CategoriesComponent
      },
      {
        path : "product/brand/add/:id/edit/:ids",
        component : CategoriesComponent
      },
      {
        path :  "product/warehouse",
        component : WarehouseComponent
      },
      {
        path :  "product/detail",
        component : ProductViewComponent
      },

      {
        path : 'product/importproduct',
        component : ImportProductComponent
      },
      {
        path: "purchaseorder",
        component : PurchaseOrderComponent
      },
      { 
        path : 'purchaseorderreport',
        component : PurchasePendingReportComponent
      },
      {
        path :"purchaseinvoice",
        component : PurchaseInvoiceComponent
      },
      {
        path : "users",
        component : UsersComponent
      },
      // {
      //   path : "groupwiseoutstnading",
      //   component : GroupwiseOutstandingReportComponent
      // },
      {
        path : "refunds",
        component : RefundssComponent
      },
      {
        path : "readytoshipped",
        component : ReadyToShippedComponent
      },
      {
        path : "approved",
        component : ApprovedComponent
      },
      {
        path : "paymententry",
        component : PaymentEntryComponent
      },
      {
        path : "salesorderpendingreport",
        component : SalesOrderPendingReportComponent
      },
      {
        path : "salesreceiptentry",
        component : SalesReceiptEntryComponent
      },
      {
        path : "salesregister",
        component : SalesRegisterComponent
      },
      {
        path : "purchaseregister",
        component : PurchaseRegisterComponent
      },
      // {
      //   path : "creditorsoutstandingreport",
      //   component : CreditorsOutstandingReportComponent
      // },
      {
        path : "setting/plan",
        component : SplanComponent
      },
      // {
      //   path : "setting/selectaplan",
      //   component : AddSelectAPlanComponent
      // },
      {
        path : "setting/billing",
        component : SchangesBillingComponent
      },
    
      {
        path : "setting/giftcard",
        component : SgiftCardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
