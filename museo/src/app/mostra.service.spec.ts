import { TestBed } from '@angular/core/testing';

import { MostraService } from './mostra.service';

describe('MostraService', () => {
  let service: MostraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
