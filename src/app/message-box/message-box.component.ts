import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../services/message.service';
import {UserService} from '../services/user.service';
import {User} from '../classes/User';
import {Message} from '../classes/Message';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private messageService: MessageService, private userService: UserService, private formBuilder: FormBuilder) {
    this.create();
  }

  ngOnInit(): void {
  }

  create(): void {
    this.messageForm = this.formBuilder.group(
      {
        user: ['', Validators.required],
        message: ['', Validators.required],
      }
    );
  }

  invalidMessage(): boolean {
    return this.messageForm.controls.message.invalid &&
      (this.messageForm.controls.message.dirty || this.messageForm.controls.message.touched);
  }

  userInvalid(): boolean {
    return this.messageForm.controls.user.invalid &&
      (this.messageForm.controls.user.dirty || this.messageForm.controls.user.touched);
  }

  onClick(): void {
    if (this.validForm()) {
      const user: User = new User(this.messageForm.get('user').value);
      this.userService.addUser(user);
      this.messageService.addMessage(new Message(
        user,
        this.messageForm.get('message').value,
        new Date()
      ));
      this.messageForm.reset();
    }
  }

  validForm(): boolean {
    return this.messageForm.valid;
  }
}
