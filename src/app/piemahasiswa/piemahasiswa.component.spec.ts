import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiemahasiswaComponent } from './piemahasiswa.component';

describe('PiemahasiswaComponent', () => {
  let component: PiemahasiswaComponent;
  let fixture: ComponentFixture<PiemahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiemahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiemahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
