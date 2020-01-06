import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EspeceListComponent } from './espece-list.component';
import { EspeceService } from '../espece.service';

describe('EspeceListComponent', () => {
  let component: EspeceListComponent;
  let fixture: ComponentFixture<EspeceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspeceListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [EspeceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
