import { DatabaseService } from '../services/database/database.service';
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
  data: FirebaseListObservable<any[]>;
  myItems: any[];
  index = 0;

  rewards: Rewards[] = [];

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router, private ds: DatabaseService) {

    try {
      if (afAuth.auth.currentUser.uid === null) {
        console.log('null');
      } else {
        this.userRewards = ds.getUsersRewards();

        this.userRewards.forEach(element => {
          const id: String = this.afAuth.auth.currentUser.uid;
          for (let i = 0; i < element.length; i++) {
            console.log(element[i].$key);
            console.log(element[i].$value);
            this.data = afDB.list('/Rewards/' + element[i].$key);
            this.data.forEach(dataElement => {
              this.myItems = dataElement;

              this.rewards.push(
                new Rewards(this.myItems)
              );
              console.log(this.rewards);
            });
        }
        });
      }
    } catch (error) {
      if (error = 'TypeError: Cannot read property "uid" of null') {
        alert('You are not logged in');
        this.router.navigate(['/']);
      }
    }
  }

<<<<<<< HEAD
  navigate() {
    this.router.navigate(['/info']);
=======
  ngOnInit() {
>>>>>>> master
  }

}


export class Rewards {
  Currency;
  Image;
  RewardName;
  Name;
  Ratio;

  constructor(array) {
    this.Currency = array[0].$value;
    this.Image = array[1].$value;
    this.RewardName = array[2].$value;
    this.Name = array[3].$value;
    this.Ratio = array[4].$value;
  }

}

