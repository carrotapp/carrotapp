import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 /*
   This is a Generic Component that will have titles inserted dynamically
 */
      @Input('heading') h1:String;
      @Input('sub-heading') h2:String;
      @Input('text') h3 :string;
      @Input('btn-title') btn_title :string;
      @Input('showBtn') showBtn:boolean;

/* Other Text */
      date:Date;

  constructor( private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe((params: Params) => {
      this.h1 = params.h1;
      this.h2 = params.h2;
    });
    if(this.btn_title === " "|| this.btn_title === undefined ) this.btn_title = "add more rewards";
   this.showBtn = true;
}
}