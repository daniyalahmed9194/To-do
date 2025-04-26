import { Injectable } from "@angular/core";
import { type NewTaskData } from "./new-task/new-task.model";

@Injectable ({providedIn : 'root'})
export class TaskService {
    private tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Complete Angular project',
        summary: 'Finish all modules and testing',
        dueDate: '2025-12-1.',
        status: 'In Progress',
      },
      {
        id: 't2',
        userId: 'u2',
        title: 'Prepare presentation',
        summary: 'Create slides for the annual meeting',
        dueDate: '2024-12-1.',
        status: 'Pending',
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Update documentation',
        summary: 'Revise API documentation for the new release',
        dueDate: '2023-12-1.',
      },
     ]

     constructor() {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        this.tasks = JSON.parse(tasks);

      }
     }

     getUserTasks(userId: string) {
      return this.tasks.filter((task) => task.userId === userId);}
        // this function will return the tasks of the user with the userId that is passed from the parent component. so that we can show only the tasks of the user that is logged in.
    
    addTask(taskData: NewTaskData , userId: string, ) {
        this.tasks.unshift( {
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      });
       // this will add the new task to the beginning of the tasks array.
       this.saveTasks();
    }
    removeTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id); // this will remove the task with the id that is passed from the child component. so that it will not be shown in the list of tasks.
      this.saveTasks(); // this will save the tasks to the local storage.
    }

    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks)); // this will save the tasks to the local storage.
    }

}