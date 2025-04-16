import { Component , computed, signal, Input, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CssSelector } from '@angular/compiler';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
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
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
 @Input({required: true}) id!: string;
 @Output() select = new EventEmitter<string>();
  get imageUrl() {
    return 'assets/users/' + this.avatar;
  }

  onSelected() {
    this.select.emit(this.id);
  }
}
