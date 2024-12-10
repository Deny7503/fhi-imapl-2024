import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CarComponent } from './components/car/car.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'cars', component: CarComponent },
];
