import { TestBed } from '@angular/core/testing';
import { ActionneurService } from './actionneur.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ActionneurService', () => {
  let service: ActionneurService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActionneurService]
    });

    service = TestBed.get(ActionneurService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
