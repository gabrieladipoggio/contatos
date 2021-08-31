import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onAddContato:EventEmitter<null> = new EventEmitter();

  @Output() onRemoveModal:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  mostrandoModalClick() {
    console.log("Click");
    this.onAddContato.emit();
  }



}
