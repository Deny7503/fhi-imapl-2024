import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCar(car: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, car);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateCar(id: number, updatedCar: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedCar);
  }
}
