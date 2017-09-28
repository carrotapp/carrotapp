import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-textfield',
  templateUrl: './custom-textfield.component.html',
  styleUrls: ['./custom-textfield.component.css']
})
export class CustomTextfieldComponent implements OnInit {

  @Input()
  placeholderText: String;

  @Input()
  inputType: String;

  constructor() { }

  ngOnInit() {
  }

}
