import { Rewards } from './../../dashboard/Rewards';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Location } from '@angular/common';

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
    theme: string;
    reward: Rewards;
    rewardFlag: boolean;

    /// test approach

    rewardsStatus: any[][];
    constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, public router: Router, protected _location: Location) {
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
                    const user = this.userRewardsRef.snapshotChanges().map(changes => {
                        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                    });
                    let flag = true;
                    user.forEach(element => {
                        if (flag) {
                            for (let i = 0; i < element.length; i++) {
                                if (element[i].user === this.getUID()) {
                                    this.theme = element[i].theme;
                                    flag = false;
                                    break;
                                }
                            }
                        }
                    });
                    this.router.navigate([this.pathName(this.getName()) + '/dashboard']);
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
                    let flag: Boolean;
                    for (let i = 0; i < element.length; i++) {
                        if (element[i].user === this.getUID()) {
                            this.theme = element[i].theme;
                            flag = false;
                            break;
                        }
                    }
                    if (flag === undefined) {
                        this.pushToUserRewards(this.getUID(), this.getName());
                        // this.router.navigate(['/' + this.pathName(this.getName()) + '/rewards']);
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

    pushToUserRewards(uid: any, username: string) {
        this.userRewardsRef.push({
            user: uid,
            theme: 'default'
        });
        this.photoUrl = this.afAuth.auth.currentUser.photoURL;
        const user = this.userRewardsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
        let flag = true;
        user.forEach(element => {
            if (flag) {
                for (let i = 0; i < element.length; i++) {
                    if (element[i].user === this.getUID()) {
                        this.theme = element[i].theme;
                        flag = false;
                        this.router.navigate(['/' + this.pathName(username) + '/rewards']);
                        break;
                    }
                }
            }
        });
    }

    signUp(email, password, username) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
            (success) => {
                this.afAuth.auth.currentUser.updateProfile({ displayName: username, photoURL: this.getAvatar() });
                console.log(username);
                this.pushToUserRewards(this.getUID(), username);
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

    addRewards(cardNum: string, email: string, password: string, reward:Rewards) {
        console.log(this.rewardPath);
        // console.log(this.rewardKey);
        this.afDB.list(this.rewardPath).set(reward.Key, { CardNumber: cardNum, Password: password, Points: 0, Email: email });
        alert('Reward added successfully');
        this.router.navigate(['/' + this.pathName(this.getName()) + '/dashboard']);
    }

    checkReward(key: string) {
        // console.log(key);
        let flag = true;
        const users: Observable<any[]> = this.afDB.list('/User Rewards').snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
        users.forEach(element => {
            const uid: String = this.afAuth.auth.currentUser.uid;
            // let e:any;
            for (let i=0; i<element.length; i++) {
                // console.log('Element: ', element[i].key);
                if (element[i].user === uid) {
                    this.rewardPath = '/User Rewards/' + element[i].key + '/Rewards';
                    // console.log(this.rewardPath);
                    const rewards: Observable<any[]> = this.afDB.list(this.rewardPath).snapshotChanges().map(changes => {
                        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                    });
                    rewards.forEach(rewardsElement => {
                        if (flag) {
                            // let r:any;
                            for (let j=0; j<rewardsElement.length; j++) {
                                // console.log('Reward: ', rewardsElement[j].key);
                                if (rewardsElement[j].key === key) {
                                    flag = false;
                                    break;
                                }
                            }
                        }
                        // if (flag) {
                        //     this.rewardKey = key;
                        // }
                        console.log(flag);
                        this.rewardFlag = flag;
                        // console.log(this.rewardFlag);
                        // return flag;
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
                this.rewards.forEach(dataElement => {
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

    getAllRewards() {
        this.rewardsArray = [];
        let flag = true;
        this.rewards.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                this.rewardsArray.push(
                    new Rewards(element[i], 0, [])
                );
            }
            // return this.rewardsArray;
        });
        console.log(this.rewardsArray);
    }

    getRewards() {
        return this.rewardsArray;
    }
    // specific reward
    getReward(provider: string): Rewards {
        // let list;
        provider = this.capitalize(provider.split('.'));
        console.log(provider);
        console.log(this.rewardsArray);
        let reward: Rewards;
        // this.rewards.forEach(element => {
        // if (from.toLowerCase() === 'view'.toLowerCase()) {
        //     list = this.rewardsArray;
        // } else {
        //     //    list =  this.getRewards(); <<<< After Updating getRewards Method
        //     this.rewardsArray = [];
        //     for (let i = 0; i < element.length; i++) {
        //         this.rewardsArray.push(
        //             new Rewards(element[i], 0, [])
        //         );
        //     }
        //     list = this.rewardsArray;

        // }
        for (let i = 0; i < this.rewardsArray.length; i++) {
            if (this.rewardsArray[i].Name.toLowerCase() === provider.toLowerCase()) {
                reward = this.rewardsArray[i];
                break;
            }
        }
        return reward;
        // });
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
            return '../../assets/img/default.png';
        }
    }

    pathName(name: string): string {
        if (name.includes(' ')) {
            return name.toLowerCase().replace(/ /g, '.');
        }
        return name.toLowerCase();
    }

    resetPassword(newPassword: string) {
        this.afAuth.auth.currentUser.updatePassword(newPassword);
    }

    setName(name: string) {
        this.afAuth.auth.currentUser.updateProfile({ displayName: name, photoURL: this.getAvatar() });
    }

    setEmail(email: string) {
        this.afAuth.auth.currentUser.updateEmail(email);
    }

    getTheme() {
        return this.theme;
    }

    updateTheme(theme: string) {
        const users: Observable<any[]> = this.userRewardsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
        let flag = true;
        users.forEach(element => {
            if (flag) {
                for (let i = 0; i < element.length; i++) {
                    if (element[i].user === this.getUID()) {
                        this.afDB.list('/User Rewards/' + element[i].key).set('theme', theme);
                        flag = false;
                        break;
                    }
                }
            }
        });
    }

    getCurrentUser() {
        if (this.afAuth.auth.currentUser !== null) {
            return true;
        } else {
            return false;
        }
    }

    capitalize(word: string[]): string {
        for (let i = 0; i < word.length; i++) { word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1); }
        return word.join(' ');
    }
    back() {
        this._location.back();
    }
    redirect(url: string) {
        this.router.navigate([url]);
    }


    newReset(email: string) {
        const auth = firebase.auth();
        return auth.sendPasswordResetEmail(email)
            .then(() => this.router.navigate(['/confirmPassword']))
            .catch((error) => console.log(error))
    }

}
