import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  bookAppointment(data: any) {
    return this.http.post('http://localhost:3000/book', data);
  }
  
}
