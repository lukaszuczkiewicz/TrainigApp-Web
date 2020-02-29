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

  protected onAddRunnerClick() {
    this.router.navigate(['/runners/add']);
  }
  
  protected onRunnersClick() {
    this.router.navigate(['/runners']);
  }

  protected onAddTrainingClick() {
    this.router.navigate(['/training/add']);
  }

  protected onReportIssueClick() {
    this.dialog.open(ReportIssueComponent);
  }
  protected onCalendarClick() {
    this.router.navigate(['/training/calendar']);
  }
}
