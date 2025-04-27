import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Directionality } from '@angular/cdk/bidi';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, MatTooltipModule, MatButtonModule],
  providers: [Directionality],
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent {
  todoTasks: any[] = [];
  inProgressTasks: any[] = [];
  doneTasks: any[] = [];
  isHoveringTodo = false;
  isHoveringInProgress = false;
  isHoveringDone = false;
  private _snackBar = inject(MatSnackBar);

  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.todoTasks = tasks.filter((task: any) => task.status === 'To Do');
      this.inProgressTasks = tasks.filter((task: any) => task.status === 'In Progress');
      this.doneTasks = tasks.filter((task: any) => task.status === 'Done');
    });
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      disableClose: true,
      width: '500px',
      data:{
        parent:this
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTasks();
      }
    });
  }

  drop(event: CdkDragDrop<any[]>, status: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const task = event.container.data[event.currentIndex];
      task.status = status;
      this.taskService.updateTask(task).subscribe();
    }
  }

  deleteRow(row: any) {
    let message = row.title;
    this.taskService.deleteTask(row.id).subscribe(()=>{
      this.loadTasks();
      this.snackbar(message+' deleted successfully');
    });
  }

  edit(row: any) {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      disableClose: true,
      data: {
        action: 'edit',
        row: row,
        parent:this
      },
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTasks();
      }
    });
  }

  addTask(status: any) {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      disableClose: true,
      data: {
        action: 'edit',
        row: { status: status },
        parent:this
      },
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTasks();
      }
    });
  }

  snackbar(message:any){
    this._snackBar.open(message, 'x',{
      duration: 3*1000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}