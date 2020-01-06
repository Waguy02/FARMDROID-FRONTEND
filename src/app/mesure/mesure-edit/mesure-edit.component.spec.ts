import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MesureEditComponent } from './mesure-edit.component';
import { MesureService } from '../mesure.service';

describe('MesureEditComponent', () => {
  let component: MesureEditComponent;
  let fixture: ComponentFixture<MesureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MesureEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [MesureService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
