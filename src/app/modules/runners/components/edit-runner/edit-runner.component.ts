import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RunnersService } from "../../services/runners.service";
import { IRunner } from '../../models/IRunner';
import { MatSnackBar } from "@angular/material";
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: "app-edit-runner",
  templateUrl: "./edit-runner.component.html",
  styleUrls: ["./edit-runner.component.scss"]
})
export class EditRunnerComponent implements OnInit {
  runnerForm: FormGroup;
  runner: IRunner;
  isOpened = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private runnersService: RunnersService,
    private matSnackBar: MatSnackBar
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
    this.runner = {
      id: this.data.runner.id,
      firstName: this.runnerForm.value.firstname,
      lastName: this.runnerForm.value.lastname,
      email: this.runnerForm.value.email
    };
    this.runnersService.editRunner(this.runner).subscribe(
      () => {
        this.clearForm();
        this.matSnackBar.open(`The changes were saved successfully.`, "Ok", {
          duration: 3000
        });
      },
      err => {
        this.matSnackBar.open(`Couldn't save the changes`, "Ok", {
          duration: 3000
        });
      }
    );
    this.isOpened = false;
  }
}
