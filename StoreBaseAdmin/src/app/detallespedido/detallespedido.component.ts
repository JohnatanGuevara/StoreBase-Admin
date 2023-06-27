import { Component } from '@angular/core';
import { Pedidos } from '../models/models';

@Component({
  selector: 'app-detallespedido',
  templateUrl: './detallespedido.component.html',
  styleUrls: ['./detallespedido.component.css']
})
export class DetallespedidoComponent {

  selectedPedido: Pedidos | null = null;
  pedido!: Pedidos;

}
