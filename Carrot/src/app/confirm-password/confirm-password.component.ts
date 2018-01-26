import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database/database.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {

  constructor(protected ds: DatabaseService) { }

  ngOnInit() {
  }

}
