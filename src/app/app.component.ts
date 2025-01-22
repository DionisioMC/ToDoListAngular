import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

export interface ToDoItem {
  id: number;
  task: string;
  isCompleted: boolean;
}
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  toDoList: ToDoItem[] = [];
  inputTask: string = "";

  addTask(): void {
    if (this.inputTask.trim() !== "") {
      const newTask: ToDoItem = {
        id: Date.now(),
        task: this.inputTask.trim(),
        isCompleted: false
      };

      this.toDoList.push(newTask);
      this.inputTask = "";
    }
  }
}
