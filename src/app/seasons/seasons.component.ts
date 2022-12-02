import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllSeasonsComponent } from '../all-seasons/all-seasons.component';
import { ISeason } from '../interfaces/iseason';
import { SeasonsService } from '../services/seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  public currentSeason: ISeason;
  constructor(private seasonsService: SeasonsService,
              private dialogService: MatDialog) {
    this.currentSeason = this.seasonsService.getCurrentSeason();
  }

  ngOnInit(): void {

  }

  viewAll(): void {
    const dialog = this.dialogService.open(AllSeasonsComponent, {
      width: '400px'
    });
  }

}
