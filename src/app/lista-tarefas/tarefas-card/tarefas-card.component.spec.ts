import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasCardComponent } from './tarefas-card.component';

describe('TarefasCardComponent', () => {
  let component: TarefasCardComponent;
  let fixture: ComponentFixture<TarefasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
