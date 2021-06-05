import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/models';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userApiURL = 'https://randomuser.me/api/0.8/?results=20'

  setUsers() {
    let _users = localStorage.getItem('users');
    if (_users) {
      // users already fetched
      console.log('users exists')
    } else {
      this.http.get(this.userApiURL).subscribe((res: any) => {
        console.log(res)
        localStorage.setItem('users', JSON.stringify(res['results']))
      })
    }
  }

  getUsers(): any[] {
    let _users = localStorage.getItem('users');
    if (_users) {
      // users already fetched
      return JSON.parse(_users)
    } else {
      return []
    }
  }

  addUser(user: any):boolean {
    let _users: any[] = this.getUsers();
    if (_users.length) {
      _users.push(user)
      localStorage.setItem('users', JSON.stringify(_users))
      return true
    }else{
      return false
    }
  }

  isValidCredentials(data: User): boolean {
    const user: User = require('../app/user.json');
    if (data.username === user.username && data.password === user.password) {
      console.log('success')
      return true
    } else {
      console.log('failed')
      return false
    }
  }
}
