import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosEnLineaComponent } from './Pedidos/pedidos-en-linea/pedidos-en-linea.component';
import { PedidosService } from './Services/pedidos.service';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { DetallespedidoComponent } from './detallespedido/detallespedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosEnLineaComponent,
    DetallespedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule
  ],
  providers: [PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
