import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from '@angular/material'

import { AlertService } from 'src/app/shared/services/alert.service';
import { TrainingService } from '../../services/training.service';
import { TrainingToUpdate } from '../../models/TrainingToUpdate';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.scss']
})
export class EditTrainingComponent implements OnInit {
  trainingForm: FormGroup;
  training: TrainingToUpdate;
  isOpened = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.trainingForm = this.fb.group({
      timeToDo: [this.data.training.timeToDo, Validators.required],
      details: [this.data.training.details, Validators.required],
      comments: [this.data.training.comments]
    });
  }

  clearForm(): void {
    this.trainingForm.reset();
  }

  saveChanges() {
    this.training = new TrainingToUpdate();
    this.training.id = this.data.training.id;
    this.training.runnerId = this.data.training.runnerId;
    const date = new Date(this.trainingForm.value.timeToDo);
    this.training.timeToDo =  date.toDateString();
    this.training.details = this.trainingForm.value.details;
    this.training.comments = this.trainingForm.value.comments;

    this.trainingService.updateTraining(this.training).subscribe(
      () => {
        this.clearForm();
        this.alertService.success(`The changes were saved successfully.`);
        this.trainingService.updateCalendar();
      },
      err => {
        this.alertService.error(`Couldn't save the changes`);
      }
    );
    this.isOpened = false;
  }
}
