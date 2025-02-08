import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PostListComponent }  from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {
title: string = 'New Angular Application';
childMessage!: string;

@ViewChild(PostListComponent) postListComponent: any;

childOutput: any;

constructor() {
  console.log(this.postListComponent);
 }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log(this.postListComponent);
    this.childMessage = this.postListComponent['childMessage'];
  }

  receiveMessage($event: any){
    console.log($event+' received message');
    this.childOutput = $event;
  }
}
