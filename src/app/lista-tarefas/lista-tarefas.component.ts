import { Component, OnInit, OnChanges } from '@angular/core';
import { TarefaService } from '../service/tarefa-service.service';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
  providers: [TarefaService]
})
export class ListaTarefasComponent implements OnInit{
  
  tarefas: Array<Tarefa> = [];

  constructor() { }

  ngOnInit() {        
    TarefaService.criadoNovaTarefa.subscribe(tarefa => this.tarefas.push(tarefa));
  }
 
  excluiTarefa(event: any){
    this.tarefas.splice(this.tarefas.indexOf(event), 1);
  }

}
