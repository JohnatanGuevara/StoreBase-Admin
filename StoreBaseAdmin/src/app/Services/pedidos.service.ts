import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Product } from '../models/models';

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

}