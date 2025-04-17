import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId ? : string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)}; // we have used ! here becuase if find will not be able to find any user in the users array. but we are telling the typescript that this will not be the case

  onSelectUser(id: string) {
    this.selectedUserId = id;
  } // first the id will be triggered by app html file from there it will select the id from user.component.ts then it will send the id here.
}
