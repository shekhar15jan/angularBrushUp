import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngIntro';
  logoUrl = 'https://www.dreaminventors.in/assets/img/logoheader.png';
  altName='Dreaminventors';
  bool: boolean = true;
  message: string = 'Hello from parent';
  msg: string = '';
  fullName: string = '';
  clickedNow(){
    this.bool = !this.bool;
  }

  ngOnInit(): void {}
  // getValue(event: any){
  //   if(event.keyCode === 13){
  //     console.log(event.key, event.keyCode);
  //   }
    
  // }
  getValue(event: any):void {
    console.log(event.target.value);
  }
  getMessage(message: string): void{
    this.msg = message;

    console.log(message);
  }
  getFullName(){
    console.log(this.fullName);
  }

}
