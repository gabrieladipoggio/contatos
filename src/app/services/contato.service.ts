import { Injectable } from '@angular/core';
import {Contato} from '../../app/models/Contato'

  const BASE_DE_CONTATOS:Contato[] = [
    {
      nome: "Teste 1",

      email:"teste@teste.com",
      telefone:["123413", "1231234"]
    },
    {
      nome: "Teste 2",
      email:"teste@teste.com",
      telefone:["123413", "1231234"]
    },
    {
      nome: "Teste 3",
      email:"teste@teste.com",
      telefone:["123413", "1231234"]
    },{
      nome: "Teste 4",
      email:"teste@teste.com",
      telefone:["123413", "1231234"]
    },
    {
      nome: "Teste 5",
      email:"teste@teste.com",
      telefone:["123413", "1231234"]
    },
    {
      nome: "Teste 6",
      email:"teste@teste.com",
      telefone:["123413", "1231234"]
    },{
      nome: "Teste 7",
      email:"teste@teste.com",
      telefone:["123413", "1231234"]
    }
  ]


@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  constructor() { }

  getContatos():Contato[]{
    return BASE_DE_CONTATOS
  }

  addContatos(c:Contato):void{
    BASE_DE_CONTATOS.push(c)
  }

}
