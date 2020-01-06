import { TestBed } from '@angular/core/testing';
import { EspeceService } from './espece.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EspeceService', () => {
  let service: EspeceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EspeceService]
    });

    service = TestBed.get(EspeceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
