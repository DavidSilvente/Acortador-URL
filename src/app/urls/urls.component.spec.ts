import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsComponent } from './urls.component';

describe('UrlsComponent', () => {
  let component: UrlsComponent;
  let fixture: ComponentFixture<UrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
