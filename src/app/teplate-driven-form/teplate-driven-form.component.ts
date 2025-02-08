import { Component, OnInit } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './teplate-driven-form.component.html',
  styleUrls: ['./teplate-driven-form.component.css']
})
export class TeplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Form Method
  onSubmit(myForm: NgForm){
    console.log(myForm.value);
  }
  getFullName(fullName: NgControl){
    console.log(fullName);
  }
  getEmailId(emailId: NgControl){
    console.log(emailId);
  }
  getMessage(message:NgControl){
    console.log(message);
  }
}
