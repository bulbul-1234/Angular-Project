import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { CommonServiceService } from '../common-service.service';
@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  regForm: FormGroup;
  event="";
  occupation: any = ['Student', 'Service', 'Business', 'Others']
  postId="";
  errorMessage="";
  deptName="";
  selectedValue="";
  public errorStatus: boolean = true;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private cs: CommonServiceService)
               { }

               
  ngOnInit(): void {
    this.deptName=this.cs.deptName;
    this.regForm = this.fb.group({
      'firstname':new FormControl(null, [Validators.required,Validators.maxLength(30)]),
      'lastname':new FormControl(null, [Validators.required,Validators.maxLength(30)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'mobileno': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'occupation': new FormControl(null, Validators.required)
       });
  }


  selectChange(e) {
    this.selectedValue = e.target.value;
  }

  onSubmit() {
    console.log(this.regForm.value);
    let url="https://jsonplaceholder.typicode.com/posts/1";
     // { firstname: this.regForm.controls.firstname.value,
    //   lastname: this.regForm.controls.firstname.value,
    //   email: this.regForm.controls.email.value,
    //   mobileno: this.regForm.controls.mobileno.value,
    //   gender: this.regForm.controls. gender.value,
    //   occupation: this.regForm.controls.occupation.value
    //   }
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts/',
    this.regForm.value 
    ).subscribe((response)=>{
     // alert(response.status);
      alert("Subscription of "+response.firstname+" "+response.lastname+" for the course "+ response.occupation+" was successful! Your ID is "+response.id+" of id received from the service.");
     

       this.errorStatus= false;
     })
    // if(this.errorStatus) {
    //   alert("There is an issue with API");
    // }
    //  error: error => {
    //      this.errorMessage = error.message;
    //      console.error('There was an error!', error);
    //  }
 


//     this.http.post<any>(url, {
//       input: this.regForm }).subscribe({
//      next: data => {
//          this.postId = data.id;
//      },
//      error: error => {
//          this.errorMessage = error.message;
//          console.error('There was an error!', error);
//      }
//  })

  }

//Reset Function
  resetFunction() {
    this.regForm.reset;
  }

//Numbers are not allowed
  forbiddenNumber(event) {
   var e;
   e = event.charCode;
   return (!(e >= 48 && e <= 57) );
  }

//Only Numbers Allowed
  numbersOnly(event) {
  var e;
   e = event.charCode;
   return ((e >= 48 && e <= 57) );
}

}
