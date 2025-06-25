import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AppointmentService) {
    this.bookingForm = this.fb.group({
      name: [''],
      number: [''],
      datetime: ['']
    });
  }

  onSubmit() {
    this.service.bookAppointment(this.bookingForm.value).subscribe({
      next: () => alert('Appointment booked. WhatsApp message sent!'),
      error: () => alert('Error while booking. Check backend.')
    });
  }


}
