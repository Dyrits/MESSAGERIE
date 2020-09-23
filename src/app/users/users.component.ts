import { Component, OnInit } from '@angular/core';
import {User} from '../classes/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [];

  constructor(private service: UserService) { }

  ngOnInit(): void{
    this.users = this.service.users;
    this.service.emitter.subscribe(users => this.users = users);
  }

}
