import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private userSrvc: UserService, private router: Router) { }
  user: User = {
    username: '',
    password: ''
  };

  ngOnInit(): void {
  }

  login() {
    let result = this.userSrvc.isValidCredentials(this.user);
    if (result) {
      this.router.navigate(['home'])
    }else{
      alert('Wrong credentails')
    }
  }

}
