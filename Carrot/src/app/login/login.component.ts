import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  database = firebase.auth();
  email = '';
  password = '';

  constructor(private af: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    
  }

  signIn() {

    console.log(this.email);
    console.log(this.password);


    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function (res) {
      console.log("Success");
      alert("Success");
    }).catch(function (error) {
       console.log("Error");
       alert("Error with email");
    });
  }

  googlePopup() {
    console.log(this.email);
    console.log(this.password);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log("Success");
      
      alert("Logged in");    

      this.router.run(
        () =>  this.router.navigate(['/register'])
      );

    }).catch(function (result) {
      console.log("Error");
    });
  }



isLogged: boolean;
fieldType:string;
fieldHolder:string;
next:string;
input_value:string;

 user:object = {
 user_email:'',
 user_password:'',
 }
 isFound:boolean;
submit(){
  
if(this.isFound == true){
this.fieldType = 'password';
this.fieldHolder= 'Password';
this.next='Login'
this.input_value ='';

  } else{
alert(' User Email does not exist')
  }
}

/* End */


/*
  constructor() {
 this.fieldType ='email';;
 this.fieldHolder= 'Email';
 this.next='Next'
  }
  */

  ngOnInit() {
    
  }

}
