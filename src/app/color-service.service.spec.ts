/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ColorServiceService } from './color-service.service';

describe('Service: ColorService', () => {
  beforeEach(() => {
    addProviders([ColorServiceService]);
  });

  it('should ...',
    inject([ColorServiceService],
      (service: ColorServiceService) => {
        expect(service).toBeTruthy();
      }));
});
