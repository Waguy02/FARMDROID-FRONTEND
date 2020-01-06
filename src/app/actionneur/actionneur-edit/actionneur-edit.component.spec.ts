import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionneurEditComponent } from './actionneur-edit.component';
import { ActionneurService } from '../actionneur.service';

describe('ActionneurEditComponent', () => {
  let component: ActionneurEditComponent;
  let fixture: ComponentFixture<ActionneurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionneurEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ActionneurService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionneurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
