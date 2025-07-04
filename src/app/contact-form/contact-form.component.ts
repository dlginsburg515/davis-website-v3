import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  sendEmail() {
    emailjs.sendForm(
      'service_z19evy9',    // e.g. service_xxx
      'template_nzf55kx',   // e.g. template_yyy
      document.querySelector('form')!,
      '03_d8xg-OaKsBfAdB'     // e.g. WkLxxxxxxxx
    ).then(
      () => alert('Message sent! ✅'),
      (error) => alert('Failed to send message ❌: ' + JSON.stringify(error))
    );
  }
}
