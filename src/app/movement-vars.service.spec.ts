import { TestBed } from '@angular/core/testing';

import { MovementVarsService } from './movement-vars.service';

describe('MovementVarsService', () => {
  let service: MovementVarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovementVarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
