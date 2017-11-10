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
      links:string[];
/* type */
  constructor( private route: ActivatedRoute, private router: Router ) { 
   if(this.btn_title === " "|| this.btn_title === undefined ) this.btn_title = "add rewards";
   this.showBtn = true;
   // Router Link Change Detector
   router.events.subscribe(()=>{
   this.subscribe();
   });
  }
// Encrypter ?
pathName(name:string):string{
  return name.toLowerCase().replace(/ /g,'.');
}
pathDec(name:string):string{
  return name.toLowerCase().replace(/./g,' ');
}
capitalize( word:string[] ):string{
 for( let i =0; i<word.length;i++  ) word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1); 
 return word.join(' ');
}

//Init
subscribe(){
  this.route.params.subscribe((params: Params) => {
    this.username = params.username;
    this.showBtn= this.router.url.toString() === ('/'+ this.getUsername+'/dashboard');
    this.links = this.router.url.toString().split('/');

    if(this.showBtn ){ 
      this.h1 = 'My Rewards';
    } else if(!this.showBtn){
        if(this.links.length == 4){
          this.h1 = this.capitalize(this.links[2].split('.')) ;
      
        }else if(this.router.url.toString() == '/404'){
          this.h1 = 'Oooppss!!!';
        }else{
          this.h1 = 'Add Rewards';
        }
     } else { this.redirect('/login') }
  });
}

redirect(url:string):void{
  if(this.showBtn){
    this.showBtn =false;
    } else {
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