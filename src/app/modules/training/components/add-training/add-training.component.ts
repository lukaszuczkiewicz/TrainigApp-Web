import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { RunnersService } from 'src/app/modules/runners/services/runners.service';
import { IRunner } from 'src/app/modules/runners/models/IRunner';
import { MatSnackBar } from '@angular/material';
import { TrainingToCreate } from '../../models/TrainingToCreate';
import { TrainingService } from '../../services/training.service';

@Component({
  selector: "app-add-training",
  templateUrl: "./add-training.component.html",
  styleUrls: ["./add-training.component.css"]
})
export class AddTrainingComponent implements OnInit {
  traingForm: FormGroup;
  runners: IRunner[];

  coolDown: string = "Jog ~15 minutes and 5 minutes walk";
  warmUp: string = "Jog ~20 minutes and 5 minutes strides";

  constructor(private fb: FormBuilder,
    private runnersService: RunnersService,
    private trainingService: TrainingService,
    private matSnackBar: MatSnackBar) {}

  ngOnInit() {
      this.traingForm = this.fb.group({
        runner: ["", Validators.required],
        timeToDo: ["", Validators.required],
        warmUp: [this.warmUp, Validators.required],
        actualTraing: ["", Validators.required],
        coolDown: [this.coolDown, Validators.required],
        comment: [""]
      });
      
      this.runnersService.getRunners().subscribe(
        res => {
          this.runners = res;
        },
        err => {
          this.matSnackBar.open(`Couldn't load user list.`, "Ok", { duration: 3000 });
        }
      );
  }

  clearForm(): void {
    this.traingForm.reset();
  }

  createTraining() {
    const val = this.traingForm.value;
    const training: TrainingToCreate = {
      runnerId: val.runner,
      timeToDo: val.timeToDo,
      details: `Warm-up: ${val.warmUp}, Actual training: ${val.actualTraing}, Cool Down: ${val.coolDown}`,
      comments: val.comment
    };
    this.trainingService.createTraining(training).subscribe(()=> {
      this.clearForm();
      this.matSnackBar.open(`The training was created successfully.`, "Ok", { duration: 3000 });
    }, err => {
      this.matSnackBar.open(`Couldn't create the runner`, "Ok", { duration: 3000 });
    });;
  }
}
