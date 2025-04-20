import { Component , Input, EventEmitter, Output} from '@angular/core';

import { Task } from './tasks.model'; // import the task model from the task.model.ts file.

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) task!: Task;
@Output() complete = new EventEmitter<string>(); 

onCompleteTask() {
  this.complete.emit(this.task.id); // we are emitting the task id to the parent component when the task is completed.
}}
