import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { BrandService } from '../../../services/brand.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { AddBrand } from 'src/app/admin/Store/Actions/Brand.Actions';
import { PurchaseOrderService } from 'src/app/admin/services/purchase-order/purchase-order.service';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit{

  // this is a brand form
  brandform !:FormGroup ;
  ckformBrand:boolean = false;

// this is a PurchaseOrderform
  PurchaseOrderform !:FormGroup ;
  ckPurchaseOrderform:boolean = false;
  newDates:any = new Date()
  countes:number = 1;
  setAmount:number=0;


  ckformCategory:boolean = false;
 constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _fb : FormBuilder,
    private _brands : BrandService,
    private _toastr: ToastrService,
    public _dilogs : MatDialog,
    private _store : Store,
    private _Purechase : PurchaseOrderService
  )
  {
    console.log(data)
  }
  ngOnInit(): void {
   this.pageLoaedData();

  }

  pageLoaedData(){
    this.brandform = this._fb.group({
  
      brandname : ['', Validators.required]
     })

  this.PurchaseOrderform = this._fb.group({
    DueDate : ['',Validators.required],
    PartyAccount : ['',Validators.required],
    PurchaseSalesLedger : ['',Validators.required],
    ProductName : ['', Validators.required],
    Quantity: [null, Validators.required],
    Price : [null, Validators.required],
    Notes : ['',Validators.required],
    Status : ['', Validators.required],
    Warehouse : ['', Validators.required]
  })






if(this.data.id)
{
  this._brands.getById(this.data.id).subscribe(res=>{
  this.brandform.controls['brandname'].setValue(res.brandname)
  })
}
}

Create_And_Update_Brand(){
    
  if (this.brandform.invalid) {
    this.ckformBrand = true
    return
  }
  if (this.data.id) {
    this._brands.UpdateBrand(this.data.id,this.brandform.value).subscribe(res=>{
    this._dilogs.closeAll();
    this._toastr.success('Successfull Update a Brand!');
  });
   }
   if (this.brandform.valid && !this.data.id) {
    const objs = {
     _id : '',
     __v : undefined,
     brandname : this.brandform.value.brandname,
     createdAt: '',
     updatedAt: ''
    }

    this._store.dispatch(new AddBrand(objs))


    //  this._brands.CreateBrand(this.brandform.value).subscribe(res=>{
    //   this._dilogs.closeAll();
    //   this._toastr.success('Successfull Create a Brand!');
//  })
}
}


add_order(){

   
    if (this.PurchaseOrderform.invalid) {
      this.ckPurchaseOrderform = true;
      return
    }else{
   
      this._Purechase.Add_Order(this.PurchaseOrderform.value).subscribe({
        next : (res) =>{
          console.log( res )
             this._dilogs.closeAll()
         },
         error : (err)=>{
          console.log('err in post Purchase Order')
          }
      })
    }
}

ckpice(){
const qut = this.PurchaseOrderform.get('Quantity')?.value;
const price = this.PurchaseOrderform.get('Price')?.value;
  this.setAmount = (qut* price)
}
}
