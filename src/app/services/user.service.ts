import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: Array<User> = [];
  public emitter: EventEmitter<User[]> = new EventEmitter<User[]>();

  constructor() { }

  addUser(user: User): void {
    this._users.push(user);
    this.emitter.emit(this._users.slice());
  }

  getUserByPseudo(pseudo: string): User {
    return this._users.find(user => user.pseudo === pseudo);
  }


  get users(): Array<User> {
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }
}
