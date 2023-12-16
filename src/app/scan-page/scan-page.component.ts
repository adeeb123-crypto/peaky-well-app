import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-scan-page',
  standalone: true,
  imports: [],
  templateUrl: './scan-page.component.html',
  styleUrl: './scan-page.component.scss',
})
export class ScanPageComponent {
  customerId: any;
  scanId: any;
  clientId: any;
  orgId!: number;
  userId!: number;
  tenantId!: number;

  fedoWebappUrl: SafeResourceUrl;

  dynamicUrl: string = '';

  constructor(private sanitizer: DomSanitizer) {
    this.orgId = 138;
    this.userId = 714;
    this.tenantId = 138;

    // set application id of the customer as the customer id
    this.customerId = '1234test';

    // generate scan id
    this.scanId = this.generateScanId();

    // set client id
    this.clientId = 'intelpeek';

    // generate dynamic fedo web app url
    this.dynamicUrl = `https://fedo.ai/products/vitals/webapp/vitals?orgId=${this.orgId}&custId=${this.customerId}&userId=${this.userId}&tenantId=${this.tenantId}&clientId=${this.clientId}&scanId=${this.scanId}`;
    this.fedoWebappUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dynamicUrl
    );
  }

  ngOnInit() {}

  generateScanId() {
    return uuidv4().substring(0, 5);
  }
}
