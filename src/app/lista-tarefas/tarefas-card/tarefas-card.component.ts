import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from 'src/app/model/tarefa';

@Component({
  selector: 'app-tarefas-card',
  templateUrl: './tarefas-card.component.html',
  styleUrls: ['./tarefas-card.component.css']
})
export class TarefasCardComponent implements OnInit {

  @Input() tarefa: Tarefa;

  constructor() { }

  ngOnInit() {
    
  }

}
