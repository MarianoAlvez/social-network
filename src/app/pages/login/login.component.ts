import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, public userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  login(){
    this.userService.getUser(this.loginForm.value.email).then((res:any)=>{
      console.log(res);

    }).catch((err)=>{
      console.log(err);
    });
  }

}

