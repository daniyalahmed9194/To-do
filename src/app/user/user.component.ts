import {
  Component,
  computed,
  signal,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { CssSelector } from '@angular/compiler';

interface User {
  id: string;
  name: string;
  avatar: string;}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

// usage of signals and computed properties
export class UserComponent {
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //
  ////  get imageUrl() {
  // // return 'assets/users/'+ this.selectedUser().avatar
  ////  }
  //
  //i//magePath = computed(() =>  'assets/users/' + this.selectedUser().avatar );
  //
  //onClick() {
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //}
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;

  // the other method of input. taking users as an object.

  @Input({ required: true }) user!: User; // we can also use the interface and type as alias. the type will can be for any type alias and interface is for the object type. 


  @Output() select = new EventEmitter<string>();
  get imageUrl() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelected() {
    this.select.emit(this.user.id);
  }
}
