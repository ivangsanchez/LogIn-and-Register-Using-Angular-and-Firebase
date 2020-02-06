import { TestBed } from '@angular/core/testing';

import { UserDataApiService } from './user-data-api.service';

describe('UserDataApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataApiService = TestBed.get(UserDataApiService);
    expect(service).toBeTruthy();
  });
});
