import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanCapteurEditComponent } from './plan-capteur-edit.component';
import { PlanCapteurService } from '../plan-capteur.service';

describe('PlanCapteurEditComponent', () => {
  let component: PlanCapteurEditComponent;
  let fixture: ComponentFixture<PlanCapteurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanCapteurEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PlanCapteurService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCapteurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
