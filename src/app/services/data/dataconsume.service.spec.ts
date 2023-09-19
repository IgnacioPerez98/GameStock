import { TestBed } from '@angular/core/testing';

import { DataconsumeService } from './dataconsume.service';

describe('DataconsumeService', () => {
  let service: DataconsumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataconsumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
