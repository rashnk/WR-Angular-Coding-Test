import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userSrvc: UserService, private router: Router) { }
  users: any = []
  ngOnInit(): void {
    this.users = this.userSrvc.getUsers()
  }

  create() {
    this.router.navigate(['/home/add-user'])
  }
}
