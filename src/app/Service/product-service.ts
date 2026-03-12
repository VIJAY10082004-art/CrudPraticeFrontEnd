import { Product } from './../Models/Product';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //DI 
  http =inject(HttpClient)
  //Observable 
  addProduct(product:Product){
    return this.http.post('https://localhost:7211/api/Product/AddProduct',product)

  }
  getProduct(){
    return this.http.get<Product[]>('https://localhost:7211/api/Product/ViewProduct')
  }
  updateProduct( id:number,product:Product){
    return this.http.put('https://localhost:7211/api/Product/UpdateProduct/'+id,product)
  }
  getProductById(id:number){
    return this.http.get<Product>(`https://localhost:7211/api/Product/ViewProductById/${id}`)}
    deleteProduct(id:number){
      return this.http.delete(`https://localhost:7211/api/Product/DeleteProduct/${id}`)
    }

}
