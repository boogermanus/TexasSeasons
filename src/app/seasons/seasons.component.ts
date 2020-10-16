import { Component, OnInit } from '@angular/core';
import { ISeason } from '../interfaces/iseason';
import { SeasonsService } from '../services/seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  public currentSeason: ISeason;
  constructor(private seasonsService: SeasonsService) { }

  ngOnInit(): void {
    this.currentSeason = this.seasonsService.getCurrentSeason();
  }

}
