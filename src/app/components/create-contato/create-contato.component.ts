import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Contato} from 'src/app/models/Contato'


@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter;

  novoContato:Contato = {
    nome: "",
    email:"",
    telefone: ["113", "123", "133"]
  };


  constructor() {}

  cancelar(){
    console.log("Pediu pra cancelar");
    this.onCancelarClick.emit();
  }

  track(index:number, value:string){
    return index
  }

  ngOnInit(): void {
  }

  addTelefone():void {
    this.novoContato.telefone.push("")
  }

  removeTelefone(pos:number):void {
    this.novoContato.telefone.splice(pos,1)  }
}
