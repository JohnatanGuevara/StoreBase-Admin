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
import { Router, RouterModule, Routes, ExtraOptions} from '@angular/router';
import { AgregaProductoComponent } from './agrega-producto/agrega-producto.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';

const  routes: Routes = [

  {path:'', component: PedidosEnLineaComponent},
 
  { path: 'detallespedido', component: DetallespedidoComponent },
  {path:'agregaproducto', component: AgregaProductoComponent},
  {path:'pedidos', component: PedidosEnLineaComponent}
  


 
  
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    PedidosEnLineaComponent,
    DetallespedidoComponent,
    AgregaProductoComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule, RouterModule.forRoot(routes), FormsModule
  ],
  exports:[RouterModule, FormsModule],
  providers: [PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
