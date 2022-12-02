import { Injectable } from '@angular/core';
import { ISeason } from '../interfaces/iseason';
import { SeasonsConstants } from '../models/seasons-constants';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  private seasons: ISeason[] = SeasonsConstants.getSeasons();
  constructor() { }

  public getSeason(date: Date): ISeason {
    for (const season of this.seasons) {
      if (this.isSeason(season, date)) {
        return season;
      }
    }

    return  {start: new Date(), end: new Date(), name: "bad", description: "bad"};
  }

  public getCurrentSeason(): ISeason {
    return this.getSeason(new Date());
  }

  private isSeason(season: ISeason, date: Date) {
    return date >= season.start && date <= season.end;
  }
}
