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

  remove: boolean[];
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
  constructor(public themes: ThemesService, private route: ActivatedRoute, protected router: Router, private routerListener: RoutingListenerService, protected databaseService: DatabaseService) {
    this.showBtn = true;
    this.showRemove = false;
    this.showAdd = true;



    if(this.router.url.toString().includes('/dashboard')){ 
      this.btn_title = "add reward"; 
      this.icon = "fa-plus"; 
    } else { 
      // this.showBtn = false;
      this.btn_title = "dashboard"; 
      this.icon = "fa-chevron-left"; 
    }
    
  }




  ngOnInit(){

    this.subscribe();
    this.router.events.subscribe(() => {
      this.subscribe();
    });

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
    
    if (this.router.url.includes('dashboard')){ 
      this.redirect('/main/rewards'); 
      this.btn_title = "dashboard"; 
      this.icon = "fa-chevron-left"; this.showRemove = false;
    } else { 
      this.redirect('/main/dashboard'); 
      this.btn_title = "add reward"; 
      this.icon = "fa-plus"; 
    } 
        
  } 

  // Encrypter ?
  pathName(name: string): string {
    this.showRemove = false;
    return name.toLowerCase().replace(/ /g, '.');
  }
  pathDec(name: string): string {
    this.showRemove = false;
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
    this.showRemove = false;
    // this.route.params.subscribe((params: Params) => {
      // this.username = params.username;
      this.showBtn = this.router.url.includes('dashboard');
      this.links = this.router.url.toString().split('/');
      this.welcomeText = '';
      // let hasRewards: boolean;

      // console.log(this.links.length + " : links");
      
      if (this.showBtn) {
        
        this.h1 = 'My Rewards';
        this.showAdd = true;
       
        // this.showRemove = true;
        
        
      // } else if (this.router.url.includes('dashboard')) {
      //     this.showRemove = false;
      //         this.showAdd = true;
      //         this.add = true; 
                 

            } else if (!this.showBtn) {
              // this.showRemove = false;
              // this.showAdd = true;
              // // this.showRemove = false;
              // this.add = false;
              // if (this.links.length === 3) {
      
               
                
      
                  // if (this.router.url.includes('rewards')) {
                  //   this.showRemove = false;
                  //   this.add = false;
      
                  // } 
                  
                  if (this.router.url.includes('info')) {
                    console.log(this.routerListener.isOnAccount);
                    // this.showRemove = false;
                    // this.showAdd = true;
      
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
      
                    //           // if(element.Points !== undefined) {
                    //             this.showRemove = true;
                    //             this.showAdd = false;
                    //           // } else {
                    //           //   this.showRemove = false;
                    //           //   this.showAdd = true;
                    //           // }
      
                              
      
                    //           // this.remove.push(true);
      
                    //           this.add = true;
                    //           this.action = 'Remove from my Rewards';
                              
                    //           console.log("Rewards" + element.Points);
                    
                    //         }
                    if(this.routerListener.isOnAccount) {
                      this.showRemove = true;
                      this.showAdd = false;
                      this.add = true;
                      this.action = 'Remove from my Rewards';
                    } else {
                      this.showRemove = true;
                      this.showAdd = false;
                      this.add = false;
                      this.action = 'Add Reward';
                    }
                          
                  }
            
          

          // } else {
          //   this.showRemove = true;
          //   this.add = false;
          //   this.action = 'add Reward';
          // }

        } else if (this.router.url.includes('/404')) {
          this.redirect('/main/dashboard');
          this.showRemove = false;
          this.h1 = 'Oooopsss, Something went wrong!!!';
        
        
        

      } else {
        this.redirect('/main/dashboard');
        this.showRemove = false;
      }
    // });


    if (this.router.url.includes('rewards')) {
      this.h1 = 'Add Rewards';
      this.showRemove = false;
    }

    if (this.router.url.includes('dashboard')) {
      this.h1 = 'My Rewards';
      this.showRemove = false;
    }

  }

  redirect(url: string): void {
    if (this.showBtn) {
      this.showBtn = false;
      this.showRemove = false;
    } else {
      this.showBtn = true;
      this.showRemove = false;
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
      // this.redirect('/main/dashboard');
    }

  }
  get theme(): string {
    return this.themes.getTheme();
  }
}
