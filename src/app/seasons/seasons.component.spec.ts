import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SeasonsService } from '../services/seasons.service';

import { SeasonsComponent } from './seasons.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

describe('SeasonsComponent', () => {
  let component: SeasonsComponent;
  let fixture: ComponentFixture<SeasonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonsComponent, SeasonsComponent],
      imports: [MatCardModule, MatDialogModule]
    })
      .compileComponents();
    TestBed.inject(SeasonsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have seasons', () => {
    expect(component.currentSeason).toBeTruthy();
  });
});
