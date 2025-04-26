import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';
import { NewTaskData } from './new-task/new-task.model';

@Component({
  selector: 'app-task',
  imports: [TasksComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string; // alternative of using ? is Undefined type with | symbol. like name: string | undefined; but using ? is more readable and easy to understand. and here if the name is not passed from the parent component then it will be undefined.
  isAddingTask = false; // this is used to show the add task button or not. if it is true then the add task button will be shown. if it is false then the add task button will be hidden.
  //  private tasksService: TaskService;

  constructor(private tasksService: TaskService) {
    //this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  //onCompleteTask(id: string) {
  
   //}// we are filtering the tasks array and removing the task with the id that is passed from the child component. so that it will not be shown in the list of tasks
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCanelAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false; // this will hide the add task button when the task is added.
  }
}
