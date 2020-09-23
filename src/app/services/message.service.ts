import {EventEmitter, Injectable} from '@angular/core';
import {Message} from '../classes/Message';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: Array<Message> = [];
  public emitter: EventEmitter<Message[]> = new EventEmitter<Message[]>();

  constructor(userService: UserService) {}

  sortMessages(): void {
    this._messages.sort((message, otherMessage) => otherMessage.date.getTime() - message.date.getTime());
  }

  addMessage(message: Message): void {
    this._messages.push(message);
    this.sortMessages();
    this.emitter.emit(this._messages.slice());
  }

  getMessages(userPseudo: string): Message[] {
    return this._messages.filter(message => message.user.pseudo === userPseudo);
  }

  get messages(): Array<Message> {
    return this._messages;
  }

  set messages(value: Array<Message>) {
    this._messages = value;
  }
}
