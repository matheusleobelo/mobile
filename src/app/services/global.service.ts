import { Injectable } from '@angular/core';

interface ObjetoCriado {
  valor: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public selecionarOpcao: string = '';
  public objetosCriados: ObjetoCriado[] = [];
  private contador: number = 0;
  public todosObjetos: ObjetoCriado[] = [];

  constructor() { }
  
  criarObjetoComContador(tipo: string): void {
    this.contador++;
    const novoObjeto: ObjetoCriado = {
      valor: this.contador.toString(),
      tipo: tipo,
    };
    this.objetosCriados.push(novoObjeto);
    this.todosObjetos.push(novoObjeto);
    this.mostrarTodosObjetosNoConsole();
  }

  private mostrarTodosObjetosNoConsole(): void {
    console.log('Todos os objetos:', this.todosObjetos);
  }
}
