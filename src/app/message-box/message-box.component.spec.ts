import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { MessageBoxComponent } from './message-box.component';

describe('MessageBoxComponent', () => {
  let component: MessageBoxComponent;
  let fixture: ComponentFixture<MessageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBoxComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('submits a valid message and resets the form', () => {
    component.messageForm.setValue({user: 'Fixture', message: 'Test message'});
    component.onClick();
    const messages = TestBed.inject(MessageService).messages;
    expect(messages.length).toBe(1);
    expect(messages[0].message).toBe('Test message');
    expect(TestBed.inject(UserService).users[0].pseudo).toBe('Fixture');
    expect(component.messageForm.valid).toBe(false);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
