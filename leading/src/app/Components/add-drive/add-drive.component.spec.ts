import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriveComponent } from './add-drive.component';

describe('AddDriveComponent', () => {
  let component: AddDriveComponent;
  let fixture: ComponentFixture<AddDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
