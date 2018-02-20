import { Observable } from 'rxjs/Observable';
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
  h1: String;
  h2: String;
  h3: string;
  btn_title: string;
  icon: string;
  @Input('showBtn')
  showBtn: boolean;
  showAdd: boolean;
  remove: boolean[];
  welcomeText = '';
  @Input('showRemove') showRemove: boolean;
  username: string;
  @Input('add') add: boolean;
  @Input('action') action: string;
  rKey: string;
  showDel: boolean;
  hasRewards: boolean;
  date: Date = new Date();
  links: string[];
  userRewards: Observable<any>;

  // tslint:disable-next-line:max-line-length
  constructor(public themes: ThemesService, private route: ActivatedRoute, public router: Router, private routerListener: RoutingListenerService, public databaseService: DatabaseService) {
    this.userRewards = databaseService.userRewardsRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    this.showBtn = true;
    this.showRemove = false;
    this.showAdd = true;
    if (this.router.url.toString().includes('/dashboard')) {
      this.btn_title = 'add reward';
      this.icon = 'fa-plus';
    } else {
      this.btn_title = 'dashboard';
      this.icon = 'fa-chevron-left';
    }
  }

  ngOnInit() {
    this.subscribe();
    this.router.events.subscribe(() => {
      this.subscribe();
    });
  }

  btnTitle() {
    if (this.router.url.includes('dashboard')) {
      this.redirect('/main/rewards');
      this.btn_title = 'dashboard';
      this.icon = 'fa-chevron-left'; this.showRemove = false;
    } else {
      this.redirect('/main/dashboard');
      this.btn_title = 'add reward';
      this.icon = 'fa-plus';
    }
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

  subscribe() {
    this.showRemove = false;
    this.showBtn = this.router.url.includes('dashboard');
    this.links = this.router.url.toString().split('/');
    this.welcomeText = '';
    if (this.showBtn) {
      this.h1 = 'My Rewards';
      this.showAdd = true;
      this.btn_title = 'add reward';
      this.icon = 'fa-plus';
    } else if (!this.showBtn) {
      if (this.router.url.includes('info')) {
        if (this.routerListener.isOnAccount) {
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
    } else if (this.router.url.includes('/404')) {
      this.redirect('/main/dashboard');
      this.showRemove = false;
      this.h1 = 'Oooopsss, Something went wrong!!!';
    } else {
      this.redirect('/main/dashboard');
      this.showRemove = false;
    }
    if (this.router.url.includes('rewards')) {
      this.h1 = 'Add Rewards';
      this.btn_title = 'dashboard'; this.icon = 'fa-chevron-left';
      this.showRemove = false;
      this.showAdd = true;
    }
    if (this.router.url.includes('dashboard')) {
      this.h1 = 'My Rewards';
      this.showRemove = false;
      this.btn_title = 'add reward';
      this.icon = 'fa-plus';
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

  get heading() {
    return this.h1;
  }

  addReward() {
    if (!this.add) {
      this.routerListener.activate();
      this.btn_title = 'add reward';
      this.icon = 'fa-plus';
    } else {
      if (confirm('Are you sure you want to remove this reward from your account?')) {
        this.databaseService.removeReward(this.databaseService.getKey());
        this.showAdd = true;
        this.showRemove = false;
        this.router.navigate(['/main/dashboard']);
      }
    }
  }

  get theme(): string {
    return this.themes.getTheme();
  }

}
