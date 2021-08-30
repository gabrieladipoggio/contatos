import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeContatoComponent } from './lista-de-contato.component';

describe('ListaDeContatoComponent', () => {
  let component: ListaDeContatoComponent;
  let fixture: ComponentFixture<ListaDeContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
