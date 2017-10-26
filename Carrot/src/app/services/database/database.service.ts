import { Rewards } from './../../dashboard/Rewards';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class DatabaseService {
    userRewards: Observable<any[]>;
    rewards: Observable<any[]>;
    rewardsOfUser: Observable<any[]>;
    data: Observable<any[]>;
    rewardsArray: Rewards[] = [];
    myItems: any[];

    constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, public router: Router) {
        this.userRewards = afDB.list('/User Rewards').valueChanges();
        this.rewards = afDB.list('/Rewards').valueChanges();
    }

    signIn(email, password) {
        if (email.includes('@gmail.com')) {
            this.googlePopup();
        } else {
            this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
                (success) => {
                    this.router.navigate(['/main']);
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
                        this.router.navigate(['/main']);
                    }
                });
            }).catch(
            (err) => {
                console.log('Error: ' + err);
            });
    }

    pushToUserRewards(uid: any) {
        this.afDB.list('/User Rewards').push({
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
        const users: Observable<any[]> = this.afDB.list('/User Rewards').valueChanges();
        users.forEach(element => {
            const uid: String = this.afAuth.auth.currentUser.uid;
            for (let i = 0; i < element.length; i++) {
                if (element[i].user === uid) {
                    const rewards: Observable<any[]> = this.afDB.list('/User Rewards/' + element[i].$key + '/Rewards').valueChanges();
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
                            this.afDB.list('/User Rewards/' + element[i].$key + '/Rewards/' + key).push(0);
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

    getRewardsArray() {
        this.userRewards = this.getUsersRewards();
        this.userRewards.forEach(element => {
            const id: String = this.afAuth.auth.currentUser.uid;
            for (let i = 0; i < element.length; i++) {
                this.data = this.afDB.list('/Rewards/' + element[i].$key).valueChanges();
                this.data.forEach(dataElement => {
                    this.myItems = dataElement;
                    this.rewardsArray.push(
                        new Rewards(this.myItems, element[i].$value)
                    );
                    console.log(this.rewardsArray);
                });
            }
        });
        return this.rewardsArray;
    }

    getUsersRewards() {
        let key;
        const uid: String = this.afAuth.auth.currentUser.uid;
        this.userRewards.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                if (element[i].user === uid) {
                    key = element[i].$key;
                    break;
                }
            }
        });
        this.rewardsOfUser = this.afDB.list('/User Rewards/' + key + '/Rewards').valueChanges();
        return this.rewardsOfUser;
    }

    getRewards() {
        return this.rewards;
    }

    getRewardsData(key) {
        return this.afDB.list('/Rewards/' + key);
    }

    getUID() {
        return this.afAuth.auth.currentUser.uid;
    }
}
