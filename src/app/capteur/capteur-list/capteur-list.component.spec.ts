import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CapteurListComponent } from './capteur-list.component';
import { CapteurService } from '../capteur.service';

describe('CapteurListComponent', () => {
  let component: CapteurListComponent;
  let fixture: ComponentFixture<CapteurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CapteurListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CapteurService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
