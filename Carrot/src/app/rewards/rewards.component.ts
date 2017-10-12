import { Component, OnInit } from '@angular/core';
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
