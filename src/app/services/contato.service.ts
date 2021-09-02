import { Injectable } from '@angular/core';
import {Contato} from '../../app/models/Contato'

const BASE_DE_CONTATOS:Contato[] = []

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private baseDeContatos:Contato[];
  private chave:string = "CONTATOS"


  constructor() {
    let dados = window.localStorage.getItem(this.chave);
    if(dados){
      this.baseDeContatos = JSON.parse(dados)
    } else {
      window.localStorage.setItem(this.chave, "[]");
      this.baseDeContatos = []
    }
   }

  getContatos():Contato[]{
    return this.baseDeContatos
  }

  addContatos(c:Contato):void{
    this.baseDeContatos.push(c);
    window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos
    ))
  }

}
