import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TarefaService } from '../service/tarefa-service.service';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
  providers: [TarefaService]
})
export class TarefasComponent implements OnInit {

  tarefa = {
    titulo: '',
    descricao: ''
  };
  
  error = {
    message: ''
  };

  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit() {
  }

  salvarTarefa(tarefa: Tarefa) {
    if (!tarefa.titulo || !tarefa.descricao) {
      this.getError();
    } else {

      let novaTarefa = new Tarefa(tarefa.titulo, tarefa.descricao);

      this.tarefaService.addTarefa(novaTarefa);
      this.resetFields(tarefa);
    }
  }

  limpar(tarefa: Tarefa) {
    this.resetFields(tarefa);
  }

  resetFields(tarefa: Tarefa) {
    tarefa.titulo = '';
    tarefa.descricao = '';
    
    if (this.error.message) {
      this.error.message = '';
    }
  }

  getError() {
    let field = Object.keys(this.tarefa).filter(elem => !this.tarefa[elem])
    this.error.message = `Campos obrigatórios: ${field}`;
  }

}
