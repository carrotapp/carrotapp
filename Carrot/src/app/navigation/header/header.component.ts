import { InfoComponent } from './../info/info.component';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
  @Input('showBtn')
  showBtn: boolean;
  //
  @Input('showRemove') showRemove: boolean;
  username: string;
  @Input('add') add: boolean;
  @Input('action') action: string;
  /* Other Text */
  date: Date = new Date();
  links: string[];
  /* type */
  constructor(private ds: DatabaseService, private route: ActivatedRoute, private router: Router) {
    this.showBtn = true;
    this.showRemove = false;
    // Router Link Change Detector
    router.events.subscribe(() => {
      this.subscribe();
    });
  }
  // Encrypter ?
  pathName(name: string): string {
    return name.toLowerCase().replace(/ /g, '.');
  }
  pathDec(name: string): string {
    return name.toLowerCase().replace(/./g, ' ');
  }
  capitalize(word: string[]): string {
    for (let i = 0; i < word.length; i++) { word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1); }
    return word.join(' ');
  }

  // Init
  subscribe() {
    this.route.params.subscribe((params: Params) => {
      this.username = params.username;
      this.showBtn = this.router.url.toString() === ('/' + this.getUsername + '/dashboard');
      this.links = this.router.url.toString().split('/');

      if (this.showBtn) {
        this.h1 = 'My Rewards';
        this.showRemove = false;
      } else if (!this.showBtn) {
        if (this.links.length === 4) {
          this.h1 = this.capitalize(this.links[2].split('.'));
          if (this.links[3].toLowerCase() !== 'add') {
            if (this.links[2].toLowerCase() === 'add') {
              this.showRemove = false;
              this.add = false;
              this.h1 = this.capitalize(this.links[3].split('.'));
            } else {
              this.showRemove = true;
              this.add = true;
              this.action = 'Remove from my Rewards';
              console.log('false');
            }

          } else {
            this.showRemove = true;
            this.add = false;
            this.action = 'add Reward';
          }
        } else if (this.router.url.toString() === '/404') {
          this.redirect('/' + this.getUsername + '/dashboard');
          this.showRemove = false;
          this.h1 = 'Oooopsss, Something went wrong!!!';
        } else {
          this.h1 = 'Add Rewards';
          this.showRemove = false;
        }
      } else {
        this.redirect('/' + this.getUsername + '/dashboard');
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
  get geth1() {
    return this.h1;
  }
  addReward() {
    if (!this.add) {
      // alert('Add reward Function!');
      this.redirect('/' + this.getUsername + '/dashboard');
    } else {
      // alert('Remove reward function!');

      // let d: InfoComponent;


      this.ds.removeReward();

      // console.log(d.getRewardKey() + "Remove");
      this.redirect('/' + this.getUsername + '/dashboard');
    }
  }

}
