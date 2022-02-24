import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFComponent } from './n-f.component';

describe('NFComponent', () => {
  let component: NFComponent;
  let fixture: ComponentFixture<NFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
