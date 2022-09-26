import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {email:"", password: ""};
  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitLogin(): void {
    this.as.login(this.user)
    .then((data)=>{
      console.log(data.user.email);
      this.as.setSessionData('username', data.user.email as string);
      this.as.setSessionData('isLoggedIn', 'true');
      this.router.navigateByUrl("customers");
    })
    .catch((err) => {
      console.log(err);
      alert("wrong email or password");
      this.user = {email:"", password: ""};
    });
  }
  submitLoginWithGoogle(): void {
    this.as
    .loginWithGoogle()
    .then((data)=>{
      console.log(data.user.displayName);
      this.as.setSessionData('username', data.user.displayName as string);
      this.as.setSessionData('isLoggedIn', 'true');
      this.router.navigateByUrl("main")
    })
    .catch((err) => {
      console.log(err);
      alert("wrong google account");
    });
  }
}