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

  it('should have method getCurrentSeason', () => {
    expect(service.getCurrentSeason).toBeDefined();
  });

  describe('getSeason()', () => {
    const year = new Date().getFullYear();

    it('should be truthy', () => {
      const value = service.getSeason(new Date(year, 1, 1));

      expect(value).toBeTruthy();
    });

    it('should return Actual Spring', () => {
      const value = service.getSeason(new Date(year, 1, 1));
      expect(value.name).toEqual('Actual Spring');
    });

    it('should return Pre-Summer', () => {
      const value = service.getSeason(new Date(year, 2, 1));

      expect(value.name).toEqual('Pre-Summer');
    });

    it('should return Actual Summer', () => {
      const value = service.getSeason(new Date(year, 5, 1));

      expect(value.name).toEqual('Actual Summer');
    });

    it('should return Melt', () => {
      const value = service.getSeason(new Date(year, 7, 1));

      expect(value.name).toEqual('Melt');
    });

    it('should return Post-Melt', () => {
      const value = service.getSeason(new Date(year, 8, 1));

      expect(value.name).toEqual('Post-Melt');
    });

    it('should return Spooky Summer', () => {
      const value = service.getSeason(new Date(year, 9, 1));

      expect(value.name).toEqual('Spooky Summer');
    });

    it('should return Fake Fall', () => {
      const value = service.getSeason(new Date(year, 10, 1));

      expect(value.name).toEqual('Fake Fall');
    });

    it('should return Actual Fall', () => {
      const value = service.getSeason(new Date(year, 10, 21));

      expect(value.name).toEqual('Actual Fall');
    });

    it('should return T-Shirt Winter', () => {
      const value = service.getSeason(new Date(year, 11, 1));

      expect(value.name).toEqual('T-Shirt Winter');
    });

    it('should return Actual Winter', () => {
      const value = service.getSeason(new Date(year, 0, 1));

      expect(value.name).toEqual('Actual Winter');
    });

    it('should return Shuffle', () => {
      const value = service.getSeason(new Date(year, 0, 11));

      expect(value.name).toEqual('Shuffle');
    });
  });

  describe('getCurrentSeason()', () => {
    it('should return the same value as getSeason(new Date())', () => {
      const expected = service.getSeason(new Date());
      const value = service.getCurrentSeason();
      expect(expected.name).toEqual(value.name);
    });
  });
});
