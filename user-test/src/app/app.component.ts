import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userSrvc: UserService) {
    this.init()
  }
  init() {
    this.userSrvc.setUsers()
  }
}
