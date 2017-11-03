import { Rewards } from './../../dashboard/Rewards';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class DatabaseService {
    userRewardsRef: AngularFireList<any>;
    userRewards: Observable<any[]>;
    rewards: Observable<any[]>;
    rewardsOfUser: Observable<any[]>;
    rewardsArray: Rewards[] = [];
    photoUrl: any;

    constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, public router: Router) {
        this.userRewardsRef = afDB.list('/User Rewards');
        this.rewards = afDB.list('/Rewards').snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }

    signIn(email, password) {
        if (email.includes('@gmail.com')) {
            this.googlePopup();
        } else {
            this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
                (success) => {
                    this.photoUrl = this.afAuth.auth.currentUser.photoURL;
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
        this.userRewards = this.userRewardsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
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
                        this.pushToUserRewards(this.afAuth.auth.currentUser.uid, this.afAuth.auth.currentUser.displayName);
                    } else {
                        this.photoUrl = this.afAuth.auth.currentUser.photoURL;
                        this.router.navigate(['/main']);
                    }
                });
            }).catch(
            (err) => {
                console.log(err.message);
            });
    }

    pushToUserRewards(uid: any, uName) {
        this.afDB.list('/User Rewards/').push({
            user: uid,
            username: uName
        });
        alert('Registered successfully!');
        this.photoUrl = this.afAuth.auth.currentUser.photoURL;
        this.router.navigate(['/rewards']);
    }

    signUp(email, password, username) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
            (success) => {
                this.pushToUserRewards(this.afAuth.auth.currentUser.uid, username);
            }).catch(
            (err) => {
                if (err.message === 'The email address is already in use by another account.') {
                    alert(err.message);
                } else {
                    console.log(err.message);
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

    addRewards(key: string) {
        let flag = true;
        const users: Observable<any[]> = this.afDB.list('/User Rewards').snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
        users.forEach(element => {
            const uid: String = this.afAuth.auth.currentUser.uid;
            for (let i = 0; i < element.length; i++) {
                if (element[i].user === uid) {
                    // tslint:disable-next-line:max-line-length
                    const rewards: Observable<any[]> = this.afDB.list('/User Rewards/' + element[i].key + '/Rewards').snapshotChanges().map(changes => {
                        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                    });
                    rewards.forEach(rewardsElement => {
                        if (flag) {
                            for (let j = 0; j < rewardsElement.length; j++) {
                                if (rewardsElement[j].key === key) {
                                    flag = false;
                                    break;
                                }
                            }
                        }
                        if (flag) {
                            this.afDB.list('/User Rewards/' + element[i].key + '/Rewards/').set(key, 0);
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

    getRewardsArray(): Rewards[] {
        this.rewardsArray = [];
        let key: string;
        const uid: string = this.afAuth.auth.currentUser.uid;
        let path: string;
        this.userRewards = this.userRewardsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
        this.userRewards.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                if (element[i].user === uid) {
                    key = element[i].key;
                    path = '/User Rewards/' + key + '/Rewards/';
                    this.getUsersRewards(path);
                    break;
                }
            }
        });
        return this.rewardsArray;
    }

    getUsersRewards(path) {
        const usersRewards: Observable<any[]> = this.afDB.list(path).snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
        const value: Observable<any[]> = this.afDB.list(path).valueChanges();
        usersRewards.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                this.getRewards().forEach(dataElement => {
                    value.forEach(valueElement => {
                        for (let j = 0; j < dataElement.length; j++) {
                            if (dataElement[j].key === element[i].key) {
                                this.rewardsArray.push(
                                    new Rewards(dataElement[j], valueElement[i])
                                );
                            }
                        }
                    });
                });
            }
        });
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

    getAvatar() {
        if (this.photoUrl != null) {
            return this.photoUrl;
        } else {
            return '../../assets/img/default.png';
        }
    }

}
