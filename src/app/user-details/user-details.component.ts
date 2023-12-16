import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  imports: [ReactiveFormsModule], // Import ReactiveFormsModule here
  standalone: true,
})
export class UserDetailsComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  form!: FormGroup;
  // form: FormGroup = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   email: ['', [Validators.required, Validators.email]],
  // });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data: ', this.form.value);
      // Navigate to the pay page
      this.router.navigate(['/paypage']);
    } else {
      console.error('Form is invalid');
    }
  }
}
