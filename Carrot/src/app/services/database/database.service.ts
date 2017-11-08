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
    detailsArray: any[] = [];
    photoUrl: any;
    rewardKey: string;
    rewardPath: string;

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

    // googlePopup() {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     provider.addScope('profile');
    //     provider.addScope('email');
    //     this.userRewards = this.userRewardsRef.snapshotChanges().map(changes => {
    //         return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    //     });
    //     this.afAuth.auth.signInWithPopup(provider).then(
    //         (success) => {
    //             this.userRewards.forEach(element => {
    //                 const uid: String = this.afAuth.auth.currentUser.uid;
    //                 let flag: Boolean;
    //                 for (let i = 0; i < element.length; i++) {
    //                     if (element[i].user === uid) {
    //                         flag = false;
    //                         break;
    //                     }
    //                 }
    //                 if (flag === undefined) {
    //                     this.pushToUserRewards(this.afAuth.auth.currentUser.uid);
    //                 } else {
    //                     this.photoUrl = this.afAuth.auth.currentUser.photoURL;
    //                     this.router.navigate(['/'+ this.pathName(this.afAuth.auth.currentUser.displayName)+'/dashboard']);
    //                 }
    //             });
    //         }).catch(
    //         (err) => {
    //             console.log(err.message);
    //         });
    // }
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
                    const uid: String = this.getUID();
                    let flag: Boolean;
                    for (let i = 0; i < element.length; i++) {
                        if (element[i].user === uid) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag === undefined) {
                        this.pushToUserRewards(this.getUID());
                    } else {
                        this.photoUrl = this.afAuth.auth.currentUser.photoURL;
                        this.router.navigate(['/' + this.pathName(this.getName()) + '/dashboard']);
                    }
                });
            }).catch(
            (err) => {
                console.log(err.message);
            });
    }
    // pushToUserRewards(uid: any) {
    //     this.afDB.list('/User Rewards/').push({
    //         user: uid
    //     });
    //     alert('Registered successfully!');
    //     this.photoUrl = this.afAuth.auth.currentUser.photoURL;
    //     this.router.navigate(['/rewards']);
    // }

    pushToUserRewards(uid: any) {
        this.afDB.list('/User Rewards/').push({
            user: uid
        });
        alert('Registered successfully!');
        this.photoUrl = this.afAuth.auth.currentUser.photoURL;
        this.router.navigate(['/rewards']);
    }

    // signUp(email, password) {
    //     this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
    //         (success) => {
    //             this.pushToUserRewards(this.afAuth.auth.currentUser.uid);
    //         }).catch(
    //         (err) => {
    //             if (err.message === 'The email address is already in use by another account.') {
    //                 alert(err.message);
    //             } else {
    //                 console.log(err.message);
    //             }
    //         });
    // }

    signUp(email, password, username) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
            (success) => {
                const avatar = this.getAvatar();
                this.afAuth.auth.currentUser.updateProfile({displayName: username, photoURL: avatar});
                this.pushToUserRewards(this.getUID());
            }).catch(
            (err) => {
                if (err.message === 'The email address is already in use by another account.') {
                    alert(err.message);
                } else {
                    console.log(err.message);
                }
            });
    }

    logout() {
        this.router.navigate(['/']);
        this.afAuth.auth.signOut();
    }

    checkLoggedIn() {
        try {
            if (this.getUID() === null) {
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

    addRewards(cardNum: string, email: string, password: string, points: Number) {
        const path = this.rewardPath + this.rewardKey;
        this.afDB.list(this.rewardPath).set(this.rewardKey, { CardNumber: cardNum, Password: password, Points: points, Email: email });
        alert('Reward added successfully');
        this.router.navigate(['/main']);
    }

    checkReward(key: string) {
        let flag = true;
        const users: Observable<any[]> = this.afDB.list('/User Rewards').snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
        users.forEach(element => {
            const uid: String = this.getUID();
            for (let i = 0; i < element.length; i++) {
                if (element[i].user === uid) {
                    // tslint:disable-next-line:max-line-length
                    const rewards: Observable<any[]> = this.afDB.list('/User Rewards/' + element[i].key + '/Rewards').snapshotChanges().map(changes => {
                        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                    });
                    rewards.forEach(rewardsElement => {
                        if (flag) {
                            for (let j = 0; j < rewardsElement.length; j++) {
                                this.rewardPath = '/User Rewards/' + element[i].key + '/Rewards/';
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
            const uid: string = this.getUID();
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
                                    new Rewards(dataElement[j], valueElement[i], element[i])
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
    // specific reward
    getReward(list: Rewards[], provider: string): Rewards {
        console.log('about to');
        for (let i = 0; i < list.length; i++) {
            if (this.pathName(list[i].ProviderName) === provider) {
                console.log(list[i] + ' returned Object!sss ');
                return list[i];
            } else {
                console.log(i);
            }
        }
    }

    getRewardsData(key) {
        return this.afDB.list('/Rewards/' + key);
    }

    getUID() {
        return this.afAuth.auth.currentUser.uid;
    }
    getName() {
        return this.afAuth.auth.currentUser.displayName;
    }
    getEmail() {
        return this.afAuth.auth.currentUser.email;
    }

    getAvatar() {
        if (this.photoUrl != null) {
            return this.photoUrl;
        } else {
            // tslint:disable-next-line:max-line-length
            return 'https://firebasestorage.googleapis.com/v0/b/carrot-app.appspot.com/o/default.png?alt=media&token=1283d035-ac19-4605-9aff-95927f4befe6';
        }
    }
    pathName(name: string): string {
        return name.toLowerCase().replace(/ /g, '.');
    }
}