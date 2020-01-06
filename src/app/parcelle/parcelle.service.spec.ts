import { TestBed } from '@angular/core/testing';
import { ParcelleService } from './parcelle.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ParcelleService', () => {
  let service: ParcelleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ParcelleService]
    });

    service = TestBed.get(ParcelleService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
