import { Component, Input } from '@angular/core';
import { ThemesService } from '../services/themes.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('name') name: string;

  @Input('provider') provider: string;

  @Input('ratio') ratio: string;

  @Input('imgUrl') imgUrl: string;

  @Input('points') points: number;

  @Input('currency') currency: number;

  @Input('balance') balance: number;

  @Input('infoUrl') infoUrl: string;

  @Input('summary') summary: string;

  @Input('rewardname') rewardname: string;

  @Input('index') index: number;

  constructor(public themes: ThemesService) {
    console.log(this.summary);
  }

  onclick(): void {
    console.log('Clicked');
  }

  get theme() {
    return this.themes.getTheme();
  }
}
