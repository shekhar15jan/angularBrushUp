import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {
  formTitle = 'Create Post';
  postTitle: string="";
  postContent: string="";
  postImageUrl: string="";
  postUrl: string="";
  isChecked: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
}
