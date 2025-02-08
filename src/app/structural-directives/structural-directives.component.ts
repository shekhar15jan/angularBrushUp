import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
lifeCycleHooksArray: Array<string> = ['ngOnChanges()','ngOnInit()','ngOnDoCheck()', 'ngAfterContentInit()','ngAfterContentCheck()', 'ngAfterViewInit()', 'ngAfterViewCheck()','ngOnDistroy()']
objectArray: Array<any> = [
  {name: 'Angular', version: 11, frontend: true},
  {name: 'React', version: 17, frontend: true},
  {name: 'Java', version: 21, frontend: false},
]
langName: string ="";
langVersion!: number;
isFrontend: boolean = false;
selectedStep!: string;
isStyled: boolean = true;
constructor() { 
  for(let i=0;i<this.lifeCycleHooksArray.length;i++){
    console.log(this.lifeCycleHooksArray[i]);
  }
}

  ngOnInit(): void {
  }
  addToList():void {
    this.objectArray.push(
      {name: this.langName, version: this.langVersion, frontend: this.isFrontend}
    );
    this.langName = '';
    this.langVersion = 0;
  }
  // removeFromList(obj: any):void{
  //   let index = this.objectArray.indexOf(obj);
  //   this.objectArray.splice(index,1);
  // }
  removeFromList(index: number):void{
    this.objectArray.splice(index,1);
  }

  selectMyCase(step: any):void{
    this.selectedStep = step;
  }
}
