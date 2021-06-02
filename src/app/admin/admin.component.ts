import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  adminname:string="";
  username: string="";

  profile="../assets/images/download.png";

  password:string="";

  showInfo(){

    this.adminname="dipul";
    this.username="dnale";
    this.password="d@123";

    alert("admin name is "+this.adminname+ " username is " +this.username+ " password is " +this.password);
  }
}
