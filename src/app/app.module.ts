import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaDeContatoComponent } from './components/lista-de-contato/lista-de-contato.component';
import {ContatoComponent} from './components/contato/contato.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaDeContatoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
