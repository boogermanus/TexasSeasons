import { SeasonsConstants } from './seasons-constants';

describe('SeasonsConstants', () => {
  it('should create an instance', () => {
    expect(new SeasonsConstants()).toBeTruthy();
  });

  it('should have method seasons', () => {
    expect(SeasonsConstants.getSeasons).toBeDefined();
  });
});
