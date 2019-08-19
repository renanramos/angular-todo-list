import { Component, OnInit, OnChanges } from '@angular/core';
import { TarefaService } from '../service/tarefa-service.service';

@Component({
  selector: 'lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
  providers: [TarefaService]
})
export class ListaTarefasComponent implements OnInit{
  
  private tarefas: any = [];

  constructor() { }

  ngOnInit() {        
    TarefaService.criadoNovaTarefa.subscribe(tarefa => this.tarefas.push(tarefa));
  }
 
}
