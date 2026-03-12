import { Component, inject, NgModule, OnInit, signal } from '@angular/core';
import { ProductService } from '../Service/product-service';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-comp',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './product-comp.html',
  styleUrl: './product-comp.css',
})
export class ProductComp implements OnInit {
  ngOnInit() {
   this.loadProducts();
  }
  updateId:number=0;
  name:string="";
  price:number=0;
  quantity:number=0;
  deleteId:number=0;

  productService=inject(ProductService)
  products = signal<Product[]>([]);
    productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0)
  });
 addProductComponent() {

  const pro = this.productForm.value;

 this.productService.addProduct( pro as Product).subscribe(
  ()=>{
   this.productForm.reset();}
  );


}
loadProducts() {
  this.productService.getProduct().subscribe((data) => {
    this.products.set(data);
    this.loadProducts();
  });
} 
updateProducts(){

  const product = {
    name: this.name,
    price: this.price,
    quantity: this.quantity
  }

  this.productService.updateProduct(this.updateId, product)
  .subscribe(res => {
    console.log("Product Updated", res);
  });
}
deleteProduct(id: number) {
  this.productService.deleteProduct(id).subscribe(() => {
    console.log("Product deleted");

    this.loadProducts();
  });
}
}
