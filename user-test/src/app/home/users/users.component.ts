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
  searchText = ''
  ngOnInit(): void {
    this.users = this.userSrvc.getUsers()
  }

  get filteredUsers():any[] {
    return this.users.filter((u:any) => u.user.name.first.startsWith(this.searchText))
  }

  create() {
    this.router.navigate(['/home/add-user'])
  }
}
