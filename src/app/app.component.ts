import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app.routes';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    // AppRoutingModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'peaky-well-app';

  // firstName: string = '';
  // lastName: string = '';
  // email: string = '';

  // form!: FormGroup;
  // // form: FormGroup = this.fb.group({
  // //   firstName: ['', Validators.required],
  // //   lastName: ['', Validators.required],
  // //   email: ['', [Validators.required, Validators.email]],
  // // });

  // constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}
  //   this.form = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //   });
  // }

  // onSubmit() {
  //   if (this.form.valid) {
  //     console.log('Form Data: ', this.form.value);
  //     // Navigate to the pay page
  //     this.router.navigate(['/paypage']);
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }
}
