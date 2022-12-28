import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shop';
import { AuthService } from '../auth.service';
@Component({
  selector: 'user-login',
  templateUrl: './../templates/login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: any;
  constructor(
    private _Router: Router,
    private AuthService: AuthService,
  ) { }

  ngOnInit(): void {
    if(!this.AuthService.checkAuth()){
    this.loginForm = new FormGroup({
      'email':new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
    })
  } else {
    this._Router.navigate(['home']);
  }
  }
  onSubmit():void{
    let data = this.loginForm.value;
    let User: User = {
      email:data.email,
      password:data.password,
    }
    console.log(User);

    this.AuthService.login(User).subscribe(res =>{
        localStorage.setItem('access_token', res.access_token);
        this._Router.navigate(['home']);

        alert("Đăng Nhập Thành Công")
    }, err => {
      if(err.status === 401) {
        alert("Đăng Nhập Không Thành Công");
      }
      this.error = true;
    });
  }
}
