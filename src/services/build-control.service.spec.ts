import { TestBed, inject } from '@angular/core/testing';

import { BuildControlService } from './build-control.service';

describe('BuildControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildControlService]
    });
  });

  it('should be created', inject([BuildControlService], (service: BuildControlService) => {
    expect(service).toBeTruthy();
  }));
});
