import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pay-page',
  standalone: true,
  imports: [],
  templateUrl: './pay-page.component.html',
  styleUrl: './pay-page.component.scss',
})
export class PayPageComponent {
  constructor(private router: Router) {}

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    // Set the type to HTMLElement
    if (target && target.classList.contains('continue-to-payment-button')) {
      this.continueToPayment();
    }
  }

  continueToPayment(): void {
    this.router.navigate(['/scanpage']);
  }
}
