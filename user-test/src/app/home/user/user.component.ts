import { Component, OnInit } from '@angular/core';
import { Genders, Titles, UserData } from 'src/app/models/models';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userSrvc: UserService) { }
  user = UserData
  genders = Genders
  titles = Titles

  save() {
    let success = this.userSrvc.addUser(this.user);
    if (success) {
      alert('User saved')
    } else {
      alert('Something went wrong')
    }
  }
  ngOnInit(): void {
  }

}
