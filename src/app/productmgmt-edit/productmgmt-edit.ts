import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../Service/product-service';
import { Product } from '../Models/Product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-productmgmt-edit',
  imports: [FormsModule],
  templateUrl: './productmgmt-edit.html',
  styleUrl: './productmgmt-edit.css',
})
export class ProductmgmtEdit  implements OnInit{
  productService=inject(ProductService)
 route=inject(ActivatedRoute)
 router = inject(Router)
  name:string="";
  price:number=0;
  quantity:number=0;
  updateId:number=0;
  ngOnInit(){

// get id from URL
this.updateId = Number(this.route.snapshot.paramMap.get('id'))

}
  updateProducts(){

  const product = {
    name: this.name,
    price: this.price,
    quantity: this.quantity
  }

  this.productService.updateProduct(this.updateId, product)
  .subscribe(res => {
    alert("Product Updated");
      this.router.navigate([''])
    

  });
}

}
