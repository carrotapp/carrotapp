import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRewards: FirebaseListObservable<any[]>;

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router) {
    try {
      if (afAuth.auth.currentUser.uid === null) {
        console.log('null');
      } else {
        const data: FirebaseListObservable<any[]> = afDB.list('/User Rewards');
        let key;
        const uid: String = afAuth.auth.currentUser.uid;
        data.forEach(element => {
          for (let i = 0; i < element.length; i++) {
            if (element[i].user === uid) {
              key = element[i].$key;
              break;
            }
          }
        });
        this.userRewards = afDB.list('/User Rewards/' + key + '/Rewards');
      }
    } catch (error) {
      if (error = 'TypeError: Cannot read property "uid" of null') {
        alert('You are not logged in');
        this.router.navigate(['/']);
      }
    }
  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/rewards']);
  }

}
