import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CssSelector } from '@angular/compiler';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 selectedUser = DUMMY_USERS[randomIndex];

 get imageUrl() {
  return 'assets/users/'+ this.selectedUser.avatar
 }

 onClick() {
  console.log('User clicked!');
 }
}
