import { Component , Input, inject} from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from './tasks.model';
import { CardComponent } from "../../shared/card/card.component"; // import the task model from the task.model.ts file.
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  imports: [CardComponent, DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) task!: Task;


private tasksService = inject(TaskService)

onCompleteTask() {
  this.tasksService.removeTask(this.task.id); // we are emitting the task id to the parent component when the task is completed.
}}
