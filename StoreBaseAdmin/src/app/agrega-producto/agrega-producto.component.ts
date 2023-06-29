import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models';
import { PedidosService } from '../Services/pedidos.service';
import { DocumentReference } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-agrega-producto',
  templateUrl: './agrega-producto.component.html',
  styleUrls: ['./agrega-producto.component.css','./nicepage.css']
})
export class AgregaProductoComponent {

  product: Product = {
    id: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: '',
    image: '',
    cantidad: 0,
    isAddedToCart: false,
    productos:[],
    totalPrice: 0,
    metodoPago:'',
    nombrePagador:'',
    cedulaPagador:'',
    referencia:'',
    numeroTelefono:'',
    
  };

  ngOnInit(){
    
    
  }

  constructor(private pedidosService: PedidosService){}

  guardarProducto(){

    const product = this.product
   
    

    this.pedidosService.guardarProducto(product)
    .then(() => {
      console.log("Producto Guardado")
     
        
       
      // Restablecer valores o realizar acciones adicionales después de guardar el pago
    })
    .catch(error => {
      console.error('Error al guardar el producto', error);
      // Manejar el error adecuadamente
    });
}

}
