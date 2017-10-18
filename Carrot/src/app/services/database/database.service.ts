import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class DatabaseService {
    userRewards: FirebaseListObservable<any[]>;
    rewards: FirebaseListObservable<any[]>;
    rewardsOfUser: FirebaseListObservable<any[]>;

    constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, public router: Router) {
        this.userRewards = this.afDB.list('/User Rewards');
    }

    signIn(email, password) {
        if (email.includes('@gmail.com')) {
            this.googlePopup();
        } else {
            this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
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
                this.userRewards.forEach(element => {
                    const uid: String = this.afAuth.auth.currentUser.uid;
                    let flag: Boolean;
                    for (let i = 0; i < element.length; i++) {
                        if (element[i].user === uid) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag === undefined) {
                        this.pushToUserRewards(this.afAuth.auth.currentUser.uid);
                    } else {
                        this.router.navigate(['/dashboard']);
                    }
                });
            }).catch(
            (err) => {
                console.log('Error: ' + err);
            });
    }

    pushToUserRewards(uid: any) {
        const userRewards = this.afDB.database.ref('/User Rewards').push();
        userRewards.set({
            user: uid
        });
        alert('Registered successfully!');
        this.router.navigate(['/rewards']);
    }

    signUp(email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
            (success) => {
                this.pushToUserRewards(this.afAuth.auth.currentUser.uid);
            }).catch(
            (err) => {
                if (err.message === 'The email address is already in use by another account.') {
                    alert(err.message);
                } else {
                    console.log('Error: ' + err.message);
                }
            });
    }

    checkLoggedIn() {
        try {
            if (this.afAuth.auth.currentUser.uid === null) {
              console.log('null');
            } else {
              this.rewards = this.afDB.list('/Rewards');
              return true;
            }
          } catch (error) {
            if (error = 'TypeError: Cannot read property "uid" of null') {
              alert('You are not logged in');
              this.router.navigate(['/']);
            }
          }
    }

    addRewards(key: String) {
        let flag = true;
        const users: FirebaseListObservable<any[]> = this.afDB.list('/User Rewards');
        users.forEach(element => {
          const uid: String = this.afAuth.auth.currentUser.uid;
          for (let i = 0; i < element.length; i++) {
            if (element[i].user === uid) {
              const rewards: FirebaseListObservable<any[]> = this.afDB.list('/User Rewards/' + element[i].$key + '/Rewards');
              rewards.forEach(rewardsElement => {
                if (flag) {
                  for (let j = 0; j < rewardsElement.length; j++) {
                    if (rewardsElement[j].$key === key) {
                      flag = false;
                      break;
                    }
                  }
                }
                if (flag) {
                  const userRewards = this.afDB.database.ref('/User Rewards/' + element[i].$key + '/Rewards/' + key);
                  userRewards.set(0);
                  flag = undefined;
                  alert('Reward added!');
                } else if (flag === false) {
                  flag = undefined;
                  alert('You already have that reward');
                }
              });
            }
          }
        });
      }

      getUsersRewards() {
        const data: FirebaseListObservable<any[]> = this.afDB.list('/User Rewards');
        let key;
        const uid: String = this.afAuth.auth.currentUser.uid;
        data.forEach(element => {
          for (let i = 0; i < element.length; i++) {
            if (element[i].user === uid) {
              key = element[i].$key;
              break;
            }
          }
        });
        this.rewardsOfUser = this.afDB.list('/User Rewards/' + key + '/Rewards');
        return this.rewardsOfUser;
      }

      getRewards() {
          return this.rewards;
      }
}
