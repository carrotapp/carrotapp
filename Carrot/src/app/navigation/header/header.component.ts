import { InfoComponent } from './../info/info.component';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ThemesService } from '../../services/themes.service';
import { RoutingListenerService } from '../../services/routing-listener.service';
import { DatabaseService } from '../../services/database/database.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*
    This is a Generic Component that will have titles inserted dynamically
  */
  //  @Input('heading')
  h1: String;
  // @Input('sub-heading')
  h2: String;
  // @Input('text')
  h3: string;
  // @Input('btn-title')
  btn_title: string;
  icon: string; 
  @Input('showBtn')
  showBtn: boolean;
  showAdd: boolean;
  //
  welcomeText = '';
  @Input('showRemove') showRemove: boolean;
  username: string;
  @Input('add') add: boolean;
  @Input('action') action: string;

  rKey: string;

  showDel: boolean;

  hasRewards: boolean;
  /* Other Text */
  date: Date = new Date();
  links: string[];
  /* type */
  // tslint:disable-next-line:max-line-length
  constructor(public themes: ThemesService, private route: ActivatedRoute, private router: Router, private routerListener: RoutingListenerService, protected databaseService: DatabaseService) {
    this.showBtn = true;
    this.showRemove = false;
    this.showAdd = true;

    this.showDel = false;
    //  this.hasRewards = (databaseService.getRewardsArray().length > 0);
    // Router Link Change Detector
    this.subscribe();
    router.events.subscribe(() => {
      this.subscribe();
    });

    // if(this.router.url.toString().includes('/add')){ 
    //   this.showBtn = true;
    // } else { 
    //   this.showBtn = false;
    // } 

    
    // console.log(this.router.url.toString()); 

    // console.log('/' + this.getUsername + '/dashboard'); 
    if(this.router.url.toString().includes('/dashboard')){ 
      this.btn_title = "add reward"; 
      this.icon = "fa-plus"; 
    } else if (this.router.url.toString().includes('/view')){
      this.showAdd = false;
    } else { 
      // this.showBtn = false;
      this.btn_title = "dashboard"; 
      this.icon = "fa-chevron-left"; 
    } 
  }




  ngOnInit(){

    // this.rKey = this.databaseService.getKey();
    
    //     this.databaseService.usersRewards.subscribe(res => {
    //       res.map(element => {
    //         console.log("1" + this.rKey);
    //         console.log("2" + element.key);
    //         if(this.rKey === element.key){
    
    //           // this.showDel = true;
    //           // // this.showRemove = true;
    //           // this.add = true;
    //           // this.action = 'Remove from my Rewards';
    //           // this.showAdd = false;
              
    //           console.log("Rewards" + element.Points);
    
    //         }
    //       })
    //     })

  }

  btnTitle() { 
    
    if (this.router.url.toString().includes('/dashboard')){ 
      this.redirect('/main/rewards'); 
      this.btn_title = "dashboard"; 
      this.icon = "fa-chevron-left"; this.showRemove = false;
    } else { 
      this.redirect('/main/dashboard'); 
      this.btn_title = "add reward"; 
      this.icon = "fa-plus"; this.showRemove = false;
    } 
        
  } 

  // Encrypter ?
  pathName(name: string): string {
    return name.toLowerCase().replace(/ /g, '.');
  }
  pathDec(name: string): string {
    return name.toLowerCase().replace(/./g, ' ');
  }
  capitalize(word: string[]): string {
    for (let i = 0; i < word.length; i++) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
    }
    return word.join(' ');
  }
  get welcome() {
    return this.welcomeText;
  }

  // Init
  subscribe() {
    this.route.params.subscribe((params: Params) => {
      this.username = params.username;
      this.showBtn = this.router.url.includes('dashboard');
      this.links = this.router.url.toString().split('/');
      this.welcomeText = '';
      // let hasRewards: boolean;

      console.log(this.links.length + " : links")
      if (this.showBtn) {
        // setTimeout(()=>{
        // hasRewards = (this.databaseService.getRewardsArray().length > 1);
        //   console.log(hasRewards);
        // }, 10);
        // if(hasRewards){
        this.h1 = 'My Rewards';
        // }else{
        //   this.h1 = 'Welcome '+ this.capitalize(this.databaseService.getName().split(' '));
        //   this.welcomeText = 'Lets get you started by adding your first reward programme';
        // }
        this.showRemove = false;
        this.showRemove = false;
        // this.routerListener.
      } else if (!this.showBtn) {

        this.showRemove = false;
        this.add = false;
        if (this.links.length === 3) {

          // this.h1 = this.capitalize(this.links[2].split('.'));
          // if (this.links[3].toLowerCase() !== 'add') 

            if (this.links[2].toLowerCase() === 'rewards') {
              this.showRemove = false;
              this.add = false;
              // this.h1 = this.capitalize(this.links[3].split('.'));
            } else if (this.links[2].toLowerCase() === 'info') {
              
              // this.showAdd = false;
              // console.log('false');

              this.rKey = this.databaseService.getKey();
              
                  this.databaseService.usersRewards.subscribe(res => {
                    res.map(element => {
                      console.log("1" + this.rKey);
                      console.log("2" + element.key);
                      if(this.rKey === element.key){
              
                        // this.showDel = true;
                        // // this.showRemove = true;
                        // this.add = true;
                        // this.action = 'Remove from my Rewards';
                        // this.showAdd = false;

                        this.showRemove = true;
                        this.add = true;
                        this.action = 'Remove from my Rewards';
                        
                        console.log("Rewards" + element.Points);
              
                      } 
                    })
                  }) 
                 

            } else if (this.links[2].toLowerCase() === 'dashboard') {
              this.showRemove = false;
              this.add = false;
            }

          // } else {
          //   this.showRemove = true;
          //   this.add = false;
          //   this.action = 'add Reward';
          // }

        } else if (this.router.url.toString() === '/404') {
          this.redirect('/main/dashboard');
          this.showRemove = false;
          this.h1 = 'Oooopsss, Something went wrong!!!';
        } else if (this.router.url.includes('rewards')) {
          this.h1 = 'Add Rewards';
          this.showRemove = false;
        }

      } else {
        this.redirect('/main/dashboard');
      }
    });
  }

  redirect(url: string): void {
    if (this.showBtn) {
      this.showBtn = false;
    } else {
      this.showBtn = true;
    }
    this.router.navigate([url]);
  }
  // getter
  get getUsername() {
    return this.username;
  }
  get heading() {
    return this.h1;
  }
  addReward() {
    if (!this.add) {
      // alert('Add reward Function!');
      // this.redirect('/' + this.getUsername + '/dashboard');
      this.routerListener.activate();
      this.btn_title = "add reward"; 
      this.icon = "fa-plus"; 
    } else {
      this.databaseService.removeReward(this.databaseService.getKey());
      // this.redirect('/' + this.getUsername + '/dashboard');
      this.showAdd = true;
      this.showRemove = false;
    }

  }
  get theme(): string {
    return this.themes.getTheme();
  }
}
