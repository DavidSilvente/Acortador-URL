import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEnlaceAcortadoComponent } from './pagina-enlace-acortado.component';

describe('PaginaEnlaceAcortadoComponent', () => {
  let component: PaginaEnlaceAcortadoComponent;
  let fixture: ComponentFixture<PaginaEnlaceAcortadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaEnlaceAcortadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaEnlaceAcortadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
