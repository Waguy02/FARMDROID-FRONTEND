import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EspeceEditComponent } from './espece-edit.component';
import { EspeceService } from '../espece.service';

describe('EspeceEditComponent', () => {
  let component: EspeceEditComponent;
  let fixture: ComponentFixture<EspeceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspeceEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [EspeceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
