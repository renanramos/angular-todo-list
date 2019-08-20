import { Injectable, EventEmitter } from '@angular/core';
import { Tarefa } from '../model/tarefa';

@Injectable()
export class TarefaService {

  emitirNovaTarefa = new EventEmitter();
  static criadoNovaTarefa = new EventEmitter();

  constructor() { }
  
  addTarefa(tarefa: Tarefa){
    TarefaService.criadoNovaTarefa.emit(tarefa);
  }
}
