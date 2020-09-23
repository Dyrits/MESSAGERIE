import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { UsersComponent } from './users/users.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import {MessageService} from './services/message.service';
import {UserService} from './services/user.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessagesComponent,
    UsersComponent,
    MessageBoxComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
