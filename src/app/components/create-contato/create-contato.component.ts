import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {Contato} from 'src/app/models/Contato'
import { ContatoService } from 'src/app/services/contato.service';

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
    telefone: ["113"]
  };

  cs:ContatoService = new ContatoService();

  constructor() {}

  cancelar(){
    console.log("Pediu pra cancelar");
    this.onCancelarClick.emit();
  }

  track(index:number, value:any){
    return index;
  }


  ngOnInit(): void {
  }

  addTelefone():void {
    this.novoContato.telefone.push("")
  }

  removeTelefone(pos:number):void {
    this.novoContato.telefone.splice(pos,1)
  }

  salvar(){
    this.cs.addContatos(this.novoContato);

    // Fechar o modal
   // this.onCancelarClick.emit();

   // Limpar os campos
   this.novoContato={
     nome: "",
     email:"",
     telefone:[""]
   }
  }
}
