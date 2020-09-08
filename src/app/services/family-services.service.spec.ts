import { TestBed } from '@angular/core/testing';

import { FamilyServicesService } from './family-services.service';

describe('FamilyServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyServicesService = TestBed.get(FamilyServicesService);
    expect(service).toBeTruthy();
  });
});
