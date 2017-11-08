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
      username:string;
/* Other Text */
      date:Date = new Date();
/* type */
  constructor( private route: ActivatedRoute, private router: Router ) { 
   if(this.btn_title === " "|| this.btn_title === undefined ) this.btn_title = "add rewards";
   this.showBtn = true;
  this.init();
  console.log(1)
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
    this.username = params.username;
    this.showBtn= this.router.url.toString() === ('/'+ this.getUsername+'/dashboard');
    if(params.type == undefined){ 
      this.h1 = 'My Rewards';
    } else if(params.type == 'view'){
      this.h1 = 'My ' + params.provider;
    } else {
      this.h1 = params.provider;
    }
  });
}
redirect(url:string):void{
  if(this.showBtn){
    this.h1 = 'Add Rewards';
    this.showBtn =false;
    } else {
      this.h1 = 'My Rewards';   
      this.showBtn = true;
    }
  this.router.navigate([url]);
}
//getter
get getUsername(){
  return this.username;
}
get geth1(){
  return this.h1;
}
}