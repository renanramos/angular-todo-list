import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  @Output() adicionaTarefa = new EventEmitter<any>();

  tarefaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.tarefaForm = this.formBuilder.group({      
      titulo: ['', Validators.required ],
      descricao: ['', Validators.required]
    })
  }

  get tarefa(){
    return this.tarefaForm.controls;
  }

  salvarTarefa(tarefa){
    
    let newTarefa = {
      titulo : tarefa.titulo.value,
      descricao : tarefa.descricao.value
    }

    this.adicionaTarefa.emit(newTarefa);
    
  }

}
