import { Component, OnInit } from '@angular/core';
import {User} from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [
    new User('Dyrits'),
    new User('Funambule')
  ];

  constructor() { }

  ngOnInit(): void{
  }

}
