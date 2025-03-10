import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { MatCardModule } from '@angular/material/card';

describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SeasonsComponent
      ],
      imports: [
        MatCardModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TexasSeasons'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Texas Seasons');
  });
});
