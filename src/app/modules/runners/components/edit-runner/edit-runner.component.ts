import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RunnersService } from "../../services/runners.service";
import { MAT_DIALOG_DATA } from '@angular/material'
import { AlertService } from 'src/app/shared/services/alert.service';
import { RunnerToUpdate } from '../../models/RunnerToUpdate';

@Component({
  selector: "app-edit-runner",
  templateUrl: "./edit-runner.component.html",
  styleUrls: ["./edit-runner.component.scss"]
})
export class EditRunnerComponent implements OnInit {
  runnerForm: FormGroup;
  runner: RunnerToUpdate;
  isOpened = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private runnersService: RunnersService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.runnerForm = this.fb.group({
      firstname: [this.data.runner.firstName, Validators.required],
      lastname: [this.data.runner.lastName, Validators.required],
      email: [this.data.runner.email, [Validators.email, Validators.required]]
    });
  }

  clearForm(): void {
    this.runnerForm.reset();
  }

  saveChanges() {
    this.runner = new RunnerToUpdate();
    this.runner.id = this.data.runner.id;
    this.runner.firstName =  this.runnerForm.value.firstname;
    this.runner.lastName = this.runnerForm.value.lastname;
    this.runner.email = this.runnerForm.value.email;

    this.runnersService.updateRunner(this.runner).subscribe(
      () => {
        this.clearForm();
        this.alertService.openDialogSuccess(`The changes were saved successfully.`);
        this.runnersService.updateTable();
      },
      err => {
        this.alertService.openDialogWarning(`Couldn't save the changes`);
      }
    );
    this.isOpened = false;
  }
}
