import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RunnersService } from '../../services/runners.service';
import { RunnerToCreate } from '../../models/RunnerToCreate';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-runner',
  templateUrl: './add-runner.component.html',
  styleUrls: ['./add-runner.component.scss']
})
export class AddRunnerComponent implements OnInit {
  runnerForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private runnersService: RunnersService,
    private matSnackBar: MatSnackBar) {}

  ngOnInit() {
    
      this.runnerForm = this.fb.group({
        firstname: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", [Validators.email, Validators.required]]
      });
  }

  clearForm(): void {
    this.runnerForm.reset();
  }

  createRunner() {
    const runner: RunnerToCreate = {
      firstName: this.runnerForm.value.firstname,
      lastName: this.runnerForm.value.lastname,
      email: this.runnerForm.value.email
    };
    this.runnersService.createRunner(runner).subscribe(()=> {
      this.clearForm();
      this.matSnackBar.open(`A runner was created successfully.`, "Ok", { duration: 3000 });
    }, err => {
      this.matSnackBar.open(`Couldn't create a runner`, "Ok", { duration: 3000 });
    });;
  }
}
