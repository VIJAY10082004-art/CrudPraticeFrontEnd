
import { Component, OnInit, signal, } from '@angular/core';

import { BikeService } from '../Service/bike-service';
import { Bike } from '../Models/Bike';
import { FormsModule
 } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bike-comp',
  imports: [FormsModule,CommonModule],
  templateUrl: './bike-comp.html',
  styleUrl: './bike-comp.css',
})
export class BikeComp  implements OnInit{
  bikeArray = signal<Bike[]>([]);
  constructor(private http:BikeService) {}
  ngOnInit(){
    this.loadBike();   
  }
  newBike: Bike = {
  bikeId: 0,
  bikeType: '',
  bikeName: '',
  bikePrice: 0
};
  loadBike(){
    this.http.getBike().subscribe((data)=>{
     
      console.log(data);
this.bikeArray.set(data);
    })

  }
 

addBike(bike: Bike){
  this.http.addBike(bike).subscribe((data: Bike)=>{

    this.bikeArray.update(arr => [...arr, data]);
    this.loadBike(); 
  });
}




}