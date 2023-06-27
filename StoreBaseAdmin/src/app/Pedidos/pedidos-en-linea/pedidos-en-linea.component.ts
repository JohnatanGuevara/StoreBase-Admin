import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/models';
import { PedidosService } from 'src/app/Services/pedidos.service';
import { Pedidos, Producto } from 'src/app/models/models';

@Component({
  selector: 'app-pedidos-en-linea',
  templateUrl: './pedidos-en-linea.component.html',
  styleUrls: ['./pedidos-en-linea.component.css','./nicepage.css']
})
export class PedidosEnLineaComponent implements OnInit {
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

  selectedPedido: Product| null = null;
  mostrarDetalles: boolean = false;

  selectPedido(pedido: any) {
    this.selectedPedido = pedido;
    this.mostrarDetalles = true;
  }
  cerrarDetalles() {
    this.mostrarDetalles = false;
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