import { Component, OnInit } from '@angular/core';
import {Message} from '../classes/Message';
import {User} from '../classes/User';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public messages: Array<Message> = [
    new Message(new User('Dyrits'), 'Hello everyone, how are you today?', new Date('2020-09-10T11:00:00')),
    new Message(new User('Eren'), 'Good, what are you up to today?', new Date('2020-09-10T11:05:00')),
    new Message(new User('Funambule'), 'Nothing much...', new Date('2020-09-10T11:07:00')),
    new Message(new User('Dyrits'), 'Nothing much...', new Date('2020-09-10T11:08:00')),
    new Message(new User('Eren'), 'Nothing much neither...', new Date('2020-09-10T11:09:00'))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
