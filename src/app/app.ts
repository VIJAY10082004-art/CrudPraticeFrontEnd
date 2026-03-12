import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BikeComp } from "./bike-comp/bike-comp";
import { ProductComp } from './product-comp/product-comp';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BikeComp,ProductComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bike');
}
