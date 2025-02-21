import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vehicle } from './vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl: string = environment.vehiclesUrl;

  constructor(private http: HttpClient) { }

  getVehicle(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

}
