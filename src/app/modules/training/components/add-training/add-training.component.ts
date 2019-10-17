import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-add-training",
  templateUrl: "./add-training.component.html",
  styleUrls: ["./add-training.component.css"]
})
export class AddTrainingComponent implements OnInit {
  runnersForm: FormGroup;
  traingForm: FormGroup;
  trainigTrigers: FormArray;

  coolDown: string = "Jog ~15 minutes and 5 minutes walk";
  warmUp: string = "Jog ~20 minutes and 5 minutes strides";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    
      this.runnersForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.email]
      });

      this.traingForm = this.fb.group({
        warmUp: [this.warmUp, Validators.required],
        acctualTraing: ["", Validators.required],
        coolDown: [this.coolDown, Validators.required],
        comment: [""]
      });
  }

  clearForm(): void {
    this.runnersForm.reset();
    this.traingForm.reset();
  }
}
