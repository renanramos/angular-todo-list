import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  @Input() tarefa: any;

  constructor() { }

  ngOnInit() {
  }

}
