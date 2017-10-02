import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component ({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  database = firebase.auth();
  email = '';
  password = '';
  confirmPassword = '';

  constructor(public af: AngularFireDatabase, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.email !== '' && this.password !== '' && this.confirmPassword !== '') {
      if (this.password !== this.confirmPassword) {
        alert('Password do not match');
      } else {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
          const errorMessage = error.message;
          const errorCode = error.name;
          if (errorCode === 'auth/email-already-in-use') {
            alert('A user with that email already exists');
          }
        });
        alert('Registered successfully!');
        this.router.navigate(['/login']);
      }
    } else {
      alert('Fill out all the fields.');
    }
  }

  googlePopup() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     const token = result.credential.accessToken;
     // The signed-in user info.
     const user = result.user;
     alert('Registered successfully!');
     this.navigate();
    });
    function navigate() {
      this.router.navigate(['/login']);
    }
  }
}
