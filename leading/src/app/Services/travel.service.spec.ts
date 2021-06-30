import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { TravelService } from './travel.service';

describe('TravelService', () => {
  let service: TravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
