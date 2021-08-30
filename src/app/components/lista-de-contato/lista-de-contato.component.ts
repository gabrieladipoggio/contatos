import { Component, OnInit } from '@angular/core';
import {Contato} from '../../models/Contato'

@Component({
  selector: 'app-lista-de-contato',
  templateUrl: './lista-de-contato.component.html',
  styleUrls: ['./lista-de-contato.component.css']
})
export class ListaDeContatoComponent implements OnInit {

  contatos:Contato[] = [
    {
      nome: "Teste",
      email:"teste@teste.com",
      tel:["123413", "1231234"]
    },
    {
      nome: "Teste",
      email:"teste@teste.com",
      tel:["123413", "1231234"]
    },
    {
      nome: "Teste",
      email:"teste@teste.com",
      tel:["123413", "1231234"]
    },{
      nome: "Teste",
      email:"teste@teste.com",
      tel:["123413", "1231234"]
    },
    {
      nome: "Teste",
      email:"teste@teste.com",
      tel:["123413", "1231234"]
    },
    {
      nome: "Teste",
      email:"teste@teste.com",
      tel:["123413", "1231234"]
    },{
      nome: "Teste",
      email:"teste@teste.com",
      tel:["123413", "1231234"]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
