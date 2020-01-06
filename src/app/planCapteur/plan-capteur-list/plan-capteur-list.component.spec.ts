import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanCapteurListComponent } from './plan-capteur-list.component';
import { PlanCapteurService } from '../plan-capteur.service';

describe('PlanCapteurListComponent', () => {
  let component: PlanCapteurListComponent;
  let fixture: ComponentFixture<PlanCapteurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanCapteurListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PlanCapteurService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCapteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
