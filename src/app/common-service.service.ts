import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  loginPage: Boolean= true;
  loggedIn: Boolean;
  dashboardPage:  Boolean= true;
   formPage:  Boolean= true;
  deptName="";
  constructor(){
   // this.loginPage = true;
   // alert("My intial global variable value is: ");
  }
}
