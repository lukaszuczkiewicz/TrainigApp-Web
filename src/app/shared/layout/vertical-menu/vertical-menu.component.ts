import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { ReportIssueComponent } from '../../report-issue/report-issue.component';

@Component({
  selector: "vertical-menu",
  templateUrl: "./vertical-menu.component.html",
  styleUrls: ["./vertical-menu.component.scss"]
})
export class VerticalMenuComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  private onReportIssueClick() {
    this.dialog.open(ReportIssueComponent, {
      // width: '250px'
    });
  }
}
