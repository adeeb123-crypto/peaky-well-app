import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreFormDataService } from '../services/store-form-data.service';
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
  dob: string = '';
  gender: string = '';

  form!: FormGroup;
  maxDate!: string;
  isToggled: boolean = false;
  // private formDataSubscription: Subscription;
  // form: FormGroup = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   email: ['', [Validators.required, Validators.email]],
  // });

  constructor(private fb: FormBuilder, private router: Router, private StoreFormDataService: StoreFormDataService) {
    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = eighteenYearsAgo.toISOString().split('T')[0];

    // this.formDataSubscription = this.StoreFormDataService.getFormData().subscribe(data => {
    //   if (data) {
    //     this.form.patchValue(data);
    //   }
    // });
    
  }

  // ngOnDestroy() {
  //   // Unsubscribe to prevent memory leaks
  //   this.formDataSubscription.unsubscribe();
  // }

  // saveForm() {
  //   // Call this method when the form data needs to be updated
  //   this.StoreFormDataService.updateFormData(this.form.value);
  // }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
    });

    this.form.valueChanges.subscribe(values => {
      this.StoreFormDataService.updateFormData(values);
    });

    this.StoreFormDataService.getFormData().subscribe(data => {
      if (data) {
        this.form.setValue(data, { emitEvent: false }); // Prevents triggering `valueChanges` again
      }
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
