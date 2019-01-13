import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiekelasComponent } from './piekelas.component';

describe('PiekelasComponent', () => {
  let component: PiekelasComponent;
  let fixture: ComponentFixture<PiekelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiekelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiekelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
