import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  @Input()
  text: String;

  constructor() { }

  ngOnInit() {
  }

}
