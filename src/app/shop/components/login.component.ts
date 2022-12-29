import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shop';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
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
        Validators.minLength(2)
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
      console.log(res);

        localStorage.setItem('access_token', res.access_token);

        this._Router.navigate(['home']);

        // thông báo
        const Toast = Swal.mixin({
          toast: true,
          width: 400,
          position: 'top-end',
          color: 'rgb(255, 255, 255)',
          padding: '2em',
          showConfirmButton: false,
          background: 'rgb(108, 108, 108)',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Đăng nhập thành công!'
        })
        // kết thúc thông báo
    }, err => {
      if(err.status === 401) {
        // thông báo
        const Toast = Swal.mixin({
          toast: true,
          width: 400,
          position: 'top-end',
          color: 'rgb(255, 255, 255)',
          padding: '2em',
          showConfirmButton: false,
          background: 'rgb(108, 108, 108)',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Đăng nhập không thành công!'
        })
        // kết thúc thông báo
      }
      this.error = true;
    });
  }
}
