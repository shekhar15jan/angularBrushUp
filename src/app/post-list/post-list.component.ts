import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
@Input() postName: string = 'Post Name';
childMessage: string = 'Sending reply from child post comment';
@Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  sendMessage(){
    this.messageEvent.emit(this.childMessage);
    console.log('Sending reply from child post comment');
  }

}
