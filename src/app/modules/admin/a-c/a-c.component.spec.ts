import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACComponent } from './a-c.component';

describe('ACComponent', () => {
  let component: ACComponent;
  let fixture: ComponentFixture<ACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
