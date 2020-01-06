import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ParcelleEditComponent } from './parcelle-edit.component';
import { ParcelleService } from '../parcelle.service';

describe('ParcelleEditComponent', () => {
  let component: ParcelleEditComponent;
  let fixture: ComponentFixture<ParcelleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelleEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ParcelleService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
