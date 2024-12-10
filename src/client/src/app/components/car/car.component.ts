import { Component, OnInit } from '@angular/core'; // Pridanie OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService} from '../../services/CarService';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars: any[] = [];
  editMode = false;
  carToEdit: any = null;

  constructor(private carService: CarService) {}


  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  deleteCar(id: number): void {
    if (confirm('Are you sure you want to delete this car?')) {
      this.carService.deleteCar(id).subscribe(() => {
        alert('Car deleted successfully');
        this.fetchCars();
      });
    }
  }

  startEditCar(index: number): void {
    this.editMode = true;
    this.carToEdit = { ...this.cars[index] };
  }

  saveEditedCar(): void {
    if (this.carToEdit) {
      this.carService.updateCar(this.carToEdit.id, this.carToEdit).subscribe(() => {
        alert('Car updated successfully');
        this.fetchCars();
        this.cancelEdit();
      });
    }
  }

  cancelEdit(): void {
    this.editMode = false;
    this.carToEdit = null;
  }
}
