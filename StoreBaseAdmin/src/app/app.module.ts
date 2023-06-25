import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosEnLineaComponent } from './Pedidos/pedidos-en-linea/pedidos-en-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosEnLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
