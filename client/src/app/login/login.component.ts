import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        name: 'Dad',
        initial: 'd',
        icon: ''
      },
      {
        name: 'Mom',
        initial: 'm',
        icon: ''
      },
      {
        name: 'Natasha',
        initial: 'n',
        icon: ''
      }];
  }

  selectUser = (user: User) => {
    if (user.name === 'Natasha') {

    }
  }

}
