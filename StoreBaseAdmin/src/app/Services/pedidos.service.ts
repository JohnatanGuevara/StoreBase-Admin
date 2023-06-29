import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Product, Producto } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PedidosService { private pagosCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;


  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {
    this.pagosCollection = this.firestore.collection<Product>('pagos');
    this.products = this.pagosCollection.valueChanges();
  }

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  guardarProducto(product: Product): Promise<DocumentReference<unknown>> {
    
    return this.firestore.collection('productos').add(product)
      .then(docRef => {
        const productoId = docRef.id;
        return docRef.update({ id: productoId })
          .then(() => {
            console.log("Pago Registrado con el id:", productoId);
            return docRef; // Devolver el docRef
          });
      });
  }
}