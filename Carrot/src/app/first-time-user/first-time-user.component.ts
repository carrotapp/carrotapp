import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-first-time-user',
  templateUrl: './first-time-user.component.html',
  styleUrls: ['./first-time-user.component.css']
})
export class FirstTimeUserComponent implements OnInit {
  data: FirebaseListObservable<any[]>;

  constructor(af: AngularFireDatabase) {
    this.data = af.list('/Rewards');
  }

  ngOnInit() {
  }
}
