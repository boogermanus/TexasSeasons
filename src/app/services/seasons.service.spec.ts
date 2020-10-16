import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { TestBed } from '@angular/core/testing';

import { SeasonsService } from './seasons.service';

describe('SeasonsService', () => {
  let service: SeasonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method getSeason', () => {
    expect(service.getSeason).toBeDefined();
  });

  describe('getSeason()', () => {
    const year = new Date().getFullYear();

    it('should be truthy', () => {
      const value = service.getSeason(new Date(year, 1, 1));

      expect(value).toBeTruthy();
    });

    it('should return Actual Spring', () => {
      const value = service.getSeason(new Date(year, 2, 3));
      expect(value.name).toEqual('Actual Spring');
    });

    it('should return Pre-Summer', () => {
      const value = service.getSeason(new Date(year, 3, 1));

      expect(value.name).toEqual('Pre-Summer');
    });
  });
});
