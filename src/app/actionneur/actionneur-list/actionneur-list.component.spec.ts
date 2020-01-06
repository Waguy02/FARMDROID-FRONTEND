import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionneurListComponent } from './actionneur-list.component';
import { ActionneurService } from '../actionneur.service';

describe('ActionneurListComponent', () => {
  let component: ActionneurListComponent;
  let fixture: ComponentFixture<ActionneurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionneurListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ActionneurService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionneurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
