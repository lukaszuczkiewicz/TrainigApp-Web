import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RunnersService } from '../../services/runners.service';
import { RunnerToCreate } from '../../models/RunnerToCreate';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-runner',
  templateUrl: './add-runner.component.html',
  styleUrls: ['./add-runner.component.scss']
})
export class AddRunnerComponent implements OnInit {
  runnerForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private runnersService: RunnersService,
    private alertService: AlertService) {}

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
      this.alertService.success(`A runner was created successfully.`);
    }, err => {
      this.alertService.error(`Couldn't create a runner`);
    });;
  }
}
