import { TestBed, inject } from '@angular/core/testing';

import { RoutingListenerService } from './routing-listener.service';

describe('RoutingListenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutingListenerService]
    });
  });

  it('should be created', inject([RoutingListenerService], (service: RoutingListenerService) => {
    expect(service).toBeTruthy();
  }));
});
