import { Component,OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonServiceService } from './common-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  loginPage=true;
  loginForm: FormGroup;
  submitted = false;
  href="";
  constructor( private rt: Router,
               private fb: FormBuilder,
               private cs: CommonServiceService
                ) {
   
  }

 
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username':new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
       });
       this.href = window.location.href;
       if(this.href=="http://localhost:4200/formPage" || this.href=="http://localhost:4200/dashboard") {
        this.loginPage = false;
       }
       
  }

  get l() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.l.username.value);
    if(this.l.username.value=="student07" && this.l.password.value=="user@2021") {
      this.cs.loginPage=false;
      this.loginPage = false;
      this.cs.loggedIn=true;
     this.rt.navigate(['/dashboard']);
    }
    if((this.l.username.value!="student07" || this.l.password.value!="user@2021") && (this.l.username.value.length>0 || this.l.password.value.length>0) ) {
      alert("Your credentials are wrong. Enter right one or you can Skip Login");
      this.l.username.errors.required = false;
      this.l.password.errors.required = false;
    }
    
  }

  resetFunction() {
    alert("reset");
    this.loginForm.reset;
  }

  gotoDashboard() {
   this.cs.loggedIn=false;
   this.loginPage = false;
   this.rt.navigate(['/dashboard']);
  }
}
