import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.email !== '' && this.password !== '' && this.confirmPassword !== '') {
      if (this.password.length >= 8) {
        if (this.password !== this.confirmPassword) {
          alert('Password do not match');
        } else {
          this.signIn();
        }

      } else {
        alert('Error: Minimum password length is 8');
        this.password = '';
        this.confirmPassword = '';
      }

    } else {
      alert('Fill out all the fields.');
    }
  }

  googlePopup() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then(
      (success) => {
        this.pushToDB(this.afAuth.auth.currentUser.uid);
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
    alert('Registered successfully!');
    this.router.navigate(['/rewards']);
  }

  signIn() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(
      (success) => {
        this.pushToDB(this.afAuth.auth.currentUser.uid);
      }).catch(
      (err) => {
        if (err.message === 'The email address is already in use by another account.') {
          alert(err.message);
        } else {
          console.log('Error: ' + err.message);
        }
      });
  }
}
