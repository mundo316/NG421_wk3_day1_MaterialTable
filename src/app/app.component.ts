import { Component } from '@angular/core';
import { IVehicleList } from './interfaces/car-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
vehicleList: IVehicleList[] = [
{
  make: "Chevrolet",
  model: "Silverado",
  domestic: true,
  sold: 32749,
},
{
  make: "Ford",
  model: "F-150",
  domestic: true,
  sold: 38732,
},
{
  make: "Honda",
  model: "Civic",
  domestic: false,
  sold: 98322,
}
]

  title = 'MaterialTable';
}
