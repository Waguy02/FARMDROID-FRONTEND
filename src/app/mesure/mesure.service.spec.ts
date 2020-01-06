import { TestBed } from '@angular/core/testing';
import { MesureService } from './mesure.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MesureService', () => {
  let service: MesureService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MesureService]
    });

    service = TestBed.get(MesureService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
