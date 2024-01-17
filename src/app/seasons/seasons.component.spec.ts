import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { SeasonsService } from '../services/seasons.service';

import { SeasonsComponent } from './seasons.component';

describe('SeasonsComponent', () => {
  let component: SeasonsComponent;
  let fixture: ComponentFixture<SeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonsComponent, SeasonsComponent ],
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
