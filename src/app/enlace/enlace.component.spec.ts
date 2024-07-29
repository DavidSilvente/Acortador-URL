import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceComponent } from './enlace.component';

describe('EnlaceComponent', () => {
  let component: EnlaceComponent;
  let fixture: ComponentFixture<EnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
