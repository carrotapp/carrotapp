import { Component, Input } from '@angular/core';
import { ThemesService } from '../services/themes.service';
import { HeaderComponent } from '../navigation/header/header.component';
import { Rewards } from '../dashboard/Rewards';
import { DatabaseService } from '../services/database/database.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // item skeleton
  @Input('reward') reward;
  // surname
  @Input('username') username: string;
  // Type
  @Input('type') type: string;
  // hide
  @Input('isHidden') isHidden: boolean;
  constructor(public themes: ThemesService, protected databaseService: DatabaseService) {
  }

  get theme() {
    return this.themes.getTheme();
  }
  get getUsername() {
    return this.databaseService.pathName(this.username);
  }
  addReward() {
    this.databaseService.checkReward(this.reward.key);
  }

  // setInfo() {
  //   this.databaseService.checkReward(this.reward.key);
  // }
}
