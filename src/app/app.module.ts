import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatCardModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ListaTarefasComponent } from './tarefas/lista-tarefas/lista-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
