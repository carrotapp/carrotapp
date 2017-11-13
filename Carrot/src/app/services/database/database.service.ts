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

    constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, public router: Router,private _location: Location) {
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
                    let flag: Boolean;
                    for (let i = 0; i < element.length; i++) {
                        if (element[i].user === this.getUID()) {
                            this.theme = element[i].theme;
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

    pushToUserRewards(uid: any) {
        this.userRewardsRef.push({
            user: uid,
            theme: 'default'
        });
        alert('Registered successfully!');
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
        this.router.navigate(['/rewards']);
    }

    signUp(email, password, username) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
            (success) => {
                this.afAuth.auth.currentUser.updateProfile({ displayName: username, photoURL: this.getAvatar() });
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
        this.afDB.list(this.rewardPath).push(this.rewardKey).set({ CardNumber: cardNum, Password: password, Points: points, Email: email });
        alert('Reward added successfully');
        this.router.navigate(['/' + this.pathName(this.getName()) + '/dashboard']);
    }

    checkReward(key: string) {
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
                                    this.rewardPath = '/User Rewards/' + element[i].key + '/Rewards';
                                    flag = false;
                                    break;
                                }
                            }
                        }
                        if (flag) {
                            this.rewardKey = key;
                            this.router.navigate(['/' + this.pathName(this.getName()) + '/credentials']);
                        } else if (flag === false) {
                            alert('That reward is already on your account');
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
getReward(provider:string, from:string) : Rewards{    
    var reward:Rewards 
    var list;
        provider = this.capitalize(provider.split('.'));    console.log(provider);
            if(from.toLowerCase() === 'view'.toLowerCase() ){
                list =  this.rewardsArray;
            }else{ 
            //    list =  this.getRewards(); <<<< After Updating getRewards Method
            list =  this.rewardsArray;
            }
                for(let i = 0;  i < list.length ; i++){
                
                     if(list[i].Name.toLowerCase() === provider.toLowerCase() )  {
                                 reward = list[i];
                                 break;
                     }
                }
            return reward;
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
        return name.toLowerCase().replace(/ /g, '.');
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
        // const users: Observable<any[]> = this.userRewardsRef.snapshotChanges().map(changes => {
        //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        // });
        // let flag = true;
        // users.forEach(element => {
        //     if (flag) {
        //         for (let i = 0; i < element.length; i++) {
        //             if (element[i].user === this.getUID()) {
        //                 this.theme = element[i].theme;
        //                 console.log(this.theme);
        //                 flag = false;
        //                 break;
        //             }
        //         }
        //     }
        //     console.log(this.theme);
        //     return this.theme;
        // });
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

    capitalize( word:string[] ):string{
        for( let i =0; i<word.length;i++  ) word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1); 
        return word.join(' ');
       }
       back(){
        this._location.back();
       }
}
