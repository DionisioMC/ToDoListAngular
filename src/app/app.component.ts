import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

export interface toDoItem {
  id: number;
  task: string;
  isCompleted: boolean;
}
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  toDoList: toDoItem[] = [];
  inputTask: string = "";

  addTask(): void {
    console.log(this.inputTask);

    if (this.inputTask.trim() !== "") {
      const newTask: toDoItem = {
        id: Date.now(),
        task: this.inputTask.trim(),
        isCompleted: false
      };

      this.toDoList.push(newTask);
      console.log(this.toDoList);
    }
  }
}
