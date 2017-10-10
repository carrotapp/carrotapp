import { TestBed, inject } from '@angular/core/testing';

import { NavigationTogglesService } from './navigation-toggles.service';

describe('NavigationTogglesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationTogglesService]
    });
  });

  it('should be created', inject([NavigationTogglesService], (service: NavigationTogglesService) => {
    expect(service).toBeTruthy();
  }));
});
