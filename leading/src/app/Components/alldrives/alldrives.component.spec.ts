import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldrivesComponent } from './alldrives.component';

describe('AlldrivesComponent', () => {
  let component: AlldrivesComponent;
  let fixture: ComponentFixture<AlldrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldrivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
