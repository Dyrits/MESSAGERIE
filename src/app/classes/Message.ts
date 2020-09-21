import {User} from './User';

export class Message {
  constructor(public user: User, public message: string, public date: Date) {}
}
