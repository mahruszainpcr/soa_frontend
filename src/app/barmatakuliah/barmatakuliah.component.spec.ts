import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarmatakuliahComponent } from './barmatakuliah.component';

describe('BarmatakuliahComponent', () => {
  let component: BarmatakuliahComponent;
  let fixture: ComponentFixture<BarmatakuliahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarmatakuliahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarmatakuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
