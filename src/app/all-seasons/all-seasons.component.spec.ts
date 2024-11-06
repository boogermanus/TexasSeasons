import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AllSeasonsComponent } from './all-seasons.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('AllSeasonsComponent', () => {
  let component: AllSeasonsComponent;
  let fixture: ComponentFixture<AllSeasonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSeasonsComponent ],
      imports: [MatDialogModule],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
