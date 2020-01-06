import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ParcelleListComponent } from './parcelle-list.component';
import { ParcelleService } from '../parcelle.service';

describe('ParcelleListComponent', () => {
  let component: ParcelleListComponent;
  let fixture: ComponentFixture<ParcelleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelleListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ParcelleService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
