import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaDeContatoComponent } from './components/lista-de-contato/lista-de-contato.component';
import {ContatoComponent} from './components/contato/contato.component';
import { CreateContatoComponent } from './components/create-contato/create-contato.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaDeContatoComponent,
    ContatoComponent,
    CreateContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
