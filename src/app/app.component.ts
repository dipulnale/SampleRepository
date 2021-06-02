import { Component } from '@angular/core';

@Component({
  selector: 'root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  num1: number = 1;
  num2: number = 2;

  imgpath="../assets/images/insta-square1.png";

  pname:string = "dipul";

  show:boolean=false;

  weekday="ght";

  movies: Movie[] = [
    {title:"abc",director:"def"},
    {title:"xyz", director:"hij"}
  ]

  empArray: Employee[] = [
    {name:"dipul", basicsalary:30000, hr:30000, city:"mumbai"},
    {name:"chetan", basicsalary:25000, hr:20000, city:"pune"},
    {name:"shrikant", basicsalary:45000, hr:30000, city:"nagpur"},
  ]

  value = 1;

  onGross(basicsalary:number, hr:number){
    var final=basicsalary+hr;

    if(final>50000){
      alert(this.show=true)
    }
    else{
      alert(this.show=false)
    }
  }

Summarie:String[] = [
  "a","b","c","d","e"
]


}

class Movie {
  title: string| undefined;
  director:string|undefined;
}

class Employee {

  name:string|undefined;
  basicsalary:number|undefined;
  hr:number|undefined;
  city:string|undefined;

}