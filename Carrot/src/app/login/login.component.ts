import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  data: FirebaseListObservable<any[]>;

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router) {
  }

  signIn() {
    if (this.email.includes('@gmail.com')) {
      this.googlePopup();
    } else {
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
        (success) => {
          this.router.navigate(['/rewards']);
        }).catch(
        (err) => {
          alert('Error: ' + err.message);
        });
    }
  }

  googlePopup() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then(
      (success) => {
        this.data.forEach(element => {
          const uid: String = this.afAuth.auth.currentUser.uid;
          let flag: Boolean;
          for (let i = 0; i < element.length; i++) {
            if (element[i].user === uid) {
              flag = false;
              break;
            }
          }
          if (flag === undefined) {
            this.pushToDB(this.afAuth.auth.currentUser.uid);
          } else {
            this.router.navigate(['/rewards']);
          }
        });
      }).catch(
      (err) => {
        console.log('Error: ' + err);
      });
  }

  pushToDB(uid: any) {
    const userRewards = this.afDB.database.ref('/User Rewards').push();
    userRewards.set({
      user: uid
    });
    this.router.navigate(['/rewards']);
  }

  ngOnInit() {
    this.data = this.afDB.list('/User Rewards');
  }

}
