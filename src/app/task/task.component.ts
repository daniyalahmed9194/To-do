import { Component , Input} from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-task',
  imports: [TasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) userId !: string; 
  @Input({required: true}) name !: string; // alternative of using ? is Undefined type with | symbol. like name: string | undefined; but using ? is more readable and easy to understand. and here if the name is not passed from the parent component then it will be undefined. 
tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Complete Angular project',
    dueDate: '2025-12-1.',
    status: 'In Progress',
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Prepare presentation',
    dueDate: '202412-1.',
    status: 'Pending',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Update documentation',
    dueDate: '2023-12-1.',
    status: 'Completed',
  },
 ]

 get selectedUserTasks() {
  return this.tasks.filter((task) => task.userId === this.userId);
 };

 onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id); 
  }
 } 
// we are filtering the tasks array and removing the task with the id that is passed from the child component. so that it will not be shown in the list of tasks