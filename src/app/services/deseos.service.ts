import { Injectable, OnInit } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class DeseosService {
  listas: Lista[] = [];
  constructor() {
    this.cargarStorage();
  }

  crearLista(titulo: string) {
    const newLista = new Lista(titulo);
    this.listas.push(newLista);
    this.guardarStorage();
  }
  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  cargarStorage() {
    const listas = localStorage.getItem('data');
    if (listas !== null) {
      this.listas = JSON.parse(listas);
    }
  }
}
