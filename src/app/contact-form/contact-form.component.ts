import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {EmailService} from "../shared/email.service";

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  emailService = inject(EmailService);

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    this.emailService.sendEmail({
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    }).subscribe((response) => {
      console.log(response);
      this.contactForm.reset();
    });
  }
}
