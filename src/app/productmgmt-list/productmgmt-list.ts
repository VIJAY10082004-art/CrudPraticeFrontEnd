import { Component, OnInit, signal,inject } from '@angular/core';
import { ProductService } from '../Service/product-service';
import { Product } from '../Models/Product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productmgmt-list',
  imports: [RouterLink],
  templateUrl: './productmgmt-list.html',
  styleUrl: './productmgmt-list.css',
})
export class ProductmgmtList implements OnInit {
  productService=inject(ProductService)
  products = signal<Product[]>([]); 
  ngOnInit() {
   this.loadProducts();
  }
  loadProducts() {
    this.productService.getProduct().subscribe((data) => {
      this.products.set(data);
     
    });
  }
  
  deleteProduct(id: number) {
  this.productService.deleteProduct(id).subscribe(() => {
    alert("Product deleted");

    this.loadProducts();
  });}

}
