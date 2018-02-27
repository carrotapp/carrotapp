import { setTimeout } from 'timers';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseService } from '../database/database.service';
import { RoutingListenerService } from '../routing-listener.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(protected afAuth: AngularFireAuth, protected router: Router, protected ds: DatabaseService, protected routingListener: RoutingListenerService) { }

    canActivate(): Observable<boolean> {
        return Observable.from(this.afAuth.authState)
            .take(1)
            .map(state => !!state)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/login']);
                } else {
                    if (!this.ds.initialized) {
                        this.ds.initializeData();
                    }
                  
                }
            });
    }

}
