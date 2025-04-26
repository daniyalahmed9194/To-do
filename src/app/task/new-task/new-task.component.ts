import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>(); // we are emitting the add event to the parent component when the add button is clicked. and we are passing the title, summary and date of the task to the parent component.
  enteredTitle = ''; // this is used to bind the input field with the title of the task. so that we can get the value of the input field when the user types in it.
  enteredSummary = '';
  enteredDate = '';
  onCancel() {
    this.cancel.emit(); // we are emitting the cancel event to the parent component when the cancel button is clicked.
  }
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }); // we are emitting the add event to the parent component when the add button is clicked. and we are passing the title, summary and date of the task to the parent component.
  }
}
