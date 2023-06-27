export interface Product {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: string;
    image: string;
    cantidad: number;
    isAddedToCart: boolean;
    productos:Producto[];
    totalPrice: number;

    
}
export interface Producto {
    nombre: string;
    cantidad: number;
    // otras propiedades de Producto
  }

export interface Pedidos{
    id: string;
    descripcion:string;
    fecha: string;
    hora: string;
    contenido: string;
    monto:string;
    status: string;
    nombre:string;
}