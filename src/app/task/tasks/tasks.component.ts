import { Component , Input} from '@angular/core';

type Task = {
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  status: string;
};

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) task!: Task;
}
