import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
searchDept="";
dashboardPage: boolean;
public courses = [];
//   {id: 1, name: 'Information Technology Engineering'},
//   {id: 2, name: 'Computer Science Engineering'},
//   {id: 3, name: 'Mechanical Engineering'},
//   {id: 4, name: 'Electrical Engineering'},
//   {id: 5, name: 'Electronics and Communication Engineering'},
//   {id: 6, name: 'Civil Engineering'},
//   {id: 7, name: 'Chemical Engineering'},
//   {id: 8, name: 'Telecommunication Engineering'},
//   {id: 9, name: 'Maths and Computing Engineering'},
//   {id: 10, name: 'Industrial Engineering'}
// ];

public len: number;
  constructor(
    private rt: Router,
    private cs: CommonServiceService
  ) { }

  ngOnInit(): void {
    this.courses = [
      {id: 1, name: 'Information Technology Engineering'},
      {id: 2, name: 'Computer Science Engineering'},
      {id: 3, name: 'Mechanical Engineering'},
      {id: 4, name: 'Electrical Engineering'},
      {id: 5, name: 'Electronics and Communication Engineering'},
      {id: 6, name: 'Civil Engineering'},
      {id: 7, name: 'Chemical Engineering'},
      {id: 8, name: 'Telecommunication Engineering'},
      {id: 9, name: 'Maths and Computing Engineering'},
      {id: 10, name: 'Industrial Engineering'}
  ];
    this.len=this.courses.length;
    this.dashboardPage=true;
    console.log(this.len);
    this.cs.dashboardPage = true;
   
  }

//Apply Function  
  applyFunction(id,name) {
    this.cs.deptName = name;
    if(this.cs.loggedIn) {
      this.cs.dashboardPage = false;
      this.dashboardPage = false;
       this.rt.navigate(['/formPage']);
    }
    else {
      this.dashboardPage = true;
       alert("Not Allowed to go to Next Page as you are not a LoggedIn Member");  
    }
  }

//Search Function  
  search() {
    if(this.searchDept!="") {
      this.courses = this.courses.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.searchDept.toLocaleLowerCase());
      });

    }
    else if(this.searchDept=="") {
      this.ngOnInit();
    }
    

  }

}
