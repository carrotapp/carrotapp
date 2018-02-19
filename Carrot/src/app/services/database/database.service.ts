import { ThemesService } from '../themes.service';
import { Rewards } from './../../dashboard/Rewards';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Location } from '@angular/common';
import 'rxjs/add/observable/combineLatest';
import { setTimeout } from 'timers';
import { DatePipe } from '@angular/common';

@Injectable()
export class DatabaseService {
    // userRewardsRef;
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
    initialized = false;
    loggedIn: boolean;
    coupons: Observable<any[]>;
    usersRewards: Observable<any[]>;
    totalPoints = 0;
    totalRandValue = 0;
    Key: string;
    rewardsStatus: any[][];

    userRewardsRef;
    rewardsRef;
    couponsRef;

    // tslint:disable-next-line:max-line-length
    constructor(private afStore: AngularFirestore, private afAuth: AngularFireAuth, public router: Router, protected _location: Location, protected ts: ThemesService, private datePipe: DatePipe) {
        // Set the ref for User Rewards in userRewardsRef
        // this.userRewards = afStore.collection('User Rewards').snapshotChanges().map(actions => {
        //     return actions.map(a => {
        //         const data = a.payload.doc.data();
        //         const id = a.payload.doc.id;
        //         return { id, ...data };
        //     });
        // });

        // // Initialise the data from Rewards and Coupons in rewards and coupons
        // this.rewards = afStore.collection('Rewards', ref => ref.orderBy('ProviderName', 'asc')).snapshotChanges().map(actions => {
        //     return actions.map(a => {
        //         const data = a.payload.doc.data();
        //         const id = a.payload.doc.id;
        //         return { id, ...data };
        //     });
        // });
        // this.coupons = afStore.collection('Coupons').snapshotChanges().map(actions => {
        //     return actions.map(a => {
        //         const data = a.payload.doc.data();
        //         const id = a.payload.doc.id;
        //         return { id, ...data };
        //     });
        // });
        this.userRewardsRef = afStore.collection('User Rewards');
        this.rewardsRef = afStore.collection('Rewards');
        this.couponsRef = afStore.collection('Coupons');

        this.userRewards = this.userRewardsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });

        this.rewards = afStore.collection('Rewards', ref => ref.orderBy('ProviderName', 'asc')).snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });

        this.coupons = this.couponsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });

        this.checkCoupons();
    }

    // Sign in with email and password
    signIn(email, password) {
        // Check if the user enter a Gmail email and open the google popup if needed
        if (email.includes('@gmail.com')) {
            this.googlePopup();
        } else {
            // Once signed in successfully initialise the user data and go to the dashboard
            this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
                (success) => {
                    this.initializeData();
                    this.router.navigate(['/main/dashboard']);
                }).catch(
                    (err) => {
                        alert('Error: ' + err.message);
                    });
        }
    }

    // Opens the google popup with profile and email as options
    googlePopup() {
        // this.userRewards = this.userRewardsRef.snapshotChanges().map(actions => {
        //     return actions.map(a => {
        //         const data = a.payload.doc.data();
        //         const id = a.payload.doc.id;
        //         return { id, ...data };
        //     });
        // });
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
            response => {
                // this.userRewards.forEach(element => {
                //     // Determine if a new user is registering and create a new entry in the database or go to the dashboard
                //     let flag: Boolean;
                //     for (let i = 0; i < element.length; i++) {
                //         if (element[i].user === this.getUID()) {
                //             this.theme = element[i].theme;
                //             flag = false;
                //             break;
                //         }
                //     }
                //     if (flag === undefined) {
                //         this.pushToUserRewards(this.getUID());
                //     } else {
                //         this.initializeData();
                //         this.router.navigate(['/main/dashboard']);
                //     }
                // });

                if (response.additionalUserInfo.isNewUser) {
                    this.pushToUserRewards(this.getUID());
                    this.router.navigate(['/main/rewards']);
                } else {
                    this.initializeData();
                    this.router.navigate(['/main/dashboard']);
                }
            }).catch(
                (err) => {
                    console.log(err.message);
                });
    }

    // Create a new user with email and password
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

    // Create a new user entry in the database after registering and send them to the add rewards screen
    pushToUserRewards(uid: any) {
        // this.userRewardsRef.push({
        //     user: uid,
        //     theme: 'default'
        // });
        this.userRewardsRef.add({
            user: uid,
            theme: 'default'
        });
        // Initialise the new user's data
        this.initializeData();
        // const user = this.userRewardsRef.snapshotChanges().map(actions => {
        //     return actions.map(a => {
        //         const data = a.payload.doc.data();
        //         const id = a.payload.doc.id;
        //         return { id, ...data };
        //     });
        // });
        // user.subscribe(response => {
        //     response.map(element => {

        //     });
        // });
        // user.forEach(element => {
        //     if (flag) {
        //         for (let i = 0; i < element.length; i++) {
        //             if (element[i].user === this.getUID()) {
        //                 flag = false;
        //                 this.router.navigate(['/main/rewards']);
        //                 break;
        //             }
        //         }
        //     }
        // });
    }

    // Logout the current user
    logout() {
        this.ts.setTheme('defualt');
        this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }

    // Add a new reward provider to the curren user's account
    addRewards(cardNum: string, email: string, password: string, reward) {
        const segs = this.rewardPath.split('/');
        // tslint:disable-next-line:max-line-length
        this.afStore.collection(segs[0]).doc(segs[1]).collection(segs[2]).doc(reward.id).set({ CardNumber: cardNum, Password: password, Points: 0, Email: email });
        this.rewardsArray = [];
        this.router.navigate(['/main/dashboard']);
    }

    // Check whether a specific reward is on the current user's account or not
    checkReward(key: string) {
        let flag = true;
        const users: Observable<any[]> = this.userRewardsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });
        users.subscribe(response => {
            response.map(element => {
                if (element.user === this.getUID()) {
                    this.rewardPath = 'User Rewards/' + element.id + '/Rewards';
                    // console.log(this.rewardPath);
                    const rewards = this.userRewardsRef.doc(element.id).collection('Rewards').snapshotChanges().map(actions => {
                        return actions.map(a => {
                            const data = a.payload.doc.data();
                            const id = a.payload.doc.id;
                            return { id, ...data };
                        });
                    });
                    rewards.subscribe(res => {
                        res.map(ele => {
                            if (ele.id === key) {
                                flag = false;
                            }
                        });
                        this.rewardKey = key;
                        this.rewardFlag = flag;
                        return flag;
                    });
                }
            });
        });
        // users.forEach(element => {
        //     for (let i = 0; i < element.length; i++) {
        //         if (element[i].user === this.getUID()) {
        //             this.rewardPath = '/User Rewards/' + element[i].id + '/Rewards';
        //             const rewards: Observable<any[]> = this.afStore.collection(this.rewardPath).snapshotChanges().map(actions => {
        //                 return actions.map(a => {
        //                     const data = a.payload.doc.data();
        //                     const id = a.payload.doc.id;
        //                     return { id, ...data };
        //                 });
        //             });
        //             rewards.forEach(rewardsElement => {
        //                 if (flag) {
        //                     for (let j = 0; j < rewardsElement.length; j++) {
        //                         if (rewardsElement[j].key === key) {
        //                             flag = false;
        //                             break;
        //                         }
        //                     }
        //                 }
        //                 this.rewardKey = key;
        //                 this.rewardFlag = flag;
        //                 return flag;
        //             });
        //         }
        //     }
        // });
    }

    // Returns an array of all the rewards providers
    getRewardsArray() {
        // let key: string;
        // const uid: string = this.getUID();
        // let path: string;
        // this.userRewards = this.userRewardsRef
        this.rewardsArray = [];
        const userRewards = this.userRewardsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });
        userRewards.subscribe(res => {
            res.map(element => {
                if (element.user === this.getUID()) {
                    this.generateRewardsArray(element.id);
                }
            });
        });
    }

    // Creates an array of all the providers and if the user has the provider on their account then the account information is also added
    generateRewardsArray(key: string) {
        const rewards = this.rewardsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });
        const usersRewards = this.userRewardsRef.doc(key).collection('Rewards').valueChanges();
        usersRewards.subscribe(response => {
            rewards.subscribe(res => {
                response.map(element => {
                    res.map(e => {
                        if (element.id === e.id) {
                            this.rewardsArray.push(
                                new Rewards(element, e)
                            );
                        }
                    });
                });
            });
        });
        // const value: Observable<any[]> = this.afStore.collection(path).valueChanges();
        // usersRewards.forEach(element => {
        //     for (let i = 0; i < element.length; i++) {
        //         this.rewards.forEach(dataElement => {
        //             value.forEach(valueElement => {
        //                 for (let j = 0; j < dataElement.length; j++) {
        //                     if (dataElement[j].key === element[i].key) {
        //                         this.rewardsArray.push(
        //                             new Rewards(dataElement[j], valueElement[i], element[i])
        //                         );
        //                     }
        //                 }
        //             });
        //         });
        //     }
        // });
    }

    // Gets all the account data of the providers added to the current user's account
    getUsersRewards() {
        const userRewards = this.userRewardsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });
        userRewards.subscribe(res => {
            res.map(element => {
                if (element.user === this.getUID()) {
                    // tslint:disable-next-line:max-line-length
                    this.usersRewards = this.userRewardsRef.doc(element.id).collection('Rewards').snapshotChanges().map(actions => {
                        return actions.map(a => {
                            const data = a.payload.doc.data();
                            const id = a.payload.doc.id;
                            return { id, ...data };
                        });
                    });
                    const rewards = this.rewardsRef.snapshotChanges().map(actions => {
                        return actions.map(a => {
                            const data = a.payload.doc.data();
                            const id = a.payload.doc.id;
                            return { id, ...data };
                        });
                    });
                    // console.log('Users Rewards' + this.usersRewards);

                    this.usersRewards.subscribe(results => {
                        rewards.subscribe(response => {
                            this.totalPoints = 0;
                            this.totalRandValue = 0;
                            results.map(elements => {
                                this.totalPoints += elements.Points;
                                response.map(e => {
                                    if (e.id === elements.id) {
                                        this.totalRandValue += elements.Points / e.Ratio;
                                    }
                                });
                            });
                        });
                    });
                }
            });
        });
    }

    // Gets a reward based on a specified provider
    getReward(provider: string): Rewards {
        provider = this.capitalize(provider.split('.'));
        let reward: Rewards;
        for (let i = 0; i < this.rewardsArray.length; i++) {
            if (this.rewardsArray[i].Name.toLowerCase() === provider.toLowerCase()) {
                reward = this.rewardsArray[i];
                break;
            }
        }
        return reward;
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

    getAvatar(): string {
        if (this.photoUrl != null) {
            return this.photoUrl;
        } else {
            // tslint:disable-next-line:max-line-length
            return 'https://firebasestorage.googleapis.com/v0/b/carrot-app.appspot.com/o/default.png?alt=media&token=1283d035-ac19-4605-9aff-95927f4befe6';
        }
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

    // Updates the theme for the current user
    updateTheme(theme: string) {
        let flag = true;
        const userRewards = this.userRewardsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });

        userRewards.subscribe(response => {
            response.map(element => {
                if (element.user === this.getUID() && flag) {
                    this.userRewardsRef.doc(element.id).update({ 'theme': theme });
                    flag = false;
                }
            });
        });

        // userRewards.forEach(element => {
        //     if (flag) {
        //         for (let i = 0; i < element.length; i++) {
        //             if (element[i].user === this.getUID()) {
        //                 this.userRewardsRef.doc(element[i].id).update({ 'theme': theme });
        //                 flag = false;
        //                 break;
        //             }
        //         }
        //     }
        // });
    }

    // Checks whether a user is logged in or not, used by the navbar
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

    // Resets a users password
    newReset(email: string) {
        const auth = firebase.auth();
        return auth.sendPasswordResetEmail(email)
            .then(() => this.router.navigate(['/confirmPassword']))
            .catch((error) => console.log(error));
    }

    // Removes a specific reward
    removeReward(key) {
        let path;
        if (key !== undefined) {
            let flag = true;
            this.userRewards.forEach(element => {
                if (flag) {
                    for (let i = 0; i < element.length; i++) {
                        if (element[i].user === this.getUID()) {
                            path = '/User Rewards/' + element[i].key + '/Rewards/' + key;
                            const ref = this.afStore.collection(path).doc(key);
                            ref.delete()
                                .then(() => {
                                    this.router.navigate(['/main/dashboard']);
                                })
                                .catch(error => {
                                    alert('Remove failed: ' + error);
                                });
                            flag = false;
                            break;
                        }
                    }
                }
            });
        }

    }

    // Initiliases the photoUrl and theme of the current user
    initializeData() {
        this.initialized = true;
        this.photoUrl = this.afAuth.auth.currentUser.photoURL;

        const userRewards = this.userRewardsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });

        userRewards.subscribe(res => {
            res.map(element => {
                if (element.user === this.getUID()) {
                    this.theme = element.theme;
                    this.ts.setTheme(element.theme);
                }
            });
        });
    }

    setKey(key) {
        this.Key = key;
    }

    getKey() {
        return this.Key;
    }

    // Finds the coupons relevant to the current user's account and also removes expired coupons from the database
    checkCoupons() {
        const current_date = new Date();
        const coupons = this.couponsRef.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });
        coupons.subscribe(results => {
            results.map(element => {
                let expDate: string = element.ExpirationDate;
                expDate = expDate.replace(/-/g, '');
                if (parseInt(expDate, 10) < parseInt(this.datePipe.transform(current_date, 'yyyyMMdd'), 10)) {
                    const key = element.id;
                    this.afStore.collection('Coupons').doc(key).delete();
                }
            });
        });
    }

}
