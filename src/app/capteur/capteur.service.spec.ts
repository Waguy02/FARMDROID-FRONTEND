import { TestBed } from '@angular/core/testing';
import { CapteurService } from './capteur.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CapteurService', () => {
  let service: CapteurService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CapteurService]
    });

    service = TestBed.get(CapteurService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
