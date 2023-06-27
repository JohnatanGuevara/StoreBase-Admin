import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { Pedidos, Product, Producto } from '../models/models';
import { PedidosService } from '../Services/pedidos.service';

@Component({
  selector: 'app-detallespedido',
  templateUrl: './detallespedido.component.html',
  styleUrls: ['./detallespedido.component.css']
})
export class DetallespedidoComponent {

  @Output() cerrar: EventEmitter<void> = new EventEmitter<void>();

  cerrarDetalles() {
    this.cerrar.emit();
  }

  

  products: Product []= [{
    id: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: '',
    image: '',
    cantidad: 0,
    isAddedToCart: true,
    productos:[{nombre:'', cantidad:0}],
    totalPrice: 0,
  }];

  producto: Producto[]=[]

  @Input() selectedPedido!: Product;
  @Input() pedido: any;

  selectPedido(pedido: Product) {
    this.selectedPedido = pedido;
  }


  constructor( private pedidosService: PedidosService ) {}

  
  ngOnInit() {
   
    this.loadProducts();
  }

  loadProducts() {
    this.pedidosService.getProducts().subscribe(products => {
      this.products = products;
      console.log(products)
     
    });
  }

  
}