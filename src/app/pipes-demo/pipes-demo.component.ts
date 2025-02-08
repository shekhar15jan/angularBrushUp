import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
title="Welcome to Pipes";
count:number = 129854336454;
per:number = 85.876432;
todayDate: Date = new Date();
myCity:string = "Pune";
paraText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dolorum corporis quidem sit quis voluptates repellendus dicta fugiat libero, perspiciatis fuga molestiae eligendi animi exercitationem illo id eius suscipit quam."
post: object ={
  title: "Angular Pipes",
  message: "Angular Pipes are very useful",
  likes: 100,
  dislikes: 10
}
  myArray = ['Angular', 'React', 'Vue', 'Ember', 'Backbone'];
  constructor() { }

  ngOnInit(): void {
  }

}
