import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyDriveComponent } from './show-my-drive.component';

describe('ShowMyDriveComponent', () => {
  let component: ShowMyDriveComponent;
  let fixture: ComponentFixture<ShowMyDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
