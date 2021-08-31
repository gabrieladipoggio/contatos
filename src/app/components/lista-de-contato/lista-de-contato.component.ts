import { Component, OnInit } from '@angular/core';
import {Contato} from '../../models/Contato'
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-lista-de-contato',
  templateUrl: './lista-de-contato.component.html',
  styleUrls: ['./lista-de-contato.component.css']
})
export class ListaDeContatoComponent implements OnInit {

  public contatos:Contato[];
  private cs:ContatoService = new ContatoService();

  constructor() {
    this.contatos = this.cs.getContatos();

  }

  ngOnInit(): void {
  }

}
