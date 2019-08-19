import { TestBed } from '@angular/core/testing';

import { TarefaServiceService } from './tarefa-service.service';

describe('TarefaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefaServiceService = TestBed.get(TarefaServiceService);
    expect(service).toBeTruthy();
  });
});
