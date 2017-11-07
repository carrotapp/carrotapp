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
     //  @Input('heading') 
      h1:String;
      // @Input('sub-heading')
       h2:String;
      // @Input('text')
       h3 :string;
      // @Input('btn-title')
       btn_title :string;
      @Input('showBtn') 
      showBtn:boolean;
      //
     @Input('username') username:string;
/* Other Text */
      date:Date;

  constructor( private route: ActivatedRoute, private router: Router ) { 
    if(this.btn_title === " "|| this.btn_title === undefined ) this.btn_title = "add more rewards";
   this.showBtn = true;
  this.init();this.init()
  }
// Encrypter ?
pathName(name:string):string{
  return name.toLowerCase().replace(/ /g,'.');
}
pathDec(name:string):string{
  return name.toLowerCase().replace(/./g,' ');
}
capitalize( word:string[] ):string{
 for( let i =0; i<word.length;i++  ) word[i] = (word[i].charAt[0]+"").toUpperCase() + word[i].substring(1); 
 return word.join(' ');
}

//Init
init(){
  this.route.params.subscribe((params: Params) => {
    console.log(this.route);
    console.log(this.router.url)
    console.log(params.username);
    this.username = params.username;
    console.log(this.router.url.toString() === '/'+ this.username+'/rewards')
    if(this.router.url.toString() === '/'+ this.username+'/rewards'){
    this.h1 = 'Add Rewards';
  //  this.router.navigate(['/'+ this.username+'/rewards']);
    } else {
      this.h1 = 'My Rewards';   
    // this.router.navigate(['/'+ this.username+'/dashboard']);
    }
    this.h2 = params.type;
   if( this.h2 == 'view' )
    this.showBtn=false;
  });
}

}