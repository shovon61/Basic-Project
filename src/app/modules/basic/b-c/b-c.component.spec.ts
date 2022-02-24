import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCComponent } from './b-c.component';

describe('BCComponent', () => {
  let component: BCComponent;
  let fixture: ComponentFixture<BCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
