import { Component, OnInit } from '@angular/core';
import {FormGroup, ReactiveFormsModule,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Posts1Service} from 'src/app/posts1.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
registerForm:FormGroup; 
constructor(private router:Router,
            private service1:Posts1Service,
            private fb:FormBuilder) {

}

ngOnInit(): void {
  this.registerForm=this.fb.group({
    username:['CHINTU',Validators.required],
    password:['CHINTU',Validators.required]
  })
}

user()
{
  var res=this.service1.ValidateUser(this.registerForm.value["username"],this.registerForm.value["password"]);
  if(res)
  {
this.router.navigate(["list"]);
  }
  else
  {
alert("UNAUTHORISED");
  }
}


}

