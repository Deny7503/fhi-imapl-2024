import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService} from '../../services/CarService';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  newCar = { brand: '', model: '', color: '', price: 0 };

  constructor(private carService: CarService) {}

  addCar() {
    if (this.newCar.brand && this.newCar.model && this.newCar.color && this.newCar.price) {
      this.carService.addCar(this.newCar).subscribe(() => {
        alert('Car added successfully');
        this.newCar = { brand: '', model: '', color: '', price: 0 }; // Reset formulára
      });
    } else {
      alert('Please fill out all fields');
    }
  }
}
