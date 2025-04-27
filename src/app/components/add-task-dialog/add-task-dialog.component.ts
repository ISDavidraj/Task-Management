import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-task-dialog',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss'
})
export class AddTaskDialogComponent {
  taskForm: FormGroup;
  statusOptions = ['To Do', 'In Progress', 'Done'];
  action: any;
  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.action = data?.action == 'edit';

    this.taskForm = this.fb.group({
      ...((this.action && !!data?.row?.id) && { id: [data?.row?.id || null] }),
      title: [this.action ? data?.row?.title || null : '', [Validators.required]],
      description: [this.action ? data?.row?.description || null : ''],
      status: [this.action ? data?.row?.status : 'To Do', [Validators.required]]
    });    
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      let message = this.taskForm.getRawValue().title;
      if (this.action && this.taskForm.getRawValue().id != undefined) {
        this.taskService.updateTask(newTask).subscribe(() => {
          this.dialogRef.close(true);
          this.data.parent.snackbar(message+' updated successfully');
        });
      } else {
        this.taskService.addTask(newTask).subscribe(() => {
          this.dialogRef.close(true);
          this.data.parent.snackbar(message+' created successfully');
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
