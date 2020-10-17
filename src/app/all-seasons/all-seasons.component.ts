import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ISeason } from '../interfaces/iseason';
import { SeasonsConstants } from '../models/seasons-constants';

@Component({
  selector: 'app-all-seasons',
  templateUrl: './all-seasons.component.html',
  styleUrls: ['./all-seasons.component.css']
})
export class AllSeasonsComponent implements OnInit {

  allSeasons: ISeason[] = SeasonsConstants.getSeasons();
  constructor(public dialog: MatDialogRef<AllSeasonsComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialog.close();
  }

}
