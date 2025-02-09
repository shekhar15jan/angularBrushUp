import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  form1!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form1 = this.formBuilder.group({
      fullName: ['',[Validators.required]],
      email: ['',[Validators.required, 
        Validators.pattern('^[a-z0-9,_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      message: ['',[Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)]]
    });
  }

}
