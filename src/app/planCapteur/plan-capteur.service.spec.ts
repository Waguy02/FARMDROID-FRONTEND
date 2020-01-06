import { TestBed } from '@angular/core/testing';
import { PlanCapteurService } from './plan-capteur.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PlanCapteurService', () => {
  let service: PlanCapteurService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlanCapteurService]
    });

    service = TestBed.get(PlanCapteurService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
