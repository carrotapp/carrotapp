import { DatabaseService } from './../services/database/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private ds: DatabaseService) {

   }

  ngOnInit() {
  }

  resetPassword(email){
    this.ds.newReset(email);
  }

}
