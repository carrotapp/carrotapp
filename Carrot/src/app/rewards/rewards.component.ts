import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})

export class RewardsComponent implements OnInit {
  data: FirebaseListObservable<any[]>;

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.data = afDB.list('/Rewards');
  }

  ngOnInit() {
  }

  addRewards(rewardName: String) {
    let key = '';
    const users: FirebaseListObservable<any[]> = this.afDB.list('/User Rewards');
    users.forEach(element => {
      const uid: String = this.afAuth.auth.currentUser.uid;
      for (let i = 0; i < element.length; i++) {
        if (element[i].user === uid) {
          key = element[i].$key;
          const userRewards = this.afDB.database.ref('/User Rewards/' + key + '/Rewards/' + rewardName);
          userRewards.set(0);
          break;
        }
      }
    });
    alert('Reward added!');
  }

}
