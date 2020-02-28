import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { ReportIssueComponent } from '../../report-issue/report-issue.component';
import { Router } from '@angular/router';

@Component({
  selector: "vertical-menu",
  templateUrl: "./vertical-menu.component.html",
  styleUrls: ["./vertical-menu.component.scss"]
})
export class VerticalMenuComponent implements OnInit {
  
  constructor(public dialog: MatDialog,
    private router: Router) {}

  ngOnInit() {}

  private onAddRunnerClick() {
    this.router.navigate(['/runners/add']);
  }
  
  private onRunnersClick() {
    this.router.navigate(['/runners']);
  }

  private onAddTrainingClick() {
    this.router.navigate(['/training/add']);
  }

  private onTrainingsClick() {
    this.router.navigate(['/training']);
  }

  private onReportIssueClick() {
    this.dialog.open(ReportIssueComponent);
  }
  private onCalendarClick() {
    this.router.navigate(['/training/calendar']);
  }
}
