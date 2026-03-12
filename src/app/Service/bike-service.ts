import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../Models/Bike';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  private apiUrl="https://localhost:7024/api/Bike"
  constructor(private http: HttpClient) {

  }
  getBike():Observable<Bike[]>{
    return this.http.get<Bike[]>(this.apiUrl);
  }
  addBike(bike:Bike):Observable<Bike>{
   
    return this.http.post<Bike>(this.apiUrl,bike);
  }





  
}
