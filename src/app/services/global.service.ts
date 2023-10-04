// global.service.ts

import { Injectable } from '@angular/core';

interface ObjetoCriado {
  valor: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  public selecionarOpcao: string = '';
  public objetosCriados: ObjetoCriado[] = [];
  public todosObjetos: ObjetoCriado[] = [];
  private contadores: { [key: string]: number } = {};

  constructor() { }
  
  criarObjetoComContador(tipo: string): void {
    // Se o contador para o tipo ainda não existe, inicialize-o com 1
    if (!this.contadores[tipo]) {
      this.contadores[tipo] = 1;
    }

    // Concatena 'SP', 'SE' ou 'SG' antes do valor do contador, dependendo do tipo
    const prefixo: string = this.obterPrefixoPorTipo(tipo);
    const novoObjeto: ObjetoCriado = {
      valor: `${prefixo}${this.contadores[tipo]}`,
      tipo: tipo,
    };

    this.objetosCriados.push(novoObjeto);
    this.todosObjetos.push(novoObjeto);

    // Incrementa o contador para o tipo
    this.contadores[tipo]++;

    this.mostrarTodosObjetosNoConsole();
  }

  private obterPrefixoPorTipo(tipo: string): string {
    switch (tipo) {
      case 'prioridade':
        return 'SP';
      case 'exames':
        return 'SE';
      case 'geral':
        return 'SG';
      default:
        return '';
    }
  }

  private mostrarTodosObjetosNoConsole(): void {
    console.log('Todos os objetos:', this.todosObjetos);
  }
}
