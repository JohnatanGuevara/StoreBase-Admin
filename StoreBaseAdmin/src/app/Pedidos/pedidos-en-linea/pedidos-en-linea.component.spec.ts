import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEnLineaComponent } from './pedidos-en-linea.component';

describe('PedidosEnLineaComponent', () => {
  let component: PedidosEnLineaComponent;
  let fixture: ComponentFixture<PedidosEnLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosEnLineaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
