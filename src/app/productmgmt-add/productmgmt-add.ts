import { Product } from './../Models/Product';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../Service/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './productmgmt-add.html',
  styleUrl: './productmgmt-add.css',
})
export class ProductmgmtAdd {

productService = inject(ProductService)
router = inject(Router)

productForm = new FormGroup({

name: new FormControl(''),
price: new FormControl(0),
quantity: new FormControl(0)

})

addProductComponent(){

this.productService.addProduct(this.productForm.value as Product)
.subscribe(res=>{

alert("Product Added")

this.router.navigate([''])

})

}

}