import { TestBed } from '@angular/core/testing';

import { InfoListHomeService } from './info-list-home.service';

describe('InfoListHomeService', () => {
  let service: InfoListHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoListHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
