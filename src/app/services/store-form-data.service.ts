import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreFormDataService {
    private formData = new BehaviorSubject<any>(null);

  constructor() { }

  updateFormData(data: any) {
    this.formData.next(data);
  }

  getFormData() {
    return this.formData.asObservable();
  }
}

