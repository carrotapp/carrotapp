<<<<<<< HEAD
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Dev-Lihle&Ernst
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})

export class RewardsComponent implements OnInit {
  data: FirebaseListObservable<any[]>;
  flag = true;

<<<<<<< HEAD
  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router) {
    this.data = afDB.list('/Rewards');
=======

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router) {
    
   

    try {
      if(this.afAuth.auth.currentUser.uid === null){
        console.log("null");
      }else{
        //console.log(this.afAuth.auth.currentUser.uid);
        this.data = afDB.list('/Rewards');   
      }
    } catch (error) {
      console.log(error);
      if(error = "TypeError: Cannot read property 'uid' of null"){
        alert("You are not Logged in");
        this.router.navigate(['/']);
      }
    }
    
>>>>>>> Dev-Lihle&Ernst
  }

  ngOnInit() {
  }

  addRewards(rewardName: String) {
    this.flag = true;
    const users: FirebaseListObservable<any[]> = this.afDB.list('/User Rewards');
    users.forEach(element => {
      const uid: String = this.afAuth.auth.currentUser.uid;
      for (let i = 0; i < element.length; i++) {
        if (element[i].user === uid) {
          const rewards: FirebaseListObservable<any[]> = this.afDB.list('/User Rewards/' + element[i].$key + '/Rewards');
          rewards.forEach(rewardsElement => {
            console.log(this.flag);
            if (this.flag) {
              for (let j = 0; j < rewardsElement.length; j++) {
                if (rewardsElement[j].$key === rewardName) {
                  this.flag = false;
                  break;
                }
              }
            }
            if (this.flag) {
              const userRewards = this.afDB.database.ref('/User Rewards/' + element[i].$key + '/Rewards/' + rewardName);
              userRewards.set(0);
              this.flag = false;
              alert('Reward added!');
              this.router.navigate(['/register']);
            } else {
              alert('You already have that reward');
            }
          });
        }
      }
    });
  }
}
