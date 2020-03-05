import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RunnersService } from 'src/app/modules/runners/services/runners.service';
import { IRunner } from 'src/app/modules/runners/models/IRunner';
import { TrainingToCreate } from '../../models/TrainingToCreate';
import { TrainingService } from '../../services/training.service';
import { AlertService } from 'src/app/shared/services/alert.service';

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
    private alertService: AlertService) {}

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
          this.alertService.error(`Couldn't load user list.`);
        }
      );
  }

  clearForm(): void {
    this.traingForm.reset();
  }

  createTraining() {
    const val = this.traingForm.value;
    let date = new Date(val.timeToDo);
    
    const training: TrainingToCreate = {
      runnerId: val.runner,
      timeToDo: date.toDateString(),
      details: `Warm-up: ${val.warmUp}, Actual training: ${val.actualTraing}, Cool Down: ${val.coolDown}`,
      comments: val.comment
    };
    this.trainingService.createTraining(training).subscribe(()=> {
      this.clearForm();
      this.alertService.success(`The training was created successfully.`);
    }, err => {
      this.alertService.error(`Couldn't create the runner`);
    });;
  }
}
