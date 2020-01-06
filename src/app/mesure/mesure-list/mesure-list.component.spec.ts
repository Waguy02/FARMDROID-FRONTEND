import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MesureListComponent } from './mesure-list.component';
import { MesureService } from '../mesure.service';

describe('MesureListComponent', () => {
  let component: MesureListComponent;
  let fixture: ComponentFixture<MesureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MesureListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [MesureService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
