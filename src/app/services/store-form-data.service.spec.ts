import { TestBed } from '@angular/core/testing';

import { StoreFormDataService } from './store-form-data.service';

describe('StoreFormDataService', () => {
  let service: StoreFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
