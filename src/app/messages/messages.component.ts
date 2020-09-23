import { Component, OnInit } from '@angular/core';
import {Message} from '../classes/Message';
import {User} from '../classes/User';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public messages: Array<Message> = [];

  constructor(private service: MessageService) { }

  ngOnInit(): void {
    this.messages = this.service.messages;
    this.service.emitter.subscribe(messages => this.messages = messages);
  }

}
