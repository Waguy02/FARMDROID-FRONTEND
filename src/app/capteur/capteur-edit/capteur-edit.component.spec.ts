import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CapteurEditComponent } from './capteur-edit.component';
import { CapteurService } from '../capteur.service';

describe('CapteurEditComponent', () => {
  let component: CapteurEditComponent;
  let fixture: ComponentFixture<CapteurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CapteurEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CapteurService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapteurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
