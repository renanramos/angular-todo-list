import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tarefas: any[] = [];

  adicionaNovaTarefa(tarefa: any){
    this.tarefas.push(tarefa)
    console.log(this.tarefas)
  }

}
