import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly chave:string = "CONTATOS";

  constructor() { }

  getContatos():Contato[] {
    let dados = window.localStorage.getItem(this.chave);

    if(dados){
      let contatosCarregados:Contato[] = JSON.parse(dados);
      return contatosCarregados;
    } else {
      window.localStorage.setItem(this.chave, "[]");
      return [];
    }
   }


  addContato(c:Contato): void {
    let contatos = this.getContatos();
    contatos.push(c);
    window.localStorage.setItem(this.chave, JSON.stringify(contatos));
  }

}
